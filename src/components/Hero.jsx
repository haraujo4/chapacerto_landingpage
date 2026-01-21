import HeroMockup from '../assets/mockups/hero-app.png';
import PlayStoreIcon from '../assets/play-store.png';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-navy font-semibold text-xs uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                            </span>
                            Lançamento Nacional
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-tight mb-8">
                            A conexão certa entre <span className="text-brand-gold">Chapas</span> e <span className="text-brand-navy">Transportes</span>.
                        </h1>

                        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Simplificamos a contratação de ajudantes para carga e descarga. Segurança, agilidade e pagamento garantido em um só lugar.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="#" className="w-full sm:w-auto bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-navy/30 hover:bg-brand-navy/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                                <img src={PlayStoreIcon} alt="Google Play" className="w-6 h-6" />
                                Download na Google Play
                            </a>
                            <p className="text-gray-400 text-sm italic">Disponível em breve para iOS</p>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale contrast-125">
                            {/* Future logos of partners could go here */}
                            <span className="font-bold text-xl tracking-tighter">TRANS-BRASIL</span>
                            <span className="font-bold text-xl tracking-tighter">LOG-CARGO</span>
                            <span className="font-bold text-xl tracking-tighter">RAPIDO-MAIS</span>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full max-w-[500px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-gold/10 rounded-full blur-3xl opacity-50 px-8"></div>
                        <img
                            src={HeroMockup}
                            alt="Chapa Certo App Mockup"
                            className="relative z-10 w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] rounded-[3rem] px-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
