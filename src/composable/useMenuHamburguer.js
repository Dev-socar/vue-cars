import { ref } from "vue";
export default function useMenuHamburger() {
  const drawer = ref(false);

  function toggleDrawer() {
    drawer.value = !drawer.value;
  }

  return { drawer, toggleDrawer };
}
