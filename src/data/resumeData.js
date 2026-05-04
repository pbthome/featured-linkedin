export const hero = {
  eyebrow: {
    en: 'Senior Product Manager · AI · B2B SaaS · Ops · Growth',
    pt: 'Gerente Sênior de Produto · IA · B2B SaaS · Ops · Crescimento',
  },
  tagline: {
    en: '14 years. 5 countries. Always ships.',
    pt: '14 anos. 5 países. Sempre entrega.',
  },
  pills: [
    { en: 'AI Product Manager', pt: 'PM de IA', accent: true },
    { en: '0→1 Builder', pt: 'Builder 0→1' },
    { en: 'B2B & B2C SaaS', pt: 'B2B & B2C SaaS' },
    { en: 'Ops & Automation', pt: 'Ops & Automation' },
    { en: 'Founder', pt: 'Fundador' },
  ],
  contacts: [
    {
      href: 'mailto:ph.thome@gmail.com',
      label: 'ph.thome@gmail.com',
      icon: 'email',
    },
    {
      href: 'https://www.linkedin.com/in/pedrothome/',
      label: 'LinkedIn',
      icon: 'linkedin',
      target: '_blank',
    },
    {
      href: 'https://wa.me/5562998591000',
      label: '+55 62 99859-1000',
      icon: 'whatsapp',
      target: '_blank',
    },
    {
      href: '#',
      label: { en: 'Goiânia, Brazil', pt: 'Goiânia, Brasil' },
      icon: 'location',
    },
  ],
  stats: [
    { n: '14', l: { en: 'Years experience', pt: 'Anos de exp.' } },
    { n: '5', l: { en: 'Countries worked', pt: 'Países trabalhados' } },
    { n: '8', l: { en: 'Companies', pt: 'Empresas' } },
  ],
}

