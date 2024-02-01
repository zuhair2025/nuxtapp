<template>
    <MainLayout>

      <!-- <section class="container mx-auto" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true"> -->
      <section class="container mx-auto">
          <div class="mt-20 mb-20">
              <p class="text-center font-black text-3xl">Know Well</p>
              <p class="text-center font-thin text-sm px-5 pt-3 md:text-base">PayWell acts as a one-stop solution for various payments through a large network of outlets, providing users the most convenient way to pay. The retail outlets are available throughout the country and operate long hours to make it easier for users to pay and organizations to sell. You can visit nearby PayWell outlet to recharge your mobile phone, pay utility bills and fees, buy tickets and online products. Our uniquely strong combination of local shops, internet and distribution channels are simplifying payments every day, making it easier, secure and faster!</p>
          </div>
      </section>
      <!-- Our Services -->
      <p class="text-center mb-5 font-black text-3xl">Our Services</p>
      <p class="text-center text-sm uppercase">awesome feature</p>
      <section class="container grid mt-10 md:grid-cols-3 mx-auto">
          <div class="flex flex-col items-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <img class="w-12" src="/services_icon/mobile_recharge.png" alt="">
              <h1 class="font-bold mt-2">Mobile Recharge</h1>
              <p class="font-thin text-sm mt-1 text-center px-4 md:text-base"> Visit any PayWell outlet and recharge your mobile phone for any operator. PayWell
is appointed as national distributor by all mobile network operators in Bangladesh for alternative channel. We are authorized by Bangladesh Telecom Regulatory Commission (BTRC) to sell domestic and international recharge.</p>
              <img class="px-4 mt-4" src="/clients-logo/operator.png" alt="operators">
          </div>
          <div class="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <img class="w-12" src="/services_icon/mobile_recharge.png" alt="">
              <h1 class="font-bold mt-2">Electricity Bill</h1>
              <p class="font-thin text-sm mt-1 text-center px-4 md:text-base"> You don’t need to be worried about electricity bill payment anymore.
Visit any PayWell outlet anytime and pay DESCO, DPDC, West Zone & Polli Biddut bill. Stay tuned and follow us for more to be added in our portfolio soon! </p>
              <img class="px-4 mt-4" src="/clients-logo/utility.png" alt="operators">
          </div>
          <div class="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <img class="w-12" src="/services_icon/water_bill.png" alt="">
              <h1 class="font-bold mt-2">Water Bill</h1>
              <p class="font-thin text-sm mt-1 text-center px-4 md:text-base"> If you are a subscriber of Dhaka WASA, you can pay your monthly bill
through PayWell agents.</p>
              <img class="px-4 mt-4" src="/clients-logo/wasa.png" alt="operators">
          </div>
      </section>
      
      <!-- Corporate Section -->
      <Corporate />

      <!-- Counter -->
      <section class="text-white text-center items-center px-20 grid grid-cols-1 bg-[url('/bg1.jpg')] bg-cover bg-no-repeat py-20 gap-8 md:grid-cols-6">
          <div class="flex flex-col items-center">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">26</h1>
              <p class="text-sm">Procuct Partner</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">55802</h1>
              <p class="text-sm">Registered Merchants</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">360</h1>
              <p class="text-sm">Corporate Clients</p>
          </div>
          <div class="flex flex-col items-center">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">1.5 M</h1>
              <p class="text-sm">Number of Transactions</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">31.9 M</h1>
              <p class="text-sm">Customers Served</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">64</h1>
              <p class="text-sm">Districts Covered</p>
          </div>
      </section>

      <!-- Keep Things Simple -->
      <section class="bg-gray-100 py-20 md:px-20">
          <p class="text-center mb-5 font-black text-3xl">Keep Things Simple</p>
          <p class="text-center text-sm uppercase mb-10">choose out tool</p>
          <div class="flex flex-col gap-8 md:gap-0 md:mx-20 md:flex-row">
              <div class="flex flex-col items-center  bg-white mx-10 rounded-lg shadow-2xl py-8 md:px-10">
                  <h1>POS Terminal</h1>
                  <hr>
                  <img src="/pos.png" alt="">
                  <p class="text-center px-5 text-sm py-10">A simple registration allows you to access PayWell services through the Point of Sale (POS) Terminals. From anywhere.</p>
                  <a href="#" class="bg-green-600 text-white py-2 px-5">Interested?</a>
              </div>
              <div class="flex flex-col items-center bg-green-600 mx-10 rounded-lg shadow-2xl py-8 md:px-10">
                  <h1 class="text-white">Android App</h1>
                  <hr>
                  <img class="w-[144px]" src="/app.png" alt="">
                  <p class="text-center text-white px-5 text-sm py-10">A simple registration allows you to access PayWell services through the Point of Sale (POS) Terminals. From anywhere.</p>
                  <a href="#" class="bg-white text-green-600 py-2 px-5">Interested?</a>
              </div>
              <div class="flex flex-col items-center bg-white mx-10 rounded-lg shadow-2xl py-8 md:px-10">
                  <h1>POS Terminal</h1>
                  <hr>
                  <img src="/laptop.png" alt="">
                  <p class="text-center px-5 text-sm py-10">A simple registration allows you to access PayWell services through the Point of Sale (POS) Terminals. From anywhere.</p>
                  <a href="#" class="bg-green-600 text-white py-2 px-5">Interested?</a>
              </div>
          </div>
      </section>
      
      <!-- Map -->
      <Map />

      <!-- Get In Touch -->
      <Contact />

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>