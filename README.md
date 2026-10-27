# Scramjet2 Proxy (cork7.com)

Fullscreen proxy for cork7.com with settings popup (`/` key) to switch backend (libcurl/epoxy).

## Run

```bash
cd /home/snow/Music/calling/scramjet-proxy
npm install
node server.js
```

Listens on 0.0.0.0:8080 by default (override with PORT/HOST env vars).

## Host on cork.lunarcb.vip (HTTPS)

1. Point DNS A record for `cork.lunarcb.vip` to this server's public IP.
2. Install Caddy: https://caddyserver.com/docs/install
3. Run Caddy with the provided Caddyfile:
   ```bash
   caddy run --config /home/snow/Music/calling/scramjet-proxy/Caddyfile
   ```
   Caddy auto-provisions HTTPS and reverse-proxies to localhost:8080 (wisp WebSocket included).
4. Keep the node server running (use systemd or the start.sh script).

Settings backend choice persists in localStorage; reload after changing.
