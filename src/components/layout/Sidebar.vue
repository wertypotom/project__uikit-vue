<template>
  <div
    :class="[
      'sidebar',
      {
        sidebar__open: isOpen,
      },
    ]"
  >
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="sidebar__link"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const links = ref<{ name: string; to: string }[]>([
  { name: 'Typography', to: '/typography' },
  { name: 'Button', to: '/button' },
]);
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
.sidebar {
  position: fixed;
  left: 0;
  height: 100%;
  top: 62px;
  background: #fff;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  z-index: 1;

  &__open {
    transform: translateX(0px);
  }

  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;

    &:hover {
      border-color: $primary;
    }
  }
}
</style>
