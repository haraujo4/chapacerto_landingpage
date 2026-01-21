import React from 'react';
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-full.png';
import PlayStoreIcon from '../assets/play-store.png';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} alt="Chapa Certo Logo" className="h-16 w-auto" />
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <a href="/#features" className="hover:text-brand-navy transition-colors">Funcionalidades</a>
                    <a href="/#how-it-works" className="hover:text-brand-navy transition-colors">Como Funciona</a>
                    <a href="/#testimonials" className="hover:text-brand-navy transition-colors">Depoimentos</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-brand-navy/20 hover:bg-brand-navy/90 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <img src={PlayStoreIcon} alt="Google Play" className="w-5 h-5 invert brightness-0" />
                        Baixar Agora
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
