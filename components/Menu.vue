<script setup lang="ts">
const navItems = [
  { name: '关于这里', path: '/intro' },
  { name: '作品展示', path: '/gallery' },
  { name: '合作伙伴', path: '/partners' },
  { name: '联系我们', path: '/contact' },
]
</script>

<template>
  <div id="menu" p-4 text-left>
    <Banner />
    <div flex flex-col>
      <li
        v-for="nav in navItems"
        :key="nav.path"
        class="ylf-menu-item my-4 inline-flex py-2 text-5xl tracking-widest transition"
      >
        <NuxtLink active-class="active" :to="nav.path">
          {{ nav.name }}
        </NuxtLink>
      </li>
    </div>
  </div>
</template>

<style lang="scss">
.ylf-menu-item {
  padding-left: 8px;
  margin-left: -8px;

  .active {
    font-weight: 900;
  }

  a {
    border-left: 8px solid transparent;
    padding-left: 8px;
    margin-left: -16px;

    &:hover,
    &.active{
      font-weight: bold;
      border-left: 8px solid var(--c-border);
    }
  }
}
</style>
