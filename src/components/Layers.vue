<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 ">
      <div class="flex items-center leading-5 py-px">Layers</div>

      <div class="flex justify-end items-center">
        <button @click="$emit('create-layer')" class="bg-white text-black font-bold py-1 px-3">
          Add layer
        </button>
      </div>
    </header>

    <div class="mt-2">
      <div
        v-for="(layer, index) of layers"
        :key="layer.id"
        :data-ysidebar-id="layer.id"
      >
        <div
          class="flex items-center rounded-sm cursor-pointer px-2 py-1 hover:text-white group hover:bg-gray-700"
          :class="{
            'bg-blue-500 text-white hover:bg-blue-500': activeLayerID === layer.id,
            'text-gray-300': activeLayerID !== layer.id
          }"
        >
          <block-icon :is-active="activeLayerID === layer.id" />
          <span
            class="text-xs truncate w-full text-block"
            @input="event => onInput(event, index)"
            @click="event => listenDblClick(event, layer.id)"
            onblur="this.contentEditable=false;"
          >
            {{ layer.name }}
          </span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import BlockIcon from './BlockIcon.vue';
import Icon from "./Icon.vue";

export default {
  props: {
    layers: {
      type: Array,
      default: () => []
    },
    activeLayerID: {
      type: Number,
      default: null,
    }
  },
  components: {
    Icon,
    BlockIcon,
  },
  methods: {
    onInput(event, index) {
      this.layers[index].name = event.target.innerText;
    },
    listenDblClick(event, layerID) {
      const element = event.target;
      element.contentEditable = true;
      setTimeout(function() {
        if (document.activeElement !== element) {
          element.contentEditable = false;
        }
      }, 300);

      this.$emit('layer-selected', layerID);
    }
  }
};
</script>

<style>
</style>