<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Blog">Blog</router-link>
      <!-- <router-link to="/liusheng">Waigong</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RootNav'
}
</script>

<style lang="scss" scoped>
//This is a ID! High priority in css override!
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    // color: #2c3e50;
    color: #000;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
