<template>
  <div class="flex min-h-screen">
    <div class="container m-auto max-w-none sm:max-w-md h-screen sm:h-auto bg-white rounded-none sm:rounded-lg shadow">
      <div class="px-6 flex flex-col">
        <div class="mt-5 flex-shrink-0 flex justify-center">
          <img class="h-72" src="~/assets/images/logo.png" alt="avatar" />
        </div>
        <form @submit.prevent="onLogin" class="py-8 space-y-2">
          <div class="space-y-4">
            <ToastNotification />
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
                <span v-if="!$v.user.email.email">Must be valid e-mail</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="relative">
                <label class="text-sm text-gray-600">Password</label>
                <input  class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-7 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                        :type="[!isPassword ? 'password' : 'text']"
                        v-model="user.password"
                        :class="[submitted && $v.user.password.$error ? 'is-invalid' : 'focus:ring-green-400']" />
                <button @click.prevent="isPassword = !isPassword" class="absolute right-2 top-8 text-gray-400 flex items-center focus:outline-none">
                  <svg v-if="!isPassword" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                </button>
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
            <button @click.prevent="onLogin" 
                    class="flex items-center justify-center text-sm font-medium w-full tracking-wide bg-green-500 py-2 border-none text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase on ease-in-out duration-200">
              <span v-if="!isLoading">Login</span>
              <Loading v-else :className="`w-5 h-5 text-white`" />
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
      ErrorIcon: () => import('~/components/ErrorIcon'),
      ToastNotification: () => import('~/components/ToastNotification'),
      Loading: () => import('~/components/Loading')
    },
    data () {
      return {
        user: {
          email: 'joshuaimalay@gmail.com',
          password: 'ilusmdm123'
        },
        submitted: false,
        isLoading: false,
        isPassword: false,
        errors: []
      }
    },
    validations: {
      user: {
        email: { required, email },
        password: { required }
      }
    },
    methods: {
      async onLogin () {
        try {
          this.submitted = true
          this.$v.$touch();
          if (this.$v.$invalid) return;

          this.isLoading = true

          await this.$auth.loginWith('local', { 
            data: this.user 
          }).then((response) => {
            this.isLoading = false
            this.$auth.setUser(response.data)
            this.$router.push('/member')
          }).catch((e) => {
            this.isLoading = false
            let { message } = e.response.data
            this.$notify({ group: "error", title: "Opps!", description: message }, 4000)
          })

        } catch (error) {
          this.isLoading = false
          this.$notify({ group: "error", title: "Opps!", description: error }, 4000) 
        }
      }
    }
  }
</script>