<template>
  <div class="flex h-screen">
    <div class="container m-auto max-w-none px-6 sm:max-w-md h-screen sm:h-auto bg-white rounded-none sm:rounded-lg shadow">
      <form class="py-8 space-y-4">
        <div class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Full Name *</label>
            <input  class="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 focus:border-gray-100" 
                    placeholder="Enter Fullname" 
                    type="text" />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Gender *</label>
            <select class="text-sm w-full py-2 px-3 border border-gray-300 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 bg-white focus:border-gray-100">
              <option value="Male">Male</option>
              <option value="Male">Female</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Country *</label>
            <select class="text-sm w-full py-2 px-3 border border-gray-300 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 bg-white focus:border-gray-100">
              <option v-for="(country, i) in countries" :key="i">{{ country }}</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Contact Number</label>
            <input  class="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 focus:border-gray-100" 
                    placeholder="Enter Contact Number" 
                    type="text" />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Your Email * </label>
            <input  class="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 focus:border-gray-100" 
                    placeholder="Enter Email" 
                    type="email" />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Password *</label>
            <input  class="text-sm w-full py-2 border border-gray-300 rounded shadow-inner focus:outline-none pl-4 focus:ring-2 focus:ring-green-400 transition ease-in-out duration-200 focus:border-gray-100" 
                    placeholder="Enter Password" 
                    type="text" />
          </div>
        </div>
        <div class="space-y-2">
          <button @click.prevent class="text-sm font-medium w-full bg-green-500 py-2 border-none text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 uppercase on ease-in-out duration-200">
            Create account
          </button>
          <nuxt-link to="/" @click.prevent class="block text-center text-sm font-medium w-full border border-green-500 py-2 text-green-500 rounded focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">
            Back
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import countries from '~/static/countries.json'
  export default {
    head: {
      title: 'Registration - Grace wealthness'
    },
    data () {
      return {
        countries: []
      }
    },
    methods: {
      countriesData () {
        countries.forEach((element) => {
          this.countries.push(element.nationality)
        })
      }
    },
    created () {
      this.countriesData()
    }
  }
</script>