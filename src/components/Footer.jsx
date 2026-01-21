import React from 'react';
import { Box, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import PlayStoreIcon from '../assets/play-store.png';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Box className="w-8 h-8 text-brand-gold fill-brand-gold" />
                            <span className="text-2xl font-bold text-white uppercase tracking-wider">
                                Chapa Certo
                            </span>
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Conectando profissionais e transportadoras com inteligência,
                            segurança e agilidade em todo o Brasil.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-gold">Navegação</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                            <li><a href="/#how-it-works" className="hover:text-white transition-colors">Como Funciona</a></li>
                            <li><a href="/#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-gold">Suporte</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Centro de Ajuda</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacidade</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-gold">Contato</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-brand-gold" />
                                atendimento@chapacerto.com.br
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-brand-gold" />
                                (11) 99999-9999
                            </li>
                            <li className="mt-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <p className="text-xs text-brand-gold font-bold mb-4 uppercase tracking-tighter">Baixe o App</p>
                                    <div className="flex flex-col gap-3">
                                        <a href="#" className="bg-white text-brand-navy px-4 py-3 rounded-xl font-bold text-center text-sm hover:bg-brand-gold transition-all flex items-center justify-center gap-2">
                                            <img src={PlayStoreIcon} alt="Google Play" className="w-5 h-5" />
                                            Download na Google Play
                                        </a>
                                        <p className="text-gray-500 text-[10px] italic text-center">App Store em breve</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Chapa Certo Tecnologia Ltda. Todos os direitos reservados.</p>
                    <p>Feito com ❤️ para quem carrega o Brasil.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
