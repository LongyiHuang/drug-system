/**
* Description: 导航条
*
* Created by longyihuang on 2019/12/2
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="navbar-container">
    <div class="left">
      <Hamburger class="hamburger-container" :isActive="sidebar.opened" @toggleClick="toggleSideBar"/>
      <Breadcrumb class="breadcrumb-container" />
    </div>
    <div class="user-container">
      <span class="username">{{nickname}}</span>
      <el-popover
        class="icon-logout"
        placement="bottom"
        v-model="popoverVisble">
        <p>确认退出登录?</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="popoverVisble = false">取消</el-button>
          <el-button type="primary" size="mini" @click="handleLogout">确定</el-button>
        </div>
        <img src="@/assets/icon_logout.png" slot="reference" />
      </el-popover>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Hamburger from "./Hamburger";
  import Breadcrumb from "./Breadcrumb";
  import { getUserInfo } from "@/common/utils";
  export default {
    name: "NavBar",
    components: { Hamburger, Breadcrumb },
    data () {
      return {
        popoverVisble: false
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),

	    nickname () {
      	let nickname = '';
      	const userInfo = getUserInfo();
      	if (userInfo) {
		      nickname = userInfo.nickname
        }
        return nickname;
      }
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('app/toggleSideBar')
      },

      handleLogout () {
        this.popoverVisble = false;
        this.$store.dispatch('user/logout').then(() => {
	        this.$router.push('/login')
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .navbar-container {
    height: 100%;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    .left{
      align-items: center;
      display: flex;
      .hamburger-container {
        padding: 0;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color:transparent;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }


    .user-container {
      display: flex;
      align-items: center;
      float: right;
      margin-right: 20px;
      .username{
        font-size: 16px;
        margin: 0 20px;
        color: #333333;
      }
      img{
        width: 30px;
        height: 30px;
      }
      .icon-logout{
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
