import React from 'react';
import { CheckCircle } from 'lucide-react';

const Specialization = () => {
  const specializations = [
    {
      id: 1,
      title: "BeautyTechs",
      description: "Otimização de estoque e precificação dinâmica para e-commerces de beleza.",
      features: [
        "Análise de tendências sazonais",
        "Integração com marketplaces",
        "Precificação competitiva automatizada"
      ],
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Seguros",
      description: "Análise de risco e modelos de prospecção baseados em dados.",
      features: [
        "Identificação de clientes-alvo via CRM",
        "Modelos preditivos de risco",
        "Automação de relatórios para corretores"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Farmacêutico",
      description: "Previsão de demanda sazonal e dashboards para gestão de pedidos.",
      features: [
        "Controle de estoque inteligente",
        "Análise de margem por produto",
        "Integração com sistemas de pedidos"
      ],
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Comercial",
      description: "Modelos de prospecção data-driven para equipes de vendas.",
      features: [
        "Integração CRM + WhatsApp + Planilhas",
        "Dashboard de métricas por vendedor",
        "Automação de follow-up com leads"
      ],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="specialization" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Especialização Vertical</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluções personalizadas para nichos específicos, 
            com conhecimento profundo das necessidades de cada setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec) => (
            <div 
              key={spec.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{spec.title}</h3>
                <p className="text-gray-600 mb-4">{spec.description}</p>
                <ul className="space-y-2">
                  {spec.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;