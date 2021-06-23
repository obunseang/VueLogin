<template>
  <div v-if="userLoggedIn">
    <UserPage />
  </div>
  <div v-else>
    <Welcome />
  </div>
</template>
<script>
import Welcome from '@/components/Welcome.vue'
import UserPage from '@/components/UserPage.vue'
export default {
  name: 'Home',
  components: {
    Welcome,
    UserPage
  },
  computed: {
    userLoggedIn () {
      const loggedIn = localStorage.getItem('userLoggedIn')
      return loggedIn
    }
  }
}
</script>