export const experiences = [
  {
    id: 0,
    current: true,
    company: 'SpaceInch',
    domain: 'spaceinch.com',
    fallback: 'SI',
    role: { en: 'Senior Product Manager', pt: 'Gerente Sênior de Produto' },
    date: { en: 'Jul 2025 – Present', pt: 'Jul 2025 – Presente' },
    city: { en: 'Remote · Tennessee, USA', pt: 'Remoto · Tennessee, EUA' },
    quote: {
      en: '"I help businesses grow faster by shipping smarter — AI is just the best tool for the job right now."',
      pt: '"Ajudo empresas a crescer mais rápido entregando com inteligência — IA é só a melhor ferramenta disponível agora."',
    },
    leftLabel: { en: 'Key projects', pt: 'Principais projetos' },
    projects: [
      {
        name: { en: 'Plant Advisor Chatbot', pt: 'Chatbot Consultor de Plantas' },
        desc: {
          en: 'LLM-powered tool for landscapers — compares plants, suggests replacements, so they never miss a sale.',
          pt: 'Ferramenta LLM para paisagistas — compara plantas, sugere substituições para nunca perder uma venda.',
        },
        badge: { text: { en: '0→1 shipped', pt: '0→1 entregue' }, type: 'badge-b' },
      },
      {
        name: { en: 'AI SDLC Framework', pt: 'Framework SDLC com IA' },
        desc: {
          en: 'Full AI-assisted dev lifecycle across client ventures: discovery → prototype → QA → launch.',
          pt: 'Ciclo de dev com IA: discovery → protótipo → QA → lançamento.',
        },
        badge: { text: { en: 'Multiple ventures', pt: 'Múltiplos projetos' }, type: 'badge-t' },
      },
    ],
    rightLabel: { en: 'Role', pt: 'Papel' },
    rightDesc: {
      en: 'Partner directly with CEO & CTO on strategy. Lead AI and automation transformation consulting for SMBs. Drive product strategy and resource allocation across client and internal ventures.',
      pt: 'Parceria com CEO e CTO. Lidera consultoria de transformação por IA para PMEs.',
    },
    tags: ['LLMs', 'AI Agents', 'Figma', 'AI QA', 'Agile'],
  },
  {
    id: 1,
    company: 'Rockspoon',
    domain: 'rockspoon.com',
    fallback: 'RS',
    role: { en: 'Senior Product Manager', pt: 'Gerente Sênior de Produto' },
    date: 'Jul 2022 – Jul 2025',
    city: { en: 'Remote · Palo Alto, USA', pt: 'Remoto · Palo Alto, EUA' },
    quote: {
      en: '"We gave restaurant managers their weekends back."',
      pt: '"Devolvemos os fins de semana dos gerentes de restaurante para eles."',
    },
    leftLabel: { en: 'Key projects', pt: 'Principais projetos' },
    projects: [
      {
        name: { en: 'Payroll & Scheduling Suite', pt: 'Suite de Folha e Escalas' },
        desc: {
          en: 'Redesigned payroll, scheduling & tip distribution — tasks that used to take hours now take minutes.',
          pt: 'Redesenho de folha, escalas e gorjetas — tarefas que levavam horas agora levam minutos.',
        },
        badge: { text: 'Hours → minutes', type: 'badge-g' },
      },
      {
        name: { en: 'Android App (0→1)', pt: 'App Android (0→1)' },
        desc: {
          en: 'Spearheaded end-to-end Android development and agile coordination from planning to QA.',
          pt: 'Liderou desenvolvimento Android do início ao QA.',
        },
        badge: { text: { en: '0→1 mobile', pt: '0→1 mobile' }, type: 'badge-b' },
      },
    ],
    rightLabel: { en: 'Integrations shipped', pt: 'Integrações entregues' },
    rightDesc: {
      en: 'Gusto (payroll), Deliverect (delivery ops), Burq (logistics) — improving B2B operational workflows end to end.',
      pt: 'Gusto, Deliverect, Burq — melhorando fluxos operacionais B2B.',
    },
    tags: ['Figma', 'Zeplin', 'A/B Testing', 'Braze', 'SQL'],
  },
  {
    id: 2,
    company: 'Rappi',
    domain: 'rappi.com',
    fallback: 'RP',
    role: { en: 'Product Lead', pt: 'Líder de Produto' },
    date: 'Jul 2020 – Jul 2022',
    city: { en: 'Remote · Colombia', pt: 'Remoto · Colômbia' },
    quote: {
      en: '"I doubled acquisition in 6 months by automating what slowed us down."',
      pt: '"Dobrei a aquisição em 6 meses automatizando o que nos atrasava."',
    },
    leftLabel: { en: 'Key projects', pt: 'Principais projetos' },
    projects: [
      {
        name: { en: 'Acquisition Automation', pt: 'Automação de Aquisição' },
        desc: {
          en: 'Internal workflow tools that doubled restaurant acquisition in 6 months.',
          pt: 'Ferramentas internas que dobraram a aquisição de restaurantes em 6 meses.',
        },
        badge: { text: '+100% acquisition', type: 'badge-g' },
      },
      {
        name: { en: 'Communication Hub', pt: 'Hub de Comunicação' },
        desc: {
          en: 'Lifecycle marketing via in-app, email, and WhatsApp through Braze.',
          pt: 'Marketing de ciclo de vida via in-app, e-mail e WhatsApp via Braze.',
        },
        badge: { text: { en: '0→1 built', pt: '0→1 construído' }, type: 'badge-t' },
      },
    ],
    rightLabel: { en: 'Also', pt: 'Também' },
    rightDesc: {
      en: 'CRM enhancements via Zoho, A/B testing, full roadmap management, stakeholder coordination across marketing and operations.',
      pt: 'Melhorias de CRM via Zoho, A/B testing, gestão de roadmap e coordenação entre marketing e operações.',
    },
    tags: ['Braze', 'Zoho CRM', 'A/B Testing', 'SQL'],
  },
  {
    id: 3,
    company: 'Uber Eats',
    domain: 'ubereats.com',
    fallback: 'UE',
    role: { en: 'Program Manager, SMB', pt: 'Program Manager, PME' },
    date: 'Aug 2019 – May 2020',
    city: 'São Paulo, Brazil',
    quote: {
      en: '"Data told me where churn started. I built the fix before it spread."',
      pt: '"Os dados me mostraram onde o churn começava. Construí a solução antes que se espalhasse."',
    },
    leftLabel: { en: 'Key results', pt: 'Principais resultados' },
    projects: [
      {
        name: { en: 'Churn Reduction Program', pt: 'Programa Antichurn' },
        desc: {
          en: 'Data-driven analysis, A/B testing, and targeted automations cut restaurant churn in half.',
          pt: 'Análise de dados, A/B testing e automações reduziram o churn pela metade.',
        },
        badge: { text: '50% churn reduction', type: 'badge-g' },
      },
    ],
    rightLabel: { en: 'Methods', pt: 'Métodos' },
    rightDesc: {
      en: 'Multivariate testing, SQL-based lifecycle analysis, profitability frameworks, cross-functional leadership across product, marketing, and ops.',
      pt: 'Testes multivariados, análise SQL de ciclo de vida, frameworks de rentabilidade, liderança transversal.',
    },
    tags: ['SQL', 'A/B Testing', 'Analytics'],
  },
  {
    id: 4,
    company: 'AkzoNobel',
    domain: 'akzonobel.com',
    fallback: 'AK',
    role: { en: 'Product & Project Manager · 3 roles', pt: 'Gerente de Produto e Projetos · 3 cargos' },
    date: 'Aug 2015 – Aug 2019',
    city: 'São Paulo · Amsterdam · Columbus',
    quote: {
      en: '"Three countries, three roles, one lesson: good product thinking travels."',
      pt: '"Três países, três cargos, uma lição: bom pensamento de produto viaja com você."',
    },
    leftLabel: { en: 'Highlights', pt: 'Destaques' },
    projects: [
      {
        name: { en: 'E-Commerce Launch · Brazil', pt: 'Lançamento E-Commerce · Brasil' },
        desc: {
          en: 'Defined user flows, product strategy, SEO growth loops. Go-to-market with sales, marketing, and tech.',
          pt: 'Fluxos, estratégia, SEO. Go-to-market com vendas, marketing e tech.',
        },
      },
      {
        name: { en: 'Teste Fácil Roller · National launch', pt: 'Rolo Teste Fácil · Lançamento nacional' },
        desc: {
          en: 'First-of-its-kind rollout in Brazil — supply chain to retail shelf.',
          pt: 'Lançamento inédito no Brasil — da cadeia de suprimentos à gôndola.',
        },
      },
    ],
    rightLabel: { en: 'Global chapters', pt: 'Capítulos globais' },
    rightItems: [
      {
        desc: {
          en: 'Amsterdam: Redesigned German distribution strategy, shaped M&A analysis for Salt Specialties.',
          pt: 'Amsterdam: Redesenhou estratégia de distribuição alemã, análise de M&A.',
        },
      },
      {
        desc: {
          en: 'Columbus, USA: Digitized rebate process, built profitability tracking for Metal Coatings.',
          pt: 'Columbus, EUA: Digitalizou rebates, criou rastreamento de rentabilidade.',
        },
      },
    ],
    tags: [],
  },
  {
    id: 5,
    company: '3M',
    domain: '3m.com',
    fallback: '3M',
    role: { en: 'Key Account Manager → Marketing Trainee', pt: 'Gerente de Contas → Trainee de Marketing' },
    date: 'Jan 2012 – Jul 2015',
    city: 'São Paulo · Campinas, Brazil',
    quote: {
      en: '"Sales taught me to listen before I pitch. That skill never left me."',
      pt: '"Vendas me ensinou a ouvir antes de apresentar. Essa habilidade nunca me abandonou."',
    },
    leftLabel: { en: 'Highlights', pt: 'Destaques' },
    projects: [
      {
        name: { en: 'Pharma Sales Growth', pt: 'Crescimento em Pharma' },
        desc: {
          en: "Grew sales 200% in 2 years for Brazil's largest pharma accounts. Overdelivered targets 2.5 years straight.",
          pt: 'Cresceu vendas 200% em 2 anos nas maiores contas pharma do Brasil. Superou metas por 2,5 anos.',
        },
        badge: { text: { en: 'Best Salesperson award', pt: 'Prêmio Melhor Vendedor' }, type: 'badge-a' },
      },
    ],
    rightLabel: { en: 'Also', pt: 'Também' },
    rightDesc: {
      en: 'Factory productivity +20% via data analysis. Reorganized nationwide promoter team, cut cost-per-sale 10%. Managed major accounts: Brasil Pharma, DPSP.',
      pt: 'Produtividade da fábrica +20% via análise de dados. Reorganizou equipe de promotores, reduziu custo/venda 10%.',
    },
    tags: [],
  },
  {
    id: 6,
    company: 'Ambev',
    domain: 'ab-inbev.com',
    fallback: 'AB',
    role: { en: 'Logistics Intern', pt: 'Estagiário de Logística' },
    date: 'Jan 2011 – Dec 2011',
    city: 'Paulínia, Brazil',
    quote: {
      en: '"Where it all started — operations, logistics, and learning how real businesses run."',
      pt: '"Onde tudo começou — operações, logística e aprendendo como empresas reais funcionam."',
    },
    leftLabel: { en: 'Contributions', pt: 'Contribuições' },
    projects: [
      {
        name: { en: 'Delivery Operations Tools', pt: 'Ferramentas de Operações' },
        desc: {
          en: 'Built tools to streamline delivery operations, improving service levels and resolving customer issues.',
          pt: 'Ferramentas para otimizar operações de entrega e melhorar níveis de serviço.',
        },
      },
      {
        name: { en: 'Logistics Reporting', pt: 'Relatórios de Logística' },
        desc: {
          en: 'Created management meeting materials that elevated logistics decision-making across the distribution center.',
          pt: 'Criou materiais para reuniões que aprimoraram a tomada de decisões logísticas.',
        },
      },
    ],
    rightLabel: { en: 'Context', pt: 'Contexto' },
    rightDesc: {
      en: "First professional experience at one of Latin America's largest beverage companies. Built the operational instincts that have shaped every role since.",
      pt: 'Primeira experiência profissional em uma das maiores empresas de bebidas da América Latina.',
    },
    tags: [],
  },
]

