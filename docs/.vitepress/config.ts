import { defineConfig } from 'vitepress'
import { readFileSync } from 'fs'

const siteConfig = JSON.parse(readFileSync('./site.config.json', 'utf-8'))
const siteUrl = `https://${siteConfig.subdomain}.xiyo.dev`

export default defineConfig({
  title: siteConfig.title,
  description: siteConfig.description,
  lastUpdated: siteConfig.lastUpdated,
  lang: 'ko-KR',

  sitemap: {
    hostname: siteUrl
  },

  head: [
    ['style', {}, `
      :root {
        --vp-c-brand-1: ${siteConfig.accentColor};
        --vp-c-brand-2: ${siteConfig.accentColor}dd;
        --vp-c-brand-3: ${siteConfig.accentColor}bb;
      }
    `]
  ],

  themeConfig: {
    sidebar: [
        {
            "text": "신체적 건강 관리",
            "items": [
                {
                    "text": "인체공학적 작업 환경 구축",
                    "link": "/physical-wellness/ergonomic-workspace-setup"
                },
                {
                    "text": "5분 스트레칭 루틴",
                    "link": "/physical-wellness/micro-break-stretching"
                },
                {
                    "text": "시력 보호와 수면 위생",
                    "link": "/physical-wellness/vision-care-and-sleep"
                }
            ]
        },
        {
            "text": "정신적 회복탄력성",
            "items": [
                {
                    "text": "업무와 일상의 심리적 경계 설정",
                    "link": "/mental-resilience/managing-work-life-boundary"
                },
                {
                    "text": "가면 증후군과 성장 압박 관리",
                    "link": "/mental-resilience/imposter-syndrome-recovery"
                },
                {
                    "text": "몰입과 휴식의 균형, 딥 워크",
                    "link": "/mental-resilience/productive-deep-work"
                }
            ]
        }
    ],
    socialLinks: [
      { icon: 'github', link: `https://github.com/${siteConfig.githubRepo}` }
    ]
  }
})
