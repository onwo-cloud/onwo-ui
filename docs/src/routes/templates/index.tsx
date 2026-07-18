import { JSXChildren } from "@qwik.dev/core";

// Types & Interfaces
interface Project {
  title: string;
  stars: number;
  description: string;
}

interface Post {
  date: string;
  title: string;
}

interface NavItemProps {
  children: JSXChildren;
  active?: boolean;
}

interface SectionProps {
  title: JSXChildren;
  children: JSXChildren;
}

interface ProjectCardProps extends Project {}
interface PostRowProps extends Post {}

interface LayoutProps {
  children: JSXChildren;
  header: JSXChildren;
  themeToggle: JSXChildren;
}

// Data
const PROJECTS: Project[] = [
  {
    title: "Onwo ui",
    stars: 148,
    description: "A high performance UI library for the qwik.js framework build for simplifying complex design system customization and performance."
  },
  {
    title: "Oyui",
    stars: 40,
    description: "A high performance UI library for the qwik.js framework build for simplifying complex design system customization and performance."
  }
];

const POSTS: Post[] = [
  { date: "2026-09-04", title: "Interface vs Type in TypeScript" },
  { date: "2026-09-04", title: "Interface vs Type in TypeScript" },
  { date: "2026-09-04", title: "Interface vs Type in TypeScript" }
];

// Icon Components
function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="shrink-0">
      <path d="M8.802 10.505L6.493 9.291C6.184 9.129 5.815 9.129 5.506 9.291L3.198 10.505C3.109 10.552 3 10.545 2.918 10.485C2.836 10.425 2.795 10.324 2.813 10.225L3.254 7.655C3.313 7.311 3.198 6.959 2.948 6.716L1.08 4.898C1.007 4.827 0.98 4.722 1.011 4.625C1.043 4.528 1.126 4.458 1.227 4.444L3.809 4.067C4.155 4.017 4.453 3.8 4.608 3.487L5.763 1.148C5.807 1.058 5.899 1 6 1C6.101 1 6.193 1.058 6.237 1.148L7.393 3.487C7.547 3.8 7.845 4.017 8.19 4.067L10.773 4.445C10.872 4.46 10.956 4.529 10.987 4.625C11.018 4.721 10.992 4.827 10.92 4.897L9.052 6.716C8.802 6.959 8.687 7.311 8.746 7.655L9.188 10.225C9.206 10.325 9.165 10.426 9.083 10.486C9.001 10.545 8.892 10.553 8.802 10.505Z" fill="none" class="stroke-shade-700" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12.012" xmlns="http://www.w3.org/2000/svg" font-size="16px" class="shrink-0 overflow-clip">
      <path font-size="9.803px" d="M7.264 4.764L7.264 4.764L11.31 0.1L10.352 0.1L6.837 4.149L4.031 0.1L0.795 0.1L5.038 6.223L0.795 11.113L1.755 11.113L5.464 6.836L8.428 11.113L11.664 11.113L7.264 4.764ZM5.95 6.278L5.52 5.668L2.099 0.815L3.572 0.815L6.333 4.731L6.763 5.34L10.352 10.43L8.879 10.43L5.95 6.278L5.95 6.278Z" class="fill-shade-850 stroke-shade-850" stroke-width="0.2" style={{ boxSizing: 'border-box' }} />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 9.75 9.75" class="shrink-0">
      <path d="M4.062 8.356c-1.393 0.47-2.554 0-3.25-1.449" fill="none" class="stroke-shade-850" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4.062 8.938v-1.318c0-0.242 0.074-0.454 0.195-0.644 0.083-0.131 0.026-0.317-0.123-0.358C2.898 6.278 2.031 5.731 2.031 3.919c0-0.471 0.155-0.915 0.426-1.3 0.067-0.096 0.102-0.144 0.11-0.188 0.007-0.045-0.006-0.1-0.036-0.213-0.115-0.461-0.107-0.952 0.065-1.394 0 0 0.357-0.117 1.168 0.39 0.185 0.116 0.279 0.175 0.36 0.187s0.19-0.014 0.408-0.068A3.86 3.86 90 0 1 5.485 1.219a3.9 3.9 0 0 1 0.951 0.114c0.217 0.054 0.327 0.081 0.408 0.068 0.081-0.013 0.175-0.071 0.36-0.186 0.812-0.507 1.168-0.39 1.168-0.39 0.172 0.442 0.18 0.931 0.065 1.393-0.028 0.113-0.042 0.171-0.034 0.213s0.042 0.091 0.108 0.188c0.272 0.385 0.425 0.828 0.426 1.3 0 1.813-0.866 2.359-2.103 2.698-0.149 0.041-0.206 0.227-0.123 0.358 0.12 0.19 0.195 0.402 0.195 0.645V8.938" fill="none" class="stroke-shade-850" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="shrink-0">
      <path d="M12.833 4.083l-5.244 3.341a1.167 1.167 0 0 1-1.172 0L1.167 4.083" fill="none" class="stroke-shade-850" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="1.167" y="2.333" width="11.667" height="9.333" rx="2" fill="none" class="stroke-shade-850" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" width="14" height="14" font-size="16px" class="shrink-0 overflow-clip">
      <path d="M8.75 6.125C8.75 9.508 11.492 12.25 14.875 12.25 16.588 12.25 18.138 11.546 19.25 10.412 19.25 10.441 19.25 10.47 19.25 10.5 19.25 15.333 15.333 19.25 10.5 19.25 5.667 19.25 1.75 15.333 1.75 10.5 1.75 5.667 5.667 1.75 10.5 1.75 10.53 1.75 10.559 1.75 10.588 1.75 9.454 2.862 8.75 4.412 8.75 6.125ZM3.5 10.5C3.5 14.366 6.634 17.5 10.5 17.5 13.176 17.5 15.502 15.998 16.679 13.792 16.096 13.929 15.49 14 14.875 14 10.525 14 7 10.475 7 6.125 7 5.509 7.071 4.904 7.208 4.321 5.002 5.498 3.5 7.824 3.5 10.5Z" font-size="7.84px" class="fill-shade-800" style={{ boxSizing: 'border-box' }} />
    </svg>
  );
}

