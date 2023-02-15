<template>
    <div class="time">
        <img src="../assets/img/stopwatch.svg" alt="chronomètre">
        <p>{{ time }}</p>
    </div>
</template>
  
<script>
export default {
data() {
    return {
    time: ''
    };
},
mounted() {
    this.getTime();
    setInterval(this.getTime, 1000);
},
methods: {
    getTime() {
    const date = new Date();
    this.time = date.toLocaleTimeString();
    }
}
};
</script>


<style>
    .time{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .time img{
        width: 20px;
        height: 20px;
    }
    .time p {
        font-family: 'Archivo';
        font-weight: 800;
        font-size: 1rem;
        color: #000000;
        text-align: right;
        color: rgba(0, 0, 0, 0.8);
    }
</style>
