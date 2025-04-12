export const darkColors: Record<keyof typeof colors, string> = {
  // app main bg color
  primary: '#E2E8F0',
  secondary: '#B8D6FF',
  secondary10: 'rgba(184, 214, 255, 0.1)',

  // component color - card backgrounds
  backgroundDark: 'rgba(226, 232, 240, 0.95)',
  backgroundDark50: 'rgba(226, 232, 240, 0.5)',
  backgroundMedium: 'rgba(226, 232, 240, 0.8)',
  backgroundLight: 'linear-gradient(90deg, rgba(207, 232, 245, 0.75) 0%, rgba(187, 229, 251, 0.85) 10%, rgba(187, 229, 251, 0.95) 100%)',
  backgroundLight50: 'rgba(226, 232, 240, 0.5)',
  backgroundLight30: 'rgba(226, 232, 240, 0.3)',
  backgroundTransparent12: 'rgba(226, 232, 240, 0.12)',
  backgroundTransparent07: 'rgba(226, 232, 240, 0.07)',
  backgroundTransparent10: 'rgba(226, 232, 240, 0.1)',

  // Input and selection backgrounds
  // inputBg: 'rgba(226, 232, 240, 0.95)',
  // inputActiveBg: 'rgba(226, 232, 240, 1)',
  // inputHoverBg: 'rgba(226, 232, 240, 0.98)',
  // selectBg: 'rgba(226, 232, 240, 0.95)',
  // selectActiveBg: 'rgba(226, 232, 240, 1)',

  // text colors for better visibility
  textPrimary: '#000000',
  textSecondary: '#000000',
  textTertiary: '#000000',
  textRevertPrimary: '#000000',
  textRed: '#FF0000',
  textBlack: '#000000',

  textLink: '#000000',
  textQuaternary: '#000000',
  textQuinary: '#000000',
  textSenary: 'rgba(137, 167, 214, 0.5)',
  textSeptenary: '#000000',
  textPurple: '#89A7D6',
  textPink: '#89A7D6',

  // button
  buttonPrimary: '#E7FF45',
  buttonPrimary__01: '#E7FF45',
  buttonPrimary__02: '#D4F540',
  buttonSolidText: '#051829',
  buttonSecondary: 'rgba(231, 255, 69, 0.4)',

  // switch
  switchOn: '#E7FF45',
  switchOff: '#89A7D6',

  // select
  selectActive: '#E7FF45',
  selectActiveSecondary: '#E7FF45',
  selectInactive: 'rgba(137, 167, 214, 0.3)',

  // chart
  chart01: '#E7FF45',
  chart02: '#D4F540',
  chart03: '#C6EB33',
  chart04: '#B8E126',
  chart05: '#AAD719',
  chart06: '#9CCD0C',
  chart07: '#8EC300',
  chart08: '#D4F540',
  chart09: '#E7FF4533',

  // Icon
  iconBg: 'rgba(226, 232, 240, 0.15)',
  iconEmptyStroke: '#051829',

  // success/warning/error/info
  semanticSuccess: '#E7FF45',
  semanticError: '#FF4E4E',
  semanticWarning: '#FFB84E',
  semanticNeutral: '#89A7D6',
  semanticFocus: '#E7FF45',
  semanticFocusShadow: 'none',

  // Tab
  tabFolderTabListBg: 'var(--background-light-opacity)',

  // Step
  stepActiveBg: 'var(--background-light)',
  stepHoofBg: 'var(--primary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#E7FF45',
  priceFloatingDown: '#FF4E4E',
  priceFloatingFlat: '#89A7D6',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: 'rgba(226, 232, 240, 0.95)',

  popoverBg: 'rgba(226, 232, 240, 0.95)',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(137, 167, 214, 0.2)',

  // badge
  badgePurple: 'rgba(137, 167, 214, 0.5)',
  badgeBlue: 'rgba(184, 214, 255, 0.5)',

  // divider
  dividerBg: 'rgba(137, 167, 214, 0.3)',

  // input
  inputMask: 'rgba(226, 232, 240, 0.2)',

  // customize
  backgroundApp: '#96bfe6',
  solidButtonBg: '#E7FF45',
  outlineButtonBg: 'rgba(231, 255, 69, 0.95)',
  filledProgressBg: 'rgba(226, 232, 240, 0.95)',
  modalContainerBg: 'rgba(226, 232, 240, 0.12)',
  transparentContainerBg: 'rgba(226, 232, 240, 0.95)',
  infoButtonBg: 'rgba(226, 232, 240, 0.4)',
  warnButtonBg: 'rgba(255, 184, 78, 0.3)',
  warnButtonLightBg: 'rgba(255, 184, 78, 0.1)',
  buttonBg01: 'rgba(231, 255, 69, 0.95)',
  lightPurple: '#89A7D6',
  background01: 'rgba(226, 232, 240, 0.95)',
  background02: 'rgba(226, 232, 240, 0.95)',
  background03: 'rgba(226, 232, 240, 0.85)',
  cardBorder01: 'rgba(137, 167, 214, 0.2)',
  text01: '#051829',
  text02: '#051829',
  text03: '#051829',
  brandGradient: 'linear-gradient(180deg, #E8F0FF 0%, #D8E6FF 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'rgba(226, 232, 240, 0.95)',

  panelCardShadow: '0px 8px 24px rgba(137, 167, 214, 0.12)',
  panelCardBorder: 'none'
}

