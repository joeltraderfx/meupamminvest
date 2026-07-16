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

const APPLY_URL = "https://chat.whatsapp.com/FCBeBV3SnXq8wj6wq0sXoh";

const includes = [
  { icon: Clock, title: "Aula individual de 1 hora", desc: "Ensino fase a fase, só pra você, no seu horário — sem turma, sem distração." },
  { icon: Gem, title: "Indicador Premium incluso", desc: "Você recebe o indicador Premium com licença para 1 conta MT5, válida por 1 ano." },
  { icon: MonitorSmartphone, title: "Aprendizado 100% prático", desc: "Nada de teoria solta — você aprende operando, direto na prática, comigo." },
  { icon: MessageCircle, title: "Suporte via Discord e Telegram", desc: "Canais dedicados pra tirar dúvidas e acompanhar atualizações do indicador." },
  { icon: Users, title: "Grupo exclusivo no WhatsApp", desc: "Grupo fechado só pra alunos, pra tirar dúvidas direto comigo." },
];

const faqs = [
  { q: "Só pagar já garante a vaga?", a: "Não. As vagas são limitadas porque a aula é individual. Todo candidato passa por uma entrevista antes — o objetivo é confirmar se faz sentido pros dois lados, não só receber o pagamento." },
  { q: "Como funciona a aula individual?", a: "É uma aula de 1 hora só sua, ao vivo, fase a fase — você marca o horário comigo e aprende na prática, operando junto." },
  { q: "O que é o indicador Premium?", a: "É uma ferramenta exclusiva que te ajuda a identificar as melhores oportunidades no ouro. A licença é pra 1 conta MT5, válida por 1 ano." },
  { q: "Preciso ter experiência prévia?", a: "Não necessariamente — o que avaliamos na entrevista é o seu perfil e momento, não seu nível técnico." },
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
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-5 py-2.5 rounded-lg text-sm font-semibold">
            Quero me candidatar
          </a>
        </div>
      </nav>

      <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Curso Individual · 1 Hora · Vagas Limitadas</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] mb-6">
            <em className="text-gradient-gold not-italic">Ouro Elite</em> Premium
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Uma aula individual, fase a fase, direto comigo. Você sai com o indicador Premium na mão e sabendo operar ouro na prática — com suporte contínuo depois da aula.
          </p>
          <p className="text-sm md:text-base text-gold font-semibold max-w-xl mx-auto mb-10 leading-relaxed">
            Não é só pagar e entrar. Todo candidato passa por uma entrevista — a vaga é pra quem tem o perfil certo, não só o valor disponível.
          </p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Quero me candidatar →
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
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Como funciona a seleção</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Não é sobre <em className="text-gradient-gold not-italic">quem paga primeiro</em>.</h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            O Ouro Elite Premium tem vagas limitadas porque é individual — e o valor não é o único critério.
            Antes de entrar, você passa por uma entrevista comigo pra eu entender seu momento, sua disponibilidade e se faz sentido pros dois lados.
            Só depois disso a vaga é confirmada.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl border border-border bg-card/40">
              <div className="font-display text-3xl text-gold mb-3">01</div>
              <p className="text-sm text-muted-foreground">Você se candidata pelo grupo do WhatsApp</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/40">
              <div className="font-display text-3xl text-gold mb-3">02</div>
              <p className="text-sm text-muted-foreground">Passa por uma entrevista rápida comigo</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/40">
              <div className="font-display text-3xl text-gold mb-3">03</div>
              <p className="text-sm text-muted-foreground">Se aprovado, sua vaga é confirmada e agendamos a aula</p>
            </div>
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
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            1 hora, fase a fase, com indicador Premium incluso e suporte contínuo depois da aula.
          </p>
          <p className="text-sm text-gold font-semibold mb-10">Vagas limitadas — sujeito a entrevista e aprovação de perfil.</p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg inline-block">
            Quero me candidatar
          </a>
        </div>
      </section>
    </div>
  );
}
