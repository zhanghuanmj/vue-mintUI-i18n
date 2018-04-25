<!--
* author: zhanghuan
* created: 2018/3/30
* describe: 首页
-->
<template>
  <div id="home">
    <div class="banner">
      <section>
        <h1>欢迎来到宝树堂官方网站</h1>
        <h5>{{$t('login.title')}}</h5>
        <hr>
      </section>
    </div>
    <mt-button @click="setLang" class="re-button">Click Me</mt-button>
    <mt-button @click="setLang('en')" class="set-lang">English</mt-button>
    <mt-button @click="setLang('cn')" class="set-lang">简体中文</mt-button>
    <mt-datetime-picker class="re-picker" ref="picker" type="time" v-model="pickerValue"></mt-datetime-picker>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  data() {
    return {
      pickerValue: ''
    }
  },
  methods: {
    /*
    * params: 语种
    * return: true
    * function: 设置语言
    * */
    setLang: function (lang) {
      if (Cookies.get('lang') === lang) {
        return true;
      }
      this.$i18n.locale = lang;
      Cookies.set('lang', lang);
      return true;
    },
    openPicker() {
      this.$refs.picker.open();
    }
  },
  mounted: function () {
    this.$http.get('test.json');
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/sass/common';
#home {
  .re-button {
    @include font-dpr(14px);
  }
}
</style>

