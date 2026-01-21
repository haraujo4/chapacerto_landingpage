import { Info, Database, FileText, Lock, UserCheck, ShieldAlert, Mail, RefreshCw, CheckCircle } from 'lucide-react';

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

const PrivacyPolicy = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-brand-navy py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Política de Privacidade</h1>
                    <p className="text-brand-gold font-medium">Sua segurança e privacidade são nossa prioridade</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="bg-brand-navy/5 p-6 rounded-2xl mb-12 flex items-center gap-4 border border-brand-navy/10 text-brand-navy">
                    <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shadow-sm">
                        <ShieldAlert className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                        <p className="text-xs uppercase font-bold tracking-wider opacity-60">Conformidade Legal</p>
                        <p className="font-bold">Este documento está atualizado de acordo com a LGPD (Lei 13.709/18)</p>
                    </div>
                </div>

                <Section icon={Info} title="1. Introdução">
                    <p>Esta Política de Privacidade detalha como o ChapaCerto coleta, utiliza, armazena e protege suas informações pessoais quando você utiliza nosso aplicativo ou site. Nos comprometemos a manter a transparência total sobre o tratamento dos seus dados.</p>
                </Section>

                <Section icon={Database} title="2. Informações que Coletamos">
                    <p>Para fornecer nossos serviços de conexão logística, coletamos os seguintes tipos de informações:</p>
                    <ul className="list-disc space-y-2">
                        <li><strong>Dados de Identificação:</strong> Nome completo, CPF/CNPJ, e-mail, telefone e foto de perfil.</li>
                        <li><strong>Dados Profissionais:</strong> Experiências, áreas de atuação e avaliações de outros usuários.</li>
                        <li><strong>Dados de Localização:</strong> Necessários para conectar Chapas aos serviços mais próximos.</li>
                        <li><strong>Dados de Pagamento:</strong> Processados via parceiros certificados para garantir total segurança (não armazenamos dados sensíveis de cartões).</li>
                    </ul>
                </Section>

                <Section icon={FileText} title="3. Finalidade da Coleta">
                    <p>Utilizamos seus dados estritamente para:</p>
                    <ul className="list-disc space-y-2">
                        <li>Viabilizar a conexão entre Chapas e Transportadores.</li>
                        <li>Personalizar sua experiência baseada em sua localização e interesse.</li>
                        <li>Garantir a segurança das transações financeiras.</li>
                        <li>Enviar notificações importantes sobre trabalhos e atualizações do sistema.</li>
                        <li>Cumprir obrigações legais e regulatórias.</li>
                    </ul>
                </Section>

                <Section icon={Lock} title="4. Segurança dos Dados">
                    <p>Implementamos padrões rigorosos de segurança, incluindo criptografia SSL em todas as comunicações e controle restrito de acesso aos bancos de dados. Embora nenhum sistema seja 100% invulnerável, trabalhamos continuamente para manter seus dados sob a maior proteção possível.</p>
                </Section>

                <Section icon={UserCheck} title="5. Seus Direitos (LGPD)">
                    <p>Como titular dos dados, você tem o direito de solicitar a qualquer momento: confirmação do tratamento, acesso aos dados, correção de dados incompletos ou inexatos, e a exclusão definitiva de sua conta e dados associados.</p>
                </Section>

                <Section icon={RefreshCw} title="6. Alterações nesta Política">
                    <p>Podemos atualizar esta política periodicamente. Quando fizermos alterações significativas, você será notificado através do aplicativo ou pelo e-mail cadastrado em sua conta.</p>
                </Section>

                <Section icon={Mail} title="7. Contato e Encarregado de Dados">
                    <p>Para exercer seus direitos de privacidade ou tirar qualquer dúvida, entre em contato com nosso Encarregado de Dados (DPO) através do e-mail: <a href="mailto:chapacerto@gmail.com.br" className="text-brand-navy font-bold hover:underline">chapacerto@gmail.com.br</a>.</p>
                </Section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
