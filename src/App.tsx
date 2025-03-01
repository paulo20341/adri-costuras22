import React from 'react';
import { Scissors, Ruler, Phone, Mail, MapPin, Clock, Home, Star } from 'lucide-react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  const services = [
    {
      id: 1,
      title: "Consertos Gerais",
      description: "Reparos em roupas danificadas, rasgos, buracos e costuras soltas.",
      icon: <Scissors className="h-8 w-8 text-rose-600" />,
      price: "A partir de R$20"
    },
    {
      id: 2,
      title: "Troca de Zíper",
      description: "Substituição de zíperes quebrados em calças, vestidos, jaquetas e bolsas.",
      icon: <Scissors className="h-8 w-8 text-rose-600" />,
      price: "A partir de R$25"
    },
    {
      id: 3,
      title: "Barras",
      description: "Ajuste de barras em calças, saias e vestidos para o comprimento ideal.",
      icon: <Ruler className="h-8 w-8 text-rose-600" />,
      price: "A partir de R$15"
    },
    {
      id: 4,
      title: "Ajustes",
      description: "Ajustes personalizados para melhor caimento de roupas.",
      icon: <Ruler className="h-8 w-8 text-rose-600" />,
      price: "A partir de R$30"
    },
    {
      id: 5,
      title: "Customização",
      description: "Personalização de peças com bordados, apliques e detalhes exclusivos.",
      icon: <Scissors className="h-8 w-8 text-rose-600" />,
      price: "A partir de R$40"
    },
    {
      id: 6,
      title: "Confecção sob Medida",
      description: "Criação de peças exclusivas feitas sob medida para você.",
      icon: <Ruler className="h-8 w-8 text-rose-600" />,
      price: "Preço sob consulta"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      text: "Serviço impecável! Ajustou meu vestido de festa em tempo recorde e ficou perfeito.",
      rating: 5
    },
    {
      id: 2,
      name: "João Oliveira",
      text: "Troquei o zíper da minha jaqueta favorita e ficou melhor que o original. Recomendo!",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa",
      text: "Fiz várias barras de calças e o acabamento é perfeito. Preço justo e atendimento excelente.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-rose-50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Ateliê de Costura</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-600 mb-6">Qualidade e Precisão em Cada Ponto</h2>
            <p className="text-gray-600 text-lg mb-8">
              Oferecemos serviços de alta qualidade em consertos, ajustes e customização de roupas. 
              Com mais de 15 anos de experiência, garantimos acabamento perfeito e atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicos" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                Nossos Serviços
              </a>
              <a href="#contato" className="bg-white hover:bg-gray-100 text-rose-600 font-bold py-3 px-6 rounded-lg border border-rose-600 transition duration-300 text-center">
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Ateliê de Costura" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços de costura para atender todas as suas necessidades.
              Cada trabalho é realizado com atenção aos detalhes e acabamento de qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Nossa História" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6">
                Fundado em 2008, nosso ateliê de costura nasceu da paixão por criar e transformar peças de roupa. 
                Com dedicação e compromisso com a qualidade, construímos uma reputação sólida baseada na confiança 
                e satisfação dos nossos clientes.
              </p>
              <p className="text-gray-600 mb-6">
                Utilizamos técnicas tradicionais combinadas com métodos modernos para oferecer o melhor serviço 
                possível. Nossa equipe é formada por profissionais experientes e apaixonados pela arte da costura.
              </p>
              <div className="flex items-center">
                <div className="mr-6">
                  <p className="text-3xl font-bold text-rose-600">15+</p>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div className="mr-6">
                  <p className="text-3xl font-bold text-rose-600">5000+</p>
                  <p className="text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-rose-600">10000+</p>
                  <p className="text-gray-600">Projetos Concluídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Depoimentos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos clientes têm a dizer sobre nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Testimonial 
                key={testimonial.id}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Entre em Contato</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades. Entre em contato conosco para agendar uma consulta ou tirar dúvidas.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Descreva o serviço que você precisa"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
                
                <div className="flex items-start mb-6">
                  <Phone className="h-6 w-6 text-rose-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Telefone</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Mail className="h-6 w-6 text-rose-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contato@ateliedecostura.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-rose-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Endereço</p>
                    <p className="text-gray-600">Rua das Agulhas, 123 - Centro</p>
                    <p className="text-gray-600">São Paulo - SP, 01234-567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-rose-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Horário de Funcionamento</p>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;