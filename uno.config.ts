import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { members, projects, socialList } from './app/config'

const projectIcon = projects.map(p => p.icon).filter(i => i.startsWith('i-'))
const socialIcons = socialList.map(item => item.icon).filter(i => i.startsWith('i-'))
const memberIcons = members.map(member => member.socials.map(item => item.icon)).flat().filter(i => i.startsWith('i-'))

const safelist: string[] = Array.from(new Set(projectIcon.concat(socialIcons, memberIcons)))

export default defineConfig({
  safelist,
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
