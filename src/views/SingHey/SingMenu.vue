<template>
  <div class="singhey-menu">
    <p>Here to add components for menu</p>
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/singhey/food1.jpg" />
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
  name: 'SingMenu'
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
