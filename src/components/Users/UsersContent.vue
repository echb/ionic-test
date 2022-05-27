<template>
  <UsersList :users="users"></UsersList>
  <div v-if="page <= TOTALPAGES">
    <ion-button @click="loadMore" expand="block">load more</ion-button>
  </div>
</template>

<script setup>
import {
  IonButton,
} from '@ionic/vue';

import { onMounted, onUnmounted } from 'vue';
import UsersList from './UsersList.vue';
import { page, TOTALPAGES, users, loadMore, logOutHandle } from './Users'

onMounted(() => {
  loadMore()
})


</script>

<style scoped>
</style>
