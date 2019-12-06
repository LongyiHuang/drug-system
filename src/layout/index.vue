/**
* Description: 布局
*
* Created by longyihuang on 2019/11/28
* E-Mail: 475865662@qq.com
*/

<template>
  <el-container direction="horizontal">
    <Sidebar/>
    <el-container direction="vertical">
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Sidebar from "./components/Sidebar/index";
  import NavBar from "./components/Navbar/index";
  export default {
    name: "Layout",
    components: {NavBar, Sidebar}
  }
</script>

<style lang='scss' scoped>
  .el-container{
    padding: 0px 0px;
    height: 100%;
    width: 100%;
    .el-header{
      padding: 0px;
      height: 70px !important;
    }
  }
</style>
