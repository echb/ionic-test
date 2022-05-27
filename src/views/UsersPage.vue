<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Users</ion-title>
        <ion-button @click="logOut" slot="end" color="danger">Log Out</ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <users-content :key="componentKey"></users-content>
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
  IonButton,
} from '@ionic/vue';

import { componentKey } from '../store/render.js'
import { logOutHandle as logOut } from '../components/Users/Users'
import UsersContent from '../components/Users/UsersContent.vue'

</script>

<style scoped>
</style>
