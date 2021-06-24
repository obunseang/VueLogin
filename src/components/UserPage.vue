<template>
<div id="console-main">
  <div class="frameCenter">
    <div class="frameCenterBox">
      <div class="wrapper">
        <div class="wrapper_box container">
          <div class="d-flex flex-column align-content-center">
            <div class="mb-3">
              <img src="@/assets//img/img1.jpg" height="10%"/>
            </div>
            <div class="pb-2">
              <p>Hi! {{getUser}}</p>
              <div class="pb-2 small text-secondary">
                <p>Have a good day.</p>
              </div>
            </div>
            <div class="pr-5 pl-5">
              <button class="btn btn-primary btn-block" v-on:click="btnLogout">
                Logout
              </button>
            </div>
            <div class="mt-4 pr-5 pl-5">
              <button class="btn btn-block btn-light btn-sm bg-transparent border-0" v-on:click="btnLogout"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'UserPage',
  computed: {
    getUser () {
      return localStorage.getItem('userLoggedIn')
    }
  },
  methods: {
    btnLogout () {
      localStorage.removeItem('userLoggedIn')
      location.reload()
    }
  }
}
</script>
