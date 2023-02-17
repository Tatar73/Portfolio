<template>
    <div class="meme-generator">
      <img :src="imageSrc">
      <div class="form-group">
        <label for="top-text">Top Text:</label>
        <input type="text" id="top-text" v-model="topText">
      </div>
      <div class="form-group">
        <label for="bottom-text">Bottom Text:</label>
        <input type="text" id="bottom-text" v-model="bottomText">
      </div>
    </div>
  </template>
  
  <script>

  export default {
    props: ['src'],
    data() {
      return {
        topText: '',
        bottomText: ''
      }
    },
    computed: {
      imageSrc() {
        return this.src;
      },
      memeSrc() {
        // Use an online meme generator to create the meme with the top and bottom text
        // and return the meme URL
      }
    }
  }
  
  </script>