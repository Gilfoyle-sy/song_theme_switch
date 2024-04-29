export default {
  mounted(el, binding) {
    el.addEventListener('click', (event) => {
      // 如果浏览器不支持 startViewTransition 方法，则直接执行回调
      if (!document.startViewTransition) return binding.value()

      const transition = document.startViewTransition(() => {
        binding.value()
      })

      // 动画效果
      transition.ready.then(() => {
        const x = event?.clientX ?? innerWidth / 2
        const y = event?.clientY ?? innerHeight / 2
        const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0 at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`]
          },
          {
            duration: 600,
            easing: 'ease-in',
            // 指定要附加动画的伪元素
            pseudoElement: '::view-transition-new(root)'
          }
        )
      })
    })
  }
}
