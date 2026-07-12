import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, Heart, Sparkles, Star, MessageCircle, CreditCard, Compass, Flame, Smile, CheckCircle, Brain, BookMarked, UserCheck } from "lucide-react";
import CheckoutView from "./components/CheckoutView";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CtaButton = ({ onClick, text, id }: { onClick: (id: string, text: string) => void; text?: string; id: string }) => {
  const buttonText = text || "Quero ter acesso a esse Caminho da Vitória que vai me permitir conseguir tudo isto acima";
  return (
    <div className="w-full max-w-2xl mx-auto my-6 px-4">
      <button
        id={id}
        onClick={() => onClick(id, buttonText)}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-600 hover:via-orange-700 hover:to-red-700 text-white font-sans font-bold text-center text-sm sm:text-base md:text-lg py-4 px-6 rounded-2xl transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer transition-all duration-300 shadow-xl shadow-orange-950/40 border border-white/15 hover:border-white/25 text-wrap"
      >
        <span className="leading-tight">
          {buttonText}
        </span>
        <ArrowRight className="w-5 h-5 flex-shrink-0 animate-pulse" />
      </button>
    </div>
  );
};

export default function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [activeCta, setActiveCta] = useState<{ id: string; text: string } | null>(null);

  useEffect(() => {
    // Automatically trigger initial view tracking event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: "pagina_carregada" 
    });
  }, []);

  const handleCtaClick = (id: string, text: string) => {
    setActiveCta({ id, text });
    setShowCheckout(true);

    window.dataLayer = window.dataLayer || [];
    // Envia o evento clique_cta nos botões de CTA normais
    window.dataLayer.push({ 
      event: "clique_cta",
      cta_id: id,
      cta_text: text
    });

    // O evento abriu_checkout é disparado junto ao abrir o checkout de forma direta e blindada
    window.dataLayer.push({ 
      event: "abriu_checkout",
      cta_id: id,
      cta_text: text
    });
  };

  const handleBackFromCheckout = () => {
    setShowCheckout(false);
  };

  if (showCheckout) {
    return <CheckoutView onBack={handleBackFromCheckout} />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white font-sans flex flex-col justify-between overflow-y-auto select-none">
      
      {/* Background Calm and Inspiring Sunset Image with Multi-layered vignettes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/sunset_hero.png"
          alt="Sunset Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center select-none opacity-25"
        />
        {/* Soft, glowing radial focus over the golden sunset shades */}
        <div className="absolute inset-0 bg-radial-[circle_at_75%_30%] from-orange-500/10 via-black/60 to-black pointer-events-none mix-blend-screen" />
        
        {/* Sun Glow elements matching Immersive UI specifications */}
        <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full blur-3xl bg-orange-500/15 opacity-40 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full blur-3xl bg-amber-500/10 opacity-30 pointer-events-none" />
        
        {/* Deep ambient gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/90" />
      </div>

      {/* Desktop Top Toolbar Info Bar */}
      <header className="relative z-10 w-full max-w-4xl mx-auto px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-neutral-400">
          PROPRIEDADE EXCLUSIVA - CAMINHO DA VITÓRIA
        </span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900/80 backdrop-blur-md rounded-full border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-mono tracking-widest text-white/90 font-bold uppercase">
            CAMINHO DA VITÓRIA ATUALIZADO 2026
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
        {/* Section 1: Hero Block */}
        <section className="text-center flex flex-col gap-6 py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-100 font-bold leading-tight tracking-tight drop-shadow-md">
            Consiga superar os momentos de enfermidade na sua vida!
          </h1>
          
          <div className="grid grid-cols-1 gap-3.5 text-left mt-4 max-w-xl mx-auto w-full">
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Compass className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 animate-pulse" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga com que o inimigo da sua alma caia por terra.</p>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Smile className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga dar a volta por cima.</p>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Heart className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga se livrar das perseguições.</p>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga com que seu coração seja tocado por Deus.</p>
            </div>
          </div>

          <CtaButton onClick={handleCtaClick} id="cta-hero" />
        </section>

        {/* Section 2: Tenha acesso a um Caminho da Vitória que vai te permitir: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Tenha acesso a um Caminho da Vitória que vai te permitir:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir com que o inimigo fuja da sua vida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir com que a mão de Deus entre na sua vida, cobrindo você de bênçãos sem medidas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se livrar das enfermidades e das portas fechadas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ter de volta o desejo de buscar a Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se livrar do cansaço e do desgaste.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-caminho-permitir" />
        </section>

        {/* Section 3: Com esse Caminho da Vitória você vai conseguir: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Com esse Caminho da Vitória você vai conseguir:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir abrir as portas das oportunidades.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ter de volta força para lutar e vencer.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se livrar dos ataques espirituais.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se livrar dos pensamentos de que não é capaz.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir guerrear contra os ataques do inimigo.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-caminho-conseguir" />
        </section>

        {/* Section 4: Esse Caminho da Vitória é para quem: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Esse Caminho da Vitória é para quem:
            </h2>
            <div className="flex flex-col gap-4.5">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir a ajuda de Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir eliminar todo desejo mundano.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir descobrir seu propósito.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir não dar ouvidos ao inimigo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir se livrar dos pensamentos de que não vai conseguir realizar seus sonhos.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-caminho-para-quem" />
        </section>

        {/* Section 5: Depoimento Juliana M. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu estava passando por um problema de saúde que já durava meses. Comecei a seguir o Caminho da Vitória e, além de sentir meu corpo se fortalecendo, a paz de Deus tomou conta de mim. Hoje, olho para trás e vejo que Ele me sustentou em cada etapa da minha caminhada."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Juliana M.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Caminho da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-juliana" />
        </section>

        {/* Section 6: Depoimento Rodrigo S. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Parecia que tudo na minha vida estava travado e que forças espirituais queriam me destruir. Com o Caminho da Vitória, aprendi a orar e a guerrear espiritualmente. Senti o inimigo cair por terra e vi Deus abrir portas que estavam fechadas há anos."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Rodrigo S.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Caminho da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-rodrigo" />
        </section>

        {/* Section 7: Adquirindo esse Caminho da Vitória, você vai conseguir: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Adquirindo esse Caminho da Vitória, você vai conseguir:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se fortalecer no Espírito de Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ser mais fiel a Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se reconstruir.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir livrar sua alma das garras do inimigo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir parar de renunciar a Deus de uma vez por todas.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-adquirindo-caminho" />
        </section>

        {/* Section 8: FAQ */}
        <section className="py-2 flex flex-col gap-6">
          <h2 className="text-2xl font-serif font-semibold text-center text-amber-100">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-900/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-2.5">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <h3 className="font-bold text-base text-white">Como recebo meu Caminho da Vitória?</h3>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed select-text">
                Assim que o pagamento for confirmado, você receberá seu Caminho da Vitória pelo WhatsApp e terá acesso vitalício para acessar quando e onde quiser.
              </p>
            </div>

            <div className="bg-neutral-900/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-2.5">
                <CreditCard className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-base text-white">Quais são as formas de pagamento disponíveis?</h3>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed select-text">
                Pix e cartão de crédito.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Depoimento Patrícia A. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Perdi emprego, amigos e a motivação para continuar. Quando comecei a aplicar o que aprendi no Caminho da Vitória, a força voltou. Deus me deu novas oportunidades e hoje posso dizer que dei a volta por cima e estou vivendo uma nova fase."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Patrícia A.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Caminho da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-patricia" />
        </section>

        {/* Section 10: Depoimento Ozamir T. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu sofria perseguições injustas no trabalho e até na família. Depois que coloquei em prática o Caminho da Vitória, vi a mão de Deus agir. As pessoas que me atacavam se afastaram e a paz voltou para minha vida."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Ozamir T.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Caminho da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-ozamir" />
        </section>

        {/* Section 11: Pricing Area */}
        <section className="py-4">
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-8 sm:p-10 border border-amber-500/20 shadow-2xl text-center max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
            <h3 className="text-lg sm:text-xl font-medium text-neutral-400 uppercase tracking-widest mb-3 font-mono">
              Adquira agora esse Caminho da Vitória por:
            </h3>
            
            <div className="flex flex-col gap-2 items-center justify-center my-6">
              <span className="text-lg sm:text-xl text-neutral-500 line-through font-semibold">
                De R$ 68,00
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif text-amber-400 font-extrabold tracking-tight drop-shadow-sm leading-tight">
                por apenas R$ 12,00
              </span>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-preco-caminho" />
        </section>

        {/* Section 12: Depoimento Eliane F. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu vivia afastada de Deus e sem vontade de orar. Quando conheci o Caminho da Vitória, algo mudou. Senti Deus falar comigo, meu coração foi tocado e hoje tenho prazer em buscar a presença dEle todos os dias."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Eliane F.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Caminho da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-eliane" />
        </section>

        {/* Section 13: Depoimento Carla S. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu me sentia fraca espiritualmente, sem forças para orar ou ler a Palavra. Depois que comecei o Caminho da Vitória, minha vida mudou. Hoje sinto a presença de Deus diariamente e estou firme na fé como nunca antes."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Carla S.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Caminho da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-carla" />
        </section>

      </main>

      {/* Sleek secure disclaimer footer */}
      <footer className="relative z-10 w-full px-6 py-8 border-t border-white/5 text-center text-xs text-neutral-500 font-mono flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-orange-400 animate-pulse" />
        <span className="tracking-widest">AMBIENTE 100% SEGURO & PRIVADO</span>
      </footer>

    </div>
  );
}
