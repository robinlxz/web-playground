<template>
  <div class="blog">
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
import BlogService from '@/services/BlogService.js'

export default {
  name: 'BlogHomepage',
  components: {
    BlogCard
  },
  data() {
    return {
      dishes: [],
      blogs: []
    }
  },
  created() {
    BlogService.getBlogs()
      .then(response => {
        // console.log(response.data)
        this.blogs = response.data
      })
      .catch(error => {
        console.log('Error in getDishes API call:', error.response)
      })
  }
}
</script>

<style lang="scss" scoped>
.blog {
  .page-title {
    text-align: center;
    margin: 2rem 0 4rem 0;
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
