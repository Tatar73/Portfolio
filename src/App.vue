<template>
    <header>
      <nav class="nav">
          <ul>
            <router-link :to="{name: 'home'}"><img src="./assets/img/logo_blanc.svg" alt="Logo personnel"></router-link>
            <li><router-link :to="{name: 'home'}">ACCUEIL</router-link></li>
            <li><router-link :to="{name: 'realisations'}">REALISATIONS</router-link></li>
            <li><router-link :to="{name: 'contact'}">CONTACT</router-link></li>
          </ul>
      </nav>
  </header>
  <Cursor />
  <router-view/>
  <footer class="item" @mouseenter="handleItemEnter">
    <ul>
      <li><a href="">LinkedIn</a></li>
      <li><a href="">Github</a></li>
      <li><a href="">Email</a></li>
      <li><a href="">Tel</a></li>
    </ul>
      <p>© 2022 - Killian  El Attar</p>      
  </footer>
</template>


<script>
import { RouterView, RouterLink } from 'vue-router'
import './assets/js/header-sticky.js'
import Cursor from './components/Cursor.vue';

export default {
  components: {
    Cursor,
  },
  methods: {
    handleItemEnter(event) {
      this.$refs.cursor.handleItemEnter(event);
    },
  },
};
</script>
