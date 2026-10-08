# Deployment and demo limits

The fixed Lovable template uses React, Vite, Tailwind and TanStack routing. No backend business logic, database, API endpoint or additional library was added. Every management operation runs in React and browser localStorage.

## Vercel static deployment

1. Import this repository into Vercel.
2. Use the included `vercel.json`: build command `bun run build`, output `dist/client`.
3. All public and admin page paths are prerendered to static HTML by Vite. Vercel serves the generated pages; no application backend is needed.
4. `build/school-assets.ts` emits the 24 supplied school photo crops into the client output at the exact URLs specified by their asset pointers. The text photo export cache is retained so builds do not need Lovable credentials or a preview URL. The classroom image is a regular Vite import.
5. Verify every deployed page and gallery image after deployment. This project has not been deployed to Vercel from this workspace, so live Vercel behavior remains unverified.

## Important before a real launch

- Demo admin access is intentionally not secure authentication; never use it for private or sensitive data.
- Changes and form submissions are local to one browser/device, not shared with staff or other parents.
- Forms do not send email. Call the school for a real enquiry.
- Parent testimonials, timings and opening hours are illustrative. Obtain verified content before publishing.
- The hero and two facilities images are generated illustrative environments, not photographs of the actual premises.
- Uploaded photos are small collage extracts. Ask the client for original high-resolution photographs and permission to publish photos of children.
- The supplied email address is preserved exactly; confirm it is a working mailbox before launch.
