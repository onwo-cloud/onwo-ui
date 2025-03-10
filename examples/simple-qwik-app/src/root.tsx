import { component$ } from "@builder.io/qwik";
import { HelloWorld } from "@onwo/ui";

import "./global.css";

export default component$(() => {
  return (
    <>
      <head>
        <title>Simple qwik app</title>
        <meta charset="utf-8" />
      </head>
      <body lang="en" class="theme-moon-light w-screen h-screen flex items-center justify-center">
        <div class="p-4 rounded-md bg-gohan">
          <HelloWorld />
        </div>
      </body>
    </>
  );
});
