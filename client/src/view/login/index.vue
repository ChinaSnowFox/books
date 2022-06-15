<template>
<div class="login">
  <div class="app">
    <div class="login_title">
      <h1>
        图书管理后台登录
      </h1>
    </div>
    <div class="login_form">
      <a-form layout :model="forms" @submit="hanledSubmit" :rules="rules">
        <a-form-item field="username" :validate-trigger="['blur']">
          <a-input v-model="forms.username" placeholder="请输入登录账号" />
        </a-form-item>
        <a-form-item field="password" :validate-trigger="['blur']">
          <a-input v-model="forms.password" placeholder="请输入登录密码" />
        </a-form-item>
        <a-form-item field="code" :validate-trigger="['blur']">
          <a-input v-model="forms.code" placeholder="请输入验证码" style="margin-right: 10px"/>
          <div v-html="svg" @click="handleSvg" class="login_form_code"></div>
        </a-form-item>
        <a-form-item>
          <div class="login_form_button">
            <a-button html-type="submit">登录</a-button>
            <a-button @click="sign">注册</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {fontSize} from "../../assets/csstypes";
import {useLogin} from "./useLogin";
const {forms,hanledSubmit,rules,svg,handleSvg,sign} = useLogin()
</script>

<style scoped lang="scss">
.login{
  background: url("../../assets/background.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .app{
    height: 800px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &_title{
    height: 300px;
    h1{
      letter-spacing: 10px;
      font-size: v-bind(fontSize);
      color: aqua;
      text-shadow: 0px 0px 5px #ccc;
    }
  }
  &_form{
    width: 300px;
    height: 200px;
    background-color: rgba(255,255,200,.5);
    &_code{
      background-color: #eeeeee;
      height: 32px;
    }
    &_button{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
