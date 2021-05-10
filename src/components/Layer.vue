<template>
  <div
    v-if="layer.tag == 'div'"
    :data-yid="layer.id"
    @click="listenSingleClick"
    :class="getClassList(layer)"
  >
    <template
      v-if="layer.children && layer.children.length"
    >
      <Layer
        v-for="child in layer.children"
        :key="child.id"
        :layer="child"
        :active-layer-ID="activeLayerID"
        @layer-selected="handleSelectedChild"
      />
    </template>
  </div>

  <h1
    v-else-if="layer.tag == 'h1'"
    :data-yid="layer.id"
    @input="onInput"
    @click="listenDblClick"
    onblur="this.contentEditable=false;"
    :class="getClassList(layer)"
  >
    {{ layer.text }}
  </h1>
</template>

<script>
export default {
  props: {
    layer: Object,
    activeLayerID: Number
  },
  emits: ['layer-selected'],
  methods: {
    getClassList(layer) {
      const classlist = {
        'active': this.activeLayerID === layer.id,
      }
      const stylesKeys = Object.keys(layer.styles);

      stylesKeys.forEach(key => {
        const val = layer.styles[key]['value'];
        if( val ) {
          classlist[val] = true;
        }
      });

      return classlist;
    },
    listenSingleClick(event) {
      this.$emit('layer-selected', this.layer.id);
      event.stopPropagation();
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
    handleSelectedChild(layerID) {
      this.$emit('layer-selected', layerID);
    },
    onInput(e) {
      this.$store.commit('updateLayerText', { layerID: this.layer.id, text: e.target.innerText });
    },
  },
}
</script>