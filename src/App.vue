<template>
    <header>
          <nav class="nav">
          <ul>
            <router-link :to="{name: 'home'}"><img src="./assets/img/logo_blanc.svg" alt="Logo personnel"></router-link>
            <li><router-link :to="{name: 'home'}">ACCUEIL</router-link></li>
            <li><router-link :to="{name: 'ImagesPage'}">REALISATIONS</router-link></li>
            <li><router-link :to="{name: 'contact'}">CONTACT</router-link></li>
          </ul>
      </nav>
  </header>
  <Cursor />
  <transition name="custom-transition"
                  mode="out-in"
                  @before-enter="animateRectangle"
                  @after-leave="animationFinished">
          </transition>
  <router-view />

  <footer class="item" @mouseenter="handleItemEnter">
    <ul>
      <li><a href="https://www.linkedin.com/in/killian-el-attar/" target="_blank">LinkedIn</a></li>
      <li><a href="">Github</a></li>
      <li><a href="">Email</a></li>
      <li><a href="">Tel</a></li>
    </ul>
      <p>© 2023 - Killian  El Attar</p>      
  </footer>
</template>


<script>
import { RouterView, RouterLink } from 'vue-router'
import './assets/js/header-sticky.js'
import Cursor from './components/Cursor.vue';
import CustomTransition from './components/CustomTransition.vue'


export default {
  components: {
    Cursor,
    CustomTransition,
  },
  methods: {
    handleItemEnter(event) {
      this.$refs.cursor.handleItemEnter(event);
    },
        animateRectangle() {
      this.$refs.customTransition.animateRectangle()
    },
    animationFinished() {
      this.$refs.customTransition.$emit('animation-finished')
    }
  },
};
</script>
