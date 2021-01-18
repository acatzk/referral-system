<template>
  <div class="flex h-screen">
    <div class="container m-auto max-w-none sm:max-w-md h-screen sm:h-auto bg-white rounded-none sm:rounded-lg shadow">
      <div class="px-6 flex flex-col">
        <div class="mt-5 flex-shrink-0 flex justify-center">
          <img class="h-40" src="@/assets/images/xample-logo.png" alt="avatar" />
        </div>
        <form class="py-8 space-y-2">
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm text-gray-600">Email / Slot Code</label>
              <input  class="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200" 
                      placeholder="Enter Email" 
                      type="text" />
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-600">Password</label>
              <input  class="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200" 
                      placeholder="Enter Password" 
                      type="password" />
            </div>
          </div>
          <div>
            <nuxt-link to="/forgot-password" class="text-sm text-gray-500 hover:underline">Forgot password?</nuxt-link>
          </div>
          <div class="space-y-2">
            <button @click.prevent class="text-sm font-medium w-full bg-green-500 py-2 border-none text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 uppercase on ease-in-out duration-200">
              Login
            </button>
            <nuxt-link to="/registration" @click.prevent class="inline-block text-center text-sm font-medium w-full border border-green-500 py-2 text-green-500 rounded focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">
              Create account
            </nuxt-link>
            <nuxt-link to="/forgot-password" @click.prevent class="inline-block text-center text-sm font-medium w-full py-2 text-green-500 rounded uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">
              Forgot password?
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Login - Grace wealthness'
    }
  }
</script>