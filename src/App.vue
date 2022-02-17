<template>
  <div id="app">
    <div class="container">
    <button
      class="btn_green"
      id="show-modal"
      @click="
        showModal = true;
        citySelect = 1;
      "
    >
      Заказать в Москву
    </button>
    <button
      class="btn_blue"
      id="show-modal"
      @click="
        showModal = true;
        citySelect = 2;
      "
    >
      Заказать в Санкт-Петербурге
    </button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header" class="lg:text-3xl">Заказать звонок</h3>
      <div slot="body">
        <form>
          <div class="flex justify-between flex-wrap flex-col md:flex-row">
            
            <div class="mb-4">
              <label
                class=""
                for="username"
                >Имя*</label
              >
              <input
                class="form-input rounded-md w-full"
                id="username"
                type="text"
                placeholder="Иван Иванов"
              />
            </div>
            <div class="mb-4">
              <label
                class=""
                for="tel"
                >Телефон*</label
              >
              <input
                class="form-input rounded-md w-full"
                type="tel"
                id="tel"
              />
            </div>
            <div class="mb-4">
              <label
                class=""
                for="email"
                >Email*</label
              >
              <input
                class="form-input rounded-md w-full"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div class="mb-4">
              <label class="" for="select">
                Город*
              </label>
              <select class="form-select rounded-md w-full">
                <option
                  class="text-gray-700"
                  v-for="item in contacts"
                  :key="item"
                  v-bind:value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </modal>
    </div>
  </div>
</template>

<script>
import Modal from "./components/ModalTemplate.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  props: {
    citySelect: String,
  },
  data() {
    return {
      showModal: true,
      contacts: [
        {
          id: 1,
          name: "Москва",
        },
        {
          id: 2,
          name: "Санкт-Петербург",
        },
        {
          id: 3,
          name: "Казань",
        },
      ],
    };
  },
};
</script>

<style>
.btn_green {
  @apply bg-green-600 rounded px-4 py-2 my-4 text-white w-full md:w-1/2;
}
.btn_blue {
  @apply bg-blue-400 rounded px-4 py-2 text-white w-full md:w-1/2 ;
}
label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

</style>
