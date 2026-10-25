# Summit Restoration and Construction landing page

A local, frontend-only landing page concept built with React, TypeScript, Tailwind CSS, and Vite. It uses the three images supplied for this project, including the truck-and-tools photograph in the hero.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` for a production build in `dist/`.

## Design plan

- **Visitor goal:** Give an Arizona property owner or manager a clear route from urgent damage to a conversation with Summit.
- **Primary action:** Call `(602) 595-5977`. Secondary actions lead to service details, the response process, and the Phoenix address.
- **Information order:** Emergency response hero, service types, restoration and insurance process, local team, final call action.
- **Visual direction:** Deep navy, warm paper, a controlled amber accent, editorial type, and actual Summit photography.
- **Layout:** Split hero, compact credibility strip, service rows, photographic process section, local team section, and a direct contact close.
- **Component tree:** `App → Header → Hero → Services → Approach → About → Contact → Footer`; the header also provides mobile navigation.
- **Interaction states:** Call and navigation links have hover and keyboard focus states. The mobile menu has open, closed, and Escape-key behaviour. There are no data-loading or form states because this static concept does not fetch data or submit a form.
- **Responsive behaviour:** The desktop split layouts become stacked on narrow screens, navigation collapses below 900px, and a fixed call action appears below 640px. At narrow widths, the truck photo is framed to keep both vehicle and tools legible.
- **Motion:** Hero elements enter in sequence; section elements reveal as they enter the viewport. Motion is disabled for visitors who prefer reduced motion. Content remains visible when JavaScript or `IntersectionObserver` is unavailable.

## Scope

This is a local frontend concept. Phone links open the visitor's calling app; the address opens Google Maps. There is no lead form, analytics, hosting, or backend integration. Copy is based on the supplied company screenshot and images and should receive client approval before publication.
