<!--
 * @author: zhanghuan
 * @create: 2017/9/19
 * @describe: 技术交流
-->
<template>
  <div class="technical">
    <header class="header">
      <div class="btn left-btn" @click="goBack">
        <i class="header-icon"><img src="../../../static/img/back.png"/></i>
      </div>
      <h2>技术交流</h2>
      <div class="btn right-btn">
        <i class="header-icon"></i>
      </div>
    </header>

    <div id="wrapper" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
      <ul class="list-ul">
        <li v-for="(item, index) in listData"
            @click="goDetail(item.id)">
          <dl>
            <dt>
              <img v-bind:src="'/API/fnews/showPicNew.do?id=' + item.attachid"
                onerror="javascript: this.src = '../../../static/img/list_img.png';this.onerror = null;"/>
            </dt>
            <dd>
              <h2 class="list-title ellipsis">{{item.title}}</h2>
              <p><span>出诊专家：</span><span class="ellipsis">{{item.members.join('、')}}</span></p>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import view from '../../js/technical';
  export default view;
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/technical/index";
</style>
