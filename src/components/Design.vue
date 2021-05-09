<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col scrollbar overflow-auto flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 ">
      <div class="flex items-center leading-5 py-px">Design</div>
    </header>

    <!-- Layout -->
    <div class="mt-2" v-if="this.activeLayerID">
      <div class="border-b border-gray-700 bg-gray-900 p-3">
        <header class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 -m-3 -mb-0">
          Layout
        </header>
        <div class="mt-2">
          <y-select
            label="Display"
            :options="displayOptions"
            v-model="styles.display"
          />
        </div>
      </div>

      <!-- Sizing -->
      <div class="border-b border-gray-700 bg-gray-900 p-3">
        <header class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 -m-3 -mb-0">
          Sizing
        </header>
        <div class="mt-2">
          <y-select
            label="Width"
            :options="widthOptions"
            v-model="styles.width"
          />
          <y-select
            label="Height"
            :options="heightOptions"
            v-model="styles.height"
          />
          <y-select
            label="Object"
            :options="objectFitOptions"
            v-model="styles.objectFit"
          />
        </div>
      </div>

      <!-- Spacing -->
      <div class="border-b border-gray-700 bg-gray-900 p-3">
        <header class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 -m-3 -mb-0">
          Spacing
        </header>
        <div class="mt-2">
          <y-select
            label="Margin"
            :options="marginOptions"
            v-model="styles.margin"
          />
          <y-select
            label="Padding"
            :options="paddingOptions"
            v-model="styles.padding"
          />
        </div>
      </div>

      <!-- Typography -->
      <div class="border-b border-gray-700 bg-gray-900 p-3">
        <header class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 -m-3 -mb-0">
          Typography
        </header>
        <div class="mt-2">
          <y-select
            label="Typeface"
            :options="typefaceOptions"
            v-model="styles.typeface"
          />
          <y-select
            label="Weight"
            :options="fontWeightOptions"
            v-model="styles.fontWeight"
          />
          <y-select
            label="Size"
            :options="fontSizeOptions"
            v-model="styles.fontSize"
          />
          <y-select
            label="Color"
            :options="fontColorOptions"
            v-model="styles.fontColor"
          />
          <y-select
            label="Alignment"
            :options="textAlignmentOptions"
            v-model="styles.textAlignment"
          />
          <y-select
            label="Transform"
            :options="textTransformOptions"
            v-model="styles.textTransform"
          />
        </div>
      </div>

      <!-- Background -->
      <div class="border-b border-gray-700 bg-gray-900 p-3">
        <header class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 -m-3 -mb-0">
          Background
        </header>
        <div class="mt-2">
          <y-select
            label="Color"
            :options="backgroundColorOptions"
            v-model="styles.backgroundColor"
          />
        </div>
      </div>

      <!-- Borders -->
      <div class="border-b border-gray-700 bg-gray-900 p-3">
        <header class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 -m-3 -mb-0">
          Borders
        </header>
        <div class="mt-2">
          <y-select
            label="Radius"
            :options="borderRadiusOptions"
            v-model="styles.borderRadius"
          />
          <y-select
            label="Width"
            :options="borderWidthOptions"
            v-model="styles.borderWidth"
          />
          <y-select
            label="Color"
            :options="borderColorOptions"
            v-model="styles.borderColor"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Icon from "./Icon.vue";
import YSelect from './YSelect.vue';
import {
  useDisplay,
  useWidth,
  useHeight,
  useObjectFit,
  useMargin,
  usePadding,
  useTypeface,
  useFontWeight,
  useFontSize,
  useFontColor,
  useTextAlignment,
  useTextTransform,
  useBackgroundColor,
  useBorderRadius,
  useBorderWidth,
  useBorderColor
} from './useStyles';

export default {
  props: {
    activeLayerID: {
      type: Number,
      default: null,
    }
  },
  components: {
    YSelect,
    Icon,
  },
  data() {
    return {
      styles: {},
    }
  },
  watch: {
    activeLayerID(value) {
      const layer = this.$store.getters.getLayerById(value);
      this.styles = layer.styles;
    }
  },
  setup() {
    const { options: displayOptions } = useDisplay();

    const { options: widthOptions } = useWidth();

    const { options: heightOptions } = useHeight();

    const { options: objectFitOptions } = useObjectFit();

    const { options: marginOptions } = useMargin();

    const { options: paddingOptions } = usePadding();

    const { options: typefaceOptions } = useTypeface();

    const { options: fontWeightOptions } = useFontWeight();

    const { options: fontSizeOptions } = useFontSize();

    const { options: fontColorOptions } = useFontColor();

    const { options: textAlignmentOptions } = useTextAlignment();

    const { options: textTransformOptions } = useTextTransform();

    const { options: backgroundColorOptions } = useBackgroundColor();

    const { options: borderRadiusOptions } = useBorderRadius();

    const { options: borderWidthOptions } = useBorderWidth();

    const { options: borderColorOptions } = useBorderColor();

    return {
      displayOptions,
      widthOptions,
      heightOptions,
      objectFitOptions,
      marginOptions,
      paddingOptions,
      typefaceOptions,
      fontWeightOptions,
      fontSizeOptions,
      fontColorOptions,
      textAlignmentOptions,
      textTransformOptions,
      backgroundColorOptions,
      borderRadiusOptions,
      borderWidthOptions,
      borderColorOptions
    }
  }
};
</script>

<style>
</style>