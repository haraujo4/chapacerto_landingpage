import { ShieldCheck, Zap, Star, MessageSquare } from 'lucide-react';

const FeatureCard = (props) => {
    const Icon = props.icon;
    return (
        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-navy/5 hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">{props.title}</h3>
            <p className="text-gray-600 leading-relaxed">{props.description}</p>
        </div>
    );
};

const Features = () => {
    const features = [
        {
            icon: Zap,
            title: "Conexão Instantânea",
            description: "Encontre chapas qualificados ou novas oportunidades de trabalho em apenas alguns cliques."
        },
        {
            icon: ShieldCheck,
            title: "Pagamento Seguro",
            description: "Garantimos a segurança financeira com pagamentos via PIX ou Cartão direto no aplicativo."
        },
        {
            icon: Star,
            title: "Avaliação 5 Estrelas",
            description: "Sistema de feedback que valoriza os melhores profissionais e garante a satisfação do contratante."
        },
        {
            icon: MessageSquare,
            title: "Chat Integrado",
            description: "Alinhe detalhes, negocie valores e tire dúvidas em tempo real através do chat interno."
        }
    ];

    return (
        <section id="features" className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-brand-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">Funcionalidades</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Tudo o que você precisa para o seu dia a dia</h3>
                    <p className="text-gray-600 text-lg">
                        Nossa plataforma foi desenhada para resolver os problemas reais de quem trabalha com transporte e logística.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
