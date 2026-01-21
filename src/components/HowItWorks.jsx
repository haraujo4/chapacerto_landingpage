import React from 'react';
import { UserPlus, Search, CheckCircle2, DollarSign } from 'lucide-react';

const Step = ({ number, title, text, isLight }) => (
    <div className="flex gap-4 mb-8">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${isLight ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy text-brand-gold'}`}>
            {number}
        </div>
        <div>
            <h4 className={`font-bold mb-1 ${isLight ? 'text-white' : 'text-brand-navy'}`}>{title}</h4>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-300' : 'text-gray-600'}`}>{text}</p>
        </div>
    </div>
);

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-brand-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">Como Funciona</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Simples para quem contrata, fácil para quem trabalha</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Para Chapas */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                        <h4 className="text-2xl font-bold text-brand-navy mb-10 flex items-center gap-3">
                            <span className="w-2 h-8 bg-brand-gold rounded-full"></span>
                            Sou Chapa
                        </h4>

                        <Step
                            number="1"
                            title="Crie seu perfil"
                            text="Cadastre seus dados, foto e áreas de atuação de forma rápida e segura."
                        />
                        <Step
                            number="2"
                            title="Receba convites"
                            text="Transportadoras e motoristas te encontrarão e enviarão solicitações de frete."
                        />
                        <Step
                            number="3"
                            title="Trabalhe e Ganhe"
                            text="Faça o serviço e receba o pagamento direto no seu saldo do aplicativo."
                        />

                    </div>

                    {/* Para Contratantes */}
                    <div className="bg-brand-navy p-8 md:p-12 rounded-3xl text-white">
                        <h4 className="text-2xl font-bold mb-10 flex items-center gap-3 text-brand-gold">
                            <span className="w-2 h-8 bg-brand-gold rounded-full"></span>
                            Quero Contratar
                        </h4>

                        <Step
                            number="1"
                            title="Busque por localidade"
                            text="Encontre profissionais disponíveis na região exata da sua carga ou descarga."
                            isLight={true}
                        />
                        <Step
                            number="2"
                            title="Analise avaliações"
                            text="Escolha os melhores profissionais baseando-se no histórico e avaliações reais."
                            isLight={true}
                        />
                        <Step
                            number="3"
                            title="Pagamento Facilitado"
                            text="Libere o pagamento somente após a conclusão do serviço com total segurança."
                            isLight={true}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
