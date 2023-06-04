<script lang="ts" setup>
import { confirmFormUrl, groups, members, socialList } from '~/config'
</script>

<template>
  <div>
    <div border="$c-text" m-auto max-w-600px border-8px p-2 shadow>
      <h3 class="ylf-font-serif" text="lg" font="black" mb-2>
        商务合作
      </h3>
      <div m-auto>
        联系邮箱（商务合作）：bd@yunle.fun<br>
        联系邮箱（其他）：i@yunle.fun
      </div>
      <div mt-2>
        <a class="border-b-1 border-b-$c-border border-b-dashed" opacity="60" :href="confirmFormUrl" target="_blank">合作确认事项</a>
      </div>

      <hr my-2>

      <div flex flex-col>
        <img w="90%" m-auto mt-2 max-w-500px border rounded-3 shadow src="/images/yunlefun-wechat.jpg" alt="云乐坊客户群">
        <span mt-1 text="xs" opacity="70">
          了解更多动态
        </span>
      </div>

      <hr my-2>

      <div inline-flex bg-black p-4 text-2xl>
        <SocialIcons text="white" :social-list="socialList" />
      </div>

      <hr my-2>

      <details>
        <summary cursor="pointer">
          <span class="ylf-font-serif" text="lg" font="black" my-2>
            微信交流群
          </span>
        </summary>
        <ul class="list-circle" text="left" pl-6>
          <li v-for="group in groups" :key="group.name">
            <a class="border-b-1 text-blue-600 dark:text-blue-300" :href="group.url" font="serif black" target="_blank">
              {{ group.name }}
            </a>
            ：<span text-sm>{{ group.desc }}</span>
          </li>
        </ul>
      </details>
    </div>

    <div mt-4 flex justify="center" items="center">
      <MemberCard v-for="member in members" :key="member.name" class="max-w-600px" :member="member" />
    </div>
  </div>
</template>
