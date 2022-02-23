<template>
  <div id="app">
    <div class="container">
      <button
        class="btn_green"
        id="show-modal"
        @click="
          showModal = true;
          selected = '1';
        "
      >
        Заказать в Москву
      </button>
      <button
        class="btn_blue"
        id="show-modal"
        @click="
          showModal = true;
          selected = '2';
        "
      >
        Заказать в Санкт-Петербурге
      </button>
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header" class="lg:text-3xl">Заказать звонок</h3>
        <div slot="body">
          <form ref="form_1" @submit="checkForm">
            <div class="flex justify-between flex-wrap flex-col md:flex-row">
              <div class="mb-4">
                <label class="" for="username">Имя*</label>
                <div class="flex-col">
                  <input
                    class="form-input rounded-md w-full"
                    id="username"
                    type="text"
                    v-model="username"
                    placeholder="Иван Иванов"
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
              <div class="mb-4">
                <label class="" for="tel">Телефон*</label>

                <masked-input
                  v-model="phone"
                  mask="\+\7 (111) 111-11-11"
                  placeholder="+7 (___) ___-__-__"
                  class="form-input rounded-md w-full"
                  type="tel"
                  id="tel"
                />
                <span>{{ errors[0] }}</span>
              </div>
              <div class="mb-4">
                <label class="" for="email">Email*</label>
                <input
                  class="form-input rounded-md w-full"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  v-model="email"
                />
                <span>{{ errors[0] }}</span>
              </div>
              <div class="mb-4">
                <label class="" for="select"> Город* </label>
                <select
                  class="form-select rounded-md w-full"
                  v-model="selected"
                  @input="$emit('input', $event.target.value)"
                >
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
              <div class="flex justify-end m-4 lg:w-full">
                <button
                  class="bg-green-600 rounded flex p-4 text-center text-white justify-center align-middle items-center"
                  type="submit"
                >
                  Отправить
                </button>
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
import MaskedInput from "vue-masked-input";
import axios from "axios";

export default {
  name: "App",
  components: {
    Modal,
    MaskedInput,
  },
  props: {},
  data() {
    return {
      showModal: false,
      selected: "1",
      errors: [],
      username: null,
      phone: null,
      email: null,
      message: '',
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

  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Обязательное поле");
      }
      if (!this.phone) {
        this.errors.push("Обязательное поле");
      }
      if (!this.email) {
        this.errors.push("Обязательное поле");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Укажите корректный адрес электронной почты.");
      }

      e.preventDefault();

      if (this.username && this.phone && this.email) {
        let tocall = this.phone.match(/\+|\d+/g).join(""),
          send_data = {
            name: this.username,
            phone: tocall,
            email: this.email,
            city_id: this.selected,
          };
        axios.post("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", { ...send_data }).then(response => {
          self.message = 'Data is entered'
          console.log(response);
        }).catch(error => {
             console.log('error:', error)
          });

        this.showModal = false;
        this.username = this.phone = this.email = "";
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style>
#app {
  @apply md:w-1/2;
}
.container {
  @apply md:flex md:justify-center;
}
.btn_green {
  @apply bg-green-600 rounded px-4 py-2 my-4 mr-4 text-white w-full md:w-auto;
}
.btn_blue {
  @apply bg-blue-400 rounded px-4 py-2 my-4 text-white w-full md:w-auto;
}
label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
</style>
