<template>
  <div my-4>
    <NuxtLink to="/">
      <h1 class="title ylf-font-serif" text-6xl tracking-widest>
        <ruby>云<rp>(</rp><rt>Yun</rt><rp>)</rp></ruby>
        <ruby>乐<rp>(</rp><rt>Le</rt><rp>)</rp></ruby>
        <ruby>坊<rp>(</rp><rt>Fun</rt><rp>)</rp></ruby>
        <span class="glitch" inline-flex tracking-widest justify="center" items="center" px-2 text="3xl" bg="$c-text" data-text="工作室">工作室</span>
      </h1>
    </NuxtLink>
    <h2 class="subtitle border-l-c-border" opacity="50" mt-4 text-xl pl-2 border-l-4>
      <span>让世界更加</span>
      <span>有</span>
      <span>趣</span>
      <span>多</span>
      <span>彩</span>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.title {
  rt {
    letter-spacing: 0.05em;
  }
}
</style>
