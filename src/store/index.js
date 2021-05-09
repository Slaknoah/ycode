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
        value: 'font-normal',
        label: 'Normal'
      },
      fontSize: {
        value: 'font-base',
        label: 'Base'
      },
      fontColor: {
        value: 'text-current',
        label: 'Inherit'
      },
      textAlignment: {
        value: 'text-left',
        label: 'Left'
      },
      textTransform: {
        value: 'normal-case',
        label: 'Normal '
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
    createLayer( state ) {
      const blankLayer = {
        id: Date.now(),
        name: 'Block',
        text: 'Hi, I am a layer 👋🏼',
        tag: 'div',
        styles: state.blankStyles
      };

      const layer = JSON.parse(JSON.stringify(blankLayer));
      state.layers.push( layer );
    }
  },
  actions: {

  },
  getters: {
    getLayerById: (state) => (id) => {
      return state.layers.find(layer => layer.id === id)
    }
  },
  modules: {
  }
})
