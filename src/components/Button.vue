<template>
  <button
    :class="[
      'btn',
      `btn__${color}`,
      { btn__rounded: rounded },
      { btn__outlined: outlined },
      { btn__icon: icon },
      { btn__large: large },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <font-awesome-icon v-if="icon" :icon="`fa-regular fa-${icon}`" />
    <slot v-else>CLick</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  rounded?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  icon?: string;
  large?: boolean;
}

interface Emits {
  (e: 'click'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

@mixin btn__base($property, $property-hover) {
  background: $property;
  border: 1px solid $property;
  &:enabled:hover {
    background: $property-hover;
  }
}
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;

  &__primary {
    @include btn__base($primary, $primary-hover);
  }

  &__secondary {
    @include btn__base($secondary, $secondary-hover);
  }

  &__success {
    @include btn__base($success, $success-hover);
  }

  &__info {
    @include btn__base($info, $info-hover);
  }

  &__warning {
    @include btn__base($warning, $warning-hover);
  }

  &__danger {
    @include btn__base($danger, $danger-hover);
  }

  &__rounded {
    border-radius: 15px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  &__outlined {
    background: transparent;
    color: #000;

    &:hover {
      color: #fff;
    }
  }

  &__icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &__large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>
