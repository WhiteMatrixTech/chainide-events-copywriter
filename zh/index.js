import { eth_hackathon } from './eth-hackathon';
import { web3_game_bootcamp } from './web3-game-bootcamp';
import { events_homepage } from './events-homepage';
import { events_bootcamp } from './events-bootcamp';
import { events_hackathon } from './events-hackathon';
import { events_workshop_seminar } from './events-workshop-seminar';
import { events_developer_summit } from './events-developer-summit';

export const zh = {
  header: {
    home: '首页',
    ecosystem: '生态',
    bootcamp: '集训营',
    hackathon: '黑客松',
    seminar: '研讨会',
    starProjects: '战略项目',
    develop: '开发',
    workshopSeminar: '研讨会',
    developerSummit: '开发者峰会',
  },
  footer: {
    footerMediaList: [
      {
        name: 'medium',
        link: '',
      },
      {
        name: 'github',
        link: '',
      },
      {
        name: 'facebook',
        link: '',
      },
      {
        name: 'twitter',
        link: '',
      },
      {
        name: 'telegram',
        link: '',
      },
      {
        name: 'youtube',
        link: '',
      },
      {
        name: 'discord',
        link: '',
      },
    ],
    footerList: [
      {
        title: 'Learn',
        contentList: [
          {
            name: 'Tutorial',
            link: '',
          },
          {
            name: 'Course',
            link: '',
          },
          {
            name: 'Build',
            link: '',
            isTitle: true,
          },
          {
            name: 'Studio',
            link: 'https://chainide.com',
          },
          {
            name: 'Extensions',
            link: '',
          },
        ],
      },
      {
        title: 'Events',
        contentList: [
          {
            name: 'Bootcamp',
            link: `${window.location.origin}/events/bootcamp`,
          },
          {
            name: 'Hackathon',
            link: `${window.location.origin}/events/hackathon`,
          },
          {
            name: 'Workshop',
            link: `${window.location.origin}/events/workshop-seminar`,
          },
          {
            name: 'Seminar',
            link: `${window.location.origin}/events/workshop-seminar`,
          },
          {
            name: 'Summit',
            link: `${window.location.origin}/events/developer-summit`,
          },
        ],
      },
      {
        title: 'Community',
        contentList: [
          {
            name: 'Forum',
            link: 'https://forum.chainide.com/',
          },
          {
            name: 'Discord',
            link: 'https://discord.com/invite/qv8M29pYwX',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/ChainIde',
          },
          {
            name: 'Telegram',
            link: 'https://t.me/ChainIDEdevelopers',
          },
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/MatrixDapp/',
          },
        ],
      },
      {
        title: 'Resources',
        contentList: [
          {
            name: 'Blog',
            link: 'https://medium.com/white-matrix',
          },
          {
            name: 'Guides',
            link: 'https://chainide.gitbook.io/chainide-chinese/chainide/1.-ethereum-ide',
          },
          {
            name: 'Docs',
            link: 'https://chainide.gitbook.io/chainide-english-1/',
          },
          {
            name: 'Videos',
            link: 'https://www.youtube.com/channel/UCgvPUHayWfxAGiJCI2xOzNg',
          },
          {
            name: 'Open Source Code',
            link: 'https://github.com/WhiteMatrixTech',
          },
        ],
      },
      {
        title: 'Company',
        contentList: [
          {
            name: 'About Us',
            link: 'https://whitematrix.io/?lang=en',
          },
          {
            name: 'Contact Us',
            link: '',
          },
        ],
      },
    ],

    footerContent1: '© 2023 White Matrix Ltd. | All rights reserved',

    footerContent2: 'Terms of Use',
    footerContent3: 'Privacy Policy',
  },

  viewMoreButton: '查看更多',

  hero: {
    desc: 'ChainIDE 致力于全球开发者生态建设，陪伴全球开发者共同探索区块链新世界，为区块链生态带来更多流量与创新。',
    contact: '联系我们',
    countries: '使用国家',
    events: '举办活动',
    participants: '参与者',
    instructors: '导师',
    followers: '追随者',
  },
  projects: [
    {
      name: 'Matrix World',
      descs: [
        { title: '多链', text: '图灵完备元宇宙' },
        { title: '合作方', text: 'Flow, Opensea, Rarible…' },
        { title: '$8M+', text: '一级市场销售额' },
      ],
    },
    {
      name: 'Phanta Bear',
      descs: [
        { title: '第一个', text: '亚洲PFP NFT项目' },
        { title: '$9.6M+', text: '一级市场销售额' },
        { title: '20K+', text: '第一周交易额' },
      ],
    },
    {
      name: 'RIVERMEN',
      descs: [
        { title: '第一名', text: '1小时内eth燃烧量' },
        { title: '400+', text: '一级市场销售额' },
        { title: '20K+', text: '市场总交易额' },
      ],
    },

    {
      name: 'Theirsverse',
      descs: [
        { title: '创作家', text: '来自全球各地' },
        { title: '理念', text: '跨过分歧，拥抱不同' },
        { title: '1.2K+', text: '市场总交易额' },
      ],
    },

    {
      name: 'Matrix Market',
      descs: [
        { title: '位于', text: 'flow' },
        { title: '用户', text: '创作者、收藏家、交易者' },
        { title: '优势', text: '用户第一原则' },
      ],
    },

    {
      name: 'Infamous',
      descs: [
        { title: '位于', text: 'aptos' },
        { title: '技术', text: '可追踪动态NFT账本' },
        { title: '项目进展', text: 'Early Access' },
      ],
    },
  ],
  provides: {
    title: '我们提供',
    items: [
      {
        title: '体系化区块链开发课程',
        desc: '从理论知识到实践开发，涵盖高质量、多维度的区块链课程，帮助初级开发者塑造系统化的区块链认知体系，在短期内实现从0到1的突破。',
      },
      {
        title: '区块链游戏开发平台',
        desc: '全球首个云端多链区块链集成开发环境ChainIDE提供全程技术支持，云端可实现编译部署功能，无需繁琐的安装设置，加速开发迭代速度。',
      },
      {
        title: '资深开发者线上指导',
        desc: '力邀众多区块链产业资深专家进行线上技术指导，帮助初级开发者与技术大咖实现零距离接触。',
      },
    ],
  },
  more: [
    {
      title: '国际顶尖高校生态资源',
      desc: '链接国内外顶尖高校生态资源，打破企业与高校的交流边界，不断探索与高校合作的新模式。',
    },
    {
      title: '行业一流资本对接机会',
      desc: '加速区块链项目成长，提供与国际一流资本深入交流机会，帮助初级开发者尽快融入区块链产业。',
    },
    {
      title: '全球开发者链接机遇',
      desc: '打破开发者交流壁垒，创建国际化区块链技术交流社区，构建全球化区块链开发者生态圈。',
    },
  ],
  star_projects: [
    {
      title: 'Phanta Bear',
      descs: ['<b>Phanta Bear</b> 是由<b>周杰伦</b>与好友Ric在2006年共同创立的潮流品牌 <b>PHANTACi</b> ，去中心化娱乐平台 <b>Ezek</b> 共同发起，由 <b>ChainIDE</b> 提供技术支持的一款数字收藏品。', '系列数字藏品共计发行 <b>10000</b> 个，是建立在区块链技术上的多元潮流艺术娱乐文化与元宇宙结合的一次探索。每只 <b>Phanta Bear</b> 都使用由 <b>PHANTACi</b> 设计的服装和配饰。同时，<b>Ezek</b> 官方表示虚拟演唱会和元宇宙会馆正在同步筹办中，未来，<b>PhantaBear</b> 还兼具会员卡功能，持有者可凭借 <b>Phanta Bear</b> NFT享有线上线下权益。'],
    },
    {
      title: 'Rivermen',
      descs: ['<b>Rivermen</b> 是由国家建筑师 <b>Cthuwork&NA</b> 团队创作、由 <b>ChainIDE</b> 提供技术支持的一款具有浓厚中国美术风格与现代元素强烈碰撞的NFT产品。', '<b>Rivermen</b> 河里人以<b>清明上河图</b>为创作题材，并从中提取具有戏剧性和特色的人物，打造出 <b>10000></b> 个清明上河图中的元宇宙原住民。河里人持有者将获得参与未来集换式玩法、以及接受后续不定期空投的权益。此外，国建团队希望以河里人<b>Rivermen</b> 作为桥梁，吸引、连接、凝聚一批志趣相投的用户群体，打造一个参与度高、其乐融融的友好社区。'],
    },
    {
      title: 'Theirsverse',
      descs: ['<b>Theirsverse</b> 是由中国台湾女歌手、演员<b>伊能静</b>（Annie Yi）支持推动，<b>ChainIDE</b> 提供技术与生态支持，主打多元化和青年艺术概念的 <b>Theirsverse</b> 系列加密艺术作品。', `<b>Theirsverse NFT</b> 包含9个系列，共计5500个独一无二的加密艺术作品。<b>Theirsverse</b> 团队由16位来自不同文化背景的青年国际艺术家集结而成，核心理念为“跨越分歧，拥抱不同”，旨在为不同人种的跨性别流动者发声。同时，Theirsverse正在创立一个全球年轻艺术家基金，促进更多艺术家进入蓬勃发展的加密艺术世界,希望邀请全球的创作者共创品牌文化。未来，<b>Theirsverse</b> 将连结艺术、时尚、音乐与潮玩等可能性来打造全新、自由、包容的Web3品牌，还将发展自己的独立时尚玩具和DTC美容品牌。`],
    },
    {
      title: 'Infamous',
      descs: ['<b>Infamous</b> 是 <b>Matrix Labs</b> 创建的位于 <b>Aptos</b> 链上首款具有可追踪动态NFT账本技术的NFT游戏。它构建了一个由不同派系帮派成员组成的NFT游戏世界。在这里，你的人物角色可以通过升级、组建团队、完成任务等方式进行web3探索，未来 <b>Infamous</b> 还将开放元宇宙空间。'],
    },
    {
      title: 'Matrix World',
      descs: [
        '<b>Matrix World</b> 是一个3D可编程的多链元宇宙，目前正在 <b>Ethereum</b> 和 <b>Flow</b> 两条链上进行开发。<b>Matrix World</b> 构建了一个图灵完备的沉浸式元宇宙，用户可以以更低的边际成本进行创造与体验。',
        `<b>Matrix World</b> 的创建团队 <b>Matrix Labs</b> 由一群志同道合的区块链爱好者组成，他们已经与许多知名项目建立了合作伙伴关系，包括 <b>Dapper Labs</b>、<b>Flow Blockchain</b>、<b>ChainIDE</b> 等。<b>Matrix World</b> 为用户提供的元宇宙空间，可以实现3D低代码的 <b>AI Generate Contents(AIGC)</b> 与<b>User Generate Contents(UGC)</b> 创造。此外，<b>Matrix World</b> 能够为元宇宙世界提供信标，通过代码融合多元宇宙空间，为元宇宙的创新提供丰富的场景和合作资源。2022年2月26日，<b>Matrix World</b> 获得了由 <b>Tess Ventures</b>、<b>Everest Ventures Group</b>、<b>Com2Us</b> 和 <b>Y2Z Ventures</b> 领投的 550 万美元天使轮融资。`,
      ],
    },
    {
      title: '14C',
      descs: ['<b>14C</b> 是一款于 <b>Flow</b> 链上开发、由 <b>ChainIDE</b> 提供技术支持的MMORTS（大型多人在线实时战略）游戏。', `在 <b>14C</b> 中，用户可以享受<b>单人（Solo/PvE）</b>、<b>多人（PvP）</b>或<b>聚会游戏（MMO）</b>多种游戏模式。游戏中，用户可以通过建立自己的卫星城，逐步加强城市和部队，在开放的世界中征服宇宙并获得PFP NFT、土地、令牌等资源，游戏的最终目标是通过GvG的战斗来征服中央城市。`],
    },
    {
      title: 'ChainIDE',
      descs: ['<b>ChainIDE</b> 是全球首个云端多链的区块链集成开发环境，支持包括<b>Flow</b>、<b>FaceBook Diem</b>、<b>以太坊</b>、<b>微众银行FiscoBcos</b>、<b>华为鲲鹏</b>、<b>Polygon</b>、<b>Conflux</b>等10多条知名区块链底层环境。<b>ChainIDE</b> 提供云端编译功能，无需繁琐的安装设置，加速开发迭代速度。截至目前，<b>ChainIDE</b> 已帮助超过185个国家的开发者，累计提供超850万次的智能合约编译服务以及7000万次的区块链中间件流量，是全球区块链开发者流量入口。', `<b>ChainIDE</b> 的愿景是致力于建设全球开发者生态，帮助开发者完成从0到1的蜕变，陪伴全球开发者探索区块链新世界，为区块链生态带来更多流量及创新。此外，<b>ChainIDE</b> 团队渴望通过采用区块链技术来改善世界和每个人的生活。`],
    },
    {
      title: 'Matrix Market',
      descs: [`是由 <b>Matrix Labs</b> 团队倾力打造、<b>ChainIDE</b> 提供技术支持的， <b>Flow</b> 上第一个面向创作者、收藏家和交易者的<b>一体化NFT市场</b>。`, `<b>Matrix Market</b> 以用户为中心的第一原则以及丰富的附加功能属性是它的主要优势。其为创作者、交易者、收藏家等不同用户群体提供了友好便捷的适用功能。在 <b>ChainIDE</b> 技术团队的支持下，<b>Matrix Market</b> 克服了其他基于 Flow 的 NFT 市场面临的问题，引入了包括收藏排名和统计、详细的活动跟踪、提供和接受报价的能力、NFT收藏创建工具、多种钱包支持、法定入口和可定制的用户配置文件等功能。`],
    },
  ],
  demoday: {
    excellentProjects: '优秀项目展示',
    ecosystemProject: '生态项目展示',
  },
  ...eth_hackathon,
  ...web3_game_bootcamp,
  ...events_homepage,
  ...events_bootcamp,
  ...events_hackathon,
  ...events_workshop_seminar,
  ...events_developer_summit,
};
