<template>
 <a-layout>
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="top-container">
        <div class="logo">
                <h3>DNC管理</h3>
        </div>
        <a-menu theme="dark"  mode="inline" :defaultSelectedKeys="['machines']" @click="clickMenu">
          <a-menu-item key="machines" >
            <a-icon type="cluster" />
            <span class="nav-text">机床管理</span>
          </a-menu-item>
          <a-menu-item key="programs">
            <a-icon type="code" />
            <span class="nav-text">程序管理</span>
          </a-menu-item>
          <a-menu-item key="tools">
            <a-icon type="issues-close" />
            <span class="nav-text">G代码工具</span>
          </a-menu-item>
          <a-menu-item key="settings">
            <a-icon type="setting" />
            <span class="nav-text">系统设置</span>
          </a-menu-item>
          <a-menu-item key="test">
            <a-icon type="check" />
            <span class="nav-text">测试工具</span>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="bottom-container">
            <a-button class="preview-btn" icon="close-circle" block >退出</a-button>
        </div>
      </div>
    </a-layout-sider>
    <a-layout class="right-container">
      <div class="content">
        <router-view></router-view>
      </div>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  methods: {
    clickMenu (e) {
      this.$router.push(e.key)
    }
  }
}
</script>

<style>
.logo {
  height: 32px;
  margin: 16px;
  min-height: 32px;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px 0 8px;
}
.logo > h3 {
      font-size: 18px;
  color:antiquewhite;
}
.right-container {
  background: #fff;
  margin-left: 8px 8px 8px 208px;
  padding: 8px;
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 208px;
  right: 8px;
}

.bottom-container {
  padding: 24px 32px 8px;
}

.bottom-container >button{
        margin: 4px 0;
}
.preview-btn {
  border-radius: 16px;
  background: #e8e8e8;
}

.preview-btn:hover{
    border: none;
    background: #c7c7c7;
}

</style>


