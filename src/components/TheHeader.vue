<script>
import { useRoute, useRouter } from 'vue-router';
import useStore from '@/stores';

import AppLink from './AppLink.vue';

export default {
  components: { AppLink },
  setup() {
    const route = useRoute();
    const { adminStore } = useStore();
    const { handleSetLogout, handleClearToken } = adminStore;
    const router = useRouter();

    function handleIsLogout() {
      handleClearToken();
      handleSetLogout();
      router.push('/');
    }

    return {
      route,
      handleIsLogout,
    };
  },
};
</script>
<template>
  <section class="bg-secondary-900">
    <nav class="container flex justify-between p-3">
      <h2>
        <AppLink to="/"> LOGO </AppLink>
      </h2>
      <ul class="flex gap-4 justify-between items-center" v-if="route.name !== 'product-detail'">
        <li>
          <AppLink to="product"> 產品列表 </AppLink>
        </li>
        <li>
          <AppLink to="admin"> 後台管理 </AppLink>
        </li>
        <!-- <li>
          <AppLink to="http://google.com">Google</AppLink>
        </li> -->
      </ul>
      <div class="flex justify-center items-center gap-4" v-if="route.name === 'dashboard'">
        <h2 class="text-lg text-secondary-50">管理者登出</h2>
        <button
          class="py-1 px-6 text-white bg-primary-500 hover:shadow-primary-600 rounded
          hover:shadow-inner transition duration-300"
          @click="handleIsLogout()"
        >
          登出
        </button>
      </div>
    </nav>
  </section>
</template>
