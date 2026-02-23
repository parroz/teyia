# Deploy TEYIA to Elestio

This project is ready for [Elestio](https://dash.elest.io/) CI/CD. Follow these steps.

## Prerequisites

- Git repository (GitHub or GitLab) with this code pushed
- [Elestio account](https://dash.elest.io/) (sign up if needed)

## Step 1: Push your code to GitHub or GitLab

If the repo is not yet on GitHub/GitLab:

```bash
cd teyia-web
git init
git add .
git commit -m "Prepare for Elestio deploy"
# Create a new repo on GitHub/GitLab, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Step 2: Open Elestio CI/CD

1. Log in at [dash.elest.io](https://dash.elest.io/).
2. In the left sidebar, click **CI/CD**.

## Step 3: Choose deployment source

1. Click **Deploy** (or equivalent to start a new pipeline).
2. Select **GitHub** or **GitLab**.
3. If asked, connect/authorize your Git account so Elestio can read your repositories.

## Step 4: Select repository

1. Pick the repository that contains `teyia-web` (or the repo where you pushed the app).
2. If the app lives in a subfolder (e.g. `teyia-web`), you’ll set the **Root directory** in the next step.

## Step 5: Deployment target (VM)

Choose one:

- **Deploy on a new VM** – Elestio creates a new server (choose provider, region, plan).
- **Deploy on an existing VM** – Use a VM you already have in Elestio.

If you chose “new VM”:

- **Cloud provider**: e.g. AWS Lightsail, DigitalOcean, Vultr, Linode, Hetzner.
- **Region**: pick one close to your users.
- **Plan**: select size/cost.
- Optionally set a target name and project.

## Step 6: Configure the project

**Important:** The repo has a **Dockerfile at the repo root** (next to `teyia-web/`) so the Docker build finds `package.json` inside `teyia-web/`. In Elestio, if there is an option like **"Use repository Dockerfile"** or **"Dockerfile path"**, use the root Dockerfile (leave path empty or set to `Dockerfile`). Leave **Root directory** empty when using this Dockerfile so the build runs from the repo root.

If you are not using Docker and instead use script-based build, set **Root directory** to `teyia-web`.

If you have **`elestio.yml`** in the repo (we added it), Elestio will pre-fill most fields. Check that they match:

| Field            | Value              |
|------------------|--------------------|
| **Project name** | e.g. `teyia-web`   |
| **Branch**       | `main` (or your default) |
| **Root directory** | Leave empty if the repo root is the app; otherwise e.g. `teyia-web` |
| **Runtime**      | Node.js            |
| **Version**      | 20                 |
| **Framework**    | React              |
| **Install**      | `npm install`      |
| **Build command**| `npm run build`    |
| **Build output directory** | `dist`   |
| **Run command**  | `npm run start`    |
| **Exposed port**  | `3000`             |

- **Reverse proxy**: HTTPS on 443 → HTTP on 3000 (usually set from `elestio.yml`).

No need to add env vars unless your app uses them.

## Step 7: Create the pipeline

1. Click **Create CI/CD pipeline** (or equivalent).
2. Wait for the first build and deploy (a few minutes).
3. When it’s green, open the pipeline and use the **Website** URL to view your app.

## After deployment

- Each push to the selected branch will trigger a new build and deploy.
- Logs and redeploys are available from the same pipeline page in Elestio.

## If the app is in a subfolder

If the repo contains more than this app (e.g. `teyia-web` at the root and other folders):

1. In “Configure your project”, set **Root directory** to `teyia-web` (or the folder that contains `package.json` and `elestio.yml`).
2. The install/build/start commands and `dist` path are relative to that folder, so they stay as above.

## Links

- [Elestio CI/CD overview](https://docs.elest.io/books/cicd-pipelines/page/overview)
- [Deploy React app on Elestio](https://docs.elest.io/books/cicd-pipelines/page/how-to-deploy-react-app-on-elestio)
- [Create your own elestio.yml](https://docs.elest.io/books/cicd-pipelines/page/create-your-own-template-elestioyml)
