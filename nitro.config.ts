import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  publicAssets: [
    {
      baseURL: "/",
      dir: "dist/client",
      fallthrough: true,
    },
  ],
  serveStatic: true,
});
