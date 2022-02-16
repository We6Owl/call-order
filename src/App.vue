<template>
  <div id="app">
      <CallBtn class="btn_blue" msg="Заказать в Москву"/>
      <CallBtn class="btn_green" msg="Заказать в Санкт-Петербург"/>
      <modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">custom header</h3>
      </modal>
  </div>
</template>

<script>
import CallBtn from './components/CallBtn.vue'
import modal from './components/ModalTemplate.vue'
export default {
  name: 'App',
  components: {
    CallBtn, modal
  }        
}
</script>

<style>
#app {
  @apply flex flex-col justify-evenly text-white whitespace-nowrap md:w-1/2 md:flex-row
}
.btn_blue {
  @apply bg-blue-400 rounded px-4 py-2 m-4
}
.btn_green {
  @apply bg-green-600 rounded px-4 py-2 m-4
}
</style>
