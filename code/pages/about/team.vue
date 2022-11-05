<script lang="ts" setup>
import { members } from "~/config";
</script>

<template>
  <div text-2xl p-2>
    <div grid grid-cols-1 md:grid-cols-3>
      <MemberCard v-for="member in members" :key="member.name" :member="member" />
    </div>
  </div>
</template>
