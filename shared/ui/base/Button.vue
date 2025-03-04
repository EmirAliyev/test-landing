<script setup>
defineProps({
  styleClass: {
    type: String,
    default: '',
  },
  nativeType: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  gold: {
    type: String,
    default: 'auto',
  },
  width: {
    type: String,
    default: 'auto',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    @click.stop="handleClick"
    :disabled="disabled"
    :type="nativeType"
    :class="['base-button', `base-button-${styleClass}`, { 'base-button-full': fullWidth }]"
    :style="{ width: fullWidth ? '100%' : width }"
  >
    <template v-if="$slots.default"><slot></slot></template>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  background: transparent;
  border-radius: 24px;
  cursor: pointer;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid $gold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;

  &-rounded {
    border-radius: 50%;
    padding: 0;
    height: 44px;
    width: 44px;
  }

  &-gold {
    background: $gold;
    color: white;
    border: 0px;
  }
}
</style>
