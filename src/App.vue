<template>
  <div id="app">
    <div class="">
      <CallBtn class="bg-blue-400 rounded px-4 sm:w-full" msg="Заказать в Москву"/>
      <CallBtn class="bg-green-600 rounded px-4 sm:w-full" msg="Заказать в Санкт-Петербург"/>
    </div>
  </div>
</template>

<script>

import CallBtn from './components/CallBtn.vue'



export default {
  name: 'App',
  components: {
    CallBtn
  }
}
</script>

<style>
#app {
  @apply flex justify-around mt-4 w-1/2 text-white flex-wrap 
}
</style>
