<script lang="ts" setup>
import { confirmFormUrl, groups, members, socialList } from '~/config'
</script>

<template>
  <div>
    <div border="$c-text" border-8px max-w-600px shadow m-auto p-2>
      <h3 font="bold" mb-2>
        商务合作
      </h3>
      <p>
        联系邮箱：bd@yunle.fun
      </p>
      <div mt-1>
        <a class="border-b-$c-border border-b-1 border-b-dashed" :href="confirmFormUrl" target="_blank">合作确认事项</a>
      </div>

      <hr my-2>

      <div flex flex-col>
        <img w="90%" rounded-3 shadow border mt-2 m-auto max-w-500px src="/images/yunlefun-wechat.jpg" alt="云乐坊客户群">
        <span mt-1 text="xs" opacity="70">
          了解更多动态
        </span>
      </div>

      <hr my-2>

      <h5 mb-2>
        更多工作室动态
      </h5>
      <div bg-black p-4 inline-flex text-2xl>
        <SocialIcons text="white" :social-list="socialList" />
      </div>

      <hr my-2>

      <details>
        <summary>
          <span font="bold" my-2>
            微信交流群
          </span>
        </summary>
        <ul class="list-circle" text="left" pl-6>
          <li v-for="group in groups" :key="group.name">
            <a class="text-blue-600 border-b-1" :href="group.url" target="_blank">
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
