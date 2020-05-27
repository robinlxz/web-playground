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
    <div class="banner">
      <!-- <p>SingHey focus on cellphone version first</p> -->
      <!-- <h4>Banner with sliding pictures</h4> -->
    </div>
    <br />
    <div class="content">
      <div class="singhey-menu">
        <!-- container valign-wrapper -->
        <p>Here to add components for menu</p>
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-image">
                <img src="@/assets/singhey/food1.jpg" />
                <span class="card-title">Signature Scrambled Egg With Pork Chop</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons">+</i>
                </a>
              </div>
              <div class="card-content">
                <p>Cuisine introduction</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-image">
                <img src="@/assets/singhey/food2.jpg" />
                <span class="card-title">Salted Baked Chicken Rice</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons">+</i>
                </a>
              </div>
              <div class="card-content">
                <p>Cuisine introduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceInfoCollection from './ServiceInfoCollection.vue'

export default {
  name: 'SingHomepage',
  components: {
    // Datepicker,
    ServiceInfoCollection
  },
  data() {
    // const times = []
    // for (let i = 1; i <= 24; i++) {
    //   times.push(i + ':00')
    // }
    return {
      // times,
      // serviceActive: 'pickup',
      // pickup: {
      //   date: '',
      //   time: ''
      // }
    }
  },
  methods: {
    // activatePickup() {
    //   this.serviceActive = 'pickup'
    // },
    // activateDelivery() {
    //   this.serviceActive = 'delivery'
    // }
  },
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

  .content {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // height: 70vh;
    background-color: #999;

    .singhey-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
