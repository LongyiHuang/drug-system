/**
* Description: 侧边栏
*
* Created by longyihuang on 2019/11/29
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="sidebar-container" :style="{width: isCollapse ? '80px' : '250px'}">
    <SidebarLogo :collapse="isCollapse"/>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      background-color="#1f2d3d"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      mode="vertical"
      router
    >
      <SidebarItem v-for="route in permissionRoutes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SidebarLogo from "./Logo";
  import SidebarItem from "./SidebarItem";
  export default {
    name: "Sidebar",
    components: {SidebarItem, SidebarLogo},
    computed: {
      ...mapGetters([
        'permissionRoutes',
        'sidebar'
      ]),

      activeMenu () {
        const route = this.$route
        const { meta, path } = route
        // if set path, the Sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },

      isCollapse () {
        return !this.sidebar.opened
      }
    }
  }
</script>

<style lang='scss' scoped>
.sidebar-container{
  height: 100%;
  background-color: #1f2d3d;
  .el-menu{
    border-right: none;
  }
}
</style>
