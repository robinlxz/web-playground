<template>
  <div class="homepage">
    <nav>
      <i class="fas fa-bars"></i>
      <div class="title">SING HEY</div>
      <i class="fas fa-shopping-cart"></i>
    </nav>
    <div class="service-choice">
      <div class="tab" :class="{ active: serviceActive == 'pickup'}" @click="activatePickup">PICK-UP</div>
      <div
        class="tab"
        :class="{ active: serviceActive == 'delivery'}"
        @click="activateDelivery"
      >DELIVERY</div>
    </div>
    <div class="service-info">
      <div :class="{'display-none': serviceActive != 'pickup'}">
        <h4>pickup-info</h4>
        <datepicker v-model="pickup.date" placeholder="Select a date" />
        <h5>Other pickup needed information to be added</h5>
        <!-- <label>Select a time</label>
        <select v-model="pickup.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
        <h2>Where is my option?</h2>-->
      </div>
      <div :class="{'display-none': serviceActive != 'delivery'}">
        <h4>delivery-info</h4>
        <form>
          <input type="text" placeholder="postcode for delivery" />
        </form>
      </div>
    </div>
    <div class="banner">
      <p>SingHey focus on cellphone version first</p>
      <h4>Banner with sliding pictures</h4>
    </div>
    <br />
    <div class="content">
      <div class="singhey-menu">
        <p>Here to add components for menu</p>
        <div class="row">
          <div class="col s12 m6">
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
          <div class="col s12 m6">
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
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'SingHomepage',
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      serviceActive: 'pickup',
      pickup: {
        date: '',
        time: ''
      }
    }
  },
  methods: {
    activatePickup() {
      this.serviceActive = 'pickup'
    },
    activateDelivery() {
      this.serviceActive = 'delivery'
    }
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

  nav {
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

  .service-choice {
    // height: 2rem;
    color: #fff;
    // width: 100%;
    display: flex;
    margin: 0.5rem 0.5rem 0 0.5rem;

    .tab {
      background-color: $secondary-color;
      width: 50%;
      text-align: center;
      padding: 1rem 0 1rem 0;
      border-radius: 20px 20px 0 0;
    }

    .active {
      background-color: $primary-color;
    }
  }

  .service-info {
    height: 10rem;
    background-color: $primary-color;
    margin: 0 0.5rem 0.5rem 0.5rem;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .display-none {
      display: none;
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
