<template>
    <section>
            <nav class="relative mx-auto items-center justify-between">
                <div class="absolute container z-10 w-full flex justify-around pt-10 mx-10">
                    <div class="px-10">
                        <img class="w-20 h-15" src="/logo-light.png" alt="">
                    </div>
                    <div class="md:flex space-x-6 ml-10 text-white font-thin">
                        <NuxtLink to="/" class="hover:text-green-400 cursor-pointer"><Icon name="bi:house-door" size="15" />Home</NuxtLink>
                        <NuxtLink to="/enterprise" class="hover:text-green-400 cursor-pointer">Enterprise</NuxtLink>
                        <NuxtLink to="/gallery" class="hover:text-green-400 cursor-pointer">Gallery</NuxtLink>
                        <a class="hover:text-green-400 cursor-pointer">Press</a>
                        <a class="hover:text-green-400 cursor-pointer">Outlets</a>
                        <NuxtLink to="/contact" class="hover:text-green-400 cursor-pointer">Contact</NuxtLink>
                        <NuxtLink to="/login" class="px-6 py-2 text-white bg-green-600 hover:bg-green-300 hover:text-black baseline"><Icon name="bi:file-lock-fill" size="17" /> Login</NuxtLink>
                    </div>
                </div>
            
                <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'creative'"
                    :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                    }"
                    :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                    }"
                >
                    <SwiperSlide>
                        <div class="relative">
                            <div class="absolute pt-100 flex flex-col justify-center h-screen w-screen items-center z-10 text-white">
                                <p class="text-3xl mb-4 font-thin" data-aos="zoom-in" data-aos-duration="3000">Simplifying Payments</p>
                                <h1 class="font-bold text-6xl" data-aos="zoom-in" data-aos-duration="3000">Make&nbsp;Life&nbsp;Easier</h1>
                                <div class="flex justify-center space-x-6 my-8">
                                    <a href="#"  data-aos="fade-right" data-aos-duration="3000" class="px-8 py-3 text-green-600 bg-white hover:bg-green-600 hover:text-white baseline">Contact Us</a>
                                    <a href="#"  data-aos="fade-left" data-aos-duration="3000" class="px-8 py-3 text-white bg-green-600 hover:bg-white hover:text-green-600 baseline">Get Our App</a>
                                </div>
                            </div>
                            <img class="h-auto brightness-50" src="/bg1.jpg" alt="">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="relative">
                            <div class="absolute pt-100 flex flex-col justify-center h-screen w-screen items-center z-10 text-white">
                                <p class="text-3xl mb-4" data-aos="zoom-in" data-aos-duration="1000">Simplifying Payments</p>
                                <h1 class="font-bold text-6xl" data-aos="zoom-in" data-aos-duration="1000">Make   Life   Easier</h1>
                                <div class="flex justify-center space-x-6 my-8">
                                    <a href="#"  data-aos="fade-right" data-aos-duration="1000" class="px-8 py-3 text-green-600 bg-white hover:bg-green-600 hover:text-white baseline">Contact Us</a>
                                    <a href="#"  data-aos="fade-left" data-aos-duration="1000" class="px-8 py-3 text-white bg-green-600 hover:bg-white hover:text-green-600 baseline">Get Our App</a>
                                </div>
                            </div>
                            <img class="h-auto brightness-50" src="/bg2.jpg" alt="">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="relative">
                            <div class="absolute flex flex-col justify-center h-screen w-screen items-center z-10 text-white">
                                <p class="text-3xl mb-4" data-aos="zoom-in" data-aos-duration="1000">Simplifying Payments</p>
                                <h1 class="font-bold text-6xl" data-aos="zoom-in" data-aos-duration="1000">Make   Life   Easier</h1>
                                <div class="flex justify-center space-x-6 my-8">
                                    <a href="#"  data-aos="fade-right" data-aos-duration="1000" class="px-8 py-3 text-green-600 bg-white hover:bg-green-600 hover:text-white baseline">Contact Us</a>
                                    <a href="#"  data-aos="fade-left" data-aos-duration="1000" class="px-8 py-3 text-white bg-green-600 hover:bg-white hover:text-green-600 baseline">Get Our App</a>
                                </div>
                            </div>
                            <img class="h-auto brightness-50" src="/bg3.jpg" alt="">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </nav>
        </section>
</template>

<script setup>

</script>