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
            @click="showImages"
            >Voir tout
            </ClassicButton>
            <ClassicButton
            destination=""
            backgroundColor="transparent"
            textColor="#000000"
            hoverColor="#000000"
            hoverTxtColor="#ffffff"
            borderColor="3px solid #000000"
            @click="showFirstSixImages"
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
            <div class="realisation" v-for="(image, index) in images" :key="index" @click="goToImagePage(index)" v-show="showAllImages || (index < 6)">
                <img :src="image.src" :id="index < 6 ? `image-${index}` : ''">
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
          { src: 'src/assets/img/real/refuge.png'},
          { src: 'src/assets/img/real/mmietapres.png' },
          { src: 'src/assets/img/real/laboiteameuh.png' },
          { src: 'src/assets/img/real/mmietapresOld.png' },
          { src: 'src/assets/img/real/hekto.png' },
          { src: 'src/assets/img/real/superHero.png' },
          { src: 'src/assets/img/real/impact.png' },
          { src: 'src/assets/img/real/spark.png' },
        ],
        showAllImages: true,
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
    },
    showFirstSixImages() {
      this.showAllImages = false;
      for (let i = 0; i < 6; i++) {
        const image = document.getElementById(`image-${i}`);
        if (image) {
          image.style.display = 'block';
        }
      }
    },
    showImages(){
        this.showAllImages = true;
    },
  }
  }
  </script>