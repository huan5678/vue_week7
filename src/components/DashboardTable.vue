<script>
import { computed, ref, onMounted } from 'vue';
import useStore from '@/stores';
import ProductsTable from '@/components/table/ProductsTable.vue';
import OrdersTable from '@/components/table/OrdersTable.vue';
import CuponsTable from '@/components/table/CuponsTable.vue';
import ArticlesTable from '@/components/table/ArticlesTable.vue';

export default {
  setup() {
    const { adminDataStore } = useStore();
    const { adminData, handleGetDataList } = adminDataStore;
    const adminListTarget = ref([
      {
        en: 'product',
        zh_Tw: '產品',
      },
      {
        en: 'order',
        zh_Tw: '訂單',
      },
      {
        en: 'coupon',
        zh_Tw: '優惠券',
      },
      {
        en: 'article',
        zh_Tw: '文章',
      },
    ]);

    function handleSelectListType(target, idx) {
      adminData.selectedTarget = target;
      adminData.selectedTargetIndex = idx;
      handleGetDataList();
    }

    onMounted(() => {
      handleGetDataList();
    });

    return {
      adminListTarget,
      adminData: computed(() => adminData),
      handleSelectListType,
      handleGetDataList,
    };
  },
  components: {
    ProductsTable,
    OrdersTable,
    CuponsTable,
    ArticlesTable,
  },
};
</script>
<template>
  <section class="space-y-4 overflow-auto p-2 min-h-screen">
    <div class="flex items-end justify-center gap-4 p-6">
      <h2 class="text-4xl font-medium">
        {{ adminListTarget[adminData.selectedTargetIndex].zh_Tw }}列表
      </h2>
      <ul class="ml-auto flex">
        <li v-for="(item, idx) in adminListTarget" :key="item">
          <button
            type="button"
            class="border-b px-2"
            :class="
              adminData.selectedTargetIndex === idx
                ? 'border-b border-secondary-700 text-secondary-700'
                : `border-secondary-300 text-secondary-300
          hover:border-secondary-500 hover:text-secondary-500`
            "
            @click="handleSelectListType(item.en, idx)"
          >
            {{ item.zh_Tw }}
          </button>
        </li>
      </ul>
    </div>
    <ProductsTable v-if="adminData.selectedTarget === 'product'" />
    <OrdersTable v-if="adminData.selectedTarget === 'order'" />
    <CuponsTable v-if="adminData.selectedTarget === 'coupon'" />
    <ArticlesTable v-if="adminData.selectedTarget === 'article'" />
    <!-- 分頁 -->
    <ul class="flex gap-2 justify-center items-center pb-12">
      <li class>
        <button
          type="button"
          class="p-2 text-primary-500 disabled:text-secondary-300 rounded border
          border-primary-500 disabled:border-secondary-200"
          :class="!adminData.pagination?.has_pre ?
          '' : 'hover:bg-primary-600 hover:text-white' "
          :disabled="!adminData.pagination?.has_pre"
          @click="handleGetDataList(adminData.pagination?.current_page - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1
              0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </button>
      </li>
      <li
      class=""
      v-for="page in adminData.pagination?.total_pages"
      :key="page + new Date()">
        <button
          type="button"
          class="py-1 px-3 rounded"
          :class="
            page === adminData.pagination?.current_page ?
            'bg-primary-600 text-primary-50 py-1.5 px-3.5' :
            `text-secondary-400 hover:border
            hover:text-primary-600 hover:border-primary-600
            `
          "
          @click="handleGetDataList(page)"
        >
          {{ page }}
        </button>
      </li>
      <li class>
        <button
          type="button"
          class="p-2 text-primary-500 disabled:text-secondary-300 rounded border
          border-primary-500 disabled:border-secondary-200"
          :class="!adminData.pagination?.has_next ?
          '' : 'hover:bg-primary-600 hover:text-white' "
          :disabled="!adminData.pagination?.has_next"
          @click="handleGetDataList(adminData.pagination?.current_page + 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0
              .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </section>
</template>
