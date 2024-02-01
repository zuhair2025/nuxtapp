<template>
<div class="flex flex-col bg-green-600 h-screen w-screen">
    <div class="mx-auto md:w-1/3 bg-white py-10 my-10 rounded-lg shadow-lg">
        <img class="w-20 mx-auto w-" src="/logo-light.png" alt="">
        <h1 class="text-center font-bold text-4xl mx-3">আপনার তথ্য দিয়ে লগ-ইন করুন</h1>
        <div class="mt-2 p-2 mx-2">
            <input type="text" name="name" placeholder="name" id="first-name" autocomplete="given-name" class="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div class="mt-2 p-2 mx-2">
            <input type="password" name="password" placeholder="password" id="first-name" autocomplete="given-name" class="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>      
        <div class="flex gap-8 my-5 mx-2">
            <a class="bg-green-400 w-full text-center text-white rounded-full py-2 font-bold hover:bg-green-900" href="">Login</a>
        </div>
        <div class="flex gap-2 md:gap-8 my-5 md:mx-5 mx-2">
            <NuxtLink class="bg-green-400 w-1/2 text-center text-white rounded-full py-2 font-bold hover:bg-green-900" to="/">Back</NuxtLink>
            <a class="bg-green-400 w-1/2 text-center text-white rounded-full py-2 font-bold hover:bg-green-900" href="">Forgot password</a>
        </div>
    </div>
</div>

</template>

<script setup>

</script>