export const skillGroups = [
  {
    title: { en: 'Product', pt: 'Produto' },
    pills: [
      { en: 'Product Strategy', pt: 'Estratégia de Produto' },
      { en: '0→1 Development', pt: 'Dev 0→1' },
      { en: 'Roadmapping', pt: 'Roadmapping' },
      { en: 'UX Discovery', pt: 'UX Discovery' },
      { en: 'Go-to-Market', pt: 'Go-to-Market' },
    ],
  },
  {
    title: 'AI & Data',
    pills: ['LLMs', 'AI Agents', 'SQL', 'A/B Testing', { en: 'KPI Dashboards', pt: 'Dashboards KPI' }],
  },
  {
    title: { en: 'Tools', pt: 'Ferramentas' },
    pills: ['Figma', 'Jira', 'Braze', 'Zoho CRM', 'Zeplin'],
  },
  {
    title: { en: 'Leadership', pt: 'Liderança' },
    pills: [
      { en: 'Stakeholder Mgmt', pt: 'Gestão Stakeholders' },
      { en: 'Cross-functional', pt: 'Transversal' },
      'Agile / Scrum',
      { en: 'Customer Research', pt: 'Pesquisa com Clientes' },
    ],
  },
]

export const languages = [
  { name: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' }, dots: 5 },
  { name: { en: 'English', pt: 'Inglês' }, level: { en: 'Fluent', pt: 'Fluente' }, dots: 5 },
  { name: { en: 'Spanish', pt: 'Espanhol' }, level: { en: 'Fluent', pt: 'Fluente' }, dots: 5 },
  { name: { en: 'French', pt: 'Francês' }, level: { en: 'Basic', pt: 'Básico' }, dots: 2 },
]

export const education = [
  { deg: { en: 'B.S. Computer Engineering', pt: 'B.S. Engenharia de Computação' }, school: 'UNICAMP · Campinas, Brazil' },
  { deg: { en: 'Master in Marketing', pt: 'Mestrado em Marketing' }, school: 'ESPM · São Paulo, Brazil' },
]

export const founder = {
  eyebrow: { en: 'Entrepreneurial chapter', pt: 'Capítulo empreendedor' },
  title: {
    en: "I didn't just build products for restaurants. I ran one.",
    pt: 'Não só construí produtos para restaurantes. Eu operei um.',
  },
  desc: {
    en: 'Founded Riotho Sushi, a 4-brand dark kitchen in Goiânia. Scaled to 3,000+ monthly orders with a lean team — managing logistics, finance, customer experience, and growth from scratch. This is what gives me real empathy for the small business operators I\'ve built products for ever since.',
    pt: 'Fundei a Riotho Sushi, dark kitchen com 4 marcas em Goiânia. Escalou para +3.000 pedidos/mês com equipe enxuta. Essa jornada me dá empatia real pelos pequenos empresários para quem construo produtos.',
  },
  stats: [
    { n: '4', l: { en: 'Brands operated', pt: 'Marcas operadas' } },
    { n: '3K+', l: { en: 'Monthly orders', pt: 'Pedidos mensais' } },
    { n: '2yr', l: { en: 'As founder', pt: 'Como fundador' } },
    { n: '0→1', l: { en: 'From scratch', pt: 'Do zero' } },
  ],
  brandsLabel: { en: 'The 4 brands', pt: 'As 4 marcas' },
  brands: [
    { src: '/brands/riotho.png', name: 'Riotho Sushi' },
    { src: '/brands/othori.png', name: 'Othori' },
    { src: '/brands/temaki.png', name: 'Temaki & Roll' },
    { src: '/brands/bulk_burger.png', name: 'Bulk Burger' },
  ],
}
