import { defineConfig } from '@unocss/vite';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', '.history'],
  // include: ['index.html', 'src/**/*.{vue,tsx,html}'],
  presets: [presetUno({ dark: 'class' })],
  shortcuts: {
    h100b: 'h-[100%]',
    w100b: 'w-[100%]',
    hw100b: 'h-[100%] w-[100%]',
    'flex-center': 'flex justify-center',
    'flex-align': 'flex items-center',
    'flex-center-align': 'flex justify-center items-center',
    'flex-end': 'flex justify-end',
    'flex-nowrap': 'flex flex-nowrap',
    'flex-wrap': 'flex flex-wrap',
    'flex-between': 'flex justify-between',
    'flex-around': 'flex justify-around',
    'flex-rowmn': 'flex flex-row',
    'flex-column': 'flex flex-col',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden overflow-ellipsis',
  },
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      primary_hover: 'var(--primary-color-hover)',
      primary_pressed: 'var(--primary-color-pressed)',
      primary_active: 'var(--primary-color-active)',
      info: 'var(--info-color)',
      info_hover: 'var(--info-color-hover)',
      info_pressed: 'var(--info-color-pressed)',
      info_active: 'var(--info-color-active)',
      success: 'var(--success-color)',
      success_hover: 'var(--success-color-hover)',
      success_pressed: 'var(--success-color-pressed)',
      success_active: 'var(--success-color-active)',
      warning: 'var(--warning-color)',
      warning_hover: 'var(--warning-color-hover)',
      warning_pressed: 'var(--warning-color-pressed)',
      warning_active: 'var(--warning-color-active)',
      error: 'var(--error-color)',
      error_hover: 'var(--error-color-hover)',
      error_pressed: 'var(--error-color-pressed)',
      error_active: 'var(--error-color-active)',
      dark: '#18181c'
    }
  }
});
