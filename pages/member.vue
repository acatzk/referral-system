<template>
  <div class="flex min-h-screen h-screen">
    <div class="hidden w-72 bg-white border-r border-gray-200 sm:block">
      <TheSideNav />
    </div>
    <div class="flex-grow flex flex-col overflow-y-hidden">
      <TheHeader />
      <div class="flex-grow overflow-y-auto">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: '',
      titleTemplate: '%s - Grace wealthness'
    },
    components: {
      TheHeader: () => import('~/components/TheHeader'),
      TheSideNav: () => import('~/components/TheSideNav')
    }
  }
</script>