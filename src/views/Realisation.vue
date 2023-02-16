<template>
    <div class="container-realisation">
        <div class="right">
            <h1 @click="redirectToDifferentTemplate">{{ pageTitle }}</h1>
            <p>{{ pageDescription }}</p>
            <a href="https://mmietapres.fr/" target="_blank">{{ pageLien }}</a>
        </div>
        <div class="left">
            <div class="img_top">
                <img src="{{ LienImage1 }}" alt="Illustration site 1">
            </div>
            <div class="img_bottom">
                <img src="{{ LienImage2 }}" alt="Illustration site 2">
                <img src="{{ LienImage3 }}" alt="Illustration site 3">
            </div>
        </div>

    </div>
</template>
  
  <script>
  export default {
    name: 'PageTemplate',
    props: {
        pageTitle: String,
        pageDescription: String,
        pageLien: String,
        LienImage1: String,
        LienImage2: String,
        LienImage3: String,
    },
    props: {
        redirectTo: String,
    },
    methods: {
    redirectTo() {
      if (this.redirectTo) {
        this.$router.push(this.redirectTo);
      }
    },
  },
  }

  </script>