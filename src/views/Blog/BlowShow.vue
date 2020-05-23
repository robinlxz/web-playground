<template>
  <div class="show">
    <h1>{{ blogObject.title }}</h1>
    <!-- <pre><p>{{ blogObject.content }}</p></pre>
    <br />
    <h1>Below is formatted</h1>-->
    <pre><p v-if="blogObject.content">{{ formattedContent }}</p></pre>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService.js'

export default {
  name: 'BlogShow',
  data() {
    return {
      blogObject: {}
    }
  },
  // props: {
  //   id: String
  // },
  props: ['id'],
  created() {
    BlogService.getBlogById(this.id)
      .then(response => {
        this.blogObject = response.data
      })
      .catch(error =>
        console.log('Error during calling getBlogById API:' + error)
      )
  },
  computed: {
    formattedContent() {
      return this.blogObject.content
        .split('')
        .map(char => {
          if ((char == '，') | (char == '。') | (char == ',') | (char == '.')) {
            // if (char in ['，', '。', ',', '.']) {
            return char + '\n'
          } else {
            return char
          }
        })
        .join('')
    }
  }
}
</script>

<style lang="scss" scoped>
.show {
  text-align: center;
  h1 {
    margin-bottom: 3rem;
  }

  p {
    font-size: 2rem;
    line-height: 200%;
  }
}
</style>
