<template>
  <fieldset class="flex relative mb-1">
    <div class="panel-item-head flex flex-row-reverse items-center justify-between w-full text-gray-300 text-xs">
      <div class="w-2/3 flex items-center">
        <div class="flex-1">
          <div class="relative">
            <div class="w-full mr-1">
              <button
                type="button"
                class="tracking-wide leading-5 text-left w-full flex items-center truncate relative focus:outline-none focus:shadow-none select-none bg-white bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 border border-white border-opacity-5 rounded text-gray-300 hover:text-white px-1 text-xs"
                @click="showDropdown = !showDropdown"
                @blur="showDropdown = false"
                tabindex="0"
              >
                <span class="">{{ modelValue.label ?? 'Select' }}</span>
              </button>
            </div>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <div
                class="bg-gray-500 border border-gray-450 rounded z-50 whitespace-nowrap absolute top-0 max-w-full min-w-full w-40 shadow-overlay max-h-56 scrollbar overscroll-contain overflow-y-auto" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 0px, 0px); max-width: 165.984px; max-height: 315px;"
                v-show="showDropdown"
              >
                <div class="-m-px py-px shadow-md contents">
                  <div class="contents">
                    <ul class="my-1">
                      <li
                        class="py-1 flex items-center group cursor-pointer hover:bg-y-blue-500 hover:text-white text-gray-300 px-2 text-xs"
                        v-for="(option, index) in options"
                        :key="index"
                        @mousedown="handleSelect(option)"
                      >
                        <span
                          class="icons d-inline-flex mr-1"
                          :class="{ 'invisible': modelValue.value !== option.value }"
                        >
                          <svg width="10" height="10" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M14.2795131,2.3065314 C14.6625053,1.9086175 15.2955547,1.89652102 15.6934686,2.27951315 C16.0607737,2.63304434 16.099335,3.19964211 15.8018605,3.59768915 L15.7204869,3.6934686 L6.09548685,13.6934686 C5.73236504,14.070738 5.14699941,14.0997587 4.74968624,13.7805308 L4.65451315,13.6934686 L0.279513147,9.14801405 C-0.103478984,8.75010015 -0.0913824979,8.11705073 0.306531404,7.7340586 C0.673836544,7.3805274 1.24149384,7.36363976 1.62788601,7.67610362 L1.72048685,7.76107686 L5.374,11.557 L14.2795131,2.3065314 Z" id="PureWhite" fill="#56595A"></path>
                          </svg>
                        </span>
                        <span class="truncate">{{ option.label }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <label class="w-1/3 text-xs">
        {{ label ?? 'Label' }}
      </label>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: [ 'options', 'label', 'modelValue' ],
  emits: ['update:modelValue'],
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    handleSelect(option) {
      this.$emit('update:modelValue', option);
      this.showDropdown = false;
    }
  }
}
</script>