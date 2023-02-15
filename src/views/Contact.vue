<template>
    <div class="container-contact">
    <h2>Envie de collaborer ensemble ?</h2>
      <form @submit.prevent="submitForm">
        <div class="flex">
            <div>
                <label for="name">Nom</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
        </div>
        <div class="message">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit"><ClassicButton
                destination="/realisations"
                buttonText="TEST"
                backgroundColor="transparent"
                textColor="#000000"
                hoverColor="#000000"
                hoverTxtColor="#ffffff"
                borderColor="3px solid #000000"
                >Envoyer</ClassicButton></button>
      </form>
      <div v-if="statusMessage">{{ statusMessage }}</div>
    </div>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  import ClassicButton from "../components/ClassicButton.vue";

  
  export default {
    components: {
    ClassicButton,
    },
    data() {
      return {
        name: '',
        email: '',
        message: '',
        statusMessage: ''
      };
    },
    methods: {
      submitForm() {
        const templateParams = {
          from_name: this.name,
          from_email: this.email,
          to_name: 'Destinataire',
          message_html: this.message
        };
  
        emailjs.send('service_ttb15di', '<template_r2392th>', templateParams, 'oicsehqrZ2nTtGtQ7')
          .then(() => {
            this.statusMessage = 'Votre message a été envoyé avec succès.';
            this.name = '';
            this.email = '';
            this.message = '';
          }, (error) => {
            console.error(error);
            this.statusMessage = 'Une erreur est survenue. Veuillez réessayer.';
          });
      }
    }
  };
  </script>