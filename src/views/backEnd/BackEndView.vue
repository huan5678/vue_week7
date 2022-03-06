<script>
import TheHeader from '@/components/TheHeader.vue';
import { onBeforeMount } from 'vue';
import useStore from '@/stores';
import { useRouter } from 'vue-router';

export default {
  name: 'BackEndView',
  components: { TheHeader },
  setup() {
    const { adminStore } = useStore();
    const { handleCheckUser, handleGetToken, isLoggedIn } = adminStore;
    const router = useRouter();

    onBeforeMount(() => {
      handleGetToken();
      handleCheckUser();
      if (!isLoggedIn) {
        router.push('/login');
      }
    });
  },
};
</script>
<template>
  <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
</template>
