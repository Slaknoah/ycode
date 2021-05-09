import { ref } from 'vue';

export function useDisplay() {
  const options = [
    {
      value: 'block',
      label: 'Block'
    },
    {
      value: 'inline',
      label: 'Inline'
    },
    {
      value: 'inline-block',
      label: 'Inline Block'
    },
    {
      value: 'flex',
      label: 'Flex'
    }
  ];

  return {
    options
  }
}

export function useWidth() {
  const options = [
    {
      value: '',
      label: 'Auto'
    },
    {
      value: 'w-1/12',
      label: '1/12'
    },
    {
      value: 'w-2/12',
      label: '2/12'
    },
    {
      value: 'w-3/12',
      label: '4/12'
    },
    {
      value: 'w-5/12',
      label: '5/12'
    },
    {
      value: 'w-6/12',
      label: '6/12'
    },
    {
      value: 'w-7/12',
      label: '7/12'
    },
    {
      value: 'w-8/12',
      label: '8/12'
    },
    {
      value: 'w-9/12',
      label: '9/12'
    },
    {
      value: 'w-10/12',
      label: '10/12'
    },
    {
      value: 'w-11/12',
      label: '11/12'
    },
    {
      value: 'w-12/12',
      label: 'Full'
    },
    {
      value: 'w-screen',
      label: 'Screen'
    }
  ];

  return {
    options
  }
}

export function useHeight() {
  const options = [
    {
      value: '',
      label: 'Auto'
    },
    {
      value: 'h-1/6',
      label: '1/6'
    },
    {
      value: 'h-1/5',
      label: '1/5'
    },
    {
      value: 'h-1/4',
      label: '1/4'
    },
    {
      value: 'h-1/3',
      label: '1/3'
    },
    {
      value: 'h-2/5',
      label: '2/5'
    },
    {
      value: 'h-1/2',
      label: '1/2'
    },
    {
      value: 'h-3/5',
      label: '3/5'
    },
    {
      value: 'h-2/3',
      label: '2/3'
    },
    {
      value: 'h-3/4',
      label: '3/4'
    },
    {
      value: 'h-4/5',
      label: '4/5'
    },
    {
      value: 'h-5/6',
      label: '5/6'
    },
    {
      value: 'h-full',
      label: 'Full'
    },
    {
      value: 'h-screen',
      label: 'Screen'
    }
  ];

  return {
    options
  }
}

export function useObjectFit() {
  const options = [
    {
      value: 'object-contain',
      label: 'Contain'
    },
    {
      value: 'object-cover',
      label: 'Cover'
    },
    {
      value: 'object-fill',
      label: 'Fill'
    },
    {
      value: 'object-none',
      label: 'None'
    },
    {
      value: 'object-scale-down',
      label: 'Scale'
    }
  ];

  return {
    options
  }
}

export function useMargin() {
  const options = [
    {
      value: 'auto',
      label: 'Auto'
    },
    {
      value: 'm-0',
      label: '0'
    },
    {
      value: 'm-px',
      label: 'PX'
    },
    {
      value: 'm-0.5',
      label: '0.5'
    },
    {
      value: 'm-1',
      label: '1'
    },
    {
      value: 'm-1.5',
      label: '1.5'
    },
    {
      value: 'm-2',
      label: '1'
    },
    {
      value: 'm-2.5',
      label: '2.5'
    },
    {
      value: 'm-3',
      label: '3'
    },
    {
      value: 'm-3.5',
      label: '3.5'
    },
    {
      value: 'm-4',
      label: '4'
    },
    {
      value: 'm-5',
      label: '5'
    },
    {
      value: 'm-10',
      label: '10'
    },
    {
      value: 'm-15',
      label: '15'
    },
    {
      value: 'm-20',
      label: '20'
    },
    {
      value: 'm-25',
      label: '25'
    },
    {
      value: 'm-30',
      label: '30'
    },
    {
      value: 'm-35',
      label: '35'
    },
    {
      value: 'm-40',
      label: '40'
    },
    {
      value: 'm-50',
      label: '50'
    },
    {
      value: 'm-60',
      label: '60'
    },
    {
      value: 'm-70',
      label: '70'
    },
    {
      value: 'm-80',
      label: '80'
    }
  ];

  return {
    options
  }
}

