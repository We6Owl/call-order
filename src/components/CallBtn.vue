<template>
    <button id="show-modal" @click="showModal = true">{{msg}}</button>
</template>

<script>

export default {
  name: 'CallBtn',
    props: {
        msg: String
    },

}
</script>