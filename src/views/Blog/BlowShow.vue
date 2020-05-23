<template>
  <div class="show">
    <h1>{{ blogObject.title }}</h1>
    <pre><p v-if="blogObject.content">{{ formattedContent }}</p></pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlogShow',
  data() {
    return {
      // blogObject: {}
    }
  },
  props: {
    id: {
      default: 1,
      validator: i => parseInt(i) > 0
    }
  },
  // props: ['id'],
  created() {
    this.$store.dispatch('fetchOneBlog', { id: this.id })
  },
  computed: {
    ...mapState(['blogObject']),
    formattedContent() {
      return this.blogObject.content
        .split('')
        .map(char => {
          if ((char == '，') | (char == '。') | (char == ',') | (char == '.')) {
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
