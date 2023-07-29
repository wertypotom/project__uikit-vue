<template>
  <header class="header">
    <router-link to="/">Main page</router-link>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
}
</style>
