<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="font-test">
      <h1 class="Avenir">Welcome to Your Vue.js Avenir</h1>
      <h1 class="Helve">Welcome to Your Vue.js Helvetica</h1>
      <h1 class="Arial">Welcome to Your Vue.js Arial</h1>
      <h1 class="Sans">Welcome to Your Vue.js Sans-serif</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
// div {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
// }

.font-test {
  font-size: 30px;
  text-align: start;
}

.Avenir {
  font-family: Avenir;
}

.Helve {
  font-family: Helvetica;
}

.Arial {
  font-family: Arial;
}

.Sans {
  font-family: sans-serif;
}
</style>
