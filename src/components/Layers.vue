<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col scrollbar overflow-auto flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 relative">

      <div class="flex items-center leading-5 py-px">Layers</div>

      <div class="items-center">
        <button
          class="bg-white text-black font-bold py-1 px-3 focus:outline-none"
          @click="showDropdown = !showDropdown"
          @blur="showDropdown = false"
          tabindex="0"
        >
          Add layer
        </button>
      </div>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div
          class="bg-gray-500 border border-gray-450 rounded z-50 whitespace-nowrap absolute top-10 right-3 max-w-full w-40 shadow-overlay max-h-56 scrollbar overscroll-contain overflow-y-auto"
          v-show="showDropdown"
        >
          <div class="-m-px py-px shadow-md contents">
            <div class="contents">
              <ul class="my-1">
                <li
                  class="py-1 flex items-center group cursor-pointer hover:bg-y-blue-500 hover:text-white text-gray-300 px-2 text-xs"
                  @mousedown="$emit('create-layer', 'div'), showDropdown = false"
                >
                  <span class="truncate">Div Block</span>
                </li>

                <li
                  class="py-1 flex items-center group cursor-pointer hover:bg-y-blue-500 hover:text-white text-gray-300 px-2 text-xs"
                  @mousedown="$emit('create-layer', 'h1'), showDropdown = false"
                >
                  <span class="truncate">Heading 1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <div class="mt-2">
      <SidebarLayer
        v-for="layer of layers"
        :key="layer.id"
        :layer="layer"
        :active-layer-ID="activeLayerID"
        @layer-selected="id => $emit('layer-selected', id)"
      />
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarLayer from './SidebarLayer.vue';

export default {
  props: {
    activeLayerID: {
      type: Number,
      default: null,
    }
  },
  components: {
    SidebarLayer,
  },
  data() {
    return {
      showDropdown: false
    }
  },
  computed: {
    ...mapGetters({ layers: 'layersTree' })
  }
};
</script>

<style>
</style>