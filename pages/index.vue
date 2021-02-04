<template>
  <div class="flex h-screen">
    <div class="container m-auto max-w-none sm:max-w-md h-screen sm:h-auto bg-white rounded-none sm:rounded-lg shadow">
      <div class="px-6 flex flex-col">
        <div class="mt-5 flex-shrink-0 flex justify-center">
          <img class="h-72" src="~/assets/images/logo.png" alt="avatar" />
        </div>
        <form @submit.prevent="onLogin" class="py-8 space-y-2">
          <div class="space-y-4">
            <div class="space-y-2">
              <div class="relative">
                <label class="text-sm text-gray-600">Email / Slot Code</label>
                <input  class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-7 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                        type="text" 
                        v-model="user.email"
                        :class="submitted && $v.user.email.$error ? 'is-invalid' : 'focus:ring-green-400'" />
                <ErrorIcon v-if="submitted && $v.user.email.$error" />
              </div>
              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                <span v-if="!$v.user.email.required">Email is required</span>
                <span v-if="!$v.user.email.email">Email is invalid</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="relative">
                <label class="text-sm text-gray-600">Password</label>
                <input  class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-7 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                        type="password" 
                        v-model="user.password"
                        :class="submitted && $v.user.password.$error ? 'is-invalid' : 'focus:ring-green-400'" />
                <ErrorIcon v-if="submitted && $v.user.password.$error"  />
              </div>
              <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                <span v-if="!$v.user.password.required">Password is required</span>
              </div>
            </div>
          </div>
          <div>
            <nuxt-link to="/forgot-password" class="text-sm text-gray-500 hover:underline">Forgot password?</nuxt-link>
          </div>
          <div class="space-y-2">
            <button @click.prevent="onLogin" class="text-sm font-medium w-full tracking-wide bg-green-500 py-2 border-none text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase on ease-in-out duration-200">
              Login
            </button>
            <nuxt-link to="/registration" @click.prevent class="inline-block text-center text-sm font-medium w-full border border-green-500 py-2 text-green-500 rounded focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">
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
  import { email, required } from 'vuelidate/lib/validators'
  export default {
    head: {
      title: 'Login - Grace wealthness'
    },
    components: {
      ErrorIcon: () => import('~/components/ErrorIcon')
    },
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
        submitted: false
      }
    },
    validations: {
      user: {
        email: { required, email },
        password: { required }
      }
    },
    methods: {
      onLogin () {
        this.submitted = true

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
            return;
        }

        this.$router.push('/member')
      }
    }
  }
</script>