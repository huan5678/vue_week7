<script>
import { ModalsContainer } from 'vue-final-modal';

export default {
  name: 'App',
  components: {
    ModalsContainer,
  },
};
</script>
<template>
  <router-view />
  <modals-container></modals-container>
</template>
