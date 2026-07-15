import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import traderPortrait from "@/assets/trader-portrait.jpg";
import pammLogo from "@/assets/pamm-logo.png";
import step1Cover from "@/assets/step-1-abrir-conta.jpg";
import step2Cover from "@/assets/step-2-criar-pamm.jpg";
import step3Cover from "@/assets/step-3-assinar-contrato.jpg";
import step4Cover from "@/assets/step-4-saque.jpg";
import { ChevronDown, ShieldCheck, Wallet, ArrowDownToLine, CheckCircle2, BadgeCheck, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const ACCOUNT_URL = "https://www.vtmarkets.net/pt/trade-now/?affid=MjQzNjA3Mzc=&invitecode=wiQxT28t";
const WA_URL = "https://chat.whatsapp.com/FxkL7gLvmi90xwC78QrxbE";

const steps = [
  {
    n: "01",
    title: "Abra a conta",
    desc: "Passo a passo pra abrir sua conta internacional, em seu nome, na VT Markets.",
    cover: step1Cover,
    video: "https://www.youtube.com/shorts/nzyo41dosEw",
  },
  {
    n: "02",
    title: "Crie a conta PAMM",
    desc: "Veja como configurar sua conta PAMM pra começar a receber as operações replicadas.",
    cover: step2Cover,
    video: "https://www.youtube.com/shorts/N--k6rrzEKg",
  },
  {
    n: "03",
    title: "Assine o contrato",
    desc: "Como assinar o contrato de gestão usando o login e senha da sua conta PAMM.",
    cover: step3Cover,
    video: "https://www.youtube.com/shorts/FQgWdEcnLqo",
  },
  {
    n: "04",
    title: "Faça seu saque",
    desc: "O processo completo de saque, direto pra sua conta, sem burocracia.",
    cover: step4Cover,
    video: "https://www.youtube.com/shorts/IBP9BA22jM0",
  },
];

const faqs = [
  { q: "Você pega meu dinheiro?", a: "Não. Nunca. Seu capital fica 100% na sua conta, no seu CPF. Eu não tenho acesso — nem por um segundo." },
  { q: "Posso sacar quando quiser?", a: "Sim. Sem prazo de carência. O dinheiro é seu, na sua conta, numa corretora regulamentada (ASIC, FSCA e FSC) — você solicita o saque quando quiser." },
  { q: "Preciso saber operar?", a: "Não. Você só precisa abrir a conta e vincular ao PAMM. As operações são replicadas automaticamente." },
  { q: "Existe risco?", a: "Sim. Mercado envolve risco e não há garantia de lucro. Resultados variam entre pessoas." },
  { q: "Preciso pagar algo pra começar?", a: "Não. Abrir sua conta é gratuito. Eu só ganho 50% sobre o lucro real das operações — se você não lucra, eu não ganho nada." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Pain />
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
          <img src={pammLogo} alt="Meu PAMM Invest" className="w-10 h-10 rounded-lg object-contain" />
          <div className="leading-tight">
            <div className="font-display text-base font-semibold">MEU PAMM</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Invest</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#processo" className="hover:text-gold transition">Processo</a>
          <a href="#autoridade" className="hover:text-gold transition">Autoridade</a>
          <a href="#faq" className="hover:text-gold transition">FAQ</a>
        </nav>
        <a href={ACCOUNT_URL} className="btn-gold btn-gold-hover px-5 py-2.5 rounded-lg text-sm font-semibold">
          Abra sua conta
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
        <div className="order-2 lg:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Para quem já foi enganado uma vez e não vai deixar acontecer de novo</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] mb-6">
            Nunca mais <em className="text-gradient-gold not-italic">entregue</em> seu dinheiro para ninguém.
          </h1>
          <h2 className="font-display text-2xl md:text-3xl text-muted-foreground mb-8 leading-snug">
            Você já confiou em "gestor", grupo de sinais ou promessa de lucro fácil — e viu seu dinheiro sumir.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Aqui é diferente: seu capital nunca sai da sua conta, no seu nome, numa corretora regulada.
            Eu não recebo, não movimento e não tenho acesso ao seu dinheiro — <span className="text-foreground">nem por um segundo.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={ACCOUNT_URL} className="btn-gold btn-gold-hover px-7 py-4 rounded-lg font-semibold">
              Abra sua conta →
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
        <div className="relative order-1 lg:order-2">
          <div className="aspect-video rounded-2xl overflow-hidden border border-gold/30 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/LS5JCqVXQJA"
              title="Operações Internacional Replicadas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    "Já colocou dinheiro na mão de um 'gestor' e nunca mais viu retorno real.",
    "Recebeu print de lucro bonito, mas na hora de sacar veio desculpa.",
    "Perdeu o acesso à própria conta e ficou sem saber o que aconteceu com o capital.",
    "Entrou em grupo de sinais, pagou mensalidade, e não sobrou nada além de promessa.",
  ];
  return (
    <section className="py-24 md:py-32 bg-card/20 border-y border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Antes de você continuar</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Você já perdeu dinheiro <em className="text-gradient-gold not-italic">confiando na pessoa errada</em>?
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
          O mercado financeiro está cheio de gente prometendo lucro fácil e sumindo com o dinheiro dos outros.
          Se você já passou por isso, sabe exatamente o que é ficar com medo de tentar de novo.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 text-left mb-14">
          {items.map((t) => (
            <div key={t} className="flex gap-4 p-6 rounded-xl border border-border bg-background/60">
              <span className="text-gold text-xl leading-none shrink-0">✕</span>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
        <p className="font-display text-2xl md:text-3xl leading-snug">
          A única forma segura de replicar operações de outra pessoa é uma em que{" "}
          <em className="text-gradient-gold not-italic">seu dinheiro nunca sai da sua conta</em>.
        </p>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: BadgeCheck, title: "Corretora regulamentada internacionalmente", desc: "Licenças ASIC (Austrália), FSCA (África do Sul) e FSC (Maurício), com fundos de clientes sempre segregados." },
    { icon: ShieldCheck, title: "Sempre na sua conta, no seu CPF", desc: "Ninguém mais tem acesso. Você controla tudo." },
    { icon: Wallet, title: "Sem taxa de administração", desc: "Nada de mensalidade fixa. Eu ganho 50% sobre o lucro real — se você não lucra, eu não ganho nada." },
    { icon: ArrowDownToLine, title: "Saque livre, sem prazo de carência", desc: "Você pede o saque quando quiser. O dinheiro é seu." },
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
          <p className="text-muted-foreground">Do zero à configuração final, em poucos passos — sem custo de entrada. Assista o vídeo de cada etapa.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <a
              key={s.n}
              href={s.video}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-border bg-background/60 hover:border-gold/40 transition overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[9/12] overflow-hidden">
                <img
                  src={s.cover}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <PlayCircle className="w-14 h-14 text-white/90 drop-shadow-lg" />
                </div>
                <div className="absolute top-3 left-3 font-display text-3xl text-white font-semibold drop-shadow-lg">{s.n}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </a>
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
            { t: "Modelo de Ganho Transparente", d: "Eu não recebo seu dinheiro nem cobro mensalidade. Ganho apenas 50% sobre o lucro real das operações. Se você não lucra, eu não ganho nada." },
            { t: "Quanto preciso investir?", d: "Você pode começar a partir de $300 dólares e escalar conforme desejar. O mínimo é definido pela corretora." },
            { t: "Como funciona a réplica das operações?", d: "Você vincula sua conta via PAMM e as operações são espelhadas automaticamente, em tempo real — sem precisar acompanhar o mercado o dia todo." },
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
        <h2 className="font-display text-4xl md:text-6xl mb-6">Chega de confiar no <em className="text-gradient-gold not-italic">lugar errado</em>.</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Abra sua própria conta, no seu nome, numa corretora regulada — e comece a replicar operações de um trader com 12 anos de experiência sem nunca perder o controle do seu dinheiro.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={ACCOUNT_URL} className="btn-gold btn-gold-hover px-8 py-4 rounded-lg font-semibold text-lg">
            Abra sua conta
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
          <img src={pammLogo} alt="Meu PAMM Invest" className="w-8 h-8 rounded-md object-contain" />
          <span className="font-display">Meu PAMM Invest</span>
        </div>
        <p>© {new Date().getFullYear()} Meu PAMM Invest. Mercado envolve risco.</p>
      </div>
    </footer>
  );
}
