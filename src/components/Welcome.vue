<template>
<div id="console-main">
  <div class="frameCenter">
    <div class="frameCenterBox">
      <div class="wrapper">
        <div class="wrapper_box container">
          <div class="d-flex flex-column align-content-center">
            <div class="mb-3">
              <img src="@/assets/img/img2.jpg" class="pb-5"/>
              <img src="@/assets//img/img1.jpg" height="10%"/>
            </div>
            <div class="pb-2">
              <p>Stay on the top of your finance</p>
              <div class="pb-2 small text-secondary">
                <p>Financial guidance to help with navigating the new normal.</p>
              </div>
            </div>
            <div class="pr-5 pl-5">
              <button class="btn btn-primary btn-block" v-on:click="btnRegister">
                가입하기
              </button>
            </div>
            <div class="mt-4 pr-5 pl-5">
              <button class="btn btn-block btn-light btn-sm bg-transparent border-0" v-on:click="btnLogin">로그인</button>
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
  name: 'Welcome',
  methods: {
    btnLogin () {
      this.$router.push({ name: 'login', path: '/login' })
    },
    btnRegister () {
      this.$router.push({ name: 'register', path: '/register' })
    }
  }
}
</script>
