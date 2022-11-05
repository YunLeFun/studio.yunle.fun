<template>
  <div h="screen">
    <main class="px-4 text-center">
      <Menu />
      <Config />
      <slot />
    </main>
    <Footer fixed bottom-0 left-0 right-0 />
  </div>
</template>
