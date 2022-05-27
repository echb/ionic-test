<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size-lg="3" size-md="6" size="12">
            <login-form></login-form>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue';
import LoginForm from "../components/Login/LoginForm.vue";

</script>

<style scoped>
</style>
