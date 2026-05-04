import { NavLink, Product, Benefit, Testimonial, Language } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: { EN: 'The Brand', AR: 'العلامة التجارية' }, href: '#about' },
  { label: { EN: 'Collections', AR: 'المجموعات' }, href: '#products' },
  { label: { EN: 'Quality', AR: 'الجودة' }, href: '#benefits' },
  { label: { EN: 'Contact', AR: 'اتصل بنا' }, href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'mecha-01',
    name: { EN: 'Mecha-01', AR: 'ميكا-01' },
    category: { EN: 'Limited Edition', AR: 'إصدار محدود' },
    price: '14.0',
    image: 'https://images.unsplash.com/photo-1559121225-4c362074e508?auto=format&fit=crop&q=80&w=800',
    whatsappMessage: { EN: 'Hello, I want to order Mecha-01', AR: 'مرحباً، أود طلب ميكا-01' },
  },
  {
    id: 'stone-titan',
    name: { EN: 'Stone Titan', AR: 'تايتن الحجري' },
    category: { EN: 'Matte Finish', AR: 'لمسة مطفية' },
    price: '18.0',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800',
    whatsappMessage: { EN: 'Hello, I want to order Stone Titan', AR: 'مرحباً، أود طلب تايتن الحجري' },
  },
  {
    id: 'iconic-bust',
    name: { EN: 'Iconic Bust', AR: 'تمثال نصفي' },
    category: { EN: 'Desktop Series', AR: 'سلسلة المكتب' },
    price: '10.0',
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80&w=800',
    whatsappMessage: { EN: 'Hello, I want to order Iconic Bust', AR: 'مرحباً، أود طلب تمثال نصفي' },
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: 'Zap',
    title: { EN: 'Rapid Local Delivery', AR: 'توصيل محلي سريع' },
    description: {
      EN: 'No customs. No international shipping fees. We print and deliver across Kuwait within 48-72 hours.',
      AR: 'لا جمارك. لا رسوم شحن دولية. نقوم بالطباعة والتوصيل في جميع أنحاء الكويت خلال 48-72 ساعة.',
    },
  },
  {
    icon: 'ShieldCheck',
    title: { EN: 'Premium Materials', AR: 'مواد متميزة' },
    description: {
      EN: 'We exclusively use industrial-grade PLA+ filaments, ensuring your figures are durable and easy to paint.',
      AR: 'نحن نستخدم حصرياً خيوط PLA+ الصناعية، مما يضمن أن تكون مجسماتك متينة وسهلة التلوين.',
    },
  },
  {
    icon: 'Palette',
    title: { EN: 'Custom Requests', AR: 'طلبات خاصة' },
    description: {
      EN: "Can't find what you're looking for? Send us your STL file and we will provide a custom quote instantly.",
      AR: 'ألا تجد ما تبحث عنه؟ أرسل لنا ملف STL الخاص بك وسنقدم لك سعراً مخصصاً على الفور.',
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    content: {
      EN: '"The level of detail is astonishing for the price. Best quality I\'ve seen in Kuwait so far. Perfect for my paint projects."',
      AR: '"مستوى التفاصيل مذهل بالنسبة للسعر. أفضل جودة رأيتها في الكويت حتى الآن. مثالية لمشاريع التلوين الخاصة بي."',
    },
    author: 'Hamad A.',
  },
  {
    content: {
      EN: '"Extremely fast WhatsApp support. Ordered a custom figure and it was ready the next day. High-end service."',
      AR: '"دعم فني سريع جداً عبر الواتساب. طلبت مجسماً مخصصاً وكان جاهزاً في اليوم التالي. خدمة راقية."',
    },
    author: 'Fatma M.',
  },
];

export const UI_STRINGS = {
  orderNow: { EN: 'ORDER NOW', AR: 'اطلب الآن' },
  whatsappOrder: { EN: 'WhatsApp Order', AR: 'طلب عبر واتساب' },
  browseFigures: { EN: 'Browse Figures', AR: 'تصفح المجسمات' },
  studioSubtitle: { EN: 'Designed in Kuwait City', AR: 'صمم في مدينة الكويت' },
  heroSubtitle: {
    EN: 'Premium collectible figures and custom prints. High-definition detail, delivered across Kuwait.',
    AR: 'مجسمات قابلة للجمع ومطبوعات مخصصة متميزة. تفاصيل عالية الدقة، يتم توصيلها في جميع أنحاء الكويت.',
  },
  detail01mm: { EN: '0.1mm Detail', AR: 'تفاصيل 0.1 ملم' },
  nextGenPrinting: { EN: 'Next-Gen Printing', AR: 'طباعة من الجيل القادم' },
  theStudio: { EN: 'THE STUDIO', AR: 'الاستوديو' },
  studioDescription: {
    EN: 'Wumba is more than a store. We are a digital foundry where icons come to life. Locally owned and operated in Kuwait, we push the boundaries of 3D craftsmanship.',
    AR: 'ومبا أكثر من مجرد متجر. نحن مسبك رقمي حيث تنبض الأيقونات بالحياة. مملوك ومدار محلياً في الكويت، نحن ندفع حدود الحرفية في الطباعة ثلاثية الأبعاد.',
  },
  currentDrops: { EN: 'Current Drops', AR: 'أحدث المجموعات' },
  orderDirectly: { EN: 'Click to order directly via WhatsApp', AR: 'اضغط للطلب مباشرة عبر الواتساب' },
  trustedByArtists: { EN: 'Trusted by Artists', AR: 'موثوق من قبل الفنانين' },
  bringArtToLife: { EN: 'Bring your Art to life.', AR: 'اجعل فنك ينبض بالحياة.' },
  orderOnWhatsapp: { EN: 'Order on WhatsApp', AR: 'اطلب عبر واتساب' },
  all: { EN: 'All', AR: 'الكل' },
  anime: { EN: 'Anime', AR: 'أنمي' },
  currency: { EN: 'KWD', AR: 'د.ك' },
};
