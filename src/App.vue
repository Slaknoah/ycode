<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar />

    <section class="relative flex flex-1 flex-row overflow-hidden">
      <Layers
        @create-layer="createLayer"
        @layer-selected="layerID => activeLayerID = layerID"
        :layers="layers"
        :active-layer-ID="activeLayerID"
      />

      <Canvas
        :active-layer-ID="activeLayerID"
        @layer-selected="id => activeLayerID = id"
      />

      <Design
        :active-layer-ID="activeLayerID"
      />
    </section>
  </main>
</template>

<script>
import Design from "./components/Design.vue";
import Layers from "./components/Layers.vue";
import NavBar from "./components/NavBar.vue";
import Canvas from "./components/Canvas.vue";
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {
    Design,
    NavBar,
    Layers,
    Canvas
  },
  data() {
    return {
      activeLayerID: null
    }
  },
  methods: {
    createLayer(type) {
      this.$store.commit('createLayer', { type, parentID: this.activeLayerID } );
    },
  },
  computed: {
    ...mapGetters({ layers: 'layersTree' })
  },
  created() {
    document.addEventListener('keydown', function(e) {
      if( ( e.key === "Backspace" || e.key === "Delete" ) && this.activeLayerID ) {
        const el = document.querySelector(`[data-yid="${this.activeLayerID}"]`);
        const sideEl = document.querySelector(`[data-ysidebar-id="${this.activeLayerID}"] .text-block`);
        const elEditable = el.contentEditable != 'true';
        const sideElEditable = sideEl.contentEditable != 'true';


        if( (el && elEditable) && (sideEl && sideElEditable) ) {
          this.$store.commit('removeLayer', this.activeLayerID);
          this.activeLayerID = null;
        }
      }
    }.bind(this) );
  }
};
</script>

<style>
  [data-yid]:hover,
  [data-yid].active {
    outline: 1px auto blue;
  }

  [data-yid]:empty::before {
    content: 'Empty, add elements here.';
    background-color: rgba(191, 219, 254, 0.5);
    font-size: 0.8rem;
    text-align: center;
    color: rgb(59, 130, 246);
    padding: 1rem;
    border: 1px dashed rgb(59, 130, 246);
    display: block;
  }
</style>