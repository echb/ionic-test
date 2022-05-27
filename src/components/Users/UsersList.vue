<template>
  <ion-list>
    <ion-item v-for="user in users" :key="user.id">
      <ion-avatar slot="start">
        <img :src="user.avatar">
      </ion-avatar>
      <ion-label>
        <h2>
          {{ user.email }}
        </h2>
        <p>
          {{ user.last_name }} {{ user.first_name }}
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup>
import {
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/vue';


const props = defineProps(['users']);
</script>