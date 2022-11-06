<script lang="ts" setup>
import type { Member } from '~/types'
defineProps<{
  member: Member
}>()
</script>

<template>
  <div w-full shadow hover:shadow-md border-8px border-black p-4>
    <h3>
      {{ member.name }}
    </h3>
    <div flex justify="center" items-center m-2>
      <span class="border-$ylf-c-border border-2px" py-1 px-2 rounded text="xs" opacity="80">
        {{ member.title }}
      </span>
    </div>
    <p text="base" opacity="70">
      {{ member.desc }}
    </p>
    <div mt-4>
      <Socials :socials="member.socials" />
    </div>
  </div>
</template>
