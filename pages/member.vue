<template>
  <div class="flex min-h-screen h-screen">
    <div class="w-14 md:w-72 bg-white border-r border-gray-200 flex-shrink-0" v-show="toggle">
      <TheSideNav />
    </div>
    <div class="flex-grow flex flex-col overflow-y-hidden">
      <TheHeader>
        <template #toggle-button>
          <button @click.prevent="toggle = !toggle" class="focus:outline-none rounded focus:ring-2 ring-green-400 p-1">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
          </button>
        </template>
      </TheHeader>
      <div class="flex-grow overflow-y-auto px-4">
        <AddSlotCard v-if="!isValid"/>
        <nuxt-child v-else/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'No Slot',
      titleTemplate: '%s - Grace wealthness'
    },
    components: {
      TheHeader: () => import('~/components/TheHeader'),
      TheSideNav: () => import('~/components/TheSideNav'),
      AddSlotCard: () => import('~/components/AddSlotCard')
    },
    data () {
      return {
        toggle: true,
        isValid: false
      }
    }
  }
</script>