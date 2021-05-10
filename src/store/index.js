import { createStore } from 'vuex'

export default createStore({
  state: {
    blankStyles: {
      display: {
        value: 'block',
        label: 'Block'
      },
      width: {
        value: null,
        label: null
      },
      height: {
        value: null,
        label: null
      },
      objectFit: {
        value: 'object-fill',
        label: 'Fill'
      },
      margin: {
        value: null,
        label: null
      },
      padding: {
        value: null,
        label: null
      },
      typeface: {
        value: '',
        label: 'System UI'
      },
      fontWeight: {
        value: null,
        label: null
      },
      fontSize: {
        value: null,
        label: null
      },
      fontColor: {
        value: null,
        label: null
      },
      textAlignment: {
        value: null,
        label: null
      },
      textTransform: {
        value: null,
        label: null
      },
      backgroundColor: {
        value: null,
        label: null
      },
      borderRadius: {
        value: null,
        label: null
      },
      borderWidth: {
        value: null,
        label: null
      },
      borderColor: {
        value: null,
        label: null
      }
    },
    layers: []
  },
  mutations: {
    createLayer( state, { type, parentID } ) {
      // const { type, parentID } = payload;

      const blankLayer = {
        id: Date.now(),
        name: 'Block',
        text: 'Hi, i am a layer',
        tag: type,
        styles: state.blankStyles,
        parentID: null,
        children: []
      };

      // Set parent based on active layer
      const parent = state.layers.find(el => el.id === parentID);
      if( parent ) {
        if( ['section', 'div'].includes(parent.tag) ) {
          blankLayer.parentID = parentID
        } else {
          blankLayer.parentID = parent.parentID;
        }
      }

      switch (type) {
        case 'h1':
          blankLayer.text     =  'Heading 1';
          blankLayer.name     =  'Heading 1'
          break;
      }

      const layer = JSON.parse(JSON.stringify(blankLayer));

      state.layers.push( layer );
    },
    removeLayer( state, layerID ) {
      const index = state.layers.findIndex(layer => layer.id === layerID);

      const children = state.layers.filter( el => el.parentID === layerID );

      if( children && children.length ) {
        children.forEach( child => this.commit('removeLayer', child.id) );
      }

      state.layers.splice(index, 1);
    },
    updateLayerStyle( state, { layerID, styles }) {
      const index = state.layers.findIndex(layer => layer.id === layerID);
      state.layers[index].styles = styles;
    },
    updateLayerText( state, { layerID, text }) {
      const index = state.layers.findIndex(layer => layer.id === layerID);
      state.layers[index].text = text;
    },
    updateLayerName( state, { layerID, name }) {
      const index = state.layers.findIndex(layer => layer.id === layerID);
      state.layers[index].name = name;
    }
  },
  actions: {

  },
  getters: {
    getLayerById: (state) => (id) => {
      return state.layers.find(layer => layer.id === id);
    },
    layersTree: (state) => {
      const layers = JSON.parse( JSON.stringify( state.layers ) );
      const root = [];
      const map = {};

      layers.forEach(layer => {
        if (!layer.parentID) return root.push(layer);

        let parentIndex = map[layer.parentID];
        if (typeof parentIndex !== 'number') {
          parentIndex = layers.findIndex(el => el.id === layer.parentID);
          map[layer.parentID] = parentIndex;
        }

        layers[parentIndex].children.push(layer);
      });

      return root;
    }
  },
  modules: {
  }
})
