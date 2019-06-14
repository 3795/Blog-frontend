<template>
  <div class="nav-bar">
    <Menu>
      <MenuItem name="1-1" @click.native="changeNav('/console')">
        <Icon type="ios-timer-outline" />
        仪表盘
      </MenuItem>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-paper-outline" />
          文章管理
        </template>
        <MenuItem name="2-1" @click.native="changeNav('/console/article/edit/-1')">
          <Icon type="ios-create-outline" />
          写文章
        </MenuItem>
        <MenuItem name="2-2" @click.native="changeNav('/console/article/list')">
          <Icon type="ios-list" />
          文章列表
        </MenuItem>
        <MenuItem name="2-3" @click.native="changeNav('/console/article/draft')">
          <Icon type="ios-filing-outline" />
          草稿箱
        </MenuItem>
        <MenuItem name="2-4" @click.native="changeNav('/console/article/recycle')">
          <Icon type="ios-archive-outline" />
          回收站
        </MenuItem>
      </Submenu>
      <MenuItem name="3" @click.native="changeNav('/console/category')">
        <Icon type="ios-apps-outline" />
        分类管理
      </MenuItem>
      <MenuItem name="4" @click.native="changeNav('/console/tag')">
        <Icon type="ios-pricetags-outline" />
        标签管理
      </MenuItem>
      <MenuItem name="5" @click.native="changeNav('/console/navigation')">
        <Icon type="ios-compass-outline" />
        导航管理
      </MenuItem>
      <Submenu name="6">
        <template slot="title">
          <Icon type="ios-settings-outline" />
          系统设置
        </template>
        <MenuGroup title="图片设置">
          <MenuItem name="6-1" @click.native="changeNav('/console/carousel')">
            <Icon type="ios-image-outline" />
            图片管理
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="安全设置" >
          <MenuItem name="6-2" @click.native="changeNav('/console/ip')">
            <Icon type="ios-wifi-outline" />
            IP管理
          </MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>

  </div>
</template>

<script>
  export default {
    name: "NavBar",
    methods: {
      changeNav(url) {
        this.$router.history.push(url);
      }
    }
  }
</script>

<style scoped lang="stylus">
  .nav-bar
    height auto

</style>
