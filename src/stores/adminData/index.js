import { reactive, inject } from 'vue';
import { defineStore } from 'pinia';
import { useAdminStore } from '@/stores/admin';

export const useAdminProductStore = defineStore('adminProduct', () => {
  const axios = inject('axios');
  const baseUrl = process.env.VUE_APP_API_URL;
  const apiPath = process.env.VUE_APP_API_PATH;

  const adminData = reactive({
    selectedTarget: 'products',
    dataList: [],
    pagination: {},
    currentPage: 1,
    category: null,
    tempProduct: {},
  });

  const functionSelected = reactive({
    selected: '',
  });

  function handleSelectFunction(selected, item) {
    functionSelected.selected = selected;
    adminData.tempProduct = item;
  }

  const adminStore = useAdminStore();

  //GET products/all, products, orders, coupons, articles, article/{id}
  // POST product, order/{id}, coupon, article
  // PUT product/{id}, order/{id}, coupon/{id}, article/{id}
  // DELETE product/{id}, orders/all, coupons/{id}, article/{id}

  function handleGetDataAll () {
    let target = adminData.selectedTarget;
    if (target === 'products') {
      target = 'product';
    }
    axios
      .get(`${baseUrl}api/${apiPath}/admin/${adminData.selectedTarget}/all`, { token: adminStore.token })
      .then((res) => {
        // console.log(res.data);
        adminData.dataList = res.data[`target`];
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleGetDataList(page = adminData.currentPage, category = adminData.category) {
    let productCategory = category;
    if (category === null) {
      productCategory = '';
    }
    axios
      .get(`${baseUrl}api/${apiPath}/admin/${adminData.selectedTarget}?page=${page}${productCategory}`, {
        token: adminStore.token,
      })
      .then((res) => {
        // console.log(res.data);
        adminData.dataList = res.data[`target`];
        adminData.pagination = res.data.pagination;
      })
      .catch((err) => {
        console.dir(err);
      });
  }
  function handleEditData(id, data) {
    axios
      .put(`${baseUrl}api/${apiPath}/admin/product/${id}`, data, { token: adminStore.token })
      .then(() => {
        handleGetProductList();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleDeleteData(id) {
    axios
      .delete(`${baseUrl}api/${apiPath}/admin/product/${id}`, { token: adminStore.token })
      .then(() => {
        handleGetProductList();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleCreateData(data) {
    axios
      .post(`${baseUrl}api/${apiPath}/admin/product`, data, { token: adminStore.token })
      .then(() => {
        handleGetProductList(adminData.currentPage);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleImageUpload(file) {
    const formData = new FormData();
    formData.append('file-to-upload', file);
    return axios.post(`${baseUrl}api/${apiPath}/admin/upload`, formData, {
      token: adminStore.token,
    });
  }

  return {
    adminData,
    functionSelected,
    handleCreateData,
    handleGetDataAll,
    handleGetDataList,
    handleEditData,
    handleDeleteData,
    handleImageUpload,
    handleSelectFunction,
  };
});
export default useAdminDataStore;