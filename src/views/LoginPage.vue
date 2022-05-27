<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="3">
            <ion-card>
              <form action="" @submit.prevent="login">
                <ion-item>
                  <ion-label v-if="v$.email.$error" position="floating" color="danger">Invalid Email</ion-label>
                  <ion-label v-else position="floating">Email</ion-label>
                  <ion-input type="email" v-model="loginForm.email"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label v-if="v$.password.$error" position="floating" color="danger">Invalid Password</ion-label>
                  <ion-label v-else position="floating">Password</ion-label>
                  <ion-input type="password" v-model="loginForm.password"></ion-input>
                </ion-item>
                <ion-item class="ion-float-right">
                  <ion-button type="submit">Login</ion-button>
                </ion-item>
              </form>
            </ion-card>
            <ion-toast :is-open="apiError.error" :message="apiError.message" :duration="2000" color="warning"
              @didDismiss="setOpen(false)">
            </ion-toast>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonItem,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonToast,
} from '@ionic/vue';
import { reactive, computed } from '@vue/reactivity';
import router from '@/router';
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { changeKey } from '../store/render'
import { setLogged } from '../store/auth'
import { watchEffect } from 'vue';


const apiError = reactive({
  error: false,
  message: ''
})

const loginForm = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka'
})

const rules = () => {
  return {
    email: { required, email },
    password: { required },
  }
}

const v$ = useValidate(rules, loginForm)
watchEffect(() => {
  v$.value.$validate()
})

const setOpen = (isOpen) => {
  apiError.error = isOpen
}


const login = async () => {
  console.log('asd');

  if (v$.value.$error) { return }

  try {
    const data = await axios.post('https://reqres.in/api/login', {
      "email": loginForm.email,
      "password": loginForm.password
    })


    changeKey()
    setLogged()
    router.push('/')
  } catch (error) {
    setOpen(true)
    apiError.message = 'user not found'
  }
}
</script>

<style scoped>
</style>
