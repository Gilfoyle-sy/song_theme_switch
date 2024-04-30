<script setup>
import { ref, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'
const isDark = ref(false)
const themeName = ref('')
const themeStore = useThemeStore() // 黑白主题的默认色，黑白主题当前色
const inputTheme = ref({
  '--song-text-color': '',
  '--song-bg-color': '',
  '--song-border-color': ''
}) // 输入的主题色

// 切换动画后的回调
const switchTheme = () => {
  isDark.value = !isDark.value
}

watch(
  () => isDark.value,
  (newValue) => {
    themeName.value = newValue ? '黑色' : '白色'
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light')
    // 根据主题改变对应切换的值
    inputTheme.value = newValue ? themeStore.darkThemeCustom : themeStore.lightThemeCustom
  },
  { immediate: true }
)

watch(
  () => inputTheme,
  (newValue) => {
    // 值变化的时候，保存到当前主题
    isDark.value
      ? (themeStore.darkThemeCustom = newValue.value)
      : (themeStore.lightThemeCustom = newValue.value)

    changeDomColor(newValue.value)
  },
  { deep: true, immediate: true }
)

// 重置主题
function resetTheme() {
  inputTheme.value = isDark.value
    ? { ...themeStore.darkThemeDefault }
    : { ...themeStore.lightThemeDefault }
  changeDomColor(inputTheme.value)
}

// 改变html根元素的css变量
function changeDomColor(obj) {
  for (let key in obj) {
    document.documentElement.style.setProperty(key, obj[key])
  }
}
</script>

<template>
  <div class="home-container">
    <div class="text title">主题： {{ themeName }}</div>

    <div class="custom">
      <div>
        <div class="text">字体颜色</div>
        <input type="color" v-model="inputTheme['--song-text-color']" />
      </div>
      <div>
        <div class="text">背景颜色</div>
        <input type="color" v-model="inputTheme['--song-bg-color']" />
      </div>
      <div>
        <div class="text">边框颜色</div>
        <input type="color" v-model="inputTheme['--song-border-color']" />
      </div>

      <button @click="resetTheme">重置</button>
    </div>

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

  .custom {
    padding: 36px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      font-size: 18px;
      margin: 0 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    button {
      height: max-content;
      padding: 8px 12px;
      font-size: 18px;
    }
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
        padding: 12px;
        margin-right: 12px;
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
