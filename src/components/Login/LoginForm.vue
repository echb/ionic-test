<template>
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
</template>
<script setup>
import {
  IonCard,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonToast,
} from '@ionic/vue';

import {
  loginForm,
  apiError,
  login,
  setOpen,
  v$
} from './Login'

</script>

<style scoped>
</style>
