import { createServer } from 'vite';
import * as path from 'path';
import * as fs from 'fs';

async function main() {
  console.log('Starting Vite server to compile components to graphs...');

  const viteConfigPath = path.resolve(process.cwd(), 'vite.config.ts');
  const viteClientConfigPath = path.resolve(process.cwd(), 'vite.config.client.ts');

  const configFile = fs.existsSync(viteConfigPath)
    ? viteConfigPath
    : fs.existsSync(viteClientConfigPath)
      ? viteClientConfigPath
      : undefined;

  // Shared mutable state context that transcends Vite's SSR runtime sandbox
  const sharedState = {
    renderHtml: '',
  };

  const vite = await createServer({
    configFile,
    // Inject custom middleware as a pre-enforced plugin to intercept requests before Qwik City router 404s
    plugins: [
      {
        name: 'render-component-middleware',
        enforce: 'pre',
        configureServer(server) {
          server.middlewares.use('/render-component', async (req, res) => {
            if (!sharedState.renderHtml) {
              res.statusCode = 404;
              res.end('No component rendering queued.');
              return;
            }
            try {
              const transformedHtml = await server.transformIndexHtml('/render-component', sharedState.renderHtml);
              res.setHeader('Content-Type', 'text/html');
              res.statusCode = 200;
              res.end(transformedHtml);
            } catch (err: any) {
              res.statusCode = 500;
              res.end(err.message);
            }
          });
        }
      }
    ],
    server: {
      middlewareMode: false,
      hmr: false,
    },
    appType: 'custom',
    ssr: {
      external: ['playwright', 'child_process']
    }
  });

  await vite.listen();

  try {
    const targetFilePath = path.resolve(__dirname, 'render.tsx');
    const relativeModulePath = './' + path.relative(vite.config.root, targetFilePath).replace(/\\/g, '/');

    const mod = await vite.ssrLoadModule(relativeModulePath);

    const address = vite.httpServer?.address();
    const port = typeof address === 'object' && address ? address.port : 5173;
    const devServerUrl = `http://localhost:${port}/`;

    // Pass parameters grouped inside a unified options object
    await mod.run(vite.config.root, {
      devServerUrl,
      sharedState,
      loadModule: async (p: string) => await vite.ssrLoadModule(p),
    });

  } catch (err) {
    console.error('Execution failed:', err);
    process.exit(1);
  } finally {
    await vite.close();
  }
}

main();
