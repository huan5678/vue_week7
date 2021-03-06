import { useAdminStore } from './admin';
import { useAdminDataStore } from './adminData';
import { useProductStore } from './product';
import { useOrderStore } from './order';
import { useCartStore } from './cart';

export default function useStore() {
  const adminStore = useAdminStore();
  const adminDataStore = useAdminDataStore();
  const productStore = useProductStore();
  const orderStore = useOrderStore();
  const cartStore = useCartStore();

  return {
    adminStore,
    adminDataStore,
    productStore,
    orderStore,
    cartStore,
  };
}
