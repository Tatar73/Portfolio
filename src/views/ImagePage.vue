<template>
    <template v-if="index == 6 || index == 7">
    <div class="container-video">
      <h2>{{ images[index].h2 }}</h2>
      <p>{{ images[index].p }}</p>
      <img :src="images[index].videoimg">
      <a v-bind:href= "images[index].lienvideo" target="_blank"> {{ images[index].lienvideo }}</a>
    </div>
  </template>
  <template v-else>
    <div class="container-realisation">
          <div class="right">
              <h1>{{ images[index].title }}</h1>
              <p>{{ images[index].description }}</p>
              <a v-bind:href= "images[index].lien" target="_blank"> {{ images[index].lien }}</a>
          </div>
          <div class="left">
              <div class="img_top">
                <img :src="images[index].image1">
              </div>
              <div class="img_bottom">
                <img :src="images[index].image2">
                <img :src="images[index].image3">
              </div>
          </div>
    </div>
  </template>
</template>

<script>

export default {
  data() {
    return {
      images: [
        { 
          image1: '/images/realisation/realisation2_image1.png', 
          image2: '/images/realisation/realisation2_image2.png', 
          image3: '/images/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '/images/realisation/realisation1_image1.png', 
          image2: '/images/realisation/realisation1_image2.png', 
          image3: '/images/realisation/realisation1_image3.png', 
          title: 'Site web MMI & Après', 
          description: "Pour ce site web, j’ai été en charge de réaliser le responsive du site web et également d’apporter de nombreuses modifications pour optimiser le site et le rendre interactif avec notamment la partie ajout d’offre de stage. J'également ajouté la fonctionnalité d'envoie de mail lors de l'inscription et de l'ajout d'offre. Technologies utilisées : Html / CSS, PHP/ JS",
          lien: 'https://mmietapres.fr/',
        },
        { 
          image1: '/images/realisation/realisation3_image1.png', 
          image2: '/images/realisation/realisation3_image2.png', 
          image3: '/images/realisation/realisation3_image3.png', 
          title: 'Site web agence LaBoiteAMeuh', 
          description: 'Pour ce projet, j’ai effectuer l’intégration du site web de l’agence LaBoîteAMeuh. Cette agence est composée de 14 étudiants de l’IUT de Chambéry. Pour réaliser ce site, j’ai eu recours aux langages HTML/CSS et Javascript. J’ai également apporté quelques modifications en design d’interface.',
          lien: 'https://mmi.univ-smb.fr/~elattark/LaBoiteAMeuh/index.html',
        },
        { 
          image1: '/images/realisation/realisation4_image1.png', 
          image2: '/images/realisation/realisation4_image2.png', 
          image3: '/images/realisation/realisation4_image3.png', 
          title: 'Site web évènement MMI&Après', 
          description: 'Pour ce projet, j’ai développé une proposition de site web pour un évènement au sein de l’IUT. Ce projet mêle développement back-end et front-end. Sur ce site, on peut s’inscrire/se connecter, ajouter une offre de stage puis filtrer les entreprises. J’ai eu donc recours aux langage HTML/CSS et Javascript/PHP',
          lien: 'https://mmi.univ-smb.fr/~elattark/MMIetApresOLD/mmietapres/',
        },
        { 
          image1: '/images/realisation/realisation5_image1.png', 
          image2: '/images/realisation/realisation5_image2.png', 
          image3: '/images/realisation/realisation5_image3.png', 
          title: 'Site web type e-commerce', 
          description: 'Pour ce projet, j’ai réalisé l’intégration d’une maquette faite par un professionnel. Ce projet mêle développement back-end et front-end. Sur ce site, on peut filtrer les produits, les consulter, ajouter au panier puis passer une commande. J’ai eu donc recours aux langage HTML/CSS et Javascript/PHP',
          lien: 'https://mmi.univ-smb.fr/~elattark/SAE203/SAE_BDD/',
        },
        { 
          image1: '/images/realisation/realisation6_image1.png', 
          image2: '/images/realisation/realisation6_image2.png', 
          image3: '/images/realisation/realisation6_image3.png', 
          title: 'Site web super-héros', 
          description: 'Pour ce projet qui a été mon tout premier site web, nous devions réaliser la présentation d’un super-héros sous forme de site web. J’ai fais le design du site et je l’ai par la suite intégré. J’ai eu donc recours aux langage HTML et CSS ',
          lien: '',
        },
        { 
          h2: 'SPARK',
          p: 'Avec mes collègues de travail nous avons réalisé ce documentaire dans le cadre de nos études. Le but était de produire un court-métrage avec les contraintes suivantes : journal initime, choix cornélien et sound design. Le message de ce film est de montrer comment certaines personnes naïves peuvent se faire manipuler.',
          videoimg: '/images/realisation/realisation7.png', 
          lienvideo: 'https://www.youtube.com/watch?v=Z685C3DZL4c'
        },
        { 
          h2: 'IMPACT',
          p: 'Avec mes collègues de travail nous avons réalisé ce documentaire dans le cadre de nos études. Le but était de produire un court-métrage avec les contraintes suivantes : journal initime, choix cornélien et sound design. Le message de ce film est de montrer comment certaines personnes naïves peuvent se faire manipuler.',
          videoimg: '/images/realisation/realisation8.png', 
          lienvideo: 'https://www.youtube.com/watch?v=Z685C3DZL4c'
        },
      ],
      index: null,
    }
  },
  created() {
    this.index = this.$route.params.index;
  },
}
</script>