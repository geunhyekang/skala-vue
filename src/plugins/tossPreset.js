import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const TossPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3182F6',
      600: '#1B64DA',
      700: '#1957C2',
      800: '#1E40AF',
      900: '#1E3A8A',
      950: '#172554',
    },
  },
})

export default TossPreset
