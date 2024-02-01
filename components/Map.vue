<template>
    <div class="my-20">
        <p class="text-center  font-black text-3xl">Get In Touch</p>
        <p class="text-center text-sm uppercase mt-5">feel free to contact us</p>
    </div>

 <section class="grid grid-cols-1 font-thin text-sm gap-4 md:grid-cols-2 h-[400px] mb-20">
        
          <!-- Left Columne -->
          <div class="grid grid-cols-1 bg-[url('/Contact_bg.jpg')] text-white brightness-50 bg-cover px-5 py-10 w-full md:p-20">
              <div class="flex gap-3 text-white">
                  <Icon name="mdi:cellphone-iphone" size="30" class="text-green-600" />
                  <div class="">
                      Phone: <br>
                      16566, 09666773333
                  </div>
              </div>
              <div class="flex gap-3">
                  <Icon name="mdi:map-marker-outline" size="30" class="text-green-600" />
                  <div class="">
                      Address: <br>
                      SKS Tower (Level 4), 7 VIP Road, Mohakhali, Dhaka - 1206
                  </div>
              </div>
              <div class="flex gap-3">
                  <Icon name="mdi:email-outline" size="30" class="text-green-600" />
                  <div class="">
                      Email: <br>
                      SKS Tower (Level 4), 7 VIP Road, Mohakhali, Dhaka - 1206
                  </div>
              </div>
          </div>

          <!-- Right Column -->
          <div>
              <img class="w-full h-full" src="/map.jpeg" alt="">
          </div>
      </section>
</template>

<script setup>

</script>
