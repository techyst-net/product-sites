# Techyst product sites

One Next.js application serves the Techyst hub and every product landing page.

- `/` is the hub: all five products on one page.
- `/<product>` renders one product directly (`/nexyst`, `/flintyst`, ...).

The product hostnames serve only the applications; the sites live here.


Run locally with `npm run dev`. Production is Vercel
(`techyst-product-sites`); Caddy proxies the `/home` paths above to that
deployment, so there is nothing to deploy on the EC2 box.
