<!--
 * @author: zhanghuan
 * @create: 2017/9/20
 * @describe: 成果展示入口
-->
<template>
  <div class="show">
    <header class="header">
      <div class="btn left-btn" @click="goBack">
        <i class="header-icon"><img src="../../../static/img/back.png"/></i>
      </div>
      <h2 @click="closeOrOpenMenu">成果展示<i class="direction close"></i></h2>
      <div class="btn right-btn">
        <i class="header-icon"></i>
      </div>
    </header>

    <div v-if="showMenu" class="down-menu-model">
      <ul class="down-menu">
        <li v-for="(item, index) in allData"
            @click="chooseMenu(item.id, item.awards_name)"
            v-bind:class="{current: dataId == item.id}">
          <span v-if="dataId == item.id">&gt;&gt;</span><span class="ellipsis">{{item.awards_name}}</span>
        </li>
      </ul>
    </div>

    <nav class="banner">
      <img src="../../../static/img/show_banner.png"/>
    </nav>

    <h2 class="list-title ellipsis">
      {{choosed}}
    </h2>

    <div v-for="(item, index) in listData" class="list" @click="goDetail(item.id)">
      <dl class="user-info">
        <dt class="user-img">
          <img v-bind:src="'/API/front/applyAttachments/fileDownload.do?type=1&ResultDetailId=' + item.id"
          onerror="this.src = '../../../static/img/user_img.png'"/>
        </dt>
        <dd class="user-detail">
          <div>
            <h3>{{item.apply_branch_name}}</h3>
            <p>{{item.pro_comment}}</p>
          </div>
        </dd>
      </dl>

      <div class="choose-btn">
        {{item.unit}}
      </div>
    </div>
  </div>
</template>

<script>
  import view from '../../js/show/index';
  export default view;
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/show/index";
</style>
