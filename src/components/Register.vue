<template>
<div id="console-main">
    <div class="frameCenter">
          <div class="frameCenterBox">
            <div class="wrapper">
              <div class="wrapper_box container">
                <div class="d-flex flex-column align-content-center">
                  <div>
                    <img src="@/assets/img/img2.jpg"/>
                    <h5 class="card-title text-center">회원가입</h5>
                  </div>
                  <div class="pr-5 pl-5">
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          이름
                        </span>
                        <input ref="uname" v-model="uname"  class="form-control form-control-sm" placeholder="이체민" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          휴대폰 번호
                        </span>
                        <input class="form-control form-control-sm" placeholder="+82 000 00000000" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          생년월일
                        </span>
                        <input ref="dob" v-model="dob"  class="form-control form-control-sm" placeholder="mm-dd-yyyy" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          Email
                        </span>
                        <input ref="email" v-model="email" class="form-control form-control-sm" placeholder="jonh.doe@mail.com" type="email">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          비밀번호
                        </span>
                        <input ref="pwd" maxlength="30" v-model="pwd" class="form-control form-control-sm" placeholder="•••••••••" type="password" v-on:keyup='checkPwd'>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          비밀번호 학인
                        </span>
                        <input ref="pwdConfirm" maxlength="30" v-model="pwdConfirm" class="form-control form-control-sm" placeholder="•••••••••" type="password">
                      </div>
                    </div>
                    <div class="form-group form-control-sm pt-2">
                      <div class="row">
                        <div class="col d-flex">
                          <div class="txt-disable input-group-prepend" ref="pwd1">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 8자 이상
                          </div>
                        </div>
                        <div class="col d-flex">
                          <div class="txt-disable input-group-prepend" ref="pwd2">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 하나의 대문자
                          </div>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex">
                          <div class="txt-disable input-group-prepend" ref="pwd3">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 하나의 숫자
                          </div>
                        </div>
                        <div class="col d-flex">
                          <div class="txt-disable input-group-prepend" ref="pwd4">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 하나의 특수문자
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-check pt-4 pb-3">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" id="ck1">
                      <label class="form-check-label small" for="ck1">
                        이용약관에 동의합니다
                      </label>
                    </label>
                  </div>
                  <div class="pr-5 pl-5 form-control-sm">
                    <button class="btn btn-primary btn-block" v-on:click="btnRegister">가입하기</button>
                    <p class=" pt-3">
                      <span v-on:click="goHome" class="btn btn-sm"><i class="fa fa-home" aria-hidden="true"></i></span>
                      이미 계정이 있으신가요? <a href="#" v-on:click="btnLogin" class="text-secondary link-secondary"><u>로그인</u></a>
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
  name: 'Register',
  data: function () {
    return {
      uname: '',
      mobile: '',
      dob: '',
      email: '',
      pwd: '',
      pwdConfirm: ''
    }
  },
  watch: {
    uname () {
      if (this.uname.trim() !== '') {
        this.$refs.uname.classList.remove('error')
      }
    },
    dob () {
      if (this.dob.trim() !== '') {
        this.$refs.dob.classList.remove('error')
      }
    },
    email () {
      if (this.email.trim() !== '') {
        this.$refs.email.classList.remove('error')
      }
    },
    pwd () {
      if (this.pwd.trim() !== '') {
        this.$refs.pwd.classList.remove('error')
      }
    },
    pwdConfirm () {
      if (this.pwdConfirm.trim() !== '') {
        this.$refs.pwdConfirm.classList.remove('error')
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home', path: '/' })
    },
    btnLogin () {
      this.$router.push({ name: 'login', path: '/login' })
    },
    btnRegister () {
      if (!this.checkInfo()) return
      localStorage.setItem('userLoggedIn', this.email)
      this.$router.push({ name: 'home', path: '/' })
    },
    checkInfo () {
      if (this.uname.trim() === '') {
        this.$refs.uname.classList.add('error')
      }
      if (this.dob.trim() === '') {
        this.$refs.dob.classList.add('error')
      }
      if (this.email.trim() === '') {
        this.$refs.email.classList.add('error')
      }
      if (this.pwd.trim() === '') {
        this.$refs.pwd.classList.add('error')
      }
      if (this.pwdConfirm.trim() === '') {
        this.$refs.pwdConfirm.classList.add('error')
      }
      if (!this.checkEmail()) {
        this.$refs.email.classList.add('error')
        return false
      }
      return true
    },
    checkEmail () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const ret = re.test(String(this.email).toLowerCase())
      if (!ret) this.$refs.email.classList.add('error')
      return ret
    },
    checkPwd (e) {
      const pwd = e.target.value
      const r1 = /^[a-zA-Z0-9!@#$%^&*]{8,30}$/
      const r2 = /[A-Z]/
      const r3 = /\d/
      const r4 = /[!@#$%^&*]/
      console.log(pwd)
      if (r1.test(pwd)) {
        this.$refs.pwd1.classList.add('green')
      } else {
        this.$refs.pwd1.classList.remove('green')
      }
      if (r2.test(pwd)) {
        this.$refs.pwd2.classList.add('green')
      } else {
        this.$refs.pwd2.classList.remove('green')
      }
      if (r3.test(pwd)) {
        this.$refs.pwd3.classList.add('green')
      } else {
        this.$refs.pwd3.classList.remove('green')
      }
      if (r4.test(pwd)) {
        this.$refs.pwd4.classList.add('green')
      } else {
        this.$refs.pwd4.classList.remove('green')
      }
    }
  }
}
</script>
