<script lang="ts" setup>
import type { Member } from '~/types'

defineProps<{
  member: Member
}>()
</script>

<template>
  <div border="$c-text" w-full border-8px p-4 shadow hover:shadow-md>
    <h3>
      {{ member.name }}
    </h3>
    <div justify="center" m-2 flex items-center>
      <span class="border-c-border border-2px" rounded px-2 py-1 text="xs" opacity="80">
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