// UI Components
function NavItem({ children, active }: NavItemProps) {
  const activeStyles = active ? 'rounded-xl bg-shade-150' : 'rounded-[11px]';
  const textStyles = active ? 'w-[38.2px] text-shade-950' : 'text-shade-850';
  return (
    <div class={`flex flex-col items-start px-2.5 py-0.5 ${activeStyles}`}>
      <div class={`text-[14px] leading-[175%] font-['Geist',system-ui,sans-serif] ${textStyles}`}>
        {children}
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div class="flex items-start gap-0.5">
      <div class="items-center flex justify-center shrink-0 size-6"><XIcon /></div>
      <div class="flex items-center justify-center shrink-0 size-6"><GithubIcon /></div>
      <div class="flex items-center justify-center shrink-0 size-6"><MailIcon /></div>
    </div>
  );
}

function Navbar() {
  return (
    <div class="flex overflow-clip absolute left-[calc(50%-3px)] top-7.5 rounded-[14px] items-center justify-center pl-1 pr-2.5 gap-1.5 py-1 bg-shade-50" style={{ translate: '-50%' }}>
      <div class="flex items-start gap-px">
        <NavItem active>Home</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Experiments</NavItem>
      </div>
      <div class="flex items-center self-stretch justify-center pr-0.5 py-1">
        <div class="w-px self-stretch rounded-full shrink-0 bg-shade-200" />
      </div>
      <SocialLinks />
    </div>
  );
}

function ThemeToggle() {
  return (
    <div class="flex absolute items-center left-464 top-8 justify-end">
      <div class="items-center flex justify-center rounded-[10px] shrink-0 outline outline-1 outline-shade-200 size-8">
        <MoonIcon />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div class="flex flex-col items-start gap-8">
      <div class="w-fit font-['Geist',system-ui,sans-serif] text-shade-1000 text-xl/6">
        Emilien Jegou
      </div>
      <div class="flex flex-col items-start gap-6 self-stretch">
        <div class="text-[17px] leading-[175%] self-stretch content-center text-balance font-['Geist',system-ui,sans-serif] text-shade-700">
          I'm a French fullstack developer from Brittany france, mainly programming in typescript & rust. I love discovering new things, so I started this blog, hope you find it interesting!
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <div class="flex flex-col items-start gap-8 self-stretch">
      {typeof title === 'string' ? (
        <div class="self-stretch font-['Geist',system-ui,sans-serif] text-shade-1000 text-lg/6">
          {title}
        </div>
      ) : title}
      {children}
    </div>
  );
}

function ProjectCard({ title, stars, description }: ProjectCardProps) {
  return (
    <div class="items-center flex gap-6 self-stretch">
      <div class="overflow-clip w-37.25 h-25.75 rounded-[9px] shrink-0 bg-shade-200" />
      <div class="flex flex-col items-start gap-1.5">
        <div class="flex items-center gap-3.5 self-stretch">
          <div class="text-[16px] leading-[175%] font-['Geist',system-ui,sans-serif] text-shade-1000">{title}</div>
          <div class="flex items-center gap-0.75 rounded-full px-1.25 py-1 bg-shade-100">
            <StarIcon />
            <div class="inline-block text-[12px] leading-[100%] font-['Geist_Mono',system-ui,sans-serif] text-shade-700">{stars}</div>
          </div>
        </div>
        <div class="text-[15px] leading-[175%] self-stretch text-balance font-['Geist',system-ui,sans-serif] text-shade-700">{description}</div>
      </div>
    </div>
  );
}

function WritingTitle() {
  return (
    <div class="flex items-start self-stretch gap-1.5">
      <div class="font-['Geist',system-ui,sans-serif] text-shade-1000 text-lg/6">Writing</div>
      <div class="font-['Geist',system-ui,sans-serif] text-shade-350 text-lg/6">/</div>
      <div class="font-['Geist',system-ui,sans-serif] text-shade-1000 text-lg/6">Rambling</div>
    </div>
  );
}

function PostRow({ date, title }: PostRowProps) {
  return (
    <div class="flex items-start self-stretch">
      <div class="text-[16px] leading-[175%] w-47 shrink-0 font-['Geist',system-ui,sans-serif] text-shade-700">
        {date}
      </div>
      <div class="inline-block text-[16px] leading-[175%] content-center font-['Geist',system-ui,sans-serif] text-shade-700">
        {title}
      </div>
    </div>
  );
}

function Layout({ children, header, themeToggle }: LayoutProps) {
  return (
    <div class="[font-synthesis:none] flex overflow-clip relative items-center flex-col pt-42.5 pl-1 bg-shade-0 antialiased text-xs/4">
      <div class="flex flex-col items-start gap-18 w-185">
        {children}
      </div>
      {header}
      {themeToggle}
    </div>
  );
}

// Main Page Component
export default function Page() {
  return (
    <Layout header={<Navbar />} themeToggle={<ThemeToggle />}>
      <Hero />
      <Section title="Projects">
        <div class="flex flex-col items-start self-stretch gap-10.5 justify-center">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </Section>
      <Section title={<WritingTitle />}>
        <div class="flex flex-col items-start self-stretch gap-7">
          {POSTS.map((post, idx) => (
            <PostRow key={idx} {...post} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
