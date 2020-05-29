<template>
  <div>
    <div class="container" id="carousel">
      <h1 class="flow-text">Welcome to SingCafe</h1>
      <!-- CAROUSEL -->
      <div class="carousel">
        <a href="#one!" class="carousel-item">
          <img src="https://i.ibb.co/XFh2H4B/Sing-Cafe-board.jpg" alt />
        </a>
        <a href="#two!" class="carousel-item">
          <img src="https://i.ibb.co/YdwsDXj/food1.jpg" alt />
        </a>
        <a href="#three!" class="carousel-item">
          <img src="https://i.ibb.co/NF5Yhmc/food2.jpg" alt />
        </a>
        <a href="#four!" class="carousel-item">
          <img src="https://i.ibb.co/GcbBm2f/food3.jpg" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingCarousel'
}
</script>

<style lang="scss" scoped>
@import '@/styles/SingHey/singheymain.scss';
</style>
