<template>
    <div class="rectangle"></div>
  </template>
  
  <script>
  export default {
    methods: {
      animateRectangle() {
        let rectangle = document.querySelector('.rectangle')
        rectangle.style.animation = 'slide-in 0.5s'
        rectangle.addEventListener('animationend', () => {
          rectangle.style.animation = ''
          this.$emit('animation-finished')
        })
      }
    }
  }
  </script>
  
  <style>
.custom-transition-enter-active, .custom-transition-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.rectangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #f00;
}

@keyframes slide-in {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
  </style>