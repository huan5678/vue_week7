<script>
import { onMounted, computed, toRef } from 'vue';
import { useRouter } from 'vue-router';
import { $vfm } from 'vue-final-modal';

import useStore from '@/stores';
import DashboardTable from '@/components/DashboardTable.vue';
import ModalProductDetail from '@/components/modal/ModalProductDetail.vue';
import ModalCardDelete from '@/components/modal/ModalCardDelete.vue';
import ModalProductAddition from '@/components/modal/ModalProductAddition.vue';
import ModalOrderDetail from '@/components/modal/ModalOrderDetail.vue';

export default {
  components: {
    DashboardTable,
    ModalCardDelete,
    ModalProductDetail,
    ModalProductAddition,
    ModalOrderDetail,
  },
  setup() {
    const { adminStore, adminDataStore } = useStore();
    const { handleCheckUser, handleGetToken } = adminStore;
    const { functionSelected, adminData } = adminDataStore;

    const router = useRouter();

    function handleOpenModal(boolean = true) {
      adminData.isOpenModal = boolean;
      $vfm.show('adminModal');
    }

    const isOpenModal = toRef(adminData, 'isOpenModal');

    onMounted(() => {
      handleGetToken();
      if (!handleCheckUser()) {
        router.push('/admin');
      } else {
        router.push('/login');
      }
    });

    return {
      handleOpenModal,
      isOpenModal,
      modalState: computed(() => functionSelected.selected),
    };
  },
};
</script>

<template>
  <main class="bg-gray-100">
    <div class="container">
      <DashboardTable />
      <vue-final-modal
        v-model="isOpenModal"
        id="adminModal"
        classes="flex justify-center items-center bg-opacity-50 backdrop-blur-[2px]"
        content-class="bg-gray-50 rounded-md shadow-md overflow-hidden"
        focus-trap
      >
        <ModalCardDelete v-if="modalState === 'productDelete'" :handleOpenModal="handleOpenModal" />
        <ModalProductDetail
        v-if="modalState === 'getProductDetail'"
        :handleOpenModal="handleOpenModal" />
        <ModalOrderDetail
        v-if="modalState === 'getOrderDetail'"
        :handleOpenModal="handleOpenModal" />
        <ModalProductAddition
          v-if="modalState === 'productEdit' || modalState === 'productCreate'"
          :handleOpenModal="handleOpenModal"
        />
      </vue-final-modal>
    </div>
  </main>
</template>
