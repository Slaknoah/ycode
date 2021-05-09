<template>
  <span
    class="icons d-inline-flex mr-2"
    :class="{ 'opacity-25': !isActive }"
  >
    <svg width="12" height="12" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path
        d="M2.5,1 L9.5,1 C10.3284271,1 11,1.67157288 11,2.5 L11,9.5 C11,10.3284271 10.3284271,11 9.5,11 L2.5,11 C1.67157288,11 1,10.3284271 1,9.5 L1,2.5 C1,1.67157288 1.67157288,1 2.5,1 Z"
        id="CurrentFill"
        fill="#56595A"
        opacity="0.3">
      </path>

      <path
        d="M9.5,0 L2.5,0 C1.11928813,0 0,1.11928813 0,2.5 L0,9.5 C0,10.8807119 1.11928813,12 2.5,12 L9.5,12 C10.8807119,12 12,10.8807119 12,9.5 L12,2.5 C12,1.11928813 10.8807119,0 9.5,0 Z M2.5,1 L9.5,1 C10.3284271,1 11,1.67157288 11,2.5 L11,9.5 C11,10.3284271 10.3284271,11 9.5,11 L2.5,11 C1.67157288,11 1,10.3284271 1,9.5 L1,2.5 C1,1.67157288 1.67157288,1 2.5,1 Z"
        id="CurrentFill"
        :fill="(isActive) ? '#FFF' : '#56595A'"
      >
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>