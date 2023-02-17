<template>
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

<script>

export default {
  data() {
    return {
      images: [
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },
        { 
          image1: '../src/assets/img/realisation/realisation2_image1.png', 
          image2: '../src/assets/img/realisation/realisation2_image2.png', 
          image3: '../src/assets/img/realisation/realisation2_image3.png', 
          title: 'Site web Refuge des Lacs Merlet', 
          description: 'Pour ce projet, nous étions chargé de réaliser le site web du Refuge des Lacs Merlet. Ce site est le premier site réalisé pour un client. Il a été réalisé avec le cms Worpress afin que les contenus soit administrable et que la cliente puisse modifier le site à sa guise. Les technologies utilisées : Html / Css , JS / PHP Hébergement : OVH Transfert de données : Github / Filezilla',
          lien: 'https://refugedeslacsmerlet.fr/',
        },

      ],
      index: null,
      editableText: 'Default text'
    }
  },
  created() {
    this.index = this.$route.params.index;
  },
}
</script>