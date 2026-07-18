import { component$ } from "@qwik.dev/core";

export type QuickLinkIconType = "get-started" | "theming" | "typography" | "changelog";

export const GetStartedIcon = component$(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="shrink-0 transition-transform duration-150 group-hover:scale-105 text-shade-800">
    <path d="M12.5 11.667c0.167-0.833 0.583-1.417 1.25-2.084 0.833-0.75 1.25-1.833 1.25-2.916A5 5 0 0 0 5 6.667c0 0.833 0.167 1.833 1.25 2.916 0.583 0.583 1.083 1.25 1.25 2.084" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.5 15h5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.333 18.333h3.333" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
));

export const ThemingIcon = component$(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="shrink-0 transition-transform duration-150 group-hover:scale-105 text-shade-800">
    <path d="M9.167 14.167a3.333 3.333 90 0 1-6.667 0V4.167a1.667 1.667 0 0 1 1.667-1.667h3.333a1.667 1.667 0 0 1 1.667 1.667Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.917 10.833H15.833a1.667 1.667 0 0 1 1.667 1.667v3.333a1.667 1.667 0 0 1-1.667 1.667H5.833" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.833 14.167h0.009" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.167 6.667l1.916-1.917a2 2 0 0 1 2.837 0.003L15.5 6.333a2 2 0 0 1 0.022 2.862L8.25 16.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
));

export const TypographyIcon = component$(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="shrink-0 transition-transform duration-150 group-hover:scale-105 text-shade-800">
    <path d="M5 13.333l5-10 5 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.666 10h6.667" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.333 16.667l1.667 1.666 3.333-3.333" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
));

export const ChangelogIcon = component$(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="shrink-0 transition-transform duration-150 group-hover:scale-105 text-shade-800">
    <path d="M9.167 18.108a1.667 1.667 0 0 0 1.666 0l5.834-3.333A1.667 1.667 0 0 0 17.5 13.333V6.667a1.667 1.667 0 0 0-0.833-1.442l-5.834-3.333a1.667 1.667 0 0 0-1.666 0l-5.834 3.333A1.667 1.667 0 0 0 2.5 6.667v6.666a1.667 1.667 0 0 0 0.833 1.442z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 18.333V10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <polyline points="2.742 5.833 10 10 17.258 5.833" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.25 3.558l7.5 4.292" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
));

export const QuickLinkIcon = component$<{ type: QuickLinkIconType }>((props) => {
  switch (props.type) {
    case "get-started": return <GetStartedIcon />;
    case "theming": return <ThemingIcon />;
    case "typography": return <TypographyIcon />;
    case "changelog": return <ChangelogIcon />;
  }
});
