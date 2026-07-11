import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import traderPortrait from "@/assets/trader-portrait.jpg";
import { ChevronDown, ShieldCheck, Wallet, ArrowDownToLine, TrendingUp, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CTA_URL = "https://pay.hotmart.com/S106665119V?bid=1783553522157";
const WA_URL = "https://chat.whatsapp.com/FxkL7gLvmi90xwC78QrxbE";

const steps = [
  { n: "01", title: "Acesso inicial", desc: "Você entra pelo acesso de R$67 e recebe o passo a passo completo." },
  { n: "02", title: "Abre sua conta", desc: "Aprende a abrir sua conta internacional em uma corretora regulada." },
  { n: "03", title: "Configura tudo", desc: "Configura corretamente para receber as operações em tempo real." },
  { n: "04", title: "Começa a replicar", desc: "Suas operações começam a espelhar as minhas, automaticamente." },
];

const faqs = [
  { q: "Você pega meu dinheiro?", a: "Não. Nunca. Seu capital fica 100% na sua conta, no seu CPF. Eu não tenho acesso — nem por um segundo." },
  { q: "Posso sacar quando quiser?", a: "Sim. Controle total. O dinheiro é seu, você saca quando desejar, sem restrições." },
  { q: "Preciso saber operar?", a: "Não. Você recebe o passo a passo completo para configurar tudo. As operações são replicadas automaticamente." },
  { q: "Existe risco?", a: "Sim. Mercado envolve risco e não há garantia de lucro. Resultados variam entre pessoas." },
  { q: "Por que pagar R$67?", a: "O valor dá acesso ao passo a passo completo e serve para filtrar pessoas realmente interessadas em começar." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Security />
      <Process />
      <Authority />
      <Transparency />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center btn-gold">
            <TrendingUp className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">TraderLand</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Prestige</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#processo" className="hover:text-gold transition">Processo</a>
          <a href="#autoridade" className="hover:text-gold transition">Autoridade</a>
          <a href="#faq" className="hover:text-gold transition">FAQ</a>
        </nav>
        <a href={CTA_URL} className="btn-gold btn-gold-hover px-5 py-2.5 rounded-lg text-sm font-semibold">
          Começar por R$67
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Para o médico que não quer perder dinheiro de novo</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] mb-6">
            Saia da <em className="text-gradient-gold not-italic">frustração</em>.
          </h1>
          <h2 className="font-display text-2xl md:text-3xl text-muted-foreground mb-8 leading-snug">
            Tenha alguém profissional operando por você.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Você mantém 100% do controle do seu capital enquanto replica operações reais no mercado internacional.
            Seu dinheiro fica no seu nome. <span className="text-foreground">Sempre.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={CTA_URL} className="btn-gold btn-gold-hover px-7 py-4 rounded-lg font-semibold">
              Começar agora por R$67 →
            </a>
            <a href={WA_URL} className="px-7 py-4 rounded-lg font-semibold border border-gold/40 text-gold hover:bg-gold/10 transition">
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "12", l: "Anos de Mercado" },
              { n: "100%", l: "Seu Controle" },
              { n: "0%", l: "Meu Acesso" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl text-gradient-gold font-semibold">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden border border-gold/30 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LS5JCqVXQJA"
              title="Operações Internacional Replicadas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: ShieldCheck, title: "Sempre na sua conta, no seu CPF", desc: "Ninguém mais tem acesso. Você controla tudo." },
    { icon: Wallet, title: "Depósito direto na corretora", desc: "Sem intermediários. Sem terceiros." },
    { icon: ArrowDownToLine, title: "Saque quando quiser", desc: "Controle total. Nenhuma restrição." },
  ];
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20">
            <img src={traderPortrait} alt="Trader profissional" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card border border-gold/30 rounded-xl p-6 max-w-xs shadow-xl">
            <p className="font-display italic text-lg leading-snug">"Eu não tenho acesso à sua conta. Nunca. Nem por um segundo."</p>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Segurança Absoluta</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Seu dinheiro fica no <em className="text-gradient-gold not-italic">seu nome</em></h2>
          <p className="text-muted-foreground mb-10">Estrutura desenhada para você manter total controle do seu capital.</p>
          <div className="space-y-6">
            {items.map((it) => (
              <div key={it.title} className="flex gap-4 p-5 rounded-xl border border-border bg-card/40 backdrop-blur">
                <div className="w-11 h-11 rounded-lg btn-gold flex items-center justify-center shrink-0">
                  <it.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Processo Simples</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Quatro passos para replicar <em className="text-gradient-gold not-italic">operações reais</em></h2>
          <p className="text-muted-foreground">Tudo documentado no acesso de R$67. Você recebe um passo a passo claro, do zero à configuração final.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative p-8 rounded-2xl border border-border bg-background/60 hover:border-gold/40 transition">
              <div className="font-display text-6xl text-gradient-gold font-semibold mb-4">{s.n}</div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section id="autoridade" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Autoridade Comprovada</p>
          <h2 className="font-display text-4xl md:text-5xl">12 anos operando <em className="text-gradient-gold not-italic">Ouro e Nasdaq</em> no mercado real</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { n: "12", l: "Anos de Experiência" },
            { n: "Ouro & Nasdaq", l: "Mercados Operados" },
            { n: "Consistência", l: "Foco Principal" },
          ].map((s) => (
            <div key={s.l} className="text-center p-10 rounded-2xl border border-gold/20 bg-card/40">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold font-semibold mb-3">{s.n}</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Modelo de Ganho Transparente", d: "Eu não recebo seu dinheiro. Eu ganho apenas sobre os resultados das operações. Se você cresce, eu cresço." },
            { t: "Quanto preciso investir?", d: "Você pode começar a partir de $300 dólares e escalar conforme desejar. O mínimo é definido pela corretora." },
            { t: "O que é o acesso de R$67?", d: "É o acesso ao passo a passo completo para abrir sua conta, configurar e começar corretamente." },
          ].map((it) => (
            <div key={it.t} className="p-8 rounded-2xl border border-border bg-card/40">
              <h3 className="font-display text-2xl mb-4 text-gold">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transparency() {
  return (
    <section className="py-20 border-y border-border bg-card/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-10">Transparência Total</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Mercado envolve risco", "Não há garantia de lucro", "Resultados variam entre pessoas"].map((t) => (
            <div key={t} className="flex items-center gap-3 justify-center p-4 rounded-lg border border-border">
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">Dúvidas sobre segurança, processo e investimento</p>
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
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background" />
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl mb-6">Pronto para <em className="text-gradient-gold not-italic">começar?</em></h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Garanta seu acesso ao passo a passo completo e comece a replicar operações de um trader com 12 anos de experiência.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={CTA_URL} className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg">
            Quero começar agora
          </a>
          <a href={WA_URL} className="px-8 py-4 rounded-lg font-semibold border border-gold/40 text-gold hover:bg-gold/10 transition">
            Falar com suporte
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center btn-gold">
            <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
          </div>
          <span className="font-display">TraderLand Prestige</span>
        </div>
        <p>© {new Date().getFullYear()} TraderLand Prestige. Mercado envolve risco.</p>
      </div>
    </footer>
  );
}
