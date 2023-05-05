<template>
  <div flex flex-col min-h="screen">
    <main flex-1 class="px-4 text-center pb-4">
      <Menu />
      <Config />
      <slot />
    </main>
    <Footer />
  </div>
</template>
