import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "A implementação do dashboard de vendas transformou nossa visibilidade sobre o negócio. Conseguimos identificar oportunidades que antes passavam despercebidas.",
      author: "Diretor Comercial",
      company: "Rede de Farmácias",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: "A automação dos relatórios para corretores economizou mais de 20 horas semanais da nossa equipe. O retorno sobre o investimento foi quase imediato.",
      author: "Gerente de Operações",
      company: "Seguradora Digital",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      content: "A integração do WhatsApp com nosso CRM revolucionou o atendimento ao cliente. Agora conseguimos responder mais rápido e com informações mais precisas.",
      author: "CEO",
      company: "E-commerce de Beleza",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Resultados reais para empresas que confiaram em nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;