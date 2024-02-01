// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  bootstrapIcons: {
    display: "inline",
    expose: true,
    prefix: "your-prefix"
  },
  devtools: { enabled: true },
    modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-aos',
    'nuxt-bootstrap-icons',
    'nuxt-icon'
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
   //modules: ['pagination'], // all modules are imported by default
  }
})
