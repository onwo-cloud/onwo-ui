import { QuickLinkIconType } from "./icons";

export interface QuickLinkItem {
  id: string;
  title: string;
  description: string;
  icon: QuickLinkIconType;
  href: string;
}

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export const QUICK_LINKS_DATA: QuickLinkItem[] = [
  {
    id: "get-started",
    title: "Get started",
    description: "Learn how to start using qwik.js in your projects",
    icon: "get-started",
    href: "/docs/get-started",
  },
  {
    id: "theming",
    title: "Theming",
    description: "Create and use your custom theme in our theme builder",
    icon: "theming",
    href: "/docs/theming",
  },
  {
    id: "typography",
    title: "Typography",
    description: "Understanding font loading and text classes.",
    icon: "typography",
    href: "/docs/typography",
  },
  {
    id: "changelog",
    title: "Changelog",
    description: "Learn how to start using qwik.js in your projects",
    icon: "changelog",
    href: "/docs/changelog",
  },
];

export const SEARCH_RESULTS_DATA: SearchResultItem[] = [
  {
    id: "button",
    title: "Button",
    description: "Multi-variants button element",
    category: "Components",
    href: "/docs/components/button",
  },
  {
    id: "button-group",
    title: "Button Group",
    description: "Multi-variants button element",
    category: "Components",
    href: "/docs/components/button-group",
  },
  {
    id: "modal",
    title: "Modal",
    description: "Accessible modal dialog overlay primitive",
    category: "Primitives",
    href: "/docs/primitives/modal",
  },
  {
    id: "menu",
    title: "Menu",
    description: "Dropdown menu and popup primitive component",
    category: "Primitives",
    href: "/docs/primitives/menu",
  },
  {
    id: "page-nav",
    title: "Page Navigation",
    description: "Navigation bar and tab navigation component",
    category: "Kit",
    href: "/docs/kit/page-nav",
  },
];

