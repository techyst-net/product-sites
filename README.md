# Techyst product sites

One Next.js application serves the Techyst hub and every product landing page.

- `/` is the hub: all five products on one page. It is not a product page.
- `/<product>` renders one product directly (`/nexyst`, `/flintyst`, ...).
- `/home` renders the product chosen by the request hostname. Caddy forwards
  `/home`, `/_next/*`, and `/marks/*` from each product hostname to this service.

| Product | Application | Product site |
| --- | --- | --- |
| Flyst | `https://flyst.techyst.net/` | `https://flyst.techyst.net/home` |
| Nexyst | `https://nexyst.techyst.net/` | `https://nexyst.techyst.net/home` |
| Chatyst | `https://chatyst.techyst.net/` | `https://chatyst.techyst.net/home` |
| Canvyst | `https://canvyst.techyst.net/` | `https://canvyst.techyst.net/home` |
| Flintyst | not yet deployed | `/flintyst` |

Run locally with `npm run dev`. Production uses `docker compose up -d --build`
and binds the service to `127.0.0.1:8184`.
