<template>
<div id="console-main">
  <div class="frameCenter">
    <div class="frameCenterBox">
      <div class="wrapper">
        <div class="wrapper_box container">
          <div class="d-flex flex-column align-content-center">
            <div class="mb-3">
              <img src="@/assets/img/img2.jpg" class="pb-5"/>
              <h5 class="card-title text-center">로그인</h5>
            </div>
            <div class="pr-5 pl-5">
              <div class="form-group">
                <div class="input-group text-secondary small">
                  Email
                </div>
                <div class="input-group" ref="email">
                  <div class="input-group-prepend">
                      <span class="input-group-text"> <i class="fa fa-envelope-o fa-fw"></i> </span>
                    </div>
                  <input v-model="email" class="form-control form-control-sm" placeholder="email@gmail.com" type="email">
                </div>
                </div>
                <div class="form-group">
                  <div class="input-group text-secondary small">
                    비밀번호
                  </div>
                  <div class="input-group" ref="pwd">
                    <div class="input-group-prepend">
                      <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input v-model="pwd" class="form-control form-control-sm" placeholder="**********" type="password">
                  </div>
                </div>
                <div v-if="error.length" class="pb-3 txterr">
                  {{error}}
                </div>
            </div>
            <div class="pr-5 pl-5 pb-5">
              <p class="text-right"><a href="#" class="text-secondary link-secondary">비밀번호 찾기</a></p>
            </div>
            <div class="pr-5 pl-5">
              <button v-on:click="btnLogin" class="btn btn-primary btn-block">로그인</button>
            </div>
            <div class="p-3">
              <p class="small">
                계정이 없으신가요? <a href="#" v-on:click="btnRegister" class="text-secondary link-secondary"><u>가입하기</u></a>
              </p>
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
  name: 'Login',
  data: function () {
    return {
      email: '',
      pwd: '',
      error: ''
    }
  },
  computed: {
    userLoggedIn () {
      const loggedIn = localStorage.getItem('userLoggedIn')
      return loggedIn
    }
  },
  watch: {
    email () {
      if (this.email.trim() !== '') {
        this.$refs.email.classList.remove('error')
      }
      this.error = ''
    },
    pwd () {
      if (this.pwd.trim() !== '') {
        this.$refs.pwd.classList.remove('error')
      }
      this.error = ''
    }
  },
  methods: {
    btnLogin () {
      if (this.email.trim() === '') {
        this.$refs.email.classList.add('error')
      }
      if (this.pwd.trim() === '') {
        this.$refs.pwd.classList.add('error')
      }
      if (!this.checkEmail()) {
        return
      }
      if (this.email.trim() !== 'test@luxpmsoft.com' && this.pwd.trim() !== 'test1234!') {
        this.error = 'Invalid user account!'
        return
      }
      localStorage.setItem('userLoggedIn', this.email)
      this.$router.push({ name: 'home', path: '/' })
    },
    btnRegister () {
      this.$router.push({ name: 'register', path: '/register' })
    },
    checkEmail () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const ret = re.test(String(this.email).toLowerCase())
      if (ret) this.error = ''
      else this.error = 'Invalid email address.'
      return ret
    }
  }
}
</script>
