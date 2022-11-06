<script lang="ts" setup>
import { socialList } from '~/config'

const clientGroupImgUrl = '/images/yunlefun-wechat-client-group.jpg'
</script>

<template>
  <div>
    <div border="$c-text" border-8px max-w-500px shadow m-auto p-2>
      <h3 font="bold" mb-2>
        商务合作
      </h3>
      <p>
        联系邮箱：bd@yunle.fun
      </p>

      <hr my-2>

      <div flex flex-col>
        <img border m-auto max-w-200px :src="clientGroupImgUrl" alt="云乐坊客户群">
        <span text="xs" opacity="70">
          云乐坊客户群
        </span>
      </div>
    </div>
    <div py-2 />
    <div bg-black p-4 inline-flex text-2xl>
      <SocialIcons text="white" :social-list="socialList" />
    </div>
  </div>
</template>
