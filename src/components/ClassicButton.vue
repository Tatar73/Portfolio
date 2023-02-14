<template>
   <button @click="redirectToUrl" :style="buttonStyles"><slot></slot></button>
</template>

<script>
export default {
  props: {
    buttonStyles: {
      type: Object,
      default: () => ({}),
    },
    redirectUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    redirectToUrl() {
      window.location.href = this.redirectUrl;
    },
  },
};
</script>


<style>

button{
  border: none;
  background: none;
  text-decoration: none;
  color: black;
  border: 3px solid #000000;
  border-radius: 49px;
  padding: 16px 16px;
  font-family: 'Archivo';
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  width: 250px;
  transition: background-color 0.2s ease;
}

</style>
