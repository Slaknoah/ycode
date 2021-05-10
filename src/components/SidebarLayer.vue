<template>
  <div
    :data-ysidebar-id="layer.id"
    class="flex items-center rounded-sm cursor-pointer px-2 py-1 hover:text-white group hover:bg-gray-700"
    :class="getClassList()"
  >
    <block-icon :is-active="activeLayerID === layer.id" />
    <span
      class="text-xs truncate w-full text-block"
      @input="onInput"
      @click="listenDblClick"
      onblur="this.contentEditable=false;"
    >
      {{ layer.name }}
    </span>
  </div>

  <div
    v-if="layer.children && layer.children.length"
    class="ml-5"
  >
    <SidebarLayer
      v-for="child in layer.children"
      :key="child.id"
      :layer="child"
      :active-layer-ID="activeLayerID"
      @layer-selected="handleSelectedChild"
    />
  </div>
</template>

<script>
import BlockIcon from './BlockIcon.vue';

export default {
  props: {
    layer: Object,
    activeLayerID: Number,
    class: String
  },
  emits: ['layer-selected'],
  components: {
    BlockIcon
  },
  methods: {
    handleSelectedChild(layerID) {
      this.$emit('layer-selected', layerID);
    },
    onInput(e) {
      this.$store.commit('updateLayerName', { layerID: this.layer.id, name: e.target.innerText });
    },
    listenDblClick(event) {
      const element = event.target;
      element.contentEditable = true;
      setTimeout(function() {
        if (document.activeElement !== element) {
          element.contentEditable = false;
        }
      }, 300);

      this.$emit('layer-selected', this.layer.id);
      event.stopPropagation();
    },
    getClassList() {
      const res = {
        'bg-blue-500 text-white hover:bg-blue-500': this.activeLayerID === this.layer.id,
        'text-gray-300': this.activeLayerID !== this.layer.id,
      }
      res[this.class] = true;

      return res;
    }
  }
}
</script>