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
      <p>Killian</p>      
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