export function usePadding() {
  const options = [
    {
      value: 'auto',
      label: 'Auto'
    },
    {
      value: 'p-0',
      label: '0'
    },
    {
      value: 'p-px',
      label: 'PX'
    },
    {
      value: 'p-0.5',
      label: '0.5'
    },
    {
      value: 'p-1',
      label: '1'
    },
    {
      value: 'p-1.5',
      label: '1.5'
    },
    {
      value: 'p-2',
      label: '1'
    },
    {
      value: 'p-2.5',
      label: '2.5'
    },
    {
      value: 'p-3',
      label: '3'
    },
    {
      value: 'p-3.5',
      label: '3.5'
    },
    {
      value: 'p-4',
      label: '4'
    },
    {
      value: 'p-5',
      label: '5'
    },
    {
      value: 'p-10',
      label: '10'
    },
    {
      value: 'p-15',
      label: '15'
    },
    {
      value: 'p-20',
      label: '20'
    },
    {
      value: 'p-25',
      label: '25'
    },
    {
      value: 'p-30',
      label: '30'
    },
    {
      value: 'p-35',
      label: '35'
    },
    {
      value: 'p-40',
      label: '40'
    },
    {
      value: 'p-50',
      label: '50'
    },
    {
      value: 'p-60',
      label: '60'
    },
    {
      value: 'p-70',
      label: '70'
    },
    {
      value: 'p-80',
      label: '80'
    }
  ];

  return {
    options
  }
}

export function useTypeface() {
  const options = [
    {
      value: '',
      label: 'System UI'
    },
    {
      value: 'font-sans',
      label: 'Sans'
    },
    {
      value: 'font-serif',
      label: 'Serif'
    },
    {
      value: 'font-mono',
      label: 'Mono'
    },
    {
      value: 'font-merriweather',
      label: 'Merriweather'
    },
    {
      value: 'font-nunito',
      label: 'Nunito'
    }
  ];

  return {
    options
  }
}

export function useFontWeight() {
  const options = [
    {
      value: 'font-thin',
      label: 'Thin'
    },
    {
      value: 'font-extralight',
      label: 'Extralight'
    },
    {
      value: 'font-light',
      label: 'Light'
    },
    {
      value: 'font-normal',
      label: 'Normal'
    },
    {
      value: 'font-normal',
      label: 'Medium'
    },
    {
      value: 'font-semibold',
      label: 'Semibold'
    },
    {
      value: 'font-bold',
      label: 'Bold'
    },
    {
      value: 'font-extrabold',
      label: 'Extrabold'
    },
    {
      value: 'font-black',
      label: 'Black'
    }
  ];

  return {
    options
  }
}

export function useFontSize() {
  const options = [
    {
      value: 'text-xs',
      label: 'XS'
    },
    {
      value: 'text-sm',
      label: 'SM'
    },
    {
      value: 'text-base',
      label: 'Base'
    },
    {
      value: 'text-lg',
      label: 'LG'
    },
    {
      value: 'text-xl',
      label: 'XL'
    },
    {
      value: 'text-2xl',
      label: '2XL'
    },
    {
      value: 'text-3xl',
      label: '3XL'
    },
    {
      value: 'text-4xl',
      label: '4XL'
    },
    {
      value: 'text-5xl',
      label: '5XL'
    },
    {
      value: 'text-6xl',
      label: '6XL'
    },
    {
      value: 'text-7xl',
      label: '7XL'
    },
    {
      value: 'text-8xl',
      label: '8XL'
    },
    {
      value: 'text-9xl',
      label: '9XL'
    }
  ];

  return {
    options
  }
}

export function useFontColor() {
  const options = [
    {
      value: 'text-transparent',
      label: 'Transparent'
    },
    {
      value: 'text-current',
      label: 'Inherit'
    },
    {
      value: 'text-black',
      label: 'Black'
    },
    {
      value: 'text-white',
      label: 'White '
    },
    {
      value: 'text-gray-50',
      label: 'Gray(50)'
    },
    {
      value: 'text-gray-500',
      label: 'Gray(500)'
    },
    {
      value: 'text-gray-900',
      label: 'Gray(900)'
    },
    {
      value: 'text-red-50',
      label: 'Red(50)'
    },
    {
      value: 'text-red-500',
      label: 'Red(500)'
    },
    {
      value: 'text-red-900',
      label: 'Red(900)'
    },
    {
      value: 'text-yellow-50',
      label: 'Yellow(50)'
    },
    {
      value: 'text-yellow-500',
      label: 'Yellow(500)'
    },
    {
      value: 'text-yellow-900',
      label: 'Yellow(900)'
    },
    {
      value: 'text-green-50',
      label: 'Green(50)'
    },
    {
      value: 'text-green-500',
      label: 'Green(500)'
    },
    {
      value: 'text-green-900',
      label: 'Green(900)'
    },
    {
      value: 'text-blue-50',
      label: 'Blue(50)'
    },
    {
      value: 'text-blue-500',
      label: 'Blue(500)'
    },
    {
      value: 'text-blue-900',
      label: 'Blue(900)'
    }
  ];

  return {
    options
  }
}

