import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pammLogo from "@/assets/pamm-logo.png";
import {
  ChevronDown,
  Calendar,
  Clock,
  MapPin,
  Compass,
  LineChart,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/trading-sem-stress")({
  component: TradingSemStress,
  head: () => ({
    meta: [
      { title: "Trading Sem Stress — Curso Gravado" },
      {
        name: "description",
        content:
          "Aprenda qual dia operar, qual horário, qual região, como achar a região e quais ativos usar pra confirmação — sem stress, no seu ritmo.",
      },
    ],
  }),
});

const WHATSAPP_NUMBER = "5511978180863";
const waUrl = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const modules = [
  { icon: Calendar, title: "Qual dia operar", desc: "Identifique os dias com maior probabilidade de movimento favorável, e evite os dias que só geram ruído." },
  { icon: Clock, title: "Qual horário operar", desc: "As janelas de horário em que o mercado costuma se comportar de forma mais previsível." },
  { icon: MapPin, title: "Qual região", desc: "Entenda o conceito de região de operação e por que ela muda tudo na sua entrada." },
  { icon: Compass, title: "Como achar a região", desc: "O passo a passo prático pra localizar a região certa antes de qualquer operação." },
  { icon: LineChart, title: "Ativos de confirmação", desc: "Quais ativos usar pra confirmar a consolidação antes de entrar, evitando entradas precipitadas." },
];

const faqs = [
  { q: "O curso é gravado ou ao vivo?", a: "É gravado. Você assiste no seu ritmo, quantas vezes quiser, sem depender de horário fixo." },
  { q: "Preciso ter experiência prévia?", a: "Não. O curso foi pensado pra quem quer aprender do zero, com uma lógica clara e sem complicação." },
  { q: "Por quanto tempo tenho acesso?", a: "O acesso é vitalício — você assiste quando quiser, sem prazo de expiração." },
  { q: "Vou aprender a operar sozinho depois?", a: "Sim. O objetivo do curso é justamente te dar autonomia: dia, horário, região e confirmação — os pilares pra você operar com clareza." },
];

function TradingSemStress() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={pammLogo} alt="Trading Sem Stress" className="w-9 h-9 rounded-lg object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold">TRADING SEM STRESS</div>
              <div className="text-[9px] tracking-[0.3em] text-gold uppercase">Curso Gravado</div>
            </div>
          </div>
          <a href={waUrl("Olá! Quero saber mais sobre o curso Trading Sem Stress.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-5 py-2.5 rounded-lg text-sm font-semibold">
            Quero garantir minha vaga
          </a>
        </div>
      </nav>

      <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Curso Gravado</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] mb-6">
            Opere com <em className="text-gradient-gold not-italic">clareza</em>, sem stress.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Você não precisa ficar grudado na tela o dia inteiro, nem operar no impulso. Aprenda exatamente qual dia, qual horário, qual região e quais ativos usar pra confirmar sua entrada — no seu ritmo, sem pressão.
          </p>
          <a href={waUrl("Olá! Quero saber mais sobre o curso Trading Sem Stress.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Quero garantir minha vaga →
          </a>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">O que você vai aprender</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Cinco pilares pra operar <em className="text-gradient-gold not-italic">sem stress</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="p-8 rounded-2xl border border-border bg-background/60 hover:border-gold/40 transition">
                <m.icon className="w-8 h-8 text-gold mb-5" />
                <h3 className="font-display text-xl mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
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
          <h2 className="font-display text-4xl md:text-6xl mb-6">Chega de operar no <em className="text-gradient-gold not-italic">impulso</em>.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Aprenda a lógica completa — dia, horário, região e confirmação — e opere com clareza, no seu ritmo.
          </p>
          <a href={waUrl("Olá! Quero saber mais sobre o curso Trading Sem Stress.")} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Quero garantir minha vaga
          </a>
        </div>
      </section>
    </div>
  );
}
