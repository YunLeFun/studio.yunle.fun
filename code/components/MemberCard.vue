<script lang="ts" setup>
import { Member } from "~/types";
defineProps<{
  member: Member
}>()
</script>

<template>
  <div w-full shadow hover:shadow-md border-8px border-black p-4>
    <h3>
      {{ member.name }}
    </h3>
    <sub text="lg" opacity="80">
      {{ member.title }}
    </sub>
    <div mt-4>
      <Socials :socials="member.socials" />
    </div>
  </div>
</template>
