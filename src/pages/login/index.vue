/**
* Description: 登录页面
*
* Created by longyihuang on 2019/11/28
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left">

      <div class="title-container">
        <h3 class="title">兽药检测信息系统</h3>
      </div>

      <el-form-item prop="username" >
        <el-input
          prefix-icon="el-icon-user"
          v-model="loginForm.username"
          placeholder="Username"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="password" >
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          placeholder="Password"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item >
        <el-button
          type="primary"
          style="width: 100%"
          @click="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        loginForm: {
        	username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },

    methods: {
      handleLogin () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
	          this.$store.dispatch('user/login', this.loginForm).then((data) => {
	          	this.$router.replace('/');
	          }).catch(e => {
	          	console.log(e)
            });
          }
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container{
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form {
      width: 420px;
      max-width: 100%;

      .title-container {
        position: relative;

        .title {
          font-size: 26px;
          color: $light_gray;
          margin: 0px auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
      }

      .username-logo {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }
    }
  }
</style>
