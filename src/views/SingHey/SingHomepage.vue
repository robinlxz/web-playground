<template>
  <div class="homepage">
    <!-- <nav>
      <i class="fas fa-bars"></i>
      <div class="title">SING HEY</div>
      <i class="fas fa-shopping-cart"></i>
    </nav>-->
    <div class="nav">
      <i class="fas fa-bars"></i>
      <div class="title">SING HEY</div>
      <i class="fas fa-shopping-cart"></i>
    </div>
    <ServiceInfoCollection />
    <!-- <SingCarousel /> -->
    <div class="banner">
      <!-- <p>SingHey focus on cellphone version first</p> -->
      <!-- <h4>Banner with sliding pictures</h4> -->
    </div>
    <br />
    <SingMenu />
  </div>
</template>

<script>
import ServiceInfoCollection from './ServiceInfoCollection.vue'
// import SingCarousel from './SingCarousel.vue'
import SingMenu from './SingMenu.vue'

export default {
  name: 'SingHomepage',
  components: {
    ServiceInfoCollection,
    // SingCarousel,
    SingMenu
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    let fontAwesomeScript = document.createElement('script')
    fontAwesomeScript.setAttribute(
      'src',
      'https://kit.fontawesome.com/4ee6d926fa.js'
    )
    document.head.appendChild(fontAwesomeScript)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/SingHey/singheymain.scss';

.homepage {
  * {
    margin: 0;
    padding: 0;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    padding: 5px 15px 5px 15px;
    color: $primary-color;
    background-color: #fff;
    width: 97%;

    .title {
      color: #000;
      font-size: 50%;
      font-weight: 600;
    }
  }
}
</style>
