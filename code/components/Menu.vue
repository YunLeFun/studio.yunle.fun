<script setup lang="ts">
const navItems = [
  { name: '关于我们', path: '/about' },
  { name: '作品展示', path: '/gallery' },
  { name: '主要成员', path: '/members' },
  { name: '联系我们', path: '/contact' },
]
</script>

<template>
  <div id="menu" p-8 text-left>
    <Banner />
    <div mt-6 flex flex-col>
      <li
        v-for="nav in navItems"
        :key="nav.path"
        class="ylf-menu-item inline-flex text-5xl my-6 py-2 tracking-widest transition"
      >
        <RouterLink active-class="active" :to="nav.path">
          {{ nav.name }}
        </RouterLink>
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

    &:hover {
      font-weight: bold;
      border-left: 8px solid black;
    }
  }
}
</style>
