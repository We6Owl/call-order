<template>
      <button id="show-modal" @click="showModal = true"> {{ msg }} </button>
</template>

<script>


export default {
      name: "BtnCall",
      props: {
            msg: String
      },
      data() {
    return {
      showModal: false
    };
  },
      
  
 
}
</script>