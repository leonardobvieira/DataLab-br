import React from 'react';
import { BarChart2, Zap, Target, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Automação Comercial para PMEs",
      description: "Integração de CRM + WhatsApp + Planilhas via Make.com. Dashboard de prospecção com métricas de conversão e funil de vendas.",
      price: "R$ 2,5k (setup) + R$ 300/mês",
      icon: <Zap className="h-10 w-10 text-blue-500" />
    },
    {
      id: 2,
      title: "BI para Farmácias e Drogarias",
      description: "Controle de estoque sazonal e análise de margem por produto com integração ao sistema de pedidos.",
      price: "R$ 4k (projeto único)",
      icon: <BarChart2 className="h-10 w-10 text-blue-500" />
    },
    {
      id: 3,
      title: "Seguros Data-Driven",
      description: "Modelo de precificação baseado em perfil de risco e automação de relatórios para corretores.",
      price: "R$ 6k (implementação) + R$ 500/mês",
      icon: <Target className="h-10 w-10 text-blue-500" />
    },
    {
      id: 4,
      title: "BeautyTech Express",
      description: "Dashboard de vendas por canal e automação de precificação dinâmica para concorrer com marketplaces.",
      price: "R$ 3,5k (dashboard) + R$ 200/mês",
      icon: <Users className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pacotes especializados para diferentes segmentos de mercado, 
            com escopo claro e resultados rápidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-semibold text-blue-600">{service.price}</p>
              <a 
                href="#contact" 
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;