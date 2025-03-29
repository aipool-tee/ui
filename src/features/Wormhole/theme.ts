import { Theme } from './types'

export const darkTheme = {
  primary: {
    '50': '#FAFAFA',
    '100': '#F5F5F5',
    '200': '#EEEEEE',
    '300': '#E0E0E0',
    '400': '#BDBDBD',
    '500': '#9E9E9E',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A100: '#F5F5F5',
    A200: '#EEEEEE',
    A400: '#BDBDBD',
    A700: '#616161'
  },
  secondary: {
    '50': '#FAFAFA',
    '100': '#F5F5F5',
    '200': '#EEEEEE',
    '300': '#E0E0E0',
    '400': '#BDBDBD',
    '500': '#9E9E9E',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A100: '#F5F5F5',
    A200: '#EEEEEE',
    A400: '#BDBDBD',
    A700: '#616161'
  },
  divider: '#ffffff33',
  background: { default: 'rgba(28, 36, 62, 1)' },
  text: { primary: '#FFFFFF', secondary: 'rgba(191, 210, 255, 1)' },
  error: {
    '50': '#FFEBEE',
    '100': '#FFCDD2',
    '200': '#EF9A9A',
    '300': '#E57373',
    '400': '#EF5350',
    '500': '#F44336',
    '600': '#E53935',
    '700': '#D32F2F',
    '800': '#C62828',
    '900': '#B71C1C',
    A100: '#FF8A80',
    A200: '#FF5252',
    A400: '#FF1744',
    A700: '#D50000'
  },
  info: {
    '50': '#97A5B7',
    '100': '#8293A9',
    '200': '#6E819A',
    '300': '#596F8C',
    '400': '#445D7E',
    '500': '#304C70',
    '600': '#2B4464',
    '700': '#263C59',
    '800': '#21354E',
    '900': '#1C2D43',
    A100: '#304C70',
    A200: '#304C70',
    A400: '#304C70',
    A700: '#304C70'
  },
  success: {
    '50': '#66D6CD',
    '100': '#4DCFC4',
    '200': '#33C8BC',
    '300': '#1AC1B4',
    '400': '#01BBAC',
    '500': '#00A89A',
    '600': '#009589',
    '700': '#008278',
    '800': '#007067',
    '900': '#005D56',
    A100: '#00A89A',
    A200: '#00A89A',
    A400: '#00A89A',
    A700: '#00A89A'
  },
  warning: {
    '50': '#FFE3A4',
    '100': '#FFDD91',
    '200': '#FFD77F',
    '300': '#FFD26D',
    '400': '#FFCC5B',
    '500': '#FFC749',
    '600': '#E5B341',
    '700': '#CC9F3A',
    '800': '#B28B33',
    '900': '#99772B',
    A100: '#FFC749',
    A200: '#FFC749',
    A400: '#FFC749',
    A700: '#FFC749'
  },
  button: {
    primary: 'rgba(140, 167, 232, 0.15)',
    primaryText: '#FFFFFF',
    disabled: '#ffffff0F',
    disabledText: '#ffffff66',
    action: 'rgba(255, 255, 255, 1)',
    actionText: 'rgba(0, 0, 0, 1)',
    hover: '#ffffff0F'
  },
  options: { hover: '#ffffff0F', select: '#ffffff19' },
  card: { background: 'rgba(11, 16, 34, 1)', secondary: '#ffffff0C', elevation: 'none' },
  popover: { background: '#1B2033', secondary: '#ffffff0C', elevation: 'none' },
  modal: { background: 'rgba(0, 0, 0, 0.8)' },
  font: { primary: '"Space Grotesk", sans-serif', header: '"Space Grotesk", monospace' }
}

export const lightTheme = {
  primary: {
    '50': '#FFFFFF',
    '100': '#F8F9FA',
    '200': '#E9ECEF',
    '300': '#DEE2E6',
    '400': '#CED4DA',
    '500': '#ADB5BD',
    '600': '#6C757D',
    '700': '#495057',
    '800': '#343A40',
    '900': '#212529',
    A100: '#F8F9FA',
    A200: '#E9ECEF',
    A400: '#ADB5BD',
    A700: '#495057'
  },
  secondary: {
    '50': '#F8F9FA',
    '100': '#E9ECEF',
    '200': '#E2E6EA',
    '300': '#D6DDE4',
    '400': '#C8D0D9',
    '500': '#ADB5BD',
    '600': '#8D959D',
    '700': '#6C757D',
    '800': '#495057',
    '900': '#343A40',
    A100: '#F8F9FA',
    A200: '#E9ECEF',
    A400: '#ADB5BD',
    A700: '#6C757D'
  },
  divider: '#E2E6EA',
  background: { default: '#F8F9FA' },
  text: { primary: '#343A40', secondary: '#6C757D' },
  error: {
    '50': '#FFEBEE',
    '100': '#FFCDD2',
    '200': '#EF9A9A',
    '300': '#E57373',
    '400': '#EF5350',
    '500': '#F44336',
    '600': '#E53935',
    '700': '#D32F2F',
    '800': '#C62828',
    '900': '#B71C1C',
    A100: '#FF8A80',
    A200: '#FF5252',
    A400: '#FF1744',
    A700: '#D50000'
  },
  info: {
    '50': '#97A5B7',
    '100': '#8293A9',
    '200': '#6E819A',
    '300': '#596F8C',
    '400': '#445D7E',
    '500': '#304C70',
    '600': '#2B4464',
    '700': '#263C59',
    '800': '#21354E',
    '900': '#1C2D43',
    A100: '#304C70',
    A200: '#304C70',
    A400: '#304C70',
    A700: '#304C70'
  },
  success: {
    '50': '#66D6CD',
    '100': '#4DCFC4',
    '200': '#33C8BC',
    '300': '#1AC1B4',
    '400': '#01BBAC',
    '500': '#00A89A',
    '600': '#009589',
    '700': '#008278',
    '800': '#007067',
    '900': '#005D56',
    A100: '#00A89A',
    A200: '#00A89A',
    A400: '#00A89A',
    A700: '#00A89A'
  },
  warning: {
    '50': '#FFE3A4',
    '100': '#FFDD91',
    '200': '#FFD77F',
    '300': '#FFD26D',
    '400': '#FFCC5B',
    '500': '#FFC749',
    '600': '#E5B341',
    '700': '#CC9F3A',
    '800': '#B28B33',
    '900': '#99772B',
    A100: '#FFC749',
    A200: '#FFC749',
    A400: '#FFC749',
    A700: '#FFC749'
  },
  button: {
    primary: '#E2E6EA',
    primaryText: '#343A40',
    disabled: '#F8F9FA',
    disabledText: '#ADB5BD',
    action: '#DEE2E6',
    actionText: '#343A40',
    hover: '#D6DDE4'
  },
  options: { hover: '#E9ECEF', select: '#DEE2E6' },
  card: { background: '#FFFFFF', secondary: '#F8F9FA', elevation: 'none' },
  popover: { background: '#FFFFFF', secondary: '#F8F9FA', elevation: 'none' },
  modal: { background: '#F8F9FA' },
  font: { primary: '"Inter", sans-serif', header: '"IBM Plex Mono", monospace' }
}

enum Modes {
  light = 'light',
  dark = 'dark'
}

export const Themes: { [mode in Modes]: { mode: 'light' | 'dark'; customTheme: Theme } } = {
  light: {
    mode: 'light',
    customTheme: lightTheme
  },
  dark: {
    mode: 'dark',
    customTheme: darkTheme
  }
}
