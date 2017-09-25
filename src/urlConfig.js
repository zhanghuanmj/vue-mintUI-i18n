/**
 * @author: zhanghuan
 * @create: 2017/9/22
 * @describe: 请求路径配置
 */
"use strict";
var URL = {
  union: {
    techList: "front/clinic/list.do?&type=first"
  },

  user: {
    list: "front/applyResultDetail/get.do"
  },

  technical: {
    list: "front/clinic/list.do",
    techOne: "front/clinic/clinicinfo.do?hl=4",
    comment: "front/clinicQuestionAction/list.do?hl=4&pageSize=10&page=1"
  },

  show: {
    userList: "front/applyResult/getResultList.do"
  },

  activity: {
    menu: "front/voteInfo/voteInfoList.do",
    userList: "front/applyResult/getResultList.do",
    activityData: "front/voteInfo/get.do"
  }
};

URL = {
  union: {
    techList: "union/techList.json"
  },

  user: {
    list: "user/list.json"
  },

  technical: {
    list: "technical/list.json",
    techOne: "technical/techOne.json?a=2",
    comment: "technical/comment.json?a=2"
  },

  show: {
    userList: "show/userList.json"
  },

  activity: {
    menu: "activity/menu.json",
    userList: "activity/userList.json",
    activityData: "activity/activityData.json"
  }
};

module.exports = URL;
