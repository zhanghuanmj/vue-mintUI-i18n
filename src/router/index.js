import Vue from 'vue';
import Router from 'vue-router';
import Union from '@/components/union/index.vue';
import Technical from '@/components/technical/index.vue';
import TechComment from '@/components/technical/comment.vue';
import Show from '@/components/show/index.vue';
import SelfDetail from '@/components/user/selfDetail.vue';
import Activity from '@/components/activity/index.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Union',
      component: Union
    },
    {
      path: '/technical',
      name: 'Technical',
      component: Technical
    },
    {
      path: '/techComment',
      name: 'TechComment',
      component: TechComment
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/selfDetail',
      name: 'SelfDetail',
      component: SelfDetail
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }
  ]
})
