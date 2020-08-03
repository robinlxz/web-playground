<template>
  <div class="service-info-collection">
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
        <!-- <h4>pickup-info</h4> -->
        <datepicker v-model="pickup.date" placeholder="Select a date" />
      </div>
      <div :class="{'display-none': serviceActive != 'delivery'}">
        <!-- <h4>delivery-info</h4> -->
        <form>
          <input type="text" placeholder="postcode for delivery" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'ServiceInfoCollection',
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/SingHey/singheymain.scss';

.service-info-collection {
  // margin: 0 auto;

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
}
</style>