import { defineConfig } from 'vitepress'

const researchNotebook = [
  { text: 'Concept comparison', link: '/concepts' },
  { text: 'Game components', link: '/game' },
  { text: 'Architecture', link: '/architecture' },
  { text: 'Research methods', link: '/research-method' },
  { text: 'Review process', link: '/review-process' },
]

const projectPlanning = [
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
    nav: [{ text: 'Project planning', items: projectPlanning }],
    sidebar: [
      { text: 'Research notebook', items: researchNotebook },
      { text: 'Project planning', items: projectPlanning },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/dhruvi0805/IS218_Game' }],
  },
})
