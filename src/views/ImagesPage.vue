<template>
     <div class="container-real" >
        <div class="filtres">
            <ClassicButton
            destination=""
            backgroundColor="black"
            textColor="#ffffff"
            hoverColor="transparent"
            hoverTxtColor="#000000"
            borderColor="3px solid #000000"
            >Voir tout
            </ClassicButton>
            <ClassicButton
            destination=""
            backgroundColor="transparent"
            textColor="#000000"
            hoverColor="#000000"
            hoverTxtColor="#ffffff"
            borderColor="3px solid #000000"
            >Développement web
            </ClassicButton>
            <ClassicButton
            destination=""
            backgroundColor="transparent"
            textColor="#000000"
            hoverColor="#000000"
            hoverTxtColor="#ffffff"
            borderColor="3px solid #000000"
            >Audiovisuel
            </ClassicButton>
            <ClassicButton
            destination=""
            backgroundColor="transparent"
            textColor="#000000"
            hoverColor="#000000"
            hoverTxtColor="#ffffff"
            borderColor="3px solid #000000"
            >Photographie
            </ClassicButton>
        </div>
        <div class="grid">
            <div class="realisation" v-for="(image, index) in images" :key="index" @click="goToImagePage(index)">
                    <img :src="image.src">
            </div>
        </div>
    </div>
  </template>
  
  <script>
import ClassicButton from "../components/ClassicButton.vue";

  export default {
    components: {
        ClassicButton,
    },
    data() {
      return {
        images: [
          { src: 'src/assets/img/real/refuge.png' },
          { src: 'src/assets/img/real/mmietapres.png' },
          { src: 'src/assets/img/real/laboiteameuh.png' },
          { src: 'src/assets/img/real/mmietapresOld.png' },
          { src: 'src/assets/img/real/hekto.png' },
          { src: 'src/assets/img/real/superHero.png' },
          { src: 'src/assets/img/real/impact.png' },
          { src: 'src/assets/img/real/spark.png' },
        ]
      }
    },
    methods: {
      goToImagePage(index) {
        this.$router.push({
          name: 'ImagePage',
          params: {
            index: index
          }
        })
      }
    }
  }
  </script>