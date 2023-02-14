
<template>
    <div class="container-index">
        <section class="section1" id="section1">
            <h2>KILLIAN<br/>EL ATTAR</h2>
            <p>DÉVELOPPEUR WEB</p>
            <div class="realisations">
                <div class="realisation">
                    <img src="../assets/img/real/superHero.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/mmietapres.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/laboiteameuh.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/refuge.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/mmietapresOld.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/hekto.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/impact.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/spark.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/pecheur.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/valenciaPalmier.png" alt="">
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
                    <img src="../assets/img/real/superHero.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/mmietapres.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/laboiteameuh.png" alt="">
                </div>
                <div class="realisation">
                    <img src="../assets/img/real/refuge.png" alt="">
                </div>
            </div>
            <div class="rappels">
                <div class="decouvrir">
                    <span>→</span>
                    <a href="#section2">DECOUVRIR</a>
                </div>
                <div class="scroll">
                    <span>↓</span>
                    <p>SCROLL</p>
                </div>
            </div>
        </section>
        <section class="section2" id="section2">
            <div class="container">
                <div class="left">
                    <div class="title">
                        <p>Moi, c'est</p>
                        <h1>Killian El Attar</h1>
                    </div>
                    <p>Ce qui me caractérise par-dessus tout, c'est ma passion pour le développement web. Mon
                        intérêt et mon
                        implication dans ce domaine me permet de réellement m’engager dans les projets.
                        Le développement front-end est ma partie préférée. Je suis une personne polyvalente et je peux
                        également
                        proposer des design d’interface.</p>
                    <p>En dehors, je suis quelqu’un de plutôt sportif et j’aime me dépenser quotidiennement en allant à la
                        salle
                        de sport et en faisant du VTT</p>
                    <p>Aujourd'hui, je suis à la recherche d'un stage à effectuer du 02 mai au 27 juin 2023 dans le monde de
                        l'audiovisuel.</p>
                        <ClassicButton :button-styles="{ background: 'transparent', color: 'white',   border: '2px solid #ffffff' }" redirect-url="#section3"> 
                            Tout mes projets
                        </ClassicButton>
                </div>
                <div class="right">
                    <div class="img_top">
                        <img src="../assets/img/photo1.png" alt="Photo perso 1">
                    </div>
                    <div class="img_bottom">
                        <img src="../assets/img/photo2.png" alt="Photo perso 2">
                        <img src="../assets/img/photo3.png" alt="Photo perso 3">
                    </div>
                </div>
            </div>

        </section>
        <section class="section3" id="section3">
            <h3>Mes réalisations</h3>
            <div class="real">
                <div class="card">
                    <img @mouseenter="hoverDiv1" @mouseleave="removeClass" :class="{ active: isDiv1Hovered }" src="../assets/img/card1.png"
                        alt="illustration Développement web">
                    <div class="info">
                        <p>Développement web</p>
                    </div>
                </div>
                <div class="card">
                    <img @mouseenter="hoverDiv2" @mouseleave="removeClass" :class="{ active: isDiv2Hovered }" src="../assets/img/card2.png"
                        alt="illustration Audiovisuel">
                    <div class="info">
                        <p>Audiovisuel</p>
                    </div>
                </div>
                <div class="card">
                    <img @mouseenter="hoverDiv3" @mouseleave="removeClass" :class="{ active: isDiv3Hovered }" src="../assets/img/card3.png"
                        alt="illustration Photographie">
                    <div class="info">
                        <p>Photographie</p>
                    </div>
                </div>
            </div>
            <div class="real-button">
                <ClassicButton :button-styles="{ background: 'transparent', color: '#000000' } " redirect-url="/realisations">
                Tout mes projets
            </ClassicButton>
            </div>      

        </section>
    </div>
</template>


<script>
import ClassicButton from "../components/ClassicButton.vue";


export default {
////////BUTTON////////////
  components: {
    ClassicButton,
  },
////////HOVER////////////
  data() {
    return {
      isDiv1Hovered: false,
      isDiv2Hovered: false,
      isDiv3Hovered: false,
    };
  },
  methods: {
    hoverDiv1() {
      this.isDiv1Hovered = true;
    },
    hoverDiv2() {
      this.isDiv2Hovered = true;
    },
    hoverDiv3() {
      this.isDiv3Hovered = true;
    },
    removeClass() {
      this.isDiv1Hovered = false;
      this.isDiv2Hovered = false;
      this.isDiv3Hovered = false;
    },
  },
};
</script>