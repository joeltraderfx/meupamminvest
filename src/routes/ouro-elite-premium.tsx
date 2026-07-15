import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pammLogo from "@/assets/pamm-logo.png";
import {
  ChevronDown,
  Clock,
  Gem,
  MonitorSmartphone,
  Users,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/ouro-elite-premium")({
  component: OuroElitePremium,
  head: () => ({
    meta: [
      { title: "Ouro Elite Premium — Curso Individual" },
      {
        name: "description",
        content:
          "Curso individual de 1 hora, fase a fase, com indicador Premium exclusivo (licença MT5 de 1 ano) e suporte direto via Discord, Telegram e WhatsApp.",
      },
    ],
  }),
});

const WHATSAPP_NUMBER = "5511978180863";
const waUrl = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const includes = [
  { icon: Clock, title: "Aula individual de 1 hora", desc: "Ensino fase a fase, só pra você, no seu horário — sem turma, sem distração." },
  { icon: Gem, title: "Indicador Premium incluso", desc: "Você recebe o indicador Premium com licença para 1 conta MT5, válida por 1 ano." },
  { icon: MonitorSmartphone, title: "Aprendizado 100% prático", desc: "Nada de teoria solta — você aprende operando, direto na prática, comigo." },
  { icon: MessageCircle, title: "Suporte via Discord e Telegram", desc: "Canais dedicados pra tirar dúvidas e acompanhar atualizações do indicador." },
  { icon: Users, title: "Grupo exclusivo no WhatsApp", desc: "Grupo fechado só pra alunos, pra tirar dúvidas direto comigo." },
];

const faqs = [
  { q: "Como funciona a aula individual?", a: "É uma aula de 1 hora só sua, ao vivo, fase a fase — você marca o horário comigo e aprende na prática, operando junto." },
  { q: "O que é o indicador Premium?", a: "É uma ferramenta exclusiva que te ajuda a identificar as melhores oportunidades no ouro. A licença é pra 1 conta MT5, válida por 1 ano." },
  { q: "Preciso ter experiência prévia?", a: "Não. A aula é individual justamente pra se adaptar ao seu nível, do zero ou já com alguma experiência." },
  { q: "Como funciona o suporte depois da aula?", a: "Você entra nos canais de Discord e Telegram pra dúvidas técnicas e atualizações, além do grupo exclusivo no WhatsApp pra falar direto comigo." },
];

function OuroElitePremium() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={pammLogo} alt="Ouro Elite Premium" className="w-9 h-9 rounded-lg object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold">OURO ELITE</div>
              <div className="text-[9px] tracking-[0.3em] text-gold uppercase">Premium</div>
            </div>
          </div>
          <a href={waUrl("Olá! Quero saber mais sobre o Ouro Elite Premium.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-5 py-2.5 rounded-lg text-sm font-semibold">
            Quero minha vaga
          </a>
        </div>
      </nav>

      <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Curso Individual · 1 Hora</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] mb-6">
            <em className="text-gradient-gold not-italic">Ouro Elite</em> Premium
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Uma aula individual, fase a fase, direto comigo. Você sai com o indicador Premium na mão e sabendo operar ouro na prática — com suporte contínuo depois da aula.
          </p>
          <a href={waUrl("Olá! Quero saber mais sobre o Ouro Elite Premium.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Quero minha vaga →
          </a>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">O que está incluso</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Tudo que você recebe no <em className="text-gradient-gold not-italic">Ouro Elite Premium</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((it) => (
              <div key={it.title} className="p-8 rounded-2xl border border-border bg-background/60 hover:border-gold/40 transition">
                <it.icon className="w-8 h-8 text-gold mb-5" />
                <h3 className="font-display text-xl mb-3">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="border border-border rounded-xl bg-card/40 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left p-6 hover:bg-card/60 transition"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl mb-6">Aprenda ouro <em className="text-gradient-gold not-italic">na prática</em>, comigo.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            1 hora, fase a fase, com indicador Premium incluso e suporte contínuo depois da aula.
          </p>
          <a href={waUrl("Olá! Quero saber mais sobre o Ouro Elite Premium.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Quero minha vaga
          </a>
        </div>
      </section>
    </div>
  );
}
