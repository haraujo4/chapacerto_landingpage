import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating }) => (
    <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
        <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
            ))}
        </div>
        <p className="text-gray-600 italic mb-6 leading-relaxed">"{content}"</p>
        <div>
            <h4 className="font-bold text-brand-navy">{name}</h4>
            <p className="text-sm text-gray-400">{role}</p>
        </div>
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: "Ricardo Santos",
            role: "Motorista Autônomo",
            content: "O Chapa Certo facilitou demais minha vida. Antes eu perdia muito tempo procurando ajudante em postos, agora resolvo tudo pelo app antes mesmo de chegar no destino.",
            rating: 5
        },
        {
            name: "Marcos Oliveira",
            role: "Chapa Profissional",
            content: "Melhorou muito meus ganhos. Consigo ver os trabalhos perto de mim e o pagamento cai direto na conta, sem enrolação. Recomendo para todos os colegas.",
            rating: 5
        },
        {
            name: "Cláudia Lima",
            role: "Gerente de Logística",
            content: "Excelente plataforma para gestão de descarga. A segurança de saber quem estamos contratando através das avaliações não tem preço.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-brand-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">Depoimentos</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">O que quem usa o app está dizendo</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <TestimonialCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
