<template>
  <div>
    <TheHeader />
    <main>
      <nuxt-child />
    </main>
  </div>
</template>

<script>
  export default {
    head: {
      title: '',
      titleTemplate: '%s - Grace wealthness'
    },
    components: {
      TheHeader: () => import('~/components/TheHeader')
    }
  }
</script>