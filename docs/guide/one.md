---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '成员1',
    title: '角色Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
  },
  {
    avatar: 'https://www.github.com/kiaking.png',
    name: '成员2',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' },
    ],
  },
]

const partners = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '伙伴1',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
  },
  {
    avatar: 'https://www.github.com/kiaking.png',
    name: '伙伴2',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' },
    ],
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>团队</template>
    <template #lead>
    VitePress的开发由一个国际团队指导，其中一些人选择在下面进行介绍。 
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>伙伴</template>
    <template #lead>
    This is our partner.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>