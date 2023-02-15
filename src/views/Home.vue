
<template>
    <div class="container-index">
        <section class="section1" id="section1">
            <div class="Titles">
                <div class="right">
                    <h2>KILLIAN<br/>EL ATTAR</h2>
                    <p>DÉVELOPPEUR WEB</p>
                </div>
                <div class="left">
                    <Time></Time>
                </div>
            </div>
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
                    <a href="#section3"><ClassicButton
                        destination=""
                        buttonText="TEST"
                        backgroundColor="transparent"
                        textColor="#ffffff"
                        hoverColor="#ffffff"
                        hoverTxtColor="#000000"
                        borderColor="3px solid #ffffff"
                        >Découvrir les réalisations</ClassicButton></a>

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
            <h3>MES RÉALISATIONS</h3>
            <div class="real">
                <div class="card" @mouseenter="hoverDiv1" @mouseleave="removeClass" :class="{ card1: isDiv1Hovered }">
                    <img src="../assets/img/card1.png"
                        alt="illustration Développement web">
                    <img src="../assets/img/decouvrir.svg"
                    alt="Découvrir">
                    <div class="info">
                        <p>DEV WEB</p>
                    </div>

                </div>
                <div class="card" @mouseenter="hoverDiv2" @mouseleave="removeClass" :class="{ card2: isDiv2Hovered }">
                    <img src="../assets/img/card2.png"
                        alt="illustration Audiovisuel">
                    <img src="../assets/img/decouvrir.svg"
                    alt="Découvrir">
                    <div class="info">
                        <p>AUDIOVISUEL</p>
                    </div>
                </div>
                <div class="card" @mouseenter="hoverDiv3" @mouseleave="removeClass" :class="{ card3: isDiv3Hovered }">
                    <img src="../assets/img/card3.png"
                        alt="illustration Photographie">
                    <img src="../assets/img/decouvrir.svg"
                    alt="Découvrir">
                    <div class="info">
                        <p>PHOTOS</p>
                    </div>
                </div>
            </div>
            <div class="real-button">
                <ClassicButton
                destination="/realisations"
                buttonText="TEST"
                backgroundColor="transparent"
                textColor="#000000"
                hoverColor="#000000"
                hoverTxtColor="#ffffff"
                borderColor="3px solid #000000"
                >Tout mes projets</ClassicButton>
            </div>      

        </section>
    </div>
</template>


<script>
import ClassicButton from "../components/ClassicButton.vue";
import Time from "../components/Time.vue";

export default {
////////BUTTON////////////
  components: {
    ClassicButton,
    Time,
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


