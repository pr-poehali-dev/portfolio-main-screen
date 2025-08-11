import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-black">ПОРТФОЛИО</h1>
        <div className="flex gap-8">
          <a href="#home" className="text-black hover:text-gray-600 transition-colors">Главная</a>
          <a href="#portfolio" className="text-black hover:text-gray-600 transition-colors">Портфолио</a>
          <a href="#contact" className="text-black hover:text-gray-600 transition-colors">Контакты</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
          <h2 className="text-6xl font-bold text-black mb-6 leading-tight">
            Творческий<br />
            дизайнер
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Создаю минималистичные решения с фокусом на чистые линии и функциональность
          </p>
          <Button className="w-fit px-8 py-3 bg-black text-white hover:bg-gray-800">
            Посмотреть работы
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-lg aspect-square">
            <img 
              src="/img/b4eff19a-b742-4674-aacb-02cc0d9c3d15.jpg" 
              alt="Artwork" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-8 lg:px-16 py-16 bg-gray-50">
        <h3 className="text-4xl font-bold text-black mb-12">Мои работы</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Icon name="Image" size={48} className="text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Проект {item}</h4>
              <p className="text-gray-600 mb-4">Описание проекта с акцентом на минимализм и функциональность</p>
              <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                Подробнее
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 lg:px-16 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-black mb-8">Свяжитесь со мной</h3>
          <p className="text-xl text-gray-600 mb-12">
            Готов обсудить ваш проект и воплотить идеи в жизнь
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 text-black hover:text-gray-600 transition-colors">
              <Icon name="Mail" size={24} />
              <span>hello@example.com</span>
            </a>
            <a href="tel:+7999123456" className="flex items-center gap-3 text-black hover:text-gray-600 transition-colors">
              <Icon name="Phone" size={24} />
              <span>+7 999 123-45-67</span>
            </a>
          </div>

          <Button className="px-12 py-3 bg-black text-white hover:bg-gray-800">
            Написать сообщение
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-8 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">© 2024 Портфолио. Все права защищены.</p>
          <div className="flex gap-4">
            <Icon name="Instagram" size={20} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <Icon name="Dribbble" size={20} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;