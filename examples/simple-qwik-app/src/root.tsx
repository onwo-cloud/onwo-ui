import { component$ } from "@builder.io/qwik";

import "./global.css";

export default component$(() => {
  return (
    <>
      <head>
        <title>Simple qwik app</title>
        <meta charset="utf-8" />
      </head>
      <body lang="en" class="w-screen h-screen flex items-center justify-center">
        <div>
          <h1>Hello, World</h1>
        </div>
      </body>
    </>
  );
});
