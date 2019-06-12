<template>
  <div class="nav-bar">
    <Menu>
      <MenuItem name="1-1">
        <router-link to="/console">仪表盘</router-link>
      </MenuItem>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-paper"/>
          文章管理
        </template>
        <MenuItem name="2-1">
          <router-link to="/article/edit">写文章</router-link>
        </MenuItem>
        <MenuItem name="2-2">
          <router-link to="/article/list">文章列表</router-link>
        </MenuItem>
        <MenuItem name="2-3">草稿箱</MenuItem>
        <MenuItem name="2-4">回收站</MenuItem>
      </Submenu>
      <MenuItem name="3">分类管理</MenuItem>
      <MenuItem name="4">标签管理</MenuItem>
      <MenuItem name="5">导航管理</MenuItem>
      <Submenu name="6">
        <template slot="title">
          <Icon type="ios-stats"/>
          系统设置
        </template>
        <MenuGroup title="图片设置">
          <MenuItem name="6-1">图片管理</MenuItem>
        </MenuGroup>
        <MenuGroup title="安全设置">
          <MenuItem name="6-2">IP管理</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>

  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="stylus">
  .nav-bar
    height auto

</style>
