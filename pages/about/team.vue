<script lang="ts" setup>
import { members } from '~/config'
</script>

<template>
  <div text-2xl>
    <div grid grid-cols-1 gap-4 md:grid-cols-3>
      <MemberCard v-for="member in members" :key="member.name" :member="member" />
    </div>

    <div my-4 text-5xl>
      施工中...
    </div>
  </div>
</template>
