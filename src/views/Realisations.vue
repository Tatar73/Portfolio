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
                <img src="../assets/img/real/refuge.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/mmietapres.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/laboiteameuh.png" alt="">
            </div>

            <div class="realisation">
                <img src="../assets/img/real/mmietapresOld.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/hekto.png" alt="">
            </div>
            <div class="realisation">
                <img src="../assets/img/real/superHero.png" alt="">
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

export default {

    components: {
    ClassicButton,
    },

};
</script>