import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Sparkles, 
  Zap, 
  Heart,
  Menu,
  X,
  ExternalLink,
  Camera
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    category: 'Парикмахерские услуги',
    items: [
      { name: 'Женская стрижка', price: 'от 1000 ₽' },
      { name: 'Мужская стрижка', price: 'от 700 ₽' },
      { name: 'Детская стрижка', price: 'по запросу' },
      { name: 'Мытье волос и уход', price: 'от 500 ₽' },
    ]
  },
  {
    category: 'Ногтевой сервис',
    items: [
      { name: 'Классический женский маникюр с покрытием', price: 'от 1900 ₽' },
      { name: 'Мужской маникюр', price: 'от 1200 ₽' },
      { name: 'Аппаратный маникюр', price: 'от 1500 ₽' },
      { name: 'Дизайн ногтей', price: 'от 100 ₽/ноготь' },
      { name: 'Наращивание ногтей', price: 'от 2500 ₽' },
      { name: 'Женский педикюр', price: 'от 2200 ₽' },
      { name: 'Аппаратный педикюр', price: 'от 2400 ₽' },
      { name: 'Мужской педикюр', price: 'от 2600 ₽' },
    ]
  },
  {
    category: 'Косметология и тело',
    items: [
      { name: 'LPG массаж (коррекция фигуры)', price: 'от 1800 ₽' },
      { name: 'Лазерная эпиляция', price: 'от 1000 ₽' },
      { name: 'Депиляция воском/сахаром', price: 'от 600 ₽' },
      { name: 'Массаж общий', price: 'от 2000 ₽' },
      { name: 'Уход за телом', price: 'от 2500 ₽' },
    ]
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop', title: 'Идеальный маникюр' },
  { url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop', title: 'Стильный педикюр' },
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop', title: 'Парикмахерское искусство' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop', title: 'Уход за лицом' },
  { url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop', title: 'Массаж и релакс' },
  { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop', title: 'Профессиональный уход' },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0A2A22] text-[#F5F5DC] selection:bg-[#FF8C42] selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        isScrolled ? "bg-[#0A2A22]/90 backdrop-blur-md shadow-lg border-b border-[#C5A059]/20" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#FF8C42] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">O</div>
          <span className="text-2xl font-serif tracking-widest uppercase text-[#C5A059]">Orange</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#services" className="hover:text-[#FF8C42] transition-colors">Услуги</a>
          <a href="#gallery" className="hover:text-[#FF8C42] transition-colors">Работы</a>
          <a href="#contacts" className="hover:text-[#FF8C42] transition-colors">Контакты</a>
          <a href="tel:+79607119697" className="bg-[#C5A059] text-[#0A2A22] px-6 py-2 rounded-full hover:bg-[#FF8C42] hover:text-white transition-all flex items-center gap-2 font-bold">
            <Phone size={16} /> Позвонить
          </a>
        </div>

        <button className="md:hidden text-[#C5A059]" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={32} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0A2A22] flex flex-col items-center justify-center gap-8 p-6"
          >
            <button className="absolute top-6 right-6 text-[#C5A059]" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-[#C5A059]">Услуги</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-[#C5A059]">Работы</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-[#C5A059]">Контакты</a>
            <a href="tel:+79607119697" className="bg-[#FF8C42] text-white px-8 py-3 rounded-full flex items-center gap-2 text-xl font-bold">
              <Phone size={20} /> Позвонить
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A2A22]" />
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 scale-110 animate-slow-zoom"
            alt="Beauty Salon Interior"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
             <span className="px-4 py-1 border border-[#C5A059] rounded-full text-[#C5A059] text-xs uppercase tracking-widest font-bold">
               Студия красоты в Мокшино
             </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif mb-8 text-white leading-tight"
          >
            Салон, в котором <br />
            <span className="text-[#C5A059] italic">вырастают крылья</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[#F5F5DC]/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Маникюр, педикюр, стрижки и косметология в атмосфере золота и изумруда. 
            Каждая деталь продумана для вашего комфорта.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:+79607119697" className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#FF8C42] text-[#0A2A22] hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/20">
              <Phone size={20} /> Записаться
            </a>
            <a href="#contacts" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 border border-white/20">
              <MapPin size={20} /> На карте
            </a>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A2A22] bg-[#C5A059] overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-[#FF8C42] mb-0.5">
                {[1,2,3,4,5].map(i => <Sparkles key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs text-white/60 font-medium">5.0 — 254 отзыва в Яндекс Картах</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C5A059]/50"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent" />
        </motion.div>
      </section>

      {/* Services & Prices */}
      <section id="services" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#FF8C42] font-bold mb-4 italic">— Услуги и цены —</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">Цены <span className="text-[#C5A059]">от 700 ₽</span></h3>
            <p className="mt-6 text-[#F5F5DC]/60 max-w-xl mx-auto">Стоимость зависит от уровня мастера и сложности работы. Полный прайс уточняйте у администратора.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#C5A059]/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#C5A059]/10 rounded-2xl text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0A2A22] transition-all">
                    {idx === 0 ? <Scissors size={28} /> : idx === 1 ? <Sparkles size={28} /> : <Zap size={28} />}
                  </div>
                  <h4 className="text-2xl font-serif text-[#C5A059]">{group.category}</h4>
                </div>
                <div className="space-y-6">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2 group/item">
                      <div className="pr-4">
                        <span className="block text-white group-hover/item:text-[#FF8C42] transition-colors">{item.name}</span>
                        {/* Fake description for visual weight */}
                        <span className="text-[10px] uppercase tracking-wider text-white/30 block mt-1">Профессиональный сервис</span>
                      </div>
                      <span className="text-[#C5A059] font-medium whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="gallery" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#FF8C42] font-bold mb-4 italic">— Портфолио —</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white">Загляните <span className="text-[#C5A059] italic">внутрь</span></h3>
            </div>
            <p className="max-w-md text-[#F5F5DC]/60 italic">
              Сочетание золотого и изумрудного, продуманные детали и работы наших мастеров.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer",
                  idx === 1 && "md:translate-y-12",
                  idx === 4 && "md:-translate-y-12"
                )}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-[#C5A059] text-sm uppercase tracking-widest font-bold mb-2">{img.title}</p>
                  <div className="w-10 h-10 rounded-full bg-[#FF8C42] flex items-center justify-center text-white">
                    <Heart size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6">
        <motion.div 
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#C5A059] to-[#8A6D3B] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-[#0A2A22]/10 rotate-12">
            <Scissors size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-[#0A2A22] mb-8 italic">Запишитесь сегодня</h2>
            <p className="text-[#0A2A22]/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Позвоните администратору, и мы подберем удобное время. Для постоянных клиентов работает лист ожидания на ближайшие даты.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+79607119697" className="w-full sm:w-auto bg-[#0A2A22] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#FF8C42] transition-colors shadow-2xl flex items-center justify-center gap-3">
                <Phone size={24} /> +7 (960) 711-96-97
              </a>
              <a href="tel:+79806255706" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-[#0A2A22] border border-[#0A2A22]/20 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-colors flex items-center justify-center gap-3">
                <Phone size={24} /> +7 (980) 625-57-06
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contacts & Map Section */}
      <section id="contacts" className="py-24 px-6 bg-[#08201A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div {...fadeIn}>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#FF8C42] font-bold mb-4 italic">— Контакты —</h2>
              <h3 className="text-4xl font-serif mb-12">Как нас найти</h3>
              
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#C5A059] flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2">Адрес</h4>
                    <p className="text-xl md:text-2xl font-serif">Полевая ул., 10, д. Мокшино</p>
                    <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C5A059] mt-2 hover:underline">
                      Открыть в Яндекс Картах <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#C5A059] flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2">Режим работы</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      <span className="text-white/60">Понедельник</span><span className="text-[#FF8C42]">Выходной</span>
                      <span className="text-white/60">Вторник - Суббота</span><span>10:00 – 19:00</span>
                      <span className="text-white/60">Воскресенье</span><span className="text-[#FF8C42]">Выходной</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#C5A059] flex-shrink-0">
                    <ExternalLink size={28} />
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2">Соцсети</h4>
                    <div className="flex gap-4">
                      <a 
                        href="https://vk.com/club167130630" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white/5 hover:bg-[#FF8C42] hover:text-white px-6 py-3 rounded-xl transition-all font-bold flex items-center gap-2"
                      >
                        Мы ВКонтакте
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 group"
            >
              {/* Fake Map Placeholder - In a real app we'd use Leaflet or Yandex/Google Maps API */}
              <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-[#C5A059]/20 rounded-full flex items-center justify-center text-[#C5A059] mb-6 animate-pulse">
                   <MapPin size={40} />
                </div>
                <h5 className="text-2xl font-serif text-white mb-2">Ждем вас в Orange</h5>
                <p className="text-white/40">Здесь могла бы быть интерактивная карта</p>
                <div className="mt-8 px-6 py-3 bg-[#C5A059] text-[#0A2A22] rounded-full font-bold cursor-pointer hover:bg-[#FF8C42] hover:text-white transition-all">
                  Маршрут в навигаторе
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 p-4 bg-[#0A2A22]/80 backdrop-blur-md border border-white/10 rounded-2xl text-xs font-bold tracking-widest text-[#C5A059]">
                56.5824, 36.5298
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#08201A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF8C42] rounded-full flex items-center justify-center text-white font-bold text-sm">O</div>
            <span className="text-xl font-serif tracking-widest uppercase text-[#C5A059]">Orange</span>
          </div>
          
          <p className="text-white/20 text-sm">© {new Date().getFullYear()} Orange Beauty Studio. Все права защищены.</p>
          
          <div className="flex gap-6 text-white/40 hover:text-[#C5A059] transition-colors">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
          </div>
        </div>
      </footer>

      {/* Background blobs for depth */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C5A059]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF8C42]/5 blur-[120px] rounded-full" />
      </div>

    </div>
  );
};

export default App;
