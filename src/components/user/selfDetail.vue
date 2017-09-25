<!--
 * @author: zhanghuan
 * @create: 2017/9/20
 * @describe: 个人详情
-->
<template>
  <div class="self-detail">
    <header class="header">
      <div class="btn left-btn" @click="goBack">
        <i class="header-icon"><img src="../../../static/img/back.png"/></i>
      </div>
      <h2>个人详情</h2>
      <div class="btn right-btn">
        <i class="header-icon"></i>
      </div>
    </header>

    <div class="video-cnt">
      <video controls="controls"
             preload="auto"
             v-bind:src="'/API/front/applyAttachments/fileDownload.do?type=2&ResultDetailId=' + userInfo.id"
             poster="../../../static/img/poster.jpg">
        您的浏览器不支持 video 标签。
      </video>
    </div>

    <div class="user-info">
      <div class="info">
        <div>
          <img v-bind:src="'/API/front/applyAttachments/fileDownload.do?type=1&ResultDetailId=' + userInfo.id"
               onerror="this.src = '../../../static/img/user_img.png'"/>
        </div>
        <h2>{{userInfo.apply_branch_name}}</h2>
        <span>{{userInfo.unit}}</span>
      </div>

      <section class="introduce">
        <p class="remark"><span>摘要：</span>{{userInfo.apply_user_remark}}</p>
        <p class="desc">{{userInfo.apply_user_desc}}</p>
      </section>
    </div>


  </div>
</template>

<script>
  import view from '../../js/user/selfDetail';
  export default view;
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/user/selfDetail";
</style>
