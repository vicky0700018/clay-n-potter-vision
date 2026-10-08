// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: ["/", "/about", "/programs", "/day-care", "/play-school", "/activities", "/gallery", "/facilities", "/admissions", "/testimonials", "/contact", "/admin/login", "/admin/dashboard", "/admin/programs", "/admin/activities", "/admin/gallery", "/admin/facilities", "/admin/testimonials", "/admin/admissions", "/admin/enquiries", "/admin/contact-information", "/admin/website-settings"].map(path => ({ path })),
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
