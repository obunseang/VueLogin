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
                        <input class="form-control form-control-sm" placeholder="이체민" type="text">
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
                        <input class="form-control form-control-sm" placeholder="mm-dd-yyyy" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          Email
                        </span>
                        <input class="form-control form-control-sm" placeholder="jonh.doe@mail.com" type="email">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          비밀번호
                        </span>
                        <input class="form-control form-control-sm" placeholder="**********" type="password">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group text-secondary small">
                          비밀번호 학인
                        </span>
                        <input class="form-control form-control-sm" placeholder="**********" type="password">
                      </div>
                    </div>
                    <div class="form-group form-control-sm pt-2">
                      <div class="row">
                        <div class="col d-flex">
                          <div class="text-secondary input-group-prepend">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 8자 이상
                          </div>
                        </div>
                        <div class="col d-flex">
                          <div class="text-secondary input-group-prepend">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 하나의 대문자
                          </div>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex">
                          <div class="text-secondary input-group-prepend">
                            <i class="fa fa-check-circle"></i>
                          </div>
                          <div class="small pl-2">
                            최소 하나의
                          </div>
                        </div>
                        <div class="col d-flex">
                          <div class="text-secondary input-group-prepend">
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
                    <button class="btn btn-primary btn-block">가입하기</button>
                    <p class="small pt-3">
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