export const lightColors: Partial<typeof darkColors> = {
  // app main bg color
  primary: '#abc4ff',
  secondary: '#4F53F3',
  secondary10: 'rgba(34, 209, 248, 0.1)',

  // component color
  backgroundDark: '#EDEDFF',
  backgroundDark50: '#EDEDFF80',
  backgroundMedium: '#EDEDFF',
  backgroundLight: '#F5F8FF',
  backgroundLight50: '#F5F8FF88',
  backgroundLight30: '#F5F8FF4d',
  backgroundTransparent12: 'rgba(171, 196, 255, 0.12)',
  backgroundTransparent07: 'rgba(171, 196, 255, 0.07)',
  backgroundTransparent10: 'rgba(171, 196, 255, 0.1)',

  // text
  textPrimary: '#000000',
  textSecondary: '#000000', // Colors wont change? cookies? idk..
  textTertiary: '#474ABB99',
  textRevertPrimary: '#ECF5FF',
  textRed: '#FF0000',
  textBlack: '#000000',

  textLink: '#22D1F8',

  /** 🤔 what's this */
  textQuaternary: '#C4D6FF',
  /** 🤔 what's this */
  textQuinary: '#1C243E',
  /** 🤔 what's this */
  textSenary: 'rgba(196, 214, 255, 0.5)',
  /** 🤔 what's this */
  textSeptenary: '#22D1F8',
  /** 🤔 what's this */
  textPurple: '#8C6EEF',
  /** 🤔 what's this */
  textPink: '#FF4EA3',

  // button
  buttonPrimary: '#4F53F3',
  buttonPrimary__01: '#4F53F3',
  buttonPrimary__02: '#8C6EEF',
  buttonSolidText: '#ECF5FF',
  buttonSecondary: '#39D0D8',

  // switch
  switchOn: '#8C6EEF',
  switchOff: '#8C6EEF80',

  // select
  selectActive: '#8C6EEF',
  selectActiveSecondary: '#8C6EEF',
  selectInactive: '#abc4ffef',

  // chart
  chart01: '#abc4ff',
  chart02: '#39D0D8',
  chart03: '#8C6EEF',
  chart04: '#2B6AFF',
  chart05: '#FF7043',
  chart06: '#FED33A',
  chart07: '#4F53F3',
  chart08: '#22D1F8',
  chart09: '#8C6EEF33',

  // Icon
  iconBg: '',
  iconEmptyStroke: '#ECF5FF',

  // success/warning/error/info
  semanticSuccess: '#39D0D8',
  semanticError: '#FF4EA3',
  semanticWarning: '#B89900',
  semanticNeutral: '#ABC4FF',
  semanticFocus: '#A259FF',
  semanticFocusShadow: '#A259FF33',

  // Tab
  tabFolderTabListBg: 'var(--background-dark)',

  // Step
  stepActiveBg: 'var(--background-dark-opacity)',
  stepHoofBg: 'var(--secondary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#22D1F8',
  priceFloatingDown: '#FF4EA3',
  priceFloatingFlat: '#888888',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: '#fff',

  popoverBg: '#fff',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(196, 214, 255, 0.5)',

  // badge
  badgePurple: 'rgba(140, 110, 239, 0.5)',
  badgeBlue: 'rgba(34, 209, 248, 0.5)',

  // divider
  dividerBg: 'rgba(171, 196, 255, 0.3)',

  // input
  inputMask: '#fff3',

  // customize (by V3 frontend coder)
  backgroundApp: '#96bfe6',

  solidButtonBg: 'linear-gradient(272deg, #4F53F3 2.63%, #8C6EEF 95.31%)',
  outlineButtonBg: 'linear-gradient(270deg, #8C6EEF1a 0%, #4F53F31a 100%)',
  filledProgressBg: 'linear-gradient(270deg, #8C6EEF 0%, #4F53F3 100%)',
  transparentContainerBg: '#F5F8FF',
  modalContainerBg: '#ABC4FF12',
  infoButtonBg: '#ABC4FF33',
  warnButtonBg: '#FED33A33',
  warnButtonLightBg: '#FED33A1A',
  buttonBg01: '#ABC4FF1F',
  lightPurple: '#474ABB',
  background01: '#EDEDFF',
  background02: '#ABC4FF33',
  background03: '#FF4EA31A',
  cardBorder01: '#8C6EEF80',
  text01: '#D6CC56',
  text02: '#000',
  text03: '#474ABB',
  /** it's designer's variable name in Figma */
  brandGradient: 'linear-gradient(244deg, #7748FC 8.17%, #39D0D8 101.65%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #fffe',

  panelCardShadow: 'none',
  panelCardBorder: '1px solid rgba(171, 196, 255, 0.50)'
}
/**
 * note: it is not colors value, but colors css variable
 * color info may change in run-time by setting page, so use runtime css variable
 */
export const colors = {
  // app main bg color
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  secondary10: 'var(--secondary10)',
  textRed: 'var(--text-red)',
  textBlack: 'var(--text-black)',

  // component color
  backgroundDark: 'var(--background-dark)',
  backgroundDark50: 'var(--background-dark50)',
  backgroundMedium: 'var(--background-medium)',
  backgroundLight: 'var(--background-light)',
  backgroundLight50: 'var(--background-light50)',
  backgroundLight30: 'var(--background-light30)',
  backgroundTransparent12: 'var(--background-transparent12)',
  backgroundTransparent07: 'var(--background-transparent07)',
  backgroundTransparent10: 'var(--background-transparent10)',

  // text
  /** white */
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  /** #abc4ff80 */
  textTertiary: 'var(--text-tertiary)',
  textRevertPrimary: 'var(--text-revert-primary)',

  textLink: 'var(--text-link)',

  /** 🤔 what's this */
  textQuaternary: 'var(--text-quaternary)',
  /** 🤔 what's this */
  textQuinary: 'var(--text-quinary)',
  /** 🤔 what's this */
  textSenary: 'var(--text-senary)',
  /** 🤔 what's this */
  textSeptenary: 'var(--text-septenary)',
  /** 🤔 what's this */
  textPurple: 'var(--text-purple)',
  /** 🤔 what's this */
  textPink: 'var(--text-pink)',

  // button
  buttonPrimary: 'var(--button-primary)',
  buttonPrimary__01: 'var(--button-primary__01)',
  buttonPrimary__02: 'var(--button-primary__02)',
  buttonSolidText: 'var(--button-solid-text)',
  buttonSecondary: 'var(--button-secondary)',

  // switch
  switchOn: 'var(--switch-on)',
  switchOff: 'var(--switch-off)',
  selectActive: 'var(--select-active)',
  selectActiveSecondary: 'var(--select-active-secondary)',
  selectInactive: 'var(--select-inactive)',

  // chart
  chart01: 'var(--chart01)',
  chart02: 'var(--chart02)',
  chart03: 'var(--chart03)',
  chart04: 'var(--chart04)',
  chart05: 'var(--chart05)',
  chart06: 'var(--chart06)',
  chart07: 'var(--chart07)',
  chart08: 'var(--chart08)',
  chart09: 'var(--chart09)',

  // Icon
  iconBg: 'var(--icon-bg)',
  iconEmptyStroke: 'var(--icon-empty-stroke)',

  // success/warning/error/info
  semanticSuccess: 'var(--semantic-success)',
  semanticError: 'var(--semantic-error)',
  semanticWarning: 'var(--semantic-warning)',
  semanticNeutral: 'var(--semantic-neutral)',
  semanticFocus: 'var(--semantic-focus)',
  semanticFocusShadow: 'var(--semantic-focus-shadow)',

  // Tab
  tabFolderTabListBg: 'var(--tab-folder-tab-list-bg)',

  // Step
  stepActiveBg: 'var(--step-active-bg)',
  stepHoofBg: 'var(--step-hoof-bg)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: 'var(--price-floating-up)',
  priceFloatingDown: 'var(--price-floating-down)',
  priceFloatingFlat: 'var(--price-floating-flat)',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: 'var(--tooltip-bg)',

  popoverBg: 'var(--popover-bg)',

  //customize component theme (by V3 frontend coder)
  scrollbarThumb: 'var(--scrollbar-thumb)',

  // badge
  badgePurple: 'var(--badge-purple)',
  badgeBlue: 'var(--badge-blue)',

  // divider
  dividerBg: 'var(--divider-bg)',

  // input
  inputMask: 'var(--input-mask)',

  // customize (by V3 frontend coder)
  backgroundApp: 'var(--background-app)',
  solidButtonBg: 'var(--solid-button-bg)',
  outlineButtonBg: 'var(--outline-button-bg)',
  filledProgressBg: 'var(--filled-progress-bg)',
  transparentContainerBg: 'var(--transparent-container-bg)',
  modalContainerBg: 'var(--modal-container-bg)',
  infoButtonBg: 'var(--info-button-bg)',
  warnButtonBg: 'var(--warn-button-bg)',
  warnButtonLightBg: 'var(--warn-button-light-bg)',
  buttonBg01: 'var(--button-bg-01)',
  lightPurple: 'var(--divider-bg-light-purple)',
  background01: 'var(--background-01)',
  background02: 'var(--background-02)',
  background03: 'var(--background-03)',
  cardBorder01: 'var(--card-border-01)',
  text01: 'var(--text-01)',
  text02: 'var(--text-02)',
  text03: 'var(--text-03)',
  /** it's designer's variable name in Figma */
  brandGradient: 'var(--brand-gradient)',
  dividerDashGradient: 'var(--divider-dash-gradient)',

  tokenAvatarBg: 'var(--token-avatar-bg)',

  panelCardShadow: 'var(--panel-card-shadow)',
  panelCardBorder: 'var(--panel-card-border)'
}