export function useTextAlignment() {
  const options = [
    {
      value: 'text-left',
      label: 'Left'
    },
    {
      value: 'text-right',
      label: 'Right'
    },
    {
      value: 'text-center',
      label: 'Center'
    },
    {
      value: 'text-justify',
      label: 'Justify '
    },
  ];

  return {
    options
  }
}

export function useTextTransform() {
  const options = [
    {
      value: 'uppercase',
      label: 'Uppercase'
    },
    {
      value: 'lowercase',
      label: 'Lowercase'
    },
    {
      value: 'capitalize',
      label: 'Capitalize'
    },
    {
      value: 'normal-case',
      label: 'Normal '
    },
  ];

  return {
    options
  }
}

export function useBackgroundColor() {
  const options = [
    {
      value: 'bg-transparent',
      label: 'Transparent'
    },
    {
      value: 'bg-black',
      label: 'Black'
    },
    {
      value: 'bg-white',
      label: 'White '
    },
    {
      value: 'bg-gray-500',
      label: 'Gray(500) '
    },
    {
      value: 'bg-red-500',
      label: 'Red(500) '
    },
    {
      value: 'bg-yellow-500',
      label: 'Yellow(500) '
    },
    {
      value: 'bg-green-500',
      label: 'Green(500) '
    },
    {
      value: 'bg-blue-500',
      label: 'Blue(500) '
    },
    {
      value: 'bg-indigo-500',
      label: 'Indigo(500) '
    },
    {
      value: 'bg-purple-500',
      label: 'Purple(500) '
    },
    {
      value: 'bg-pink-500',
      label: 'Pink(500) '
    },
  ];

  return {
    options
  }
}

export function useBorderRadius() {
  const options = [
    {
      value: 'rounded-none',
      label: 'None'
    },
    {
      value: 'rounded-sm',
      label: 'SM'
    },
    {
      value: 'rounded-md',
      label: 'MD '
    },
    {
      value: 'rounded-lg',
      label: 'LG'
    },
    {
      value: 'rounded-xl',
      label: 'XL'
    },
    {
      value: 'rounded-2xl',
      label: '2XL'
    },
    {
      value: 'rounded-3xl',
      label: '3XL'
    },
    {
      value: 'rounded-full	',
      label: 'Full'
    },
  ];

  return {
    options
  }
}

export function useBorderWidth() {
  const options = [
    {
      value: 'border-0',
      label: '0'
    },
    {
      value: 'border',
      label: '1'
    },
    {
      value: 'border-2',
      label: '2'
    },
    {
      value: 'border-4',
      label: '4 '
    },
    {
      value: 'border-8',
      label: '8'
    },
  ];

  return {
    options
  }
}

export function useBorderColor() {
  const options = [
    {
      value: 'border-transparent',
      label: 'Transparent'
    },
    {
      value: 'border-black',
      label: 'Black'
    },
    {
      value: 'border-white',
      label: 'White '
    },
    {
      value: 'border-gray-500',
      label: 'Gray(500) '
    },
    {
      value: 'border-red-500',
      label: 'Red(500) '
    },
    {
      value: 'border-yellow-500',
      label: 'Yellow(500) '
    },
    {
      value: 'border-green-500',
      label: 'Green(500) '
    },
    {
      value: 'border-blue-500',
      label: 'Blue(500) '
    },
    {
      value: 'border-indigo-500',
      label: 'Indigo(500) '
    },
    {
      value: 'border-purple-500',
      label: 'Purple(500) '
    },
    {
      value: 'border-pink-500',
      label: 'Pink(500) '
    },
  ];

  return {
    options
  }
}