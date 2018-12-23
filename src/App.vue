<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <img alt="Vue logo" src="./assets/logo.png">
    <RemoveForm/>
  </div>
</template>

<script>
import RemoveForm from './components/RemoveForm.vue';

export default {
  name: 'app',
  components: {
    RemoveForm,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
