/**
* Description: 用户信息
*
* Created by longyihuang on 2019/10/9
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="user-info-container">
      <img class="user-avatar" :src="userAvatarUrl"/>
      <div class="name-and-phone">
        <span class="normal-text">{{userInfo && userInfo.name || '未知用户'}}</span>
        <span class="normal-text">{{userInfo && userInfo.phone}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfoComponent",
    props: {
      userInfo: {
        type: Object
      }
    },
    computed: {
      userAvatarUrl () {
        return this.userInfo.pictureUrl ? this.userInfo.pictureUrl : require('../../common/imgs/caller-avatar.png')
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import url("../../common/css/index.css");
  .user-info-container{
    display: flex;
    .user-avatar{
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .name-and-phone{
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      :first-child{
        margin-bottom: 10px;
      }
    }
  }
</style>
