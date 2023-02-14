<template>
  <div class="cursor" :style="{ left: x + 'px', top: y + 'px' }">
    <div class="inner" :style="{ transform: 'scale(' + scale + ')', width: width + 'px', height: height + 'px' }"></div>
  </div>
</template>
  
<script>
export default {
  name: 'Cursor',
  data() {
    return {
      x: 0,
      y: 0,
      scale: 1,
      width: 0,
      height: 0,
      isHovering: false,
    };
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseenter', this.handleMouseEnter);
    document.addEventListener('mouseleave', this.handleMouseLeave);
  },
  methods: {
    handleMouseMove(event) {
        setTimeout(() => {
            this.x = event.clientX;
            this.y = event.clientY - 15;
        }, 100);
    },
    handleMouseEnter() {
      this.isHovering = true;
    },
    handleMouseLeave() {
      this.isHovering = false;
    },
    handleItemEnter(event) {
      this.width = event.target.offsetWidth;
      this.height = event.target.offsetHeight;
    },
  },
  computed: {
    cursorStyle() {
      return {
        background: this.isHovering ? 'red' : 'white',
      };
    },
  },
};
</script>
  
<style scoped>
.cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: transparent;
  border: solid 1px grey;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  transition: transform 0.3s, background 0.3s, width 0.3s, height 0.3s;
}

.item {
  display: inline-block;
  margin: 20px;
}

.item:hover {
  cursor: none;
}

.item:hover .inner {
  transform: scale(4);
  background: blue;
}
</style>