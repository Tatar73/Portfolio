<template>
   <button 
    :style="buttonStyle"
    @mouseover="hover = true" 
    @mouseout="hover = false"
    @click="redirectToPage">
    <slot></slot>
    </button>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: {
    destination: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "transparent", // Couleur de fond par défaut
    },
    textColor: {
      type: String,
      default: "#000000", // Couleur de texte par défaut
    },
    hoverColor: {
      type: String,
      default: "#ffffff", // Couleur de survol par défaut
    },
    hoverTxtColor: {
      type: String,
      default: "#ffffff", // Couleur de survol par défaut
    },
    borderColor: {
      type: String,
      default: "#3E8E41", // Couleur de survol par défaut
    },
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.hover ? this.hoverColor : this.backgroundColor,
        color: this.hover ? this.hoverTxtColor : this.textColor,
        border: this.borderColor,
        textDecoration: 'none',
        borderRadius: '49px',
        padding: '12px 32px',
        fontFamily: 'Archivo',
        fontSize: '16px',
        fontWeight: '800',
        textAlign: 'center',
        transition: 'all 0.5s ease'
      };
    },
  },
  methods: {
    redirectToPage() {
      this.$router.push(this.destination);
    },
  },
};
</script>


<style>

</style>
