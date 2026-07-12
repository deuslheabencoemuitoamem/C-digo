import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, Heart, Sparkles, Star, MessageCircle, CreditCard, Compass, Flame, Smile, CheckCircle, Brain, BookMarked, UserCheck } from "lucide-react";
import CheckoutView from "./components/CheckoutView";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CtaButton = ({ onClick, text, id }: { onClick: (id: string, text: string) => void; text?: string; id: string }) => {
  const buttonText = text || "Quero ter acesso a esse Código da Vitória que vai me permitir conseguir tudo isto acima";
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
          PROPRIEDADE EXCLUSIVA - CÓDIGO DA VITÓRIA
        </span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900/80 backdrop-blur-md rounded-full border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-mono tracking-widest text-white/90 font-bold uppercase">
            CÓDIGO DA VITÓRIA ATUALIZADO 2026
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
        {/* Section 1: Hero Block */}
        <section className="text-center flex flex-col gap-6 py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-100 font-bold leading-tight tracking-tight drop-shadow-md">
            Consiga de uma vez por todas se livrar da depressão, dos vícios, do desejo de suicídio e da vingança!
          </h1>
          
          <div className="grid grid-cols-1 gap-3.5 text-left mt-4 max-w-xl mx-auto w-full">
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Compass className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 animate-pulse" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga deixar de sofrer pela separação de um relacionamento ou por amizades falsas.</p>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Smile className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga com que Deus mude a sua vida.</p>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Heart className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga com que Deus realize as promessas e vitórias na sua vida.</p>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-white/5 shadow-md">
              <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-neutral-200 font-medium">Consiga que o Mestre Jesus te guarde dos perigos.</p>
            </div>
          </div>

          <CtaButton onClick={handleCtaClick} id="cta-hero" />
        </section>

        {/* Section 2: Tenha acesso ao Código da Vitória que vai te permitir: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Tenha acesso ao Código da Vitória que vai te permitir:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir com que Deus te abençoe sempre e que Ele esteja com você.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir se fortalecer com a Palavra de Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ter saúde e direção na vida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ter bênçãos derramadas sem medidas na sua vida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ter um milagre no seu relacionamento.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-codigo-permitir" />
        </section>

        {/* Section 3: Com esse Código da Vitória você vai conseguir: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Com esse Código da Vitória você vai conseguir:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir com que todo mal na sua vida caia por terra.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir com que a justiça seja feita na sua vida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir que você e as pessoas que ama sejam transformadas por Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir com que seus desejos sejam atendidos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Conseguir ter a misericórdia de Deus.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-codigo-conseguir" />
        </section>

        {/* Section 4: Esse Código da Vitória é para quem: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Esse Código da Vitória é para quem:
            </h2>
            <div className="flex flex-col gap-4.5">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir que Deus lave a sua alma, mente e coração.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir ser confortado pela Palavra de Deus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir queimar todas as maldições da sua vida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir ser transformado pelo Espírito Santo a cada amanhecer.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Quer conseguir se encher do Espírito Santo.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-codigo-para-quem" />
        </section>

        {/* Section 5: Depoimento Maria C. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu estava afundada em depressão e presa em vícios que me afastavam da minha família e de Deus. Quando conheci o Código da Vitória, algo mudou dentro de mi m. Foi como se uma luz entrasse no meu coração. Hoje, não tenho mais vontade de desistir da vida, e sinto a presença de Deus me fortalecendo todos os dias. Nunca imaginei que fosse possível me sentir tão livre e feliz novamente!"
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Maria C.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Código da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-maria" />
        </section>

        {/* Section 6: Depoimento Lorran M. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Passei por uma separação dolorosa que me deixou sem chão. Eu vivia relembrando o passado e sofrendo com amizades falsas que só me machucavam. Depois que conheci o Código da Vitória, consegui perdoar, deixar tudo nas mãos de Deus e seguir em frente. Hoje, tenho paz no meu coração e sinto que minha vida está sendo reconstruída por Ele."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Lorran M.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Código da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-lorran" />
        </section>

        {/* Section 7: Adquirindo o Código da Vitória, você vai conseguir: */}
        <section className="py-2">
          <div className="bg-neutral-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200 mb-6 border-b border-white/5 pb-3">
              Adquirindo o Código da Vitória, você vai conseguir:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Consigir se libertar de pensamentos negativos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Consigir se libertar da aflição.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Consigir com que Deus entre com providências na sua vida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Consigir se sentir feliz e realizado(a).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm sm:text-base font-medium">
                  Consigir uma libertação e que o Deus grande e poderoso supra todas as suas necessidades.
                </p>
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} id="cta-adquirindo-codigo" />
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
                <h3 className="font-bold text-base text-white">Como recebo meu Código da Vitória?</h3>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed select-text">
                Assim que o pagamento for confirmado, você receberá seu Código da Vitória pelo WhatsApp e terá acesso vitalício para acessar quando e onde quiser.
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

        {/* Section 9: Depoimento Fernanda L. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Antes, eu vivia com medo de tudo: de acidentes, de violência e até de perder minha família. Comecei a seguir o Código da Vitória e entreguei meu caminho ao Mestre Jesus. Desde então, sinto uma proteção incrível, portas se abrindo e bênçãos acontecendo que eu nem imaginava. Sei que não estou sozinho; Deus está comigo em cada passo."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Fernanda L.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Código da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-fernanda" />
        </section>

        {/* Section 10: Depoimento Luciana S. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu estava vivendo uma injustiça no trabalho e sofrendo com problemas que pareciam perseguições espirituais. Quando comecei a praticar o Código da Vitória, foi como se as correntes se quebrassem. A justiça foi feita, minha vida financeira melhorou e eu senti como se todas as maldições que me perseguiam tivessem sido queimadas. Deus me deu vitória!"
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Luciana S.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Código da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-luciana" />
        </section>

        {/* Section 11: Pricing Area */}
        <section className="py-4">
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-8 sm:p-10 border border-amber-500/20 shadow-2xl text-center max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
            <h3 className="text-lg sm:text-xl font-medium text-neutral-400 uppercase tracking-widest mb-3 font-mono">
              Adquira agora o Código da Vitória por:
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
          <CtaButton onClick={handleCtaClick} id="cta-preco-codigo" />
        </section>

        {/* Section 12: Depoimento Paulo H. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Depois que conheci o Código da Vitória, meus dias nunca mais foram os mesmos. Eu acordo com alegria, sinto o Espírito Santo falando comigo, e até minha família percebe a diferença. Minha mente, minha alma e meu coração foram lavados. Hoje, tenho paz e propósito, porque sei que Deus está no controle."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Paulo H.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Código da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-paulo" />
        </section>

        {/* Section 13: Depoimento Rozilda M. */}
        <section className="py-2">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative">
            <div className="text-amber-400/20 text-6xl font-serif absolute top-2 left-4 pointer-events-none select-none">“</div>
            <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed relative z-10 pt-4 font-sans select-text">
              "Eu vivia com a mente carregada, sempre pensando no pior. Depois que conheci esse método, aprendi a entregar tudo nas mãos de Deus e a enxergar a vida com outros olhos. Hoje, meus pensamentos são de paz e esperança."
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-amber-200 select-text">— Rozilda M.</span>
              <div className="flex gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
          <CtaButton onClick={handleCtaClick} text="Código da Vitória que vai me permitir conseguir tudo isto acima" id="cta-depoimento-rozilda" />
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
