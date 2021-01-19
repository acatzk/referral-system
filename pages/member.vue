<template>
  <div class="flex min-h-screen h-screen">
    <div class="w-72 bg-white border-r border-gray-200">
      <TheSideNav />
    </div>
    <div class="flex-grow flex flex-col">
      <TheHeader />
      <div class="flex-grow">
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