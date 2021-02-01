<template>
  <div class="flex min-h-screen h-screen">
    <div class="w-12 md:w-72 bg-white border-r border-gray-200" v-show="toggle">
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
        <div class="flex h-screen" v-if="!isValid">
          <div class="container m-auto max-w-lg">
            <div class="rounded-lg shadow bg-white px-4 py-6">
              <div class="flex items-center flex-col space-y-3">
                <h1>We have detected that you don't have a slot yet.</h1>
                <button class="flex items-center py-2.5 px-3 bg-green-500 rounded-md focus:outline-none hover:opacity-80 focus:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition ease-in-out duration-150 space-x-1">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  <span class="text-white text-sm font-medium uppercase">Add Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
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
      TheSideNav: () => import('~/components/TheSideNav')
    },
    data () {
      return {
        toggle: true,
        isValid: false
      }
    }
  }
</script>