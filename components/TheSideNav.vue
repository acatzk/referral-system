<template>
  <div class="flex flex-col items-center py-8 space-y-2">
    <div class="flex-shrink-0  px-4">
      <img class="h-28 w-28 rounded-full border" src="https://bvusolution.com/images/img-profile-default.jpg" alt="avatar">
    </div>
    <div class="text-center space-y-4">
      <div>
        <span class="font-medium text-base text-green-600">Joseph Beronio</span>
        <span class="text-sm text-gray-400">josephberonio@gmail.com</span>
      </div>
      <ul>
        <li v-for="(link, i) in links"  :key="i" @click.prevent="setlink = link.title">
          <nuxt-link  :to="link.to"
                      class="flex items-center space-x-6 cursor-pointer py-3 pl-10 hover:bg-gray-200 transition ease-in-out duration-150"
                      :class="`${link.title === setlink ? 'border-green-500' : 'border-transparent'} border-l-4`">
            <span v-html="link.icon" :class="`${link.title === setlink ? 'text-green-500' : 'text-gray-500'}`"></span>
            <span :class="`${link.title === setlink ? 'text-green-500' : 'text-gray-500'}`">{{ link.title }}</span>
          </nuxt-link>
        </li>
        <li class="flex items-center space-x-6 cursor-pointer py-3 pl-11 hover:bg-gray-200 transition ease-in-out duration-150" @click.prevent="onLogout">
          <span>
            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </span>
          <span class="text-gray-500">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        setlink: 'Dashboard',
        links: [
          {
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
            title: 'Dashboard',
            to: '/member'
          },
          {
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>',
            title: 'Code Vault',
            to: '/member/codevault'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497 421h-46v-75c0-24.813-20.187-45-45-45H271v-30h105c24.813 0 45-20.187 45-45V45c0-24.813-20.187-45-45-45H136c-24.813 0-45 20.187-45 45v181c0 24.813 20.187 45 45 45h105v30H106c-24.813 0-45 20.187-45 45v75H15c-8.284 0-15 6.716-15 15v61c0 8.284 6.716 15 15 15h121c8.284 0 15-6.716 15-15v-61c0-8.284-6.716-15-15-15H91v-75c0-8.271 6.729-15 15-15h135v90h-45c-8.284 0-15 6.716-15 15v61c0 8.284 6.716 15 15 15h120c8.284 0 15-6.716 15-15v-61c0-8.284-6.716-15-15-15h-45v-90h135c8.271 0 15 6.729 15 15v75h-45c-8.284 0-15 6.716-15 15v61c0 8.284 6.716 15 15 15h121c8.284 0 15-6.716 15-15v-61c0-8.284-6.716-15-15-15zm-376 30v31H30v-31h91zM361 30h15c8.271 0 15 6.729 15 15v15h-30V30zM121 45c0-8.271 6.729-15 15-15h195v30H121V45zm180 406v31h-90v-31h90zM136 241c-8.271 0-15-6.729-15-15V90h270v136c0 8.271-6.729 15-15 15H136zm346 241h-91v-31h91v31z"/></svg>',
            title: 'Genealogy',
            to: '/member/genealogy'
          },
          {
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg>',
            title: 'Invite Friends',
            to: '/member/invite'
          },
          {
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
            title: 'Cashout',
            to: '/member/member_cashout'
          }
        ]
      }
    },
    methods: {
      onLogout () {
        this.$router.push('/')
      }
    }
  }
</script>