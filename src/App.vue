<template>
  <div id="app">
      <button
      type="button"
      class="btn btn_green"
      @click="showModal"
      >
      Заказать в Москву
      </button>
      
      <button
      type="button"
      class="btn btn_blue"
      @click="showModal"
      >
      Заказать в Санкт-Петербург
      </button>
      <Modal 
            v-show="isModalVisible"
            @close="closeModal"
          />
          <Modal
        v-show="isModalVisible"
        @close="closeModal"
      >
        <template v-slot:header>
          This is a new modal header.
        </template>

        <template v-slot:body>
          This is a new modal body.
        </template>

        <template v-slot:footer>
          This is a new modal footer.
        </template>
      </Modal>
  </div>
</template>

<script>
import Modal from './components/ModalTemplate.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }      
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
