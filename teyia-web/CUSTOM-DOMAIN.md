# Use teyia.net with Elestio

Once your app is deployed on Elestio, you can serve it at **teyia.net**.

## 1. Add the domain in Elestio

1. In [dash.elest.io](https://dash.elest.io/), open your **CI/CD pipeline** (the TEYIA app).
2. Open the **service** or **VM** that is running the app.
3. Find **Custom domain** / **Domains** (or similar in settings).
4. Add **teyia.net** (and optionally **www.teyia.net**).
5. Elestio will show you the **CNAME target** or **A record** to use (e.g. `something.elestio.app` or an IP).

## 2. Configure DNS at your domain registrar

Where you bought **teyia.net** (e.g. Cloudflare, Namecheap, Google Domains, etc.):

### Option A: CNAME (recommended if Elestio gives a hostname)

- **Type:** CNAME  
- **Name:** `@` (root) or `www`  
- **Target / Value:** the hostname Elestio gives you (e.g. `your-app-xxx.elestio.app`)

Some registrars don’t allow CNAME on the root (`@`). Then either:

- Use **www.teyia.net** as CNAME and redirect root to www, or  
- Use the **A record** option below if Elestio provides an IP.

### Option B: A record (if Elestio gives an IP)

- **Type:** A  
- **Name:** `@` (and optionally `www`)  
- **Value:** the IP address Elestio provides  

Save the DNS changes. Propagation can take from a few minutes up to 24–48 hours.

## 3. HTTPS

Elestio usually provisions an SSL certificate (e.g. Let’s Encrypt) for your custom domain once DNS is pointing correctly. If there’s an “Enable SSL” or “Refresh certificate” option, use it after DNS has propagated.

## 4. Redirect www to root (optional)

If you use both **teyia.net** and **www.teyia.net**, you can set a redirect from www → root (or the opposite) in Elestio if the dashboard offers it, or at your DNS/CDN provider.

---

**Summary:** Add **teyia.net** in Elestio → copy the CNAME or A record → create that record at your DNS provider → wait for propagation → HTTPS should activate automatically.
