<template>
  <div id="app">
    <AppHeader />
	<div class="container">
    <router-view></router-view>
	</div>
    <NotificationsList />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import NotificationsList from './components/NotificationsList.vue';

export default {
  name: 'App',
  components: {
   AppHeader,
   NotificationsList
  }
}
</script>

<style>
</style>
