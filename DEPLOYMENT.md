# Deployment and demo limits

The fixed Lovable template uses React, Vite, Tailwind and TanStack routing. No backend business logic, database, API endpoint or additional library was added. Every management operation runs in React and browser localStorage.

## Vercel static deployment

1. Import this repository into Vercel.
2. Use the included `vercel.json`: build command `bun run build`, output `dist/client`.
3. All public and admin page paths are prerendered to static HTML by Vite. Vercel serves the generated pages; no application backend is needed.
4. All displayed generated preschool photographs are Vite imports, bundled into the client output without CDN proxy dependencies. Legacy reference-photo URLs in saved demo content are migrated automatically.
5. Verify every deployed page and gallery image after deployment. This project has not been deployed to Vercel from this workspace, so live Vercel behavior remains unverified.

## Important before a real launch

- Demo admin access is intentionally not secure authentication; never use it for private or sensitive data.
- Changes and form submissions are local to one browser/device, not shared with staff or other parents.
- Forms do not send email. Call the school for a real enquiry.
- Parent testimonials, timings and opening hours are illustrative. Obtain verified content before publishing.
- All current preschool images are AI-created illustrations, not photographs of the actual premises or pupils. Uploaded images were references and are no longer displayed. Replace with authorised real photographs if desired before launch.
- The supplied email address is preserved exactly; confirm it is a working mailbox before launch.
