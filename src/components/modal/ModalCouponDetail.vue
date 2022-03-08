<script>
import { computed } from 'vue';
import useStore from '@/stores';
import ModalCardTitle from './ModalCardTitle.vue';

export default {
  components: { ModalCardTitle },
  props: { products: Object },
  setup(props, context) {
    const { adminDataStore } = useStore();
    const { functionSelected, adminData } = adminDataStore;

    function closeModal() {
      context.attrs.handleOpenModal(false);
    }

    return {
      selectType: computed(() => functionSelected.selected),
      couponData: computed(() => adminData.tempProduct),
      handleOpenModal: context.attrs.handleOpenModal,
      closeModal,
    };
  },
};
</script>

<template>
  <section class="flex overflow-hidden flex-col pb-4 space-y-4 bg-gray-50 rounded-md">
    <ModalCardTitle
      title="訂單詳細內容"
      className="bg-primary-600"
      :close-modal="handleOpenModal"
    />
    <div class="flex justify-between p-4">
      <div class="p-2 divide-y">
        <span class="block text-sm">優惠券名稱</span>
        <h2 class="text-2xl font-medium">{{couponData?.title}}</h2>
      </div>
      <div class="p-2 divide-y">
        <span class="block text-sm">優惠券代碼</span>
        <h2 class="text-2xl font-medium">{{couponData?.code}}</h2>
      </div>
      <div class="p-2 divide-y">
        <span class="block text-sm">優惠券折價</span>
        <h2 class="text-2xl font-medium">{{couponData?.percent}}</h2>
      </div>
    </div>
    <div class="flex justify-between p-4">
      <div class="p-2 divide-y">
        <span class="block text-sm">優惠券是否啟用</span>
        <label for="toggle" class="flex items-center cursor-pointer relative mb-4">
        <input type="checkbox" id="toggle" class="sr-only" disabled>
        <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
        <span class="ml-3 text-gray-900 text-sm font-medium">
          {{ couponData?.is_enabled === 1 ? '啟用' : '未啟用' }}
        </span>
        </label>
      </div>
      <div class="p-2 divide-y">
        <span class="block text-sm">優惠券使用期限</span>
        <h2 class="text-2xl font-medium">{{ getDate(couponData?.due_date) }}</h2>
      </div>
    </div>
  </section>
</template>
