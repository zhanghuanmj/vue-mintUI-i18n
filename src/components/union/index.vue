<!--
 * @author: zhanghuan
 * @create: 2017/9/18
 * @describe: 工会入口
-->
<template>
  <div class="union">
    <header class="header">
      <div class="btn left-btn">
        <i class="header-icon"></i>
      </div>
      <h2>工会</h2>
      <div class="btn right-btn">
        <i class="header-icon"></i>
      </div>
    </header>

    <div class="cnt">
      <div class="link">
        <a href="#activity">
          <img src="../../../static/img/vote.png"/>
        </a>
      </div>

      <ul class="nav">
        <li @click="goTrends">
          <dl>
            <dt>
              <img src="../../../static/img/bell.png"/>
            </dt>
            <dd>
              工会动态
            </dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt>
              <img src="../../../static/img/help.png"/>
            </dt>
            <dd>
              困难帮扶
            </dd>
          </dl>
        </li>

        <li>
          <a href="#show">
            <dl>
              <dt>
                <img src="../../../static/img/show.png"/>
              </dt>
              <dd>
                成果展示
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <dl>
            <dt>
              <img src="../../../static/img/talk.png"/>
            </dt>
            <dd>
              讨论园地
            </dd>
          </dl>
        </li>
      </ul>
      <hr class="line"/>
      <section class="list-cnt">
        <h2 class="title-nav">
          <span>技术交流</span>
          <a href="#technical">更多</a>
        </h2>

        <ul class="list-ul">
          <li v-for="(item, index) in listData" @click="goDetail(item.id)">
            <dl>
              <dt>
                <img v-bind:src="'/API/fnews/showPicNew.do?id=' + item.attachid" onerror="javascript: this.src = '../../../static/img/list_img.png';this.onerror = null;"/>
              </dt>
              <dd>
                <h2 class="list-title ellipsis">{{item.title}}</h2>
                <p><span>出诊专家：</span><span>{{item.members.join('、')}}</span></p>
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import view from '../../js/union';
  export default view;
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/union/index";
</style>
