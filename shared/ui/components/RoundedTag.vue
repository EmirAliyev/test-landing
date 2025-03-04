<template>
  <div
    :class="[
      'base-rounded-tag',
      borderClass ? `base-rounded-tag-${borderClass}` : '',
      textClass ? `base-rounded-tag-text-${textClass}` : '',
    ]"
    :style="{ width: width, height: height }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  borderClass: {
    type: String,
    default: '',
  },
  textClass: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: 'auto',
  },
  height: {
    type: String,
    default: '36px',
  },
})
</script>

<style scoped lang="scss">
.base-rounded-tag {
  border-radius: 24px;
  color: white;
  font-size: 14px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  &-gold {
    border: 1px solid gold;
    color: $gold;
  }
}
</style>
