<script lang="ts" setup>
import { members } from '~/config'
</script>

<template>
  <div text-2xl>
    <div grid grid-cols-1 md:grid-cols-3 gap-4>
      <MemberCard v-for="member in members" :key="member.name" :member="member" />
    </div>
  </div>
</template>
