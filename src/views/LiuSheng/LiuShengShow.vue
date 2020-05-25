<template>
  <div class="show">
    <h1>{{ blogObject.title }}</h1>
    <pre><p v-if="blogObject.content">{{ formattedContent }}</p></pre>
    <div class="return">
      <router-link to="/liusheng">返回目录</router-link>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'LiushengShow',
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
  props: {
    id: {
      default: 1,
      validator: i => parseInt(i) > 0
    }
  },
  // props: ['id'],
  created() {
    // this.$store.dispatch('fetchWGPoem', { id: this.id })
  },
  computed: {
    // ...mapState(['blogObject']),
    blogObject() {
      return this.wgpoems.find(i => i.id == this.id)
    },
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
