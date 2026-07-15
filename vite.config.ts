import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages ? "/meupamminvest/" : "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(isGitHubPages
      ? {
          pages: [{ path: "/" }, { path: "/quiz" }, { path: "/trading-sem-stress" }, { path: "/ouro-elite-premium" }],
          prerender: {
            enabled: true,
          },
        }
      : {}),
  },
  nitro: isGitHubPages ? false : undefined,
});