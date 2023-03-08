<template>
  <div class="container-real">
    <div class="filtres">
      <ClassicButton
        destination=""
        backgroundColor="black"
        textColor="#ffffff"
        hoverColor="transparent"
        hoverTxtColor="#000000"
        borderColor="3px solid #000000"
        :id="'voir-tout'"
        @click="updateUrl('voir-tout'); showAllImages = true; selectedFilter = null ;"
      >
        Voir tout
      </ClassicButton>
      <ClassicButton
        destination=""
        backgroundColor="transparent"
        textColor="#000000"
        hoverColor="#000000"
        hoverTxtColor="#ffffff"
        borderColor="3px solid #000000"
        :id="'dev'"
        @click="updateUrl('dev'); showAllImages = false; selectedFilter = 'dev';"
      >
        Développement web
      </ClassicButton>
      <ClassicButton
        destination=""
        backgroundColor="transparent"
        textColor="#000000"
        hoverColor="#000000"
        hoverTxtColor="#ffffff"
        borderColor="3px solid #000000"
        :id="'av'"
        @click="updateUrl('av'); showAllImages = false; selectedFilter = 'av';"
      >
        Audiovisuel
      </ClassicButton>
      <ClassicButton
        destination=""
        backgroundColor="transparent"
        textColor="#000000"
        hoverColor="#000000"
        hoverTxtColor="#ffffff"
        borderColor="3px solid #000000"
        :id="'photo'"
        @click="updateUrl('photo'); showAllImages = false; selectedFilter = 'photo';"
      >
        Photographie
      </ClassicButton>
    </div>
    <div class="grid">
      <div class="realisation" v-for="(image, index) in filteredImages" :key="index" @click="goToImagePage(index)">
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
        { src: '/images/real/refuge.png', id: 'dev' },
        { src: '/images/real/mmietapres.png', id: 'dev' },
        { src: '/images/real/laboiteameuh.png', id: 'dev' },
        { src: '/images/real/mmietapresOld.png', id: 'dev' },
        { src: '/images/real/hekto.png', id: 'dev' },
        { src: '/images/real/superHero.png', id: 'dev' },
        { src: '/images/real/impact.png', id: 'av' },
        { src: '/images/real/spark.png', id: 'av' },
        { src: '/images/real/bateauVoile.png', id: 'photo' },
        { src: '/images/real/batiment.png', id: 'photo' },
        { src: '/images/real/escalade.png', id: 'photo' },
        { src: '/images/real/pecheur.png', id: 'photo' },
        { src: '/images/real/valenciaMusee.png', id: 'photo' },
        { src: '/images/real/valenciaPalmier.png', id: 'photo' },
      ],
      showAllImages: true,
      selectedFilter: null,
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
    updateUrl(id) {
      const currentUrl = this.$route.fullPath;
      const separator = currentUrl.includes('?') ? '&' : '?';
      const newUrl = `${currentUrl}${separator}filter=${id}`;
      this.$router.replace(newUrl);
    },
  },
  computed: {
    filteredImages() {
      if (this.showAllImages) {
        return this.images;
      } else {
        return this.images.filter((image) => {
          return image.id === this.selectedFilter;
        });
      }
    },
  },
}
</script>





