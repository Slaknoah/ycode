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

      <section
        class="canvas w-full h-full relative z-10 scrollbar overflow-auto"
      >
        <template
          v-for="(layer, index) of layers"
          :key="layer.id"
        >
          <div
            v-if="layer.tag == 'div'"
            :data-yid="layer.id"
            @input="event => onInput(event, index)"
            @click="event => listenDblClick(event, layer.id)"
            onblur="this.contentEditable=false;"
            :class="getClassList(layer)"
          >
            {{ layer.text }}
          </div>
        </template>
      </section>

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
import { mapState } from 'vuex';

export default {
  name: "App",
  components: {
    Design,
    NavBar,
    Layers
  },
  data() {
    return {
      activeLayerID: null,
      blankLayer: {
        id: null,
        name: 'Block',
        text: 'Hi, I am a layer 👋🏼',
        tag: 'div',
        styles: {}
      },
    }
  },
  methods: {
    createLayer() {
      this.$store.commit('createLayer');
    },
    onInput(e, index) {
      this.layers[index].text = e.target.innerText;
    },
    listenDblClick(event, layerID) {
      const element = event.target;
      element.contentEditable = true;
      setTimeout(function() {
        if (document.activeElement !== element) {
          element.contentEditable = false;
        }
      }, 300);

      this.activeLayerID = layerID
    },
    deleteLayer(index) {
      alert(index);
      this.layers.splice(index, 1);
    },
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
    }
  },
  computed: {
    html() {
      let html = '';
      this.layers.forEach(layer => {
        html += `<${layer.tag}>${layer.text}</${layer.tag}>`;
      });
      return html;
    },
    ...mapState(['layers'])
  },
  created() {
    document.addEventListener('keydown', function(e) {
      if( ( e.key === "Backspace" || e.key === "Delete" ) && this.activeLayerID ) {
        const el = document.querySelector(`[data-yid="${this.activeLayerID}"]`);
        const sideEl = document.querySelector(`[data-ysidebar-id="${this.activeLayerID}"] .text-block`);
        const elEditable = el.contentEditable != 'true';
        const sideElEditable = sideEl.contentEditable != 'true';

        if( (el && elEditable) && (sideEl && sideElEditable) ) {
          let index = -1;
          for (let i = 0; i < this.layers.length; i++) {
            const layer = this.layers[i];
            if( layer.id === this.activeLayerID ) {
              index = i;
            }
          }

          if(index !== -1) this.layers.splice(index, 1);
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
</style>