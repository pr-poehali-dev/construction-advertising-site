import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Home',
      title: 'Строительство домов',
      description: 'Строительство загородных домов под ключ',
      price: 'от 35 000 ₽/м²'
    },
    {
      icon: 'Building2',
      title: 'Коммерческие объекты',
      description: 'Торговые и офисные центры',
      price: 'от 40 000 ₽/м²'
    },
    {
      icon: 'Hammer',
      title: 'Реконструкция',
      description: 'Полная реконструкция зданий',
      price: 'от 25 000 ₽/м²'
    },
    {
      icon: 'PaintBucket',
      title: 'Отделочные работы',
      description: 'Внутренняя и внешняя отделка',
      price: 'от 5 000 ₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Инженерные системы',
      description: 'Монтаж всех коммуникаций',
      price: 'от 8 000 ₽/м²'
    },
    {
      icon: 'TreePine',
      title: 'Ландшафтный дизайн',
      description: 'Благоустройство территории',
      price: 'от 3 000 ₽/м²'
    }
  ];

  const projects = [
    {
      title: 'Загородный коттедж',
      location: 'Подмосковье',
      area: '280 м²',
      before: 'https://cdn.poehali.dev/projects/d138b811-f71e-40da-a695-0f2aef9c58b2/files/c87614f9-7f29-40fb-a81b-c6fcae67b988.jpg',
      after: 'https://cdn.poehali.dev/projects/d138b811-f71e-40da-a695-0f2aef9c58b2/files/a436c2b5-e213-407f-85f4-71c845ed3df7.jpg'
    },
    {
      title: 'Офисный центр',
      location: 'Москва',
      area: '1200 м²',
      before: 'https://cdn.poehali.dev/projects/d138b811-f71e-40da-a695-0f2aef9c58b2/files/a32c51b8-30f7-4914-84fe-ac81fa12d003.jpg',
      after: 'https://cdn.poehali.dev/projects/d138b811-f71e-40da-a695-0f2aef9c58b2/files/f6c1abb0-e4d1-45ee-9ead-1154e47e0988.jpg'
    },
    {
      title: 'Торговый комплекс',
      location: 'Сочи',
      area: '3500 м²',
      before: 'https://cdn.poehali.dev/projects/d138b811-f71e-40da-a695-0f2aef9c58b2/files/c87614f9-7f29-40fb-a81b-c6fcae67b988.jpg',
      after: 'https://cdn.poehali.dev/projects/d138b811-f71e-40da-a695-0f2aef9c58b2/files/a436c2b5-e213-407f-85f4-71c845ed3df7.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">СтройПроф</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Главная', 'О компании', 'Услуги', 'Портфолио', 'Контакты'].map((item, idx) => {
                const id = ['home', 'about', 'services', 'portfolio', 'contacts'][idx];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`font-medium transition-colors hover:text-primary ${
                      activeSection === id ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={28} className="text-primary" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {['Главная', 'О компании', 'Услуги', 'Портфолио', 'Контакты'].map((item, idx) => {
                const id = ['home', 'about', 'services', 'portfolio', 'contacts'][idx];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all hover:bg-primary/10 ${
                      activeSection === id ? 'bg-primary/10 text-primary' : 'text-foreground'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              <Button className="w-full bg-primary hover:bg-primary/90 mt-4" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
              Строим ваше будущее
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Профессиональное строительство и реконструкция любой сложности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground">
              Мы — команда профессионалов с многолетним опытом в строительной индустрии. 
              Используем только качественные материалы и современные технологии.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Качество</h3>
                <p className="text-muted-foreground">
                  Строгий контроль на каждом этапе строительства
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Сроки</h3>
                <p className="text-muted-foreground">
                  Выполнение работ точно в установленные сроки
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия</h3>
                <p className="text-muted-foreground">
                  Полная гарантия на все выполненные работы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги и расценки</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных услуг с прозрачным ценообразованием
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer overflow-hidden"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость проекта
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши завершенные проекты — от начала до результата
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="MapPin" size={16} />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Maximize" size={16} />
                          {project.area}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>

                  <BeforeAfterSlider 
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeLabel="До"
                    afterLabel="После"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl mb-12 text-white/90">
              Готовы обсудить ваш проект? Мы всегда на связи!
            </p>

            <div className="mb-16">
              <ContactForm />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <Icon name="Phone" size={32} className="mx-auto mb-4" />
                <div className="font-semibold mb-2">Телефон</div>
                <div>+7 (495) 123-45-67</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <Icon name="Mail" size={32} className="mx-auto mb-4" />
                <div className="font-semibold mb-2">Email</div>
                <div>info@stroyprof.ru</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <Icon name="MapPin" size={32} className="mx-auto mb-4" />
                <div className="font-semibold mb-2">Адрес</div>
                <div>Москва, ул. Строителей, 15</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Building" size={24} />
              <span className="text-xl font-bold">СтройПроф</span>
            </div>
            <div className="text-center md:text-right text-white/70">
              © 2024 СтройПроф. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;