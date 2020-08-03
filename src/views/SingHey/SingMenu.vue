<template>
  <div class="singhey-menu">
    <p>Here to add components for menu</p>
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/singhey/food1.jpg" />
            <!-- <img :src="dishes[0].image" /> -->
            <!-- <img :src="localImageComputed" /> -->
            <span class="card-title"></span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">+</i>
            </a>
          </div>
          <div class="card-content">
            <p>Signature Scrambled Egg With Pork Chop</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/singhey/food2.jpg" />
            <!-- <img src="{{dishes[0].image}}" /> -->
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
</template>

<script>
export default {
  name: 'SingMenu',
  data() {
    return {
      dishes: [
        {
          id: 1,
          title: '盐焗鸡腿饭',
          price: 6.8,
          size: 1,
          location: 'Lau Pa Sat',
          'english-title': 'Salted Baked Chicken Rice',
          owner: 'Chef Mao',
          category: 'Rice set',
          image: 'https://i.ibb.co/c8VnbwT/food1.jpg'
          // image: './assets/singhey/food1.jpg'
        },
        {
          id: 5,
          title: '盐焗鸡腿干捞面',
          price: 6.8,
          size: 1,
          location: 'Lau Pa Sat',
          'english-title': 'Salted Baked Chicken dry noodle',
          owner: 'Chef Mao',
          category: 'Noodle set',
          image: 'https://i.ibb.co/tHgCfxV/food2.jpg'
        },
        {
          id: 6,
          title: '鲜茄洋葱牛肉/猪扒',
          price: 15.8,
          size: '2~3',
          location: 'Lau Pa Sat',
          'english-title': 'Tomato and onion beef/pork',
          owner: 'Chef Mao',
          category: 'Cusine (no rice)',
          image: 'https://i.ibb.co/yQgf4KB/food1.jpg'
        }
      ],
      cart: []
    }
  },
  computed: {
    // localImageComputed() {
    //   //   // return './food1.jpg' //Not works also
    //   return '@/assets/singhey/food1.jpg' //Not works also
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/SingHey/singheymain.scss';

.singhey-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  .row {
    margin-bottom: 0;
  }
}
</style>
