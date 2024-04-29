<script setup>
import { ref, watchEffect } from 'vue'
const isDark = ref(false)
const themeName = ref('')

function switchTheme() {
  isDark.value = !isDark.value
}

watchEffect(() => {
  themeName.value = isDark.value ? '黑色' : '白色'
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <div class="home-container">
    <div class="text title">主题： {{ themeName }}</div>

    <div class="content">
      <div class="row row-type-1">
        <button v-switch-theme="switchTheme">任意位置切换1</button>
        <button v-switch-theme="switchTheme">任意位置切换2</button>
      </div>
      <div class="row row-type-2">
        <button v-switch-theme="switchTheme">自定义指定绑定切换按钮</button>
      </div>
      <div class="row row-type-1">
        <button v-switch-theme="switchTheme">任意位置切换3</button>
        <button v-switch-theme="switchTheme">任意位置切换4</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    font-weight: 800;
    font-size: 32px;
    padding-top: 24px;
  }

  .content {
    padding: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .row {
      display: flex;

      button {
        font-size: 32px;
      }
    }
    .row-type-2 {
      justify-content: center;
    }
    .row-type-1 {
      justify-content: space-between;
    }
  }
}
</style>
