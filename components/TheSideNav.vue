<template>
  <div class="flex flex-col justify-center py-14 space-y-2">
    <div class="flex flex-col items-center">
      <div class="flex-shrink-0 px-0 md:px-4">
        <img class="h-8 w-8 fill-current md:h-28 md:w-28 rounded-full border" src="https://bvusolution.com/images/img-profile-default.jpg" alt="avatar">
      </div>
      <div class="hidden md:block text-center">
        <a href="#" class="block font-medium text-lg text-green-600 pt-1">Joseph Beronio</a>
        <a href="#" class="block text-sm text-gray-400 hover:underline">josephberonio@gmail.com</a>
      </div>
    </div>
    <ul class="divide-y divide-gray-50 py-5">
      <li v-for="(link, i) in links" 
          :key="i" 
          @click.prevent="setlink = link.title"
          class="hover:bg-green-50">
        <nuxt-link  :to="link.to"
                    class="flex justify-center md:justify-start items-center space-x-6 cursor-pointer py-3 pl-0 md:pl-10 transition ease-in-out duration-150"
                    :class="`${link.title === setlink ? 'border-green-500' : 'border-transparent opacity-90'} border-l-0 md:border-l-4`">
          <span v-html="`${link.title === setlink ? link.iconActive : link.icon}`" :class="`${link.title === setlink ? 'text-green-500' : 'text-gray-500'}`"></span>
          <span :class="[`${link.title === setlink ? 'text-green-500 font-normal' : 'text-gray-500 font-light'}`, `hidden md:block`]">{{ link.title }}</span>
        </nuxt-link>
      </li>
      <li class="flex justify-center md:justify-start items-center space-x-6 cursor-pointer py-3 pl-0 md:pl-11 hover:bg-green-50 transition ease-in-out duration-150" @click.prevent="onLogout">
        <span>
          <svg class="w-6 h-6 fill-current text-gray-500" viewBox="0 0 512 512"><path d="M0 121v248c0 34 28 62 62 62h201c34 0 62-28 62-62v-40a12 12 0 10-25 0v40c0 21-17 38-37 38H62c-21 0-38-17-38-38V121c0-21 17-38 38-38h201c20 0 37 17 37 38v40a12 12 0 1025 0v-40c0-34-28-62-62-62H62C28 59 0 87 0 121z"/><path d="M385 338l9 3 9-3 84-84c4-5 4-13 0-18l-84-83c-5-5-13-5-18 0s-4 12 0 17l63 63H219a12 12 0 100 24h229l-63 63c-4 5-4 13 0 18z"/></svg>
        </span>
        <span class="text-gray-500 font-light hidden md:block">Logout</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        setlink: 'Dashboard',
        links: [
          {
            icon: '<svg class="w-5 h-5 fill-current" viewBox="0 0 511 512"><path d="M499 223L290 14a47 47 0 00-67 0L14 223a47 47 0 0033 80h8v154c0 30 25 55 55 55h82c8 0 15-7 15-15V376c0-13 12-25 25-25h49c13 0 25 12 25 25v121c0 8 6 15 15 15h81c31 0 56-25 56-55V303h7a47 47 0 0033-80zm-22 45c-3 3-7 5-12 5h-22c-9 0-15 7-15 15v169c0 14-12 25-26 25h-66V377c0-31-25-56-55-56h-49c-30 0-55 25-55 56v105h-67c-13 0-25-11-25-25V288c0-8-6-15-15-15H48h-1c-4 0-8-2-12-5-6-7-6-17 0-24h1L244 35a17 17 0 0125 0l208 209c7 7 7 17 0 24zm0 0"/></svg>',
            iconActive: '<svg class="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M498 223L289 14a47 47 0 00-66 0L14 223a47 47 0 0033 80h8v154c0 30 25 55 55 55h82c8 0 15-7 15-15V377c0-14 11-26 25-26h48c14 0 25 12 25 26v120c0 8 7 15 15 15h82c30 0 55-25 55-55V303h8a47 47 0 0033-80zm0 0"/></svg>',
            title: 'Dashboard',
            to: '/member'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current" viewBox="0 0 511 512"><path d="M435 139v-16c0-29-23-52-51-54-59-3-104-22-143-60h-1a33 33 0 00-44 0h-1c-39 38-84 57-143 60-28 2-51 25-51 54v16c-2 60-3 135 22 203 14 37 34 70 62 96a324 324 0 00133 74 37 37 0 0012-2c49-17 90-41 121-72 27-26 48-59 62-96 25-68 24-143 22-203zm-50 193a248 248 0 01-169 150c-85-30-139-79-165-150-23-63-22-131-20-192v-17c0-12 10-23 23-24a234 234 0 00162-69l4 1a234 234 0 00162 68c13 1 23 12 23 24v17c2 60 3 129-20 192zm0 0"/><path d="M218 128a128 128 0 100 256 128 128 0 000-256zm0 226a98 98 0 110-196 98 98 0 010 196zm0 0"/><path d="M255 216l-60 60-16-16a15 15 0 00-21 21l27 27a15 15 0 0021 0l70-70a15 15 0 00-21-22zm0 0"/></svg>',
            iconActive: '<svg class="w-6 h-6 fill-current" viewBox="0 0 511 512"><path d="M218 158a98 98 0 100 196 98 98 0 000-196zm58 80l-70 70a15 15 0 01-21 0l-27-27a15 15 0 1121-21l16 16 60-60a15 15 0 1121 22zm0 0"/><path d="M435 139v-16c0-29-23-52-51-54-59-3-104-22-143-60h-1a33 33 0 00-44 0h-1c-39 38-84 57-143 60-28 2-51 25-51 54v16c-2 60-3 135 22 203 14 37 34 70 62 96a324 324 0 00133 74 37 37 0 0012-2c49-17 90-41 121-72 27-26 48-59 62-96 25-68 24-143 22-203zM218 384a128 128 0 110-256 128 128 0 010 256zm0 0"/></svg>',
            title: 'Code Vault',
            to: '/member/codevault'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M73 336c0 13 5 24 14 33a94 94 0 00-22 63c0 8 7 15 15 15h80c8 0 15-7 15-15 0-26-8-49-22-63a47 47 0 00-33-80c-26 0-47 21-47 47zm23 81c4-20 14-34 24-34s20 14 24 34zm41-81a17 17 0 11-34 0 17 17 0 0134 0z"/><path d="M496 225h-89v-97c0-8-7-15-15-15H271V15a15 15 0 00-30 0v98H120c-8 0-15 7-15 15v97H16c-8 0-15 7-15 15v257c0 8 7 15 15 15h208c8 0 15-7 15-15V240c0-8-7-15-15-15h-89v-82h242v82h-89c-8 0-15 7-15 15v257c0 8 7 15 15 15h208c8 0 15-7 15-15V240c0-8-7-15-15-15zM209 482H31V255h178zm272 0H303V255h178z"/><path d="M345 336c0 13 5 24 14 33a94 94 0 00-22 63c0 8 7 15 15 15h80c8 0 15-7 15-15 0-26-8-49-22-63a47 47 0 00-33-80c-26 0-47 21-47 47zm23 81c4-20 14-34 24-34s20 14 24 34zm41-81a17 17 0 11-34 0 17 17 0 0134 0z"/></svg>',
            iconActive: '<svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M120 383c-10 0-20 14-24 34h48c-4-20-14-34-24-34z"/><circle cx="120" cy="336" r="17"/><path d="M224 225H16c-8 0-15 7-15 15v257c0 8 7 15 15 15h208c8 0 15-7 15-15V240c0-8-7-15-15-15zm-64 222H80c-8 0-15-7-15-15 0-26 8-49 22-63a47 47 0 0133-80 47 47 0 0133 80c14 14 22 37 22 63 0 8-7 15-15 15zM135 143h242v52h30v-67c0-8-7-15-15-15H271V15a15 15 0 00-30 0v98H120c-8 0-15 7-15 15v67h30z"/><circle cx="392" cy="336" r="17"/><path d="M392 383c-10 0-20 14-24 34h48c-4-20-14-34-24-34z"/><path d="M496 225H288c-8 0-15 7-15 15v257c0 8 7 15 15 15h208c8 0 15-7 15-15V240c0-8-7-15-15-15zm-64 222h-80c-8 0-15-7-15-15 0-26 8-49 22-63a47 47 0 0133-80 47 47 0 0133 80c14 14 22 37 22 63 0 8-7 15-15 15z"/></svg>',
            title: 'Genealogy',
            to: '/member/genealogy'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M420 167l-54-55V47c0-5-5-9-10-9h-79l-31-27a50 50 0 00-64 1l-31 26H71c-5 0-10 4-10 9v66L7 167l-2 7v204c0 27 22 50 50 50h318c28 0 50-23 50-50V174c0-3-1-6-3-7zm-54-27l32 33-32 24v-57zM195 27c11-9 27-9 38 0l13 11h-64l13-11zM81 58h265v154l-114 84c-11 8-25 8-36 0L81 211V58zm-20 83v55l-31-23 31-32zm342 236c0 17-13 31-30 31H55c-17 0-30-14-30-30V194l159 118c18 14 42 14 60 0l159-118v183z"/><path d="M306 147c-6-29-27-48-54-48-12 0-25 5-38 13-13-9-26-13-38-13-27 0-48 19-54 48-4 21 1 45 15 65 15 23 39 42 71 55l6 1 6-1c70-29 93-81 86-120zm-92 101c-58-24-78-66-72-97 4-20 17-32 34-32 10 0 21 5 32 13 4 3 9 3 12 0 11-8 22-13 32-13 17 0 30 12 34 31 6 31-14 73-72 98z"/></svg>',
            iconActive: '<svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M9 153l32 23v-55zM266 130c-4-19-17-31-34-31-10 0-21 5-32 13-3 3-8 3-12 0-11-8-22-13-33-13-17 0-30 12-33 32-6 31 14 73 72 97 58-25 78-67 72-98zM346 120v57l32-24zM213 7c-11-9-27-9-38 0l-13 11h64L213 7z"/><path d="M61 38v153l115 85c11 8 25 8 36 0l114-84V38H61zm139 209h-12c-32-13-56-32-71-55a90 90 0 01-15-65c6-29 27-48 53-48 13 0 26 5 39 13 13-8 26-13 38-13 27 0 48 19 54 48 7 39-16 91-86 120z"/><path d="M224 292a50 50 0 01-59 0L4 174v183c0 17 13 30 30 31h318c17-1 30-14 30-31V174L224 292z"/></svg>',
            title: 'Invite Friends',
            to: '/member/invite'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><circle cx="372.4" cy="174.5" r="23.3"/><circle cx="139.6" cy="174.5" r="23.3"/><path d="M256 105a70 70 0 000 140c38-1 70-32 70-70 0-39-32-70-70-70zm0 116c-26 0-47-21-47-46a47 47 0 1193 0c1 25-20 46-46 46z"/><path d="M477 12H35C15 12 0 27 0 47v256c0 19 15 34 35 34h151c7 0 12-4 12-11s-5-12-12-12H35c-7 0-12-4-12-11V47c0-7 5-12 12-12h442c7 0 12 5 12 12v186c0 7 4 11 11 11s12-4 12-11V47c0-20-15-35-35-35z"/><path d="M453 81c-7 0-12-4-12-11s-5-12-12-12H81c-7 0-11 5-11 12s-5 11-12 11-11 5-11 12v163c0 7 4 12 11 12s12 4 12 11 4 12 11 12h117c7 0 11-5 11-12s-4-11-11-11H91c-4-11-12-18-21-21V102c10-3 17-11 21-21h329c4 11 12 18 21 21v96c0 7 5 11 12 11s11-4 11-11V93c0-7-4-12-11-12z"/><path d="M407 221c-14 0-28 4-39 9-6 3-8 10-6 16s9 8 15 5c9-4 20-7 30-7 39 0 70 32 70 70 0 14-5 28-13 40-3 6-2 13 3 16l7 2c3 0 7-1 9-4 10-15 16-34 16-54 1-51-41-93-92-93z"/><path d="M407 279c-7 0-11 5-11 12v12c0 7 4 11 11 11s12-4 12-11v-12c0-7-5-12-12-12zM369 272a93 93 0 00-160 65c0 26 11 49 28 67 3 2 5 3 9 3s5-1 8-3c4-5 4-12 0-17a70 70 0 1199-99c4 5 11 5 16 1s5-12 0-17z"/><path d="M361 314c-51 0-93 42-93 93s42 93 93 93 93-42 93-93-42-93-93-93zm0 163a70 70 0 010-140c38 0 70 32 70 70 0 39-32 70-70 70z"/><path d="M361 372c-7 0-12 5-12 12v47c0 7 5 11 12 11s11-4 11-11v-47c0-7-4-12-11-12z"/><circle cx="302.5" cy="314.2" r="11.6"/></svg>',
            iconActive: '<svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M489 326H23c-13 0-23-11-23-23V47c0-13 10-24 23-24h466c13 0 23 11 23 24v256c0 12-10 23-23 23z" fill="#0e9347"/><path d="M431 233c-27 0-52 13-66 33-11-5-24-10-39-10-41 0-75 30-80 70h243c11 0 21-8 23-20-5-41-40-73-81-73z" fill="#0d8944"/><path d="M442 303H70c0-26-21-47-47-47V93c26 0 47-21 47-46h372c0 25 21 46 47 46v163c-26 0-47 21-47 47z" fill="#3bb54a"/><g fill="#0e9347"><path d="M431 233c-27 0-52 13-66 33-11-5-24-10-39-10-33 0-61 19-73 47h189c0-26 20-46 46-47a84 84 0 00-57-23z"/><ellipse cx="256" cy="174.5" rx="93.1" ry="104.7"/><circle cx="116.4" cy="174.5" r="23.3"/><circle cx="395.6" cy="174.5" r="23.3"/></g><path d="M268 163h-24c-7 0-11-5-11-12s4-11 11-11h35c7 0 12-5 12-12s-5-12-12-12h-11c0-7-5-11-12-11s-12 4-12 11c-19 0-35 15-35 35s16 35 35 35h24c7 0 11 5 11 12s-4 11-11 11h-35c-7 0-12 5-12 12s5 12 12 12h11c0 7 5 11 12 11s12-4 12-11c19 0 35-15 35-35s-16-35-35-35z" fill="#89c763"/><circle cx="302.5" cy="337.5" r="81.5" fill="#ffca5d"/><circle cx="407.3" cy="314.2" r="81.5" fill="#f6b545"/><path d="M407 233a81 81 0 100 163c46 0 82-36 82-82s-36-81-82-81zm0 139c-32 0-58-25-58-58s26-58 58-58 58 26 58 58-25 58-58 58z" fill="#ffcb5b"/><path d="M407 394c46 2 82-36 82-80h-1c-6 0-11 5-12 11a70 70 0 01-58 59c-6 0-11 5-11 10z" fill="#f6b545"/><path d="M407 234c-45-1-81 36-81 80h1c6 0 10-4 12-10a70 70 0 0158-60c6 0 10-4 10-10z" fill="#ffe27a"/><path d="M357 322a58 58 0 0196-44 57 57 0 00-46-22c-32 0-58 26-58 58 0 19 8 34 21 44-8-9-13-22-13-36z" fill="#f19920"/><path d="M442 350l-3-1c-3-2-3-6 0-8 7-7 10-18 10-27 0-3 2-6 6-6 3 0 6 3 6 6 0 13-5 26-13 35l-6 1z" fill="#ffcb5b"/><g fill="#f19920"><path d="M407 349c-7 0-11-5-11-12v-46c0-7 4-12 11-12s12 5 12 12v46c0 7-5 12-12 12z"/><path d="M450 383c-8-29-29-53-56-63-4-27-22-50-44-64a84 84 0 00-23 57c0 45 36 81 81 81 16 2 30-3 42-11z"/></g><g fill="#e78825"><path d="M370 358c-8-10-14-23-14-37 0-16 7-31 19-42l-7-8a57 57 0 00-19 43c0 19 8 34 21 44zM396 321v16c0 7 4 12 11 12s12-5 12-12v-2c-7-6-15-10-23-14z"/></g><path d="M450 383c-2-8-4-15-9-22-9 7-21 11-34 11-32 0-58-25-58-58 0-17 7-32 19-43-6-6-12-10-19-14a84 84 0 00-23 57 81 81 0 00124 69z" fill="#f6b545"/><path d="M447 372c-8 6-19 10-29 12-6 1-11 6-11 12 17 0 31-5 43-13l-3-11z" fill="#f19920"/><path d="M349 257a84 84 0 00-23 57h1c6 0 10-4 12-10 2-17 10-31 21-41-4-1-7-4-11-6z" fill="#ffcb5b"/><circle cx="302.5" cy="337.5" r="81.5" fill="#f6b545"/><path d="M291 396c0 8 1 15 3 23h9a81 81 0 0078-105h-9c-45 0-81 36-81 82z" fill="#f19920"/><path d="M303 256a81 81 0 100 163c45 0 81-36 81-82s-36-81-81-81zm0 140c-33 0-59-26-59-59s26-58 59-58 58 26 58 58-26 59-58 59z" fill="#ffcb5b"/><path d="M303 418c45 1 81-36 81-81h-1c-6 0-11 5-12 11a70 70 0 01-58 59c-6 0-10 5-10 11z" fill="#f6b545"/><path d="M303 257c-46-1-82 36-82 80h1c6 0 11-4 12-10a70 70 0 0158-59c6 0 11-5 11-11z" fill="#ffe27a"/><path d="M253 346a58 58 0 0195-45 57 57 0 00-45-22c-33 0-59 26-59 58 0 19 9 34 21 45-8-10-12-22-12-36z" fill="#f19920"/><path d="M337 374c-1 0-2 0-3-2-2-2-2-5 0-8 7-7 10-17 10-27 0-3 3-5 6-5 4 0 6 2 6 5 0 13-5 26-13 35-2 2-4 2-6 2z" fill="#ffcb5b"/><path d="M303 372c-7 0-12-4-12-11v-47c0-7 5-11 12-11s11 4 11 11v47c0 7-4 11-11 11z" fill="#f19920"/><g fill="#f6b545"><path d="M356 315c2 7 5 14 5 22 0 33-26 59-58 59-4 0-9 0-12-2v2c0 8 1 15 3 23h9a81 81 0 0078-105h-9l-16 1z"/><circle cx="360.7" cy="407.3" r="81.5"/></g><path d="M361 326a81 81 0 100 163c45 0 81-36 81-82s-36-81-81-81zm0 139c-33 0-58-25-58-58s25-58 58-58 58 26 58 58-26 58-58 58z" fill="#ffcb5b"/><path d="M361 488c45 1 81-37 81-81h-1c-6 0-10 5-12 11a70 70 0 01-58 59c-6 0-10 5-10 11z" fill="#f6b545"/><path d="M361 327c-46-1-82 36-82 80h1c6 0 11-4 12-10a70 70 0 0158-60c6 0 11-4 11-10z" fill="#ffe27a"/><path d="M311 415a58 58 0 0195-44 57 57 0 00-45-22c-33 0-58 26-58 58 0 19 8 34 20 44-8-9-12-22-12-36z" fill="#f19920"/><path d="M396 443l-4-1c-2-2-2-6 0-8 7-7 11-17 11-27 0-3 2-6 5-6s6 3 6 6c0 13-4 26-13 35l-5 1z" fill="#ffcb5b"/><path d="M361 442c-7 0-12-4-12-11v-47c0-7 5-12 12-12s11 5 11 12v47c0 7-4 11-11 11z" fill="#f19920"/></svg>',
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