import { Shield, Target, AlertCircle, CreditCard, Clock, XOctagon, Edit3, Mail, Gavel } from 'lucide-react';

const Section = ({ icon: Icon, title, children }) => (
    <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-brand-gold/10 rounded-lg">
                <Icon className="w-5 h-5 text-brand-navy" />
            </div>
            <h2 className="text-xl font-bold text-brand-navy">{title}</h2>
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4 pl-12">
            {children}
        </div>
    </div>
);

const TermsOfUse = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-brand-navy py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Termos de Uso</h1>
                    <p className="text-brand-gold font-medium">Chapa Certo - Conectando o Brasil</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="bg-gray-50 p-6 rounded-2xl mb-12 flex items-center gap-4 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Clock className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Última atualização</p>
                        <p className="text-brand-navy font-bold">23 de Setembro de 2024</p>
                    </div>
                </div>

                <Section icon={Shield} title="1. Aceitação dos Termos">
                    <p>Ao acessar e utilizar o aplicativo ChapaCerto e este site, você concorda expressamente com estes Termos de Uso. Se não concordar com alguma parte destas condições, solicitamos que não utilize nossos serviços.</p>
                </Section>

                <Section icon={Target} title="2. Objetivo da Plataforma">
                    <p>O ChapaCerto é uma plataforma tecnológica destinada a conectar motoristas autônomos e empresas (Transportadores) que buscam mão de obra qualificada (Chapas) para serviços de carga e descarga em todo o território nacional.</p>
                </Section>

                <Section icon={AlertCircle} title="3. Responsabilidade pelas Informações">
                    <p>O ChapaCerto atua como um facilitador de conexões. Não nos responsabilizamos integralmente pelas informações inseridas pelos usuários nos perfis. Cada usuário é civil e criminalmente responsável pelo conteúdo que publica e pelas consequências de sua utilização na plataforma.</p>
                </Section>

                <Section icon={CreditCard} title="4. Cobrança e Pagamento">
                    <p>A cobrança referente ao uso da plataforma ocorrerá conforme os planos de assinatura ou créditos disponíveis. Importante: O ChapaCerto <strong>nunca</strong> solicita dados bancários, senhas ou códigos por e-mail, WhatsApp ou qualquer rede social.</p>
                </Section>

                <Section icon={Clock} title="5. Direito de Arrependimento">
                    <p>Em conformidade com o Código de Defesa do Consumidor, o contratante possui um prazo de 7 (sete) dias a partir da assinatura inicial para solicitar a desistência do serviço, com direito à devolução integral do valor pago.</p>
                </Section>

                <Section icon={XOctagon} title="6. Uso Indevido">
                    <p>Qualquer utilização da plataforma para fins ilícitos, fraudulentos ou que divirjam de sua finalidade principal resultará na exclusão imediata e definitiva do usuário, sem direito a qualquer tipo de reembolso ou compensação.</p>
                </Section>

                <Section icon={Edit3} title="7. Alterações nos Termos">
                    <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento para refletir melhorias técnicas ou mudanças legislativas. As mudanças serão publicadas no aplicativo/site e a continuidade do uso será considerada como aceitação.</p>
                </Section>

                <Section icon={Mail} title="8. Contato e Suporte">
                    <p>Para dúvidas, reclamações ou mais informações sobre estes termos, entre em contato conosco através do e-mail oficial: <a href="mailto:atendimento@chapacerto.com.br" className="text-brand-navy font-bold hover:underline">atendimento@chapacerto.com.br</a>.</p>
                </Section>

                <Section icon={Gavel} title="9. Disposições Finais">
                    <p>Estes termos são regidos pelas leis da República Federativa do Brasil. O foro da comarca da sede da empresa é eleito para dirimir quaisquer controvérsias decorrentes deste documento.</p>
                </Section>
            </div>
        </div>
    );
};

export default TermsOfUse;
