<template>
    <div class="container-contact">
    <h2>Envie de collaborer ensemble ?</h2>
    <form @submit.prevent="sendEmail">
        <div class="flex">
            <div>
                <label>Nom</label>
                <input type="text" name="name" v-model="name" required>
            </div>
            <div>
                <label>Email</label>
                <input name="email" v-model="email" required>
            </div>
        </div>
        <div class="message">
          <label>Message</label>
          <textarea name="message" v-model="message" required></textarea>
        </div>
        <input type="submit" value="Envoyer">
      </form>
      <div v-if="statusMessage">{{ statusMessage }}</div>
    </div>
    <!-- <div>
    <custom-alert message="Ceci est une alerte!" type="success" @dismiss="handleDismiss"></custom-alert>
    </div> -->
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  import ClassicButton from "../components/ClassicButton.vue";
//import CustomAlert from '@/utils/CustomAlert.vue';


  
  export default {

    name: 'ContactUs',

    components: {
    ClassicButton,
    },

    data() {
        return {
            name: '',
            email: '',
            message: '',
            service_id: 'service_ttb15di',
            template_id: 'template_r2392th',
            user_id: 'oicsehqrZ2nTtGtQ7',
        };
    },

    methods: {
        handleDismiss() {
        console.log('Alerte fermée!');
        },
        sendEmail() {
            let template_params = {
                reply_to: this.email,
                from_name: this.name,
                to_name: 'Killian',
                message_html: this.message,
            };
        emailjs.send(
        this.service_id,
        this.template_id,
        template_params,
        this.user_id
      )
      .then(() => {
        alert('Email envoyé!');
      }, (err) => {
        alert('Une erreur s\'est produite, veuillez réessayer plus tard', err);
      });
    },
  },
};
  </script>