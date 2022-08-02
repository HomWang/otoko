<template>
  <div class="">
    <div :class="propsClass">
      <div class="title leading-30px">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js'
const props = defineProps({
  text: String,
  propsClass: String,
})
onMounted(() => {
  const title = document.querySelector(`.${props.propsClass} .title`)
  formatTextToAnimate(title)
  animateText()
})
function formatTextToAnimate(text) {
  return text.innerHTML = text.textContent.replace(
    // eslint-disable-next-line no-control-regex
    /([^\x00-\x80]|\w|\W)/g,
    '<span class=\'letter\'>$&</span>',
  )
}
function animateText() {
  anime
    .timeline()
    // .add({
    //   targets: `.${props.propsClass} .line`,
    //   translateX: [
    //     0,
    //     document.querySelector(`.${props.propsClass}`).getBoundingClientRect().width
    //     + 10,
    //   ],
    //   easing: 'easeOutExpo',
    //   duration: 700,
    //   delay: 100,
    // })
    // .add({
    //   targets: `.${props.propsClass} .letter`,
    //   opacity: [0, 1],
    //   easing: 'easeOutExpo',
    //   duration: 600,
    //   offset: '-=775',
    //   delay(el, i) {
    //     return 34 * (i + 1)
    //   },
    // })
    // .add({
    //   targets: `.${props.propsClass}`,
    //   /* opacity: 0, */
    //   duration: 500,
    //   easing: 'easeOutExpo',
    // })
}
</script>

<style>
</style>