<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Blog">Blog</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// Reset
* {
  margin: 0;
  padding: 0;
}

//This is a ID! High priority in css override!
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: sans-serif;
}

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
