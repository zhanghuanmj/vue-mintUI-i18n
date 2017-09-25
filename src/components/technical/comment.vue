<!--
 * @author: zhanghuan
 * @create: 2017/9/19
 * @describe: 技术交流评论页面
-->
<template>
  <div class="tech-comment">
    <header class="header">
      <div class="btn left-btn" @click="goBack">
        <i class="header-icon"><img src="../../../static/img/back.png"/></i>
      </div>
      <h2>技术交流</h2>
      <div class="btn right-btn">
        <i class="header-icon"></i>
      </div>
    </header>

    <div class="cnt">
      <dl class="main-cnt">
        <dt>
          <img v-bind:src="!techData.attachid == 0? '../../../static/img/list_img.png' : '/API/fnews/showPicNew.do?id=' + techData.attachid"/>
        </dt>
        <dd class="dd">
          <h2>{{techData.title}}</h2>
          <p>{{techData.desc}}</p>
          <div class="expert">
            <i class="icon-hat">
              <img src="../../../static/img/hat.png"/>
            </i>
            <span class="ellipsis">{{techData.members ? techData.members.join('、') : ''}}</span>
          </div>
        </dd>
      </dl>

      <dl v-for="(item, index) in commentData" class="main-list">
        <dt class="user-img">
          <img src="../../../static/img/xv.png"/>
        </dt>
        <dd class="detail">
          <h2 class="ellipsis">{{item.questioner}}</h2>
          <span class="time">{{item.questiontimestr}}</span>
          <p>{{item.question}}</p>
          <div v-if="item.reply" class="child-list">
            <h3><span>{{item.replier}}</span><span class="time">{{item.replytime}}</span></h3>
            <p>{{item.reply}}</p>
          </div>
          <!--<div v-if="item.reply" v-for="(ite, ind) in item.reply" class="child-list">
            <h3><span>{{ite.username}}</span><span class="time">{{ite.time}}</span></h3>
            <p>{{ite.comment}}</p>
          </div>-->
        </dd>
      </dl>
    </div>
    <footer class="footer">
      <i class="icon-que"><img src="../../../static/img/icon_que.png"/></i><span>我要提问</span>
    </footer>
  </div>
</template>

<script>
  import view from '../../js/technical/comment';
  export default view;
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/technical/comment";
</style>
