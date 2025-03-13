import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  icWideMarket,
  icUpseo,
  icInterview,
  icRecruitment,
  arrowUp,
  icMarketing,
  boby,
  anhar,
} from "@/public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: icRecruitment,
    title: "Rekrut Agen",
    content:
      "Aplikasi ini mempermudah sales merekrut agen, menyediakan tools, dan melacak perkembangan dalam satu platform.",
  },
  {
    id: "feature-2",
    icon: icMarketing,
    title: "Tingkatkan Penjualan",
    content:
      "Sales dapat memantau penjualan, memberi insentif, dan mengoptimalkan strategi secara real-time.",
  },
  {
    id: "feature-3",
    icon: icWideMarket,
    title: "Jangkauan Pasar Lebih Luas",
    content:
      "Jangkau lebih banyak audiens dengan fitur SEO dan alat pemasaran digital.",
  },
  {
    id: "feature-4",
    icon: icUpseo,
    title: "Optimasi SEO untuk Penjualan",
    content:
      "Tingkatkan visibilitas produk dan peluang ditemukan oleh agen serta pelanggan.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Dengan fitur yang mudah digunakan, saya bisa fokus pada yang paling penting: membangun hubungan dengan pelanggan dan agen, serta mencapai target penjualan",
    name: "Boby Honda",
    title: "Sales Honda Pasteur",
    img: boby,
    date: 'Aug 10, 2024',
  },
  {
    id: "feedback-2",
    content:
      "Aplikasi ini membantu saya mengelola rekrutmen agen dengan lebih efisien dan meningkatkan jangkauan pemasaran",
    name: "Anhar",
    title: "Sales Tunas Toyota",
    img: anhar,
    date: 'Aug 10, 2024',
  },
  {
    id: "feedback-3",
    content:
      "Saya merasa lebih produktif dan siap untuk meraih kesuksesan lebih besar.",
    name: "Ria",
    title: "Sales Hyundai Daan Mogot",
    img: people01,
    date: 'Aug 10, 2024',
  },
  {
    id: "feedback-4",
    content:
      "Saya merasa lebih produktif dan siap untuk meraih kesuksesan lebih besar.",
    name: "Ria",
    title: "Sales Hyundai Daan Mogot",
    img: people01,
    date: 'Aug 10, 2024',
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "78+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "200+"
  }
];

export const footerLinks = [
  {
    id: "footerLinks-1",
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.Iniaga.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.Iniaga.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.Iniaga.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.Iniaga.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.Iniaga.com/terms-and-services/",
      },
    ],
  },
  {
    id: "footerLinks-2",
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.Iniaga.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.Iniaga.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.Iniaga.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.Iniaga.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.Iniaga.com/newsletters/",
      },
    ],
  },
  {
    id: "footerLinks-3",
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "/comming-soon",
      },
      {
        name: "Become a Partner",
        link: "https://www.Iniaga.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const pricingPackage = [
  {
    id: '0195457c-8f61-728c-a9ee-3cf2dcf55b5d',
    package_name: 'Starter',
    package_price: 250000,
    package_price_discount: 200000,
    package_title: 'Get started with our starter features.',
    package_features: {
      user: '1 user accounts',
      agent: '10 agent/marketer account',
      domain: 'Domain Pribadi',
      maintenance: 'Maintance Content Feature',
      basic: 'Basic support'
    }
  },
  {
    id: '0195457c-ce46-733d-bbc6-41fe2456139b',
    package_name: 'Basic',
    package_price: 350000,
    package_price_discount: 300000,
    package_title: 'Get started with our basic features.',
    package_features: {
      user: '1 user accounts',
      agent: '25 agent/marketer account',
      domain: 'Domain Pribadi',
      maintenance: 'Maintance Content Feature',
      basic: 'Standard support'
    }
  },
  {
    id: '0195457c-fdda-7778-98ad-36f5338f34e0',
    package_name: 'Pro',
    package_price: 2500000,
    package_price_discount: 2000000,
    package_title: 'Perfect for small businesses and startups.',
    package_features: {
      user: '1 user accounts',
      agent: '250 agent/marketer account',
      domain: 'Domain Pribadi',
      maintenance: 'Maintance Content Feature',
      basic: 'Full support'
    }
  }
]
