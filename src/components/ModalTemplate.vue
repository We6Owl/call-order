<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <div class="flex justify-end">
            <slot name="footer">
              <button class="bg-green-600 rounded flex w-full md:w-1/4 text-center text-white py-2 justify-center" @click="$emit('close')">
                Отправить
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
  };
</script>


<style>
.modal-mask {
  @apply fixed top-0 left-0 w-full h-full bg-black table bg-opacity-40 duration-75 
}

.modal-wrapper {
  @apply table-cell align-middle
}

.modal-container {
  @apply rounded-md  lg:w-1/2 lg:m-auto p-8 m-4 bg-white opacity-100 shadow-sm duration-75;
}

.modal-header h3 {
  margin-top: 0;
  font-weight: 700;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
