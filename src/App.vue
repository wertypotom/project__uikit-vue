<script setup lang="ts">
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutSidebar from '@/components/layout/Sidebar.vue';
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="container">
    <div @click="toggleSidebar" class="sidebar-toggle">&#5125;</div>
    <layout-sidebar :isOpen="isSidebarOpen" />
    <layout-header />
    <div :class="['content', { content__full: !isSidebarOpen }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/global.scss';

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;

  &__full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  height: 100%;
  width: 15px;
  background-color: $primary;
  z-index: 2;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
