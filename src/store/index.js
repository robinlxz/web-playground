import Vue from 'vue'
import Vuex from 'vuex'
import BlogService from '@/services/BlogService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogObject: {}
  },
  mutations: {
    SET_BLOG_OBJ(state, blog) {
      state.blogObject = blog
    }
  },
  actions: {
    fetchOneBlog(context, { id }) {
      console.log(id)
      BlogService.getBlogById(id)
        .then(response => {
          context.commit('SET_BLOG_OBJ', response.data)
        })
        .catch(error =>
          console.log('Error during calling getBlogById API:' + error)
        )
    }
  },
  modules: {}
})
