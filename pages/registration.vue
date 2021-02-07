<template>
  <div class="flex min-h-screen">
    <div class="container m-auto max-w-none sm:max-w-md h-screen sm:h-auto px-6 bg-white rounded-none sm:rounded-lg shadow">
      <form @submit.prevent="onRegister" class="py-8 space-y-4">
        <div class="space-y-2">
          <!-- Full name -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Full Name</label>
              <input  class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-7 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                      type="text" 
                      v-model="user.name"
                      :class="[submitted && $v.user.name.$error ? 'is-invalid' : 'focus:ring-green-400']" />
              <ErrorIcon v-if="submitted && $v.user.name.$error" />
            </div>
            <div v-if="submitted && $v.user.name.$error" class="invalid-feedback">
              <ul class="flex flex-col">
                <li v-if="!$v.user.name.required">Name is required</li>
                <li v-if="!$v.user.name.minLength">Must have 3+ characters</li>
              </ul>
            </div>
          </div>
          <!-- Gender -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Gender</label>
              <select v-model="user.gender" 
                      :class="[submitted && $v.user.gender.$error ? 'is-invalid' : 'focus:ring-green-400']"
                      class="text-sm w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 transition ease-in-out duration-200 bg-white focus:border-gray-100">
                <option value="Male">Male</option>
                <option value="Male">Female</option>
              </select>
              <ErrorIcon v-if="submitted && $v.user.gender.$error" />
            </div>
            <div v-if="submitted && $v.user.gender.$error" class="invalid-feedback">
              <span v-if="!$v.user.gender.required">Gender is required</span>
            </div>
          </div>
          <!-- Country -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Country</label>
              <select v-model="user.country" 
                      :class="[submitted && $v.user.country.$error ? 'is-invalid' : 'focus:ring-green-400']"
                      class="text-sm w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 transition ease-in-out duration-200 bg-white focus:border-gray-100">
                <option v-for="(country, i) in countries" :key="i" :value="country">{{ country }}</option>
              </select>
              <ErrorIcon v-if="submitted && $v.user.country.$error" />
            </div>
            <div v-if="submitted && $v.user.country.$error" class="invalid-feedback">
              <span v-if="!$v.user.country.required">Country is required</span>
            </div>
          </div>
          <!-- Contact number -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Contact Number</label>
              <input  v-model="user.contact"  
                      :class="[submitted && $v.user.contact.$error ? 'is-invalid' : 'focus:ring-green-400']"
                      class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                      type="text" 
                      @input="$v.user.contact.$touch" />
              <ErrorIcon v-if="submitted && $v.user.contact.$error" />
            </div>
            <div v-if="submitted && $v.user.contact.$error" class="invalid-feedback">
              <ul class="flex flex-col">
                <li v-if="!$v.user.contact.required">Contact number is required</li>
                <li v-if="!$v.user.contact.numeric">Must be a valid number</li>
              </ul>
            </div>
          </div>
          <!-- Email -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Your Email </label>
              <input  v-model="user.email" 
                      :class="[submitted && $v.user.email.$error ? 'is-invalid' : 'focus:ring-green-400']" 
                      class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                      type="email" />
              <ErrorIcon v-if="submitted && $v.user.email.$error" />
            </div>
            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
              <ul class="flex flex-col">
                <li v-if="!$v.user.email.required">Email is required</li>
                <li v-if="!$v.user.email.email">Must be valid e-mail</li>
              </ul>
            </div>
          </div>
          <!-- Username -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Username</label>
              <input  v-model="user.username"
                      :class="[submitted && $v.user.username.$error ? 'is-invalid' : 'focus:ring-green-400']" 
                      class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                      type="text" />
              <ErrorIcon v-if="submitted && $v.user.username.$error" />
            </div>
            <div v-if="submitted && $v.user.username.$error" class="invalid-feedback">
              <ul class="flex flex-col">
                <li v-if="!$v.user.username.required">Username is required</li>
                <li v-if="!$v.user.username.minLength">Must have 4+ characters</li>
              </ul>
            </div>
          </div>
          <!-- Password -->
          <div class="space-y-2">
            <div class="relative">
              <label class="text-sm text-gray-600">Password</label>
              <input  v-model="user.password"
                      :class="[submitted &&  $v.user.password.$error ? 'is-invalid' : 'focus:ring-green-400']" 
                      class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                      type="password" />
              <ErrorIcon v-if="submitted &&  $v.user.password.$error " />
            </div>
            <div v-if="submitted &&  $v.user.password.$error " class="invalid-feedback">
              <ul class="flex flex-col">
                <li v-if="!$v.user.password.required">&bull; Password is required</li>
                <li v-if="!$v.user.password.minLength">&bull; Must have 5+ characters</li>
                <li v-if="!$v.user.password.uppercase">&bull; Must have one uppercase</li>
                <li v-if="!$v.user.password.lowercase">&bull; Must have a lowercase</li>
                <li v-if="!$v.user.password.number">&bull; Must have one number</li>
                <li v-if="!$v.user.password.specialCharacter">&bull; Must have one special character [!@#$%]</li>
              </ul>
            </div>
          </div>
          <!-- Confirm Password -->
          <div class="space-y-1">
            <div class="relative">
              <label class="text-sm text-gray-600">Confirm Password</label>
              <input  v-model="user.confirmPassword"
                      :class="[submitted &&  $v.user.confirmPassword.$error ? 'is-invalid' : 'focus:ring-green-400']" 
                      class="text-sm w-full py-2 border border-gray-300 rounded focus:outline-none pl-4 pr-8 focus:ring-2 transition ease-in-out duration-200 focus:border-gray-100" 
                      :type="[!isPassword ? 'password' : 'text']" />
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
            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
              <span v-if="!$v.user.confirmPassword.sameAsPassword">Confirm password confirmation does not match</span>
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <button @click.prevent="onRegister" class="text-sm font-medium w-full bg-green-500 py-2 border-none text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase on ease-in-out duration-200">
            Create account
          </button>
          <nuxt-link to="/" @click.prevent class="block text-center text-sm font-medium w-full border border-green-500 py-2 text-green-500 rounded focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase hover:bg-green-50 focus:outline-none transiton ease-in-out duration-200">
            Back
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import countries from '~/static/countries.json'
  import { required, email, minLength, sameAs, numeric } from "vuelidate/lib/validators"
  export default {
    head: {
      title: 'Registration - Grace wealthness'
    },
    components: {
      ErrorIcon: () => import('~/components/ErrorIcon')
    },
    data () {
      return {
        countries: [],
        user: {
          name: '',
          gender: '',
          country: '',
          contact: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: ''
        },
        submitted: false,
        isPassword: false
      }
    },
    validations: {
      user: {
        name: { required, minLength: minLength(3) },
        gender: { required },
        country: { required },
        contact: { required, numeric },
        email: { required, email },
        username: { required, minLength: minLength(4) },
        password: { 
          required, 
          minLength: minLength(5),
          uppercase: function(value) {
            return /[A-Z]/.test(value)
          },
          lowercase: function(value) {
            return /[a-z]/.test(value)
          },
          number: function(value) {
            return /[0-9]/.test(value)
          },
          specialCharacter: function(value) {
            return /[#?!@$%^&*-]/.test(value)
          }
        },
        confirmPassword: { sameAsPassword: sameAs('password') }
      }
    },
    methods: {
      countriesData () {
        countries.forEach((element) => {
          this.countries.push(element.nationality)
        })
      },
      onRegister () {
        this.submitted = true

        // stop here if form is invalid
        this.$v.$touch()
        if (this.$v.$invalid) return;

        

        alert('Good Job!!')
      }
    },
    created () {
      this.countriesData()
    }
  }
</script>