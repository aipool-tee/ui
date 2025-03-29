export const darkColors: Record<keyof typeof colors, string> = {
  // app main bg color
  primary: '#2C3037',
  secondary: '#1E2024',
  secondary10: 'rgba(30, 32, 36, 0.1)',

  // component color
  backgroundDark: '#16171B',
  backgroundDark50: '#16171B80',
  backgroundMedium: '#1E2024',
  backgroundLight: '#2C3037',
  backgroundLight50: '#2C303788',
  backgroundLight30: '#2C30374d',
  backgroundTransparent12: 'rgba(44, 48, 55, 0.12)',
  backgroundTransparent07: 'rgba(44, 48, 55, 0.07)',
  backgroundTransparent10: 'rgba(44, 48, 55, 0.1)',

  // text
  textPrimary: '#E2E4E8',
  textSecondary: '#9EA2A8',
  textTertiary: '#6B6E73',
  textRevertPrimary: '#16171B',

  textLink: '#9EA2A8',

  /** 🤔 what's this */
  textQuaternary: '#9EA2A8',
  /** 🤔 what's this */
  textQuinary: '#2C3037',
  /** 🤔 what's this */
  textSenary: 'rgba(158, 162, 168, 0.5)',
  /** 🤔 what's this */
  textSeptenary: '#9EA2A8',
  /** 🤔 what's this */
  textPurple: '#9EA2A8',
  /** 🤔 what's this */
  textPink: '#9EA2A8',

  // button
  buttonPrimary: '#00FF47',
  buttonPrimary__01: '#00FF47',
  buttonPrimary__02: '#00FF47',
  buttonSolidText: '#16171B',
  buttonSecondary: '#2C3037',

  // switch
  switchOn: '#9EA2A8',
  switchOff: '#6B6E73',

  // select
  selectActive: '#9EA2A8',
  selectActiveSecondary: '#9EA2A8',
  selectInactive: 'rgba(44, 48, 55, 0.3)',

  // chart
  chart01: '#2C3037',
  chart02: '#3C4047',
  chart03: '#4C5057',
  chart04: '#5C6067',
  chart05: '#6C7077',
  chart06: '#7C8087',
  chart07: '#8C9097',
  chart08: '#9CA0A7',
  chart09: '#2C303733',

  // Icon
  iconBg: '#9EA2A8',
  iconEmptyStroke: '#16171B',

  // success/warning/error/info
  semanticSuccess: '#00FF47',
  semanticError: '#FF4E4E',
  semanticWarning: '#FFB84E',
  semanticNeutral: '#9EA2A8',
  semanticFocus: '#9EA2A8',
  semanticFocusShadow: 'rgba(158, 162, 168, 0.2)',

  // Tab
  tabFolderTabListBg: 'var(--background-light-opacity)',

  // Step
  stepActiveBg: 'var(--background-light)',
  stepHoofBg: 'var(--primary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#22D1F8',
  priceFloatingDown: '#FF4EA3',
  priceFloatingFlat: '#888888',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: '#16171B',

  popoverBg: '#1E2024',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(158, 162, 168, 0.2)',

  // badge
  badgePurple: 'rgba(44, 48, 55, 0.5)',
  badgeBlue: 'rgba(158, 162, 168, 0.5)',

  // divider
  dividerBg: 'rgba(44, 48, 55, 0.3)',

  // input
  inputMask: '#16171B33',

  // customize (by V3 frontend coder)
  backgroundApp: 'linear-gradient(180deg, #16171B 0%, #1E2024 100%)',
  solidButtonBg: '#00FF47',
  outlineButtonBg: 'linear-gradient(180deg, rgba(44, 48, 55, 0.1) 0%, rgba(44, 48, 55, 0.2) 100%)',
  filledProgressBg: 'linear-gradient(180deg, #2C3037 0%, #1E2024 100%)',
  transparentContainerBg: '#16171B',
  modalContainerBg: 'rgba(44, 48, 55, 0.12)',
  infoButtonBg: 'rgba(158, 162, 168, 0.3)',
  warnButtonBg: 'rgba(255, 184, 78, 0.3)',
  warnButtonLightBg: 'rgba(255, 184, 78, 0.1)',
  buttonBg01: 'rgba(44, 48, 55, 0.15)',
  lightPurple: '#9EA2A8',
  background01: '#16171B',
  background02: 'rgba(44, 48, 55, 0.3)',
  background03: 'rgba(44, 48, 55, 0.1)',
  cardBorder01: 'rgba(158, 162, 168, 0.5)',
  text01: '#9EA2A8',
  text02: '#E2E4E8',
  text03: '#6B6E73',
  /** it's designer's variable name in Figma */
  brandGradient: 'linear-gradient(180deg, #2C3037 0%, #1E2024 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(127deg, rgba(44, 48, 55, 0.20) 28.69%, rgba(44, 48, 55, 0.00) 100%) #1E2024',

  panelCardShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  panelCardBorder: '1px solid rgba(44, 48, 55, 0.5)'
}

export const lightColors: Partial<typeof darkColors> = {
  // app main bg color
  primary: '#E2E5EA',
  secondary: '#C8CCD1',
  secondary10: 'rgba(200, 204, 209, 0.1)',

  // component color
  backgroundDark: '#F5F6F8',
  backgroundDark50: '#F5F6F880',
  backgroundMedium: '#FFFFFF',
  backgroundLight: '#FFFFFF',
  backgroundLight50: '#FFFFFF88',
  backgroundLight30: '#FFFFFF4d',
  backgroundTransparent12: 'rgba(200, 204, 209, 0.12)',
  backgroundTransparent07: 'rgba(200, 204, 209, 0.07)',
  backgroundTransparent10: 'rgba(200, 204, 209, 0.1)',

  // text
  textPrimary: '#2C3035',
  textSecondary: '#6B7075',
  textTertiary: '#9BA0A5',
  textRevertPrimary: '#FFFFFF',

  textLink: '#4A4F54',

  textQuaternary: '#D1D5DA',
  textQuinary: '#E2E5EA',
  textSenary: 'rgba(200, 204, 209, 0.5)',
  textSeptenary: '#8E9399',
  textPurple: '#9BA0A5',
  textPink: '#B5B9BE',

  // button
  buttonPrimary: 'linear-gradient(180deg, #E8EBF0 0%, #D1D5DA 100%)',
  buttonPrimary__01: '#D1D5DA',
  buttonPrimary__02: '#C8CCD1',
  buttonSolidText: '#2C3035',
  buttonSecondary: '#E2E5EA',

  // switch
  switchOn: '#8E9399',
  switchOff: '#C8CCD1',

  // select
  selectActive: '#8E9399',
  selectActiveSecondary: '#8E9399',
  selectInactive: 'rgba(200, 204, 209, 0.3)',

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
  iconBg: '#8E9399',
  iconEmptyStroke: '#FFFFFF',

  // success/warning/error/info
  semanticSuccess: '#6B7075',
  semanticError: '#9BA0A5',
  semanticWarning: '#8E9399',
  semanticNeutral: '#C8CCD1',
  semanticFocus: '#D1D5DA',
  semanticFocusShadow: 'rgba(209, 213, 218, 0.2)',

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
  tooltipBg: '#FFFFFF',

  popoverBg: '#FFFFFF',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(200, 204, 209, 0.5)',

  // badge
  badgePurple: 'rgba(142, 147, 153, 0.5)',
  badgeBlue: 'rgba(200, 204, 209, 0.5)',

  // divider
  dividerBg: 'rgba(200, 204, 209, 0.3)',

  // input
  inputMask: '#FFFFFF33',

  // customize (by V3 frontend coder)
  backgroundApp: '#FFFFFF',
  solidButtonBg: 'linear-gradient(180deg, #E8EBF0 0%, #D1D5DA 100%)',
  outlineButtonBg: 'linear-gradient(180deg, rgba(200, 204, 209, 0.1) 0%, rgba(200, 204, 209, 0.2) 100%)',
  filledProgressBg: 'linear-gradient(180deg, #D1D5DA 0%, #C8CCD1 100%)',
  transparentContainerBg: '#F5F6F8',
  modalContainerBg: 'rgba(200, 204, 209, 0.12)',
  infoButtonBg: 'rgba(200, 204, 209, 0.3)',
  warnButtonBg: 'rgba(142, 147, 153, 0.3)',
  warnButtonLightBg: 'rgba(142, 147, 153, 0.1)',
  buttonBg01: 'rgba(200, 204, 209, 0.15)',
  lightPurple: '#8E9399',
  background01: '#F5F6F8',
  background02: 'rgba(200, 204, 209, 0.3)',
  background03: 'rgba(200, 204, 209, 0.1)',
  cardBorder01: 'rgba(142, 147, 153, 0.5)',
  text01: '#6B7075',
  text02: '#2C3035',
  text03: '#9BA0A5',
  /** it's designer's variable name in Figma */
  brandGradient: 'linear-gradient(180deg, #E8EBF0 0%, #D1D5DA 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(127deg, rgba(200, 204, 209, 0.20) 28.69%, rgba(200, 204, 209, 0.00) 100%) #FFFFFF',

  panelCardShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  panelCardBorder: '1px solid rgba(200, 204, 209, 0.5)'
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
  /** #abc4ff */
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
