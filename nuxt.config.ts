export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/app.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/_variables.scss";`
        }
      }
    }
  }
})
