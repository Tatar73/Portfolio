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
            <div class="realisation">
                <img src="../assets/img/real/refuge.png" @click="showPageTemplate('page1')" alt="">
                <PageTemplate
            v-if="showPage"
            pageTitle="pageTitle"
            pageDescription="pageDescription"
            pageLien="pageLien"
            LienImage1="LienImage1"
            LienImage2="LienImage2"
            LienImage3="LienImage3"
            redirectTo="/page2"
            @close="closePageTemplate"
        />
            </div>
            <div class="realisation">
                <img src="../assets/img/real/mmietapres.png" @click="showPageTemplate('page2')" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/laboiteameuh.png" @click="showPageTemplate('page3')" alt="">
            </div>
            <div class="realisation">
                <router-link :to="realisation4" @click.native.prevent="showPageTemplate('realisation4')">
                <img src="../assets/img/real/mmietapresOld.png" alt="">
                </router-link>
            </div>
            <div class="realisation">
                <router-link :to="realisation5" @click.native.prevent="showPageTemplate('realisation5')">
                <img src="../assets/img/real/hekto.png" alt="">
                </router-link>
            </div>
            <div class="realisation">
                <router-link :to="realisation6" @click.native.prevent="showPageTemplate('realisation6')">
                <img src="../assets/img/real/superHero.png" alt="">
                </router-link>
            </div>
            <div class="realisation">
                <router-link :to="realisation7" @click.native.prevent="showPageTemplate('realisation7')">
                <img src="../assets/img/real/impact.png" alt="">
                </router-link>
            </div>
            <div class="realisation">
                <router-link :to="realisation8" @click.native.prevent="showPageTemplate('realisation8')">
                <img src="../assets/img/real/spark.png" alt="">
                </router-link>
            </div>
            <div class="realisation">
                <img src="../assets/img/real/pecheur.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/bateauVoile.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/escalade.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/batiment.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/ValenciaMusee.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/valenciaPalmier.png" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
import ClassicButton from "../components/ClassicButton.vue";
import PageTemplate from '../views/Realisation.vue';

export default {
    data() {
        return {
            realisation1: "realisation1",
            realisation2: "realisation2",
            realisation3: "realisation3",
            realisation4: "realisation4",
            realisation5: "realisation5",
            realisation6: "realisation6",
            realisation7: "realisation7",
            realisation8: "realisation8",
            showPage: false,
            selectedPageId: null,
        };
  },
  components: {
    ClassicButton,
    PageTemplate,
  },
  methods: {
    showPageTemplate(pageId) {
      // Mettre à jour les valeurs de la page sélectionnée en fonction de l'id
      switch (pageId) {
        case 'page1':
          this.pageTitle = 'Titre de la page 1';
          this.pageDescription = 'Description de la page 1';
          this.pageLien = 'https://lien-de-la-page-1.com';
          this.LienImage1 = 'image1-1.jpg';
          this.LienImage2 = 'image1-2.jpg';
          this.LienImage3 = 'image1-3.jpg';
          this.redirectTo = { name: 'Page1' }; // Rediriger vers le chemin correspondant à la page 1
          break;
        case 'page2':
          this.pageTitle = 'Titre de la page 2';
          this.pageDescription = 'Description de la page 2';
          this.pageLien = 'https://lien-de-la-page-2.com';
          this.LienImage1 = 'image2-1.jpg';
          this.LienImage2 = 'image2-2.jpg';
          this.LienImage3 = 'image2-3.jpg';
          this.redirectTo = { name: 'Page2' }; // Rediriger vers le chemin correspondant à la page 2
          break;
        case 'page3':
          this.pageTitle = 'Titre de la page 3';
          this.pageDescription = 'Description de la page 3';
          this.pageLien = 'https://lien-de-la-page-3.com';
          this.LienImage1 = 'image3-1.jpg';
          this.LienImage2 = 'image3-2.jpg';
          this.LienImage3 = 'image3-3.jpg';
          this.redirectTo = { name: 'Page3' }; // Rediriger vers le chemin correspondant à la page 3
          break;
        default:
          // Si l'id ne correspond à aucune page, on ne fait rien
          return;
      };
    }
  }
};
</script>