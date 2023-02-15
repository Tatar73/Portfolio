<template>
    <div v-if="visible" :class="['alert', 'alert-' + type]">
      {{ message }}
      <button class="close" @click="dismissAlert">&times;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomAlert',
    props: {
      message: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'info',
        validator: (value) => {
          return ['info', 'success', 'warning', 'danger'].includes(value);
        },
      },
      duration: {
        type: Number,
        default: 5000,
      },
    },
    data() {
      return {
        visible: true,
      };
    },
    created() {
      setTimeout(this.dismissAlert, this.duration);
    },
    methods: {
      dismissAlert() {
        this.visible = false;
        this.$emit('dismiss');
      },
    },
  };
  </script>
  
  <style>
  .alert {
    padding: 1em;
    border-radius: 0.5em;
    margin-bottom: 1em;
  }
  
  .alert-info {
    background-color: #2196F3;
    color: #fff;
  }
  
  .alert-success {
    background-color: #4CAF50;
    color: #fff;
  }
  
  .alert-warning {
    background-color: #ff9800;
    color: #fff;
  }
  
  .alert-danger {
    background-color: #f44336;
    color: #fff;
  }
  
  .close {
    float: right;
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 1em;
    cursor: pointer;
  }
  </style>