<!--
 * @author: zhanghuan
 * @create: 2017/9/20
 * @describe: 活动入口
-->
<template>
  <div class="activity">
    <header class="header">
      <div class="btn left-btn" @click="goBack">
        <i class="header-icon"><img src="../../../static/img/back.png"/></i>
      </div>
      <h2 @click="closeOrOpenMenu">活动名称<i class="direction close"></i></h2>
      <div class="btn right-btn">
        <i class="header-icon icon-one"><img src="../../../static/img/count.png"/></i>
        <i class="header-icon icon-two" @click="submitChoose"><img src="../../../static/img/right.png"/></i>
      </div>
    </header>

    <div v-if="showMenu" class="down-menu-model">
      <ul class="down-menu">
        <li v-for="(item, index) in menuData"
            @click="chooseMenu(item.key)"
            v-bind:class="{current: key === item.key}">
          <span v-if="key === item.key">&gt;&gt;</span><span class="ellipsis">{{item.value}}</span>
        </li>
      </ul>
    </div>

    <nav class="banner">
      <img src="../../../static/img/activity_banner.png"/>
      <div class="btn btn-introduce" @click="getActivityData(0)">
        <span>活动介绍</span>
        <img src="../../../static/img/btn_bg.png"/>
      </div>
      <div class="btn" @click="getActivityData(1)">
        <span>活动规则</span>
        <img src="../../../static/img/btn_bg.png"/>
      </div>
    </nav>

    <h2 class="list-title">
      参选人员风采展示
    </h2>

    <div v-for="(item, index) in listData" class="list">
      <dl class="user-info" @click="goDetail(item.id)">
        <dt class="user-img">
          <img v-bind:src="'/API/front/applyAttachments/fileDownload.do?type=1&ResultDetailId=' + item.id"
            onerror="javascript: this.src = '../../../static/img/user_img.png';this.onerror = null;"/>
        </dt>
        <dd class="user-detail">
          <div>
            <h3>{{item.apply_branch_name}}</h3>
            <p>{{item.pro_comment}}</p>
          </div>
        </dd>
      </dl>

      <div class="choose-btn" @click="choose(item.id, index)">
        <div>
          <img v-if="chooseData[index]" src="../../../static/img/choosed.png"/>
          <img src="../../../static/img/choose.png" v-else/>
        </div>
      </div>
    </div>

    <div v-if="modelShow" class="model">
      <div class="cnt">
        <div class="close-btn" @click="closeModel"><div>&times;</div></div>
        <section class="section">
          <h2 class="section-title">{{(showIndex === 1) ? '活动规则' : '活动介绍'}}</h2>
          <div v-html="activityData[showIndex]"></div>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
  import view from '../../js/activity/index';
  export default view;
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/activity/index";
</style>
