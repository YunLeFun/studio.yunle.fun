<script lang="ts" setup>
import { socialList } from "~/config";
</script>

<template>
  <div>
    <div border-black border-8px max-w-500px shadow m-auto p-2>
      <h3 font="bold" mb-2>商务合作</h3>
      <p>
        联系邮箱：bd@yunle.fun
      </p>
    </div>
    <div py-2 />
    <div bg-black p-4 inline-flex text-2xl>
      <SocialIcons text="white" :socialList="socialList" />
    </div>
  </div>
</template>
