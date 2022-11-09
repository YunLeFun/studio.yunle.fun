<template>
  <div flex flex-col min-h="screen">
    <main flex-1 class="px-4 text-center">
      <Menu />
      <Config />
      <slot />
    </main>
    <Footer />
  </div>
</template>
