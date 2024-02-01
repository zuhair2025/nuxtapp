<template>
      <nav class="relative container mx-auto p-6">
      <!-- Flex container -->
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="pt-2">
            <img src="/logo.svg" alt="">
          </div>
          <!-- Menu Items -->
          <div class="space-x-6 md:flex">
            <a href="#" class="hover:text-orange">Pricing</a>
            <a href="#" class="hover:text-darkGrayishBlue">Product</a>
            <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
            <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" class="hover:text-darkGrayishBlue">Community</a>
          </div>
          <a href="#" class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">Get Started</a>
        </div>
      </nav>
    <!-- Hero Section -->
      <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <!-- Left item -->
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Bring everyone together to build better products</h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
          </p>
          <div class="flex justify-center md:justify-start">
            <a href="#" class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">Get Started</a>
          </div>
        </div>
        <!-- Image -->
        <div class="md:w-1/2 ">
          <img src="/illustration-intro.svg" alt="">
        </div>
      </div>
      <!-- Features Section -->
      <section id="features">
        <!--  Flex container -->
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <!-- whats Different -->
          <div class="flex flex-col space-y-12 md:w-1/2">
            <h2 class="max-w-md text-4xl font-bold text center md:text-left">
              What's different about Manage?
            </h2>
            <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
            </p>
          </div>
          <!-- Numberede List -->
          <div class="flex flex-col space-y-8 md:w-1/2">
            <!-- List Item 1 -->
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <!-- Heading -->
            </div>
          </div>
        </div>
      </section>
    
</template>

<script setup>

</script>