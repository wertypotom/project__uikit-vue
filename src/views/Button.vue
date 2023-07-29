<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <Button color="primary" rounded>Primary</Button>
    <Button color="secondary" rounded>Secondary</Button>
    <Button color="info" rounded>Info</Button>
    <Button color="success" rounded>Success</Button>
    <Button color="warning" rounded>Warning</Button>
    <Button color="danger" rounded>Danger</Button>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Button color="primary" disabled>Primary</Button>
    <Button color="secondary" disabled>Secondary</Button>
    <Button color="info" disabled>Info</Button>
    <Button color="success" disabled>Success</Button>
    <Button color="warning" disabled>Warning</Button>
    <Button color="danger" disabled>Danger</Button>
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <Button color="primary" outlined>Primary</Button>
    <Button color="secondary" outlined>Secondary</Button>
    <Button color="info" outlined>Info</Button>
    <Button color="success" outlined>Success</Button>
    <Button color="warning" outlined>Warning</Button>
    <Button color="danger" outlined>Danger</Button>
  </div>
  <h2 class="heading-2">Icons</h2>
  <div class="line">
    <Button color="primary" outlined icon="hand">Primary</Button>
    <Button color="secondary" icon="heart">Secondary</Button>
    <Button color="info" outlined icon="address-book">Info</Button>
    <Button color="success" icon="credit-card">Success</Button>
    <Button color="warning" outlined icon="lemon">Warning</Button>
    <Button color="danger" icon="hourglass">Danger</Button>
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <Button color="primary" large>Primary</Button>
    <Button color="secondary">Secondary</Button>
  </div>
  <h2 class="heading-2">Click</h2>
  <div class="line">
    <Button color="primary" @click="handleClick">Primary</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';

const handleClick = () => {
  alert('click happened');
};
</script>

<style scoped lang="scss">
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
