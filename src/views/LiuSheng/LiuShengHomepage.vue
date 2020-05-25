<template>
  <div class="blog">
    <h1 class="page-title">外公生日快乐</h1>
    <img src="@/assets/liusheng/1.png" alt class="waigong-img" />
    <div class="blog-list">
      <div v-for="(blog, index) in wgpoems" :key="index">
        <LiushengCard :blogObject="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import LiushengCard from '@/views/LiuSheng/LiushengCard.vue'
// import BlogService from '@/services/BlogService.js'
// import { mapState } from 'vuex'

export default {
  name: 'LiushengHomepage',
  components: {
    LiushengCard
  },
  data() {
    return {
      wgpoems: [
        {
          id: 1,
          title: '《永不迷航》',
          date: '2019.10.14',
          content:
            '赤旗招展彩云翔，万众欢腾喜若狂。七秩周年一转瞬，神州遍地换新装。宏开幸福康庄道，镰斧迎风领导强。万众一心跟党走，百花齐放满园香。群英血汗流成海，铁铸长城捍美疆。浇水施肥虽尽力，才疏学浅力微茫。欣逢盛世精神爽，白发回青梦寐香。纪念金章捧在手，心潮澎湃泪盈眶。殊荣愧受羞红脸，无地自容心底惶。一气尚存跟党走，天翻地覆不迷航。'
        },
        {
          id: 2,
          title: '《警钟常鸣》',
          date: '2019.7.7',
          content:
            '卢沟桥畔野狼嚎，华夏江河涌怒涛。短棍长矛民胆壮，青纱地道寇魂消。八年血战驱狂虏，遍地凯歌震汉霄。魔鬼至今心未死，警钟常设要常敲。'
        },
        {
          id: 3,
          title: '《鹧鸪天》',
          date: '2020.5.24',
          content:
            '观察多年彻底明，林平是个活雷锋。少言寡语无私念，体贴关心弱妪翁。贻美食，送温情，春风和煦沁心灵。无私无畏无邪念，感动白头发转青！'
        },
        {
          id: 4,
          title: '《祭巾帼之捷余大妈》',
          date: '2020.清明节',
          content:
            '言传身教巾帼杰，教子相夫不畏劳。今日满园花竞艳，安居仙境可逍遥！'
        },
        {
          id: 5,
          title: '《新年》',
          date: '2020.1.1',
          content:
            '新年玉语蕩洋来，笑在眉梢喜在怀。我有万言归一句，葵花永远向阳开！'
        }
      ]
    }
  },
  created() {
    // this.$store.dispatch('fetchAllBlogs')
  },
  computed: {
    // ...mapState(['wgpoems'])
  }
}
</script>

<style lang="scss" scoped>
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

  .waigong-img {
    width: 90%;
    align-self: center;
  }
}
</style>
