<template>
  <section
    class="canvas w-full h-full relative z-10 scrollbar overflow-auto"
  >
    <template
      v-for="layer of layers"
      :key="layer.id"
    >
      <layer
        :layer="layer"
        :active-layer-ID="activeLayerID"
        @layer-selected="id => $emit('layer-selected', id)"
      />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Layer from "./Layer";

export default {
  components: {
    Layer
  },
  props: {
    activeLayerID: {
      type: Number,
      default: null,
    }
  },
  computed: {
    ...mapGetters({ layers: 'layersTree' })
  }
}
</script>