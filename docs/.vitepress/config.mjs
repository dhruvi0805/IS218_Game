import { defineConfig } from 'vitepress'

const pages = [
  { text: 'Project plan', link: '/plan' },
  { text: 'Research', link: '/research' },
  { text: 'Experiment', link: '/experiment' },
  { text: 'Peer review', link: '/review' },
]

export default defineConfig({
  title: 'NeuroNet',
  description: 'An IS218 research notebook on practice games and visual progress.',
  base: process.env.DOCS_BASE || '/',
  themeConfig: {
    nav: pages,
    sidebar: [{ text: 'Research notebook', items: pages }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/dhruvi0805/IS218_Game' }],
  },
})
