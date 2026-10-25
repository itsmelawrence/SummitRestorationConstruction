# Summit Restoration and Construction landing page

A local, frontend-only landing page concept built with React, TypeScript, Tailwind CSS, and Vite. It uses the three images supplied for this project, including the truck-and-tools photograph in the hero.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` for a production build in `dist/`.

## GitHub Pages preview

GitHub Pages publishes the compiled site from the root of the `gh-pages` branch. After committing changes to `main`, run `npm run deploy:pages` to build and publish the preview. Pushing `main` alone does not update the public preview. The Vite source files in the repository root are not a deployable site.

## Design plan

- **Visitor goal:** Give an Arizona property owner or manager a clear route from urgent damage to a conversation with Summit.
- **Primary action:** Call `(602) 595-5977`. Secondary actions lead to service details, the response process, and the Phoenix address.
- **Information order:** Emergency response hero, a short recovery statement, service types, restoration and insurance process, local team, final call action.
- **Visual direction:** Deep navy, warm paper, a controlled amber accent, condensed editorial type, and actual Summit photography. The redesigned composition takes broad inspiration from the photography, typography, and transitions in the Awwwards examples for Moon Safari, HOUS Luxury Homes, and the architecture work in its dynamic grid collection. No layout or assets were copied from those sites.
- **Layout:** Image-led type-overlap hero, moving service line, oversized statement, broad service bands, full-width workshop image, three-step process, local-team photograph, and a billboard-scale call close.
- **Component tree:** `App → Header → Hero → MovingLine → Manifesto → Services → Approach → About → Contact → Footer`; the header also provides mobile navigation.
- **Interaction states:** Call and navigation links have hover and keyboard focus states. The mobile menu has open, closed, and Escape-key behaviour. There are no data-loading or form states because this static concept does not fetch data or submit a form.
- **Responsive behaviour:** The desktop split layouts become stacked on narrow screens, navigation collapses below 900px, and a fixed call action appears below 640px. At narrow widths, the truck photo is framed to keep both vehicle and tools legible.
- **Motion:** Hero lines enter in sequence; the service line moves continuously; sections and photographs reveal as they enter the viewport. Motion is disabled for visitors who prefer reduced motion. Content remains visible when JavaScript or `IntersectionObserver` is unavailable.

## Design references

- [Moon Safari on Awwwards](https://www.awwwards.com/sites/moon-safari) informed the stronger relationship between large imagery and motion.
- [HOUS Luxury Homes on Awwwards](https://www.awwwards.com/sites/hous-luxury-homes) informed the restrained treatment of a construction subject.
- [Awwwards dynamic grid examples](https://www.awwwards.com/websites/dynamic-grid-layout-examples/) informed the varied scale and editorial section rhythm.

## Scope

This is a local frontend concept. Phone links open the visitor's calling app; the address opens Google Maps. There is no lead form, analytics, hosting, or backend integration. Copy is based on the supplied company screenshot and images and should receive client approval before publication.
