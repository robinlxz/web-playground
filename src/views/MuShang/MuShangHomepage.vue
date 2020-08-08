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
    <div class="blog">
      <div class="blog-list">
        <div v-for="(blog, index) in allQuestions" :key="index">
          <QuestionCard :blogObject="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/views/MuShang/QustionCard.vue'

export default {
  components: {
    QuestionCard
  },
  data() {
    return {
      hello: '老妈生日快乐！',
      endText: '@2020来自南方的祝福',
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
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-title {
    text-align: center;
    margin: 1rem 0 2rem 0;
    font-size: 3rem;
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
