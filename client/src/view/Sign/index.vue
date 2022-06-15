<template>
  <div class="sign">
    <div class="sign_content">
      <h1 class="sign_content_title">
        图书管理后台注册
      </h1>
      <div class="sign_content_form">
        <a-form layout :model="signForm" @submit="handleSign">
          <a-form-item v-for="item in itemInput" :validate-trigger="item.trigger" :rules="item.rules">
            <a-input v-model="signForm[item.filed]" :placeholder="item.placeholder"></a-input>
          </a-form-item>
          <a-form-item>
            <div class="sign_content_form_item">
              <a-button type="primary" html-type="submit">
                注册
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {fontSize} from "../../assets/csstypes";
import useSign from "./useSign";
const {itemInput,signForm,handleSign} = useSign()
</script>

<style scoped lang="scss">
.sign{
  background: url("../../assets/sign.jpg") no-repeat center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &_content{
    width: 50%;
    height: 100vh;
    &_title{
      font-size: v-bind(fontSize);
      letter-spacing: 10px;
      text-align: center;
    }
    &_form{
      width: 50%;
      height: 300px;
      margin: 100px auto 0;
      background-color: rgba(70,70,70,.5);
      &_item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
