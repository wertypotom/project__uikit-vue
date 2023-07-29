<template>
  <h1 class="heading-1">Typography</h1>
  <h1 class="heading-1">Heading 1</h1>
  <h2 class="heading-2">Heading 2</h2>
  <h3 class="heading-3">Heading 3</h3>
</template>

<script setup lang="ts"></script>

<style lang="scss">
%heading-core {
  margin: 20px 0;
  font-weight: 300;
}

.heading {
  &-1 {
    font-size: 34px;
    @extend %heading-core;
  }
  &-2 {
    font-size: 22px;
    @extend %heading-core;
  }
  &-3 {
    font-size: 17px;
    @extend %heading-core;
  }
}
</style>
