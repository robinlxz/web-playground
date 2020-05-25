<template>
  <div class="blog">
    <RootNav />
    <h1 class="page-title">This is Blog Homepage@vue-playground</h1>
    <div class="blog-list">
      <div v-for="(blog, index) in blogs" :key="index">
        <BlogCard :blogObject="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
// import BlogService from '@/services/BlogService.js'
import { mapState } from 'vuex'
import RootNav from '@/components/RootNav.vue'

export default {
  name: 'BlogHomepage',
  components: {
    BlogCard,
    RootNav
  },
  data() {
    return {
      dishes: []
    }
  },
  created() {
    this.$store.dispatch('fetchAllBlogs')
  },
  computed: {
    ...mapState(['blogs'])
  }
}
</script>

<style lang="scss" scoped>
.blog {
  .page-title {
    text-align: center;
    margin: 1rem 0 2rem 0;
    font-size: 1rem;
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
