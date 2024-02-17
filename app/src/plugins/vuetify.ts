/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { useLocalStorage } from '@/hooks/useLocalStorage';
const { storedValue } = useLocalStorage<{ theme: string }>('Theme', {
  theme: 'light',
});
import colors from 'vuetify/util/colors';
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: storedValue?.theme || 'dark',
    themes: {
      light: {
        colors: {
          primary: colors.blueGrey.darken4,
          secondary: colors.blueGrey.darken4,
          background: colors.blueGrey.lighten5,
        },
      },
      dark: {
        colors: {
          primary: colors.blueGrey.darken1,
          secondary: colors.blueGrey.darken1,
          background: colors.blueGrey.darken4,
        },
      },
    },
  },
});
