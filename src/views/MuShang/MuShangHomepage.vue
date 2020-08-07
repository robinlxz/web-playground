<template>
  <div>
    <!-- <h1>This is MS homepage</h1> -->
    <h2 class="title">{{ hello }}</h2>
    <div>
      <img
        src="https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Nov2019/20191118_cake_pexels.jpg?itok=9XReGXYa"
        class="cake"
      />
    </div>
    <h3 class="title">{{ endText }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: '老妈生日快乐！',
      endText: '@2020来自南方的祝福'
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  display: flex;
  flex-direction: column;
  // align-content: center;
  align-items: center;
}
.title {
  margin: 20px;
}
.cake {
  width: 90%;
  height: auto;
}
</style>
