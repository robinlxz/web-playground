<template>
  <div class="show">
    <h1>{{ blogObject.title }}</h1>
    <pre><p v-if="blogObject.answer">{{ blogObject.answer }}</p></pre>
    <div class="return">
      <router-link to="/mushang">返回</router-link>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'QuestionShow',
  data() {
    return {
      allQuestions: [
        {
          id: 1,
          title: '我们是哪一年搬家到四号院的？',
          answer: '1991'
        },
        {
          id: 2,
          title: '北京一商集团有限责任公司干部学校在哪里？',
          answer: '昌平曹八西路28号'
        },
        {
          id: 3,
          title: '颐和园十七孔桥连着的岛是什么名字？',
          answer: '南湖岛'
        }
      ]
    }
  },
  props: {
    id: {
      default: 1,
      validator: i => parseInt(i) > 0
    }
  },
  created() {},
  computed: {
    // ...mapState(['blogObject']),
    blogObject() {
      return this.allQuestions.find(i => i.id == this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.show {
  text-align: center;
  h1 {
    margin: 3rem 0 3rem 0;
  }

  p {
    font-size: 2rem;
    line-height: 200%;
  }

  .return {
    text-align: center;
    margin: 3rem 1rem 3rem 1rem;
  }
}
</style>
