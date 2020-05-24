import Vue from 'vue'
import Vuex from 'vuex'
import BlogService from '@/services/BlogService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [
      {
        id: 1,
        title: '浪淘沙 帘外雨潺潺',
        date: '937 AD',
        content:
          '帘外雨潺潺，春意阑珊。罗衾不耐五更寒。梦里不知身是客，一晌贪欢。\n独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。'
      },
      {
        id: 2,
        title: '虞美人 春花秋月何时了',
        date: '937 AD',
        content:
          '春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。\n雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流。'
      },
      {
        id: 3,
        title: '破阵子 四十年来家国',
        date: '937 AD',
        content:
          '四十年来家国，三千里地山河。凤阁龙楼连霄汉，玉树琼枝作烟萝，几曾识干戈？\n一旦归为臣虏，沈腰潘鬓消磨。最是仓皇辞庙日，教坊犹奏别离歌，垂泪对宫娥。'
      },
      {
        id: 4,
        title: '青玉案 东风夜放花千树',
        date: '1140 AD',
        content:
          '东风夜放花千树，更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。\n蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度,蓦然回首,那人却在,灯火阑珊处。'
      },
      {
        id: 5,
        title: '登金陵凤凰台',
        date: '701 AD',
        content:
          '凤凰台上凤凰游，凤去台空江自流。吴宫花草埋幽径，晋代衣冠成古丘。三山半落青天外，二水中分白鹭洲。总为浮云能蔽日，长安不见使人愁。'
      },
      {
        id: 6,
        title: '江上吟',
        date: '701 AD',
        content:
          '木蘭之枻沙棠舟，玉簫金管坐兩頭。美酒尊中置千斛，載妓隨波任去留。仙人有待乘黃鶴，海客無心隨白鷗。屈平詞賦懸日月，楚王臺榭空山丘。興酣落筆搖五嶽，詩成笑傲凌滄洲。功名富貴若長在，漢水亦應西北流。'
      }
    ],
    blogObject: {}
  },
  mutations: {
    SET_BLOGS(state, blogs) {
      state.blogs = blogs
    },
    SET_BLOG_OBJ(state, blog) {
      state.blogObject = blog
    }
  },
  actions: {
    fetchAllBlogs({ commit }) {
      BlogService.getBlogs()
        .then(response => {
          commit('SET_BLOGS', response.data)
        })
        .catch(error => {
          console.log('Error in getDishes API call:', error)
        })
    },
    fetchOneBlog(context, { id }) {
      // console.log(id)
      let blog = context.getters.searchBlogById(id)

      if (blog) {
        context.commit('SET_BLOG_OBJ', blog)
      } else {
        BlogService.getBlogById(id)
          .then(response => {
            context.commit('SET_BLOG_OBJ', response.data)
          })
          .catch(error => {
            console.log('Error during calling getBlogById API:' + error)
          })
      }
    }
  },
  getters: {
    searchBlogById: state => id => {
      return state.blogs.find(blog => blog.id == id)
    }
  },
  modules: {}
})
