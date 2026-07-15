import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pammLogo from "@/assets/pamm-logo.png";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  component: Quiz,
  head: () => ({
    meta: [
      { title: "Quiz — Descubra seu perfil de investidor | Meu PAMM Invest" },
      {
        name: "description",
        content: "Responda 30 perguntas rápidas e descubra qual caminho combina mais com você: Conta PAMM, Curso de Trading ou Aula Exclusiva.",
      },
    ],
  }),
});

const WHATSAPP_NUMBER = "5511978180863";
const ACCOUNT_URL = "https://www.vtmarkets.net/pt/trade-now/?affid=MjQzNjA3Mzc=&invitecode=wiQxT28t";

type Scores = { pamm: number; curso: number; aula: number };
type Option = { label: string; scores: Partial<Scores> };
type Question = { text: string; options: Option[] };

const questions: Question[] = [
  // Bloco 1 — Histórico e Dor
  { text: "Você já tentou investir ou operar no mercado financeiro antes?", options: [
    { label: "Sim, já tentei", scores: { pamm: 1, curso: 1 } },
    { label: "Não, nunca tentei", scores: { curso: 1, aula: 1 } },
  ]},
  { text: "Você já perdeu dinheiro investindo ou operando?", options: [
    { label: "Sim, já perdi", scores: { pamm: 2 } },
    { label: "Não, nunca perdi", scores: { curso: 1, aula: 1 } },
  ]},
  { text: "Qual foi o valor aproximado dessa perda?", options: [
    { label: "Não se aplica / nunca perdi", scores: { curso: 1 } },
    { label: "Até R$1 mil", scores: { pamm: 1, curso: 1 } },
    { label: "Entre R$1 mil e R$5 mil", scores: { pamm: 2 } },
    { label: "Entre R$5 mil e R$20 mil", scores: { pamm: 2 } },
    { label: "Acima de R$20 mil", scores: { pamm: 3 } },
  ]},
  { text: "Você já participou de curso, mentoria ou evento sobre trading?", options: [
    { label: "Sim, mas não tive resultado", scores: { pamm: 2 } },
    { label: "Sim, e aprendi bastante", scores: { aula: 1, curso: 1 } },
    { label: "Não, nunca participei", scores: { curso: 2 } },
  ]},
  { text: "Você já entregou dinheiro pra outra pessoa ou gestor operar por você?", options: [
    { label: "Sim", scores: { pamm: 2 } },
    { label: "Não", scores: { curso: 1 } },
  ]},
  { text: "Se sim, o que aconteceu com esse dinheiro?", options: [
    { label: "Não se aplica", scores: {} },
    { label: "Recuperei tudo", scores: { pamm: 1 } },
    { label: "Recuperei só uma parte", scores: { pamm: 2 } },
    { label: "Perdi tudo", scores: { pamm: 3 } },
    { label: "Ainda não sei / perdi o contato", scores: { pamm: 3 } },
  ]},
  { text: "Você já se sentiu enganado(a) por algum \"guru\" ou grupo de sinais?", options: [
    { label: "Sim", scores: { pamm: 2 } },
    { label: "Não", scores: { curso: 1 } },
  ]},
  { text: "Hoje você confia em investir seu dinheiro sozinho(a)?", options: [
    { label: "Sim, totalmente", scores: { curso: 2, aula: 1 } },
    { label: "Mais ou menos", scores: { curso: 1, aula: 1 } },
    { label: "Não, prefiro delegar", scores: { pamm: 3 } },
  ]},
  { text: "Você já operou (comprou ou vendeu) algum ativo na prática?", options: [
    { label: "Sim, já operei", scores: { aula: 1, curso: 1 } },
    { label: "Não, nunca operei", scores: { curso: 2 } },
  ]},
  { text: "Você entende o que é alavancagem, spread e gestão de risco?", options: [
    { label: "Sim, entendo bem", scores: { aula: 2 } },
    { label: "Já ouvi falar, mas não domino", scores: { curso: 2 } },
    { label: "Não, nunca ouvi falar", scores: { pamm: 1, curso: 1 } },
  ]},
  // Bloco 2 — Disponibilidade e Vontade de Aprender
  { text: "Quanto tempo por dia você teria pra estudar ou operar?", options: [
    { label: "Nenhum, quero algo automático", scores: { pamm: 3 } },
    { label: "Até 30 minutos", scores: { curso: 1, pamm: 1 } },
    { label: "1 a 2 horas", scores: { curso: 2 } },
    { label: "Mais de 2 horas", scores: { aula: 2, curso: 1 } },
  ]},
  { text: "Você tem interesse em aprender a operar com as próprias mãos?", options: [
    { label: "Sim, muito interesse", scores: { curso: 2, aula: 1 } },
    { label: "Tenho interesse, mas não é prioridade", scores: { curso: 1 } },
    { label: "Não, prefiro que operem por mim", scores: { pamm: 3 } },
  ]},
  { text: "Você prefere aprender sozinho(a) ou ser guiado(a) passo a passo?", options: [
    { label: "Sozinho(a), no meu ritmo", scores: { curso: 1 } },
    { label: "Guiado(a), com aula prática", scores: { aula: 2 } },
    { label: "Nenhum dos dois, prefiro delegar", scores: { pamm: 2 } },
  ]},
  { text: "Já pensou em ter uma segunda fonte de renda com trading?", options: [
    { label: "Sim, é um objetivo meu", scores: { curso: 2, aula: 1 } },
    { label: "Já pensei, mas não é prioridade", scores: { pamm: 1, curso: 1 } },
    { label: "Não, prefiro só investir", scores: { pamm: 2 } },
  ]},
  { text: "Você se considera disciplinado(a) pra seguir uma rotina de estudos?", options: [
    { label: "Sim, bastante", scores: { curso: 2, aula: 1 } },
    { label: "Mais ou menos", scores: { curso: 1 } },
    { label: "Não, tenho pouca disciplina pra isso", scores: { pamm: 2 } },
  ]},
  { text: "O que mais te atrai?", options: [
    { label: "Aprender uma habilidade nova", scores: { curso: 2, aula: 1 } },
    { label: "Ter resultado sem me envolver", scores: { pamm: 3 } },
  ]},
  { text: "Você prefere resultado rápido ou está disposto(a) a estudar por meses?", options: [
    { label: "Resultado rápido", scores: { pamm: 2, aula: 1 } },
    { label: "Tenho paciência pra estudar", scores: { curso: 2 } },
  ]},
  { text: "Já considerou fazer um curso de trading antes?", options: [
    { label: "Sim, já considerei", scores: { curso: 2, aula: 1 } },
    { label: "Não, nunca pensei nisso", scores: { pamm: 1 } },
  ]},
  { text: "O que mais te impediu de aprender até hoje?", options: [
    { label: "Falta de tempo", scores: { pamm: 2, aula: 1 } },
    { label: "Falta de dinheiro", scores: { curso: 1 } },
    { label: "Medo de perder de novo", scores: { pamm: 2 } },
    { label: "Não sabia por onde começar", scores: { aula: 2, curso: 1 } },
  ]},
  { text: "Se tivesse uma aula prática e acelerada essa semana, participaria?", options: [
    { label: "Sim, com certeza", scores: { aula: 3 } },
    { label: "Talvez, depende do horário", scores: { aula: 1, curso: 1 } },
    { label: "Não, prefiro outro formato", scores: { pamm: 1, curso: 1 } },
  ]},
  // Bloco 3 — Perfil Financeiro e Decisão
  { text: "Qual valor você teria disponível pra começar hoje?", options: [
    { label: "Até R$300", scores: { curso: 1, aula: 1 } },
    { label: "Entre R$300 e R$1.500", scores: { pamm: 1, curso: 1 } },
    { label: "Entre R$1.500 e R$5 mil", scores: { pamm: 2 } },
    { label: "Acima de R$5 mil", scores: { pamm: 2 } },
  ]},
  { text: "Esse dinheiro é reserva de longo prazo, ou você pode precisar dele em breve?", options: [
    { label: "É reserva, não vou precisar em breve", scores: { pamm: 2 } },
    { label: "Posso precisar em breve", scores: { curso: 1 } },
  ]},
  { text: "Qual é o seu objetivo principal?", options: [
    { label: "Fazer o dinheiro trabalhar sem me envolver", scores: { pamm: 3 } },
    { label: "Aprender uma habilidade nova", scores: { curso: 2, aula: 1 } },
    { label: "Os dois: aprender e também investir", scores: { pamm: 1, curso: 1, aula: 1 } },
  ]},
  { text: "Você prefere controle total das operações ou delegar pra um profissional?", options: [
    { label: "Controle total", scores: { curso: 2, aula: 2 } },
    { label: "Delegar pra um profissional", scores: { pamm: 3 } },
  ]},
  { text: "O que pesa mais pra você?", options: [
    { label: "Segurança", scores: { pamm: 2 } },
    { label: "Potencial de ganho rápido", scores: { aula: 1, curso: 1 } },
  ]},
  { text: "Você se preocupa mais em não perder de novo, ou em aprender rápido?", options: [
    { label: "Não perder de novo", scores: { pamm: 3 } },
    { label: "Aprender rápido", scores: { aula: 2, curso: 1 } },
  ]},
  { text: "Já ouviu falar em conta PAMM?", options: [
    { label: "Sim, já conhecia", scores: { pamm: 1 } },
    { label: "Não, é novidade pra mim", scores: { pamm: 1 } },
  ]},
  { text: "De 0 a 10, o quanto você está motivado(a) a resolver isso agora?", options: [
    { label: "Entre 0 e 4", scores: {} },
    { label: "Entre 5 e 7", scores: { curso: 1 } },
    { label: "Entre 8 e 10", scores: { pamm: 1, curso: 1, aula: 1 } },
  ]},
  { text: "Você prefere começar imediatamente ou só quer entender melhor antes?", options: [
    { label: "Quero começar imediatamente", scores: { pamm: 2, aula: 1 } },
    { label: "Quero entender melhor antes", scores: { curso: 1 } },
  ]},
  { text: "Se pudéssemos te colocar no caminho certo hoje, o que pesa mais?", options: [
    { label: "Nunca mais perder dinheiro", scores: { pamm: 3 } },
    { label: "Aprender a operar sozinho(a)", scores: { curso: 3 } },
    { label: "Ter mais liberdade financeira, rápido", scores: { aula: 3 } },
  ]},
];

type FormData = { name: string; phone: string; email: string; profession: string };

const profiles = {
  pamm: {
    title: "Conta PAMM — Investidor(a)",
    desc: "Seu perfil mostra que você quer resultado sem se envolver no dia a dia do mercado, mantendo o controle total do seu capital. A Conta PAMM é o caminho ideal: sua conta, seu nome, replicando operações reais de um trader profissional.",
    ctaLabel: "Abra sua conta agora →",
    ctaUrl: ACCOUNT_URL,
  },
  curso: {
    title: "Curso de Trading Sem Stress",
    desc: "Seu perfil mostra vontade real de aprender a operar com as próprias mãos, no seu ritmo, sem pressa. O Curso de Trading Sem Stress foi feito pra te ensinar do zero, com calma e estrutura.",
    ctaLabel: "Falar sobre o curso →",
    ctaUrl: "",
  },
  aula: {
    title: "Aula Exclusiva — Aprendizado Acelerado",
    desc: "Seu perfil mostra pressa em aprender na prática e resultado rápido. A Aula Exclusiva é pra quem quer acelerar o aprendizado, com uma imersão prática e direta.",
    ctaLabel: "Quero a aula exclusiva →",
    ctaUrl: "",
  },
} as const;

function Quiz() {
  const [step, setStep] = useState<"form" | number | "result">("form");
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", profession: "" });
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const formValid = form.name.trim() && form.phone.trim() && form.email.trim().includes("@") && form.profession.trim();

  const scores: Scores = answers.reduce(
    (acc, ans, i) => {
      if (ans === null) return acc;
      const opt = questions[i].options[ans];
      return {
        pamm: acc.pamm + (opt.scores.pamm || 0),
        curso: acc.curso + (opt.scores.curso || 0),
        aula: acc.aula + (opt.scores.aula || 0),
      };
    },
    { pamm: 0, curso: 0, aula: 0 }
  );

  const topProfile = (Object.keys(scores) as (keyof Scores)[]).reduce((a, b) =>
    scores[b] > scores[a] ? b : a
  );
  const profile = profiles[topProfile];

  const waMessage = `Olá! Acabei de fazer o quiz e meu perfil identificado foi: *${profile.title}*.%0A%0ANome: ${form.name}%0ATelefone: ${form.phone}%0AEmail: ${form.email}%0AProfissão: ${form.profession}`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  const currentQuestionIndex = typeof step === "number" ? step : 0;
  const progress = typeof step === "number" ? ((step + 1) / questions.length) * 100 : step === "result" ? 100 : 0;

  function selectAnswer(optionIndex: number) {
    const next = [...answers];
    next[currentQuestionIndex] = optionIndex;
    setAnswers(next);
    if (currentQuestionIndex < questions.length - 1) {
      setStep(currentQuestionIndex + 1);
    } else {
      setStep("result");
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <img src={pammLogo} alt="Meu PAMM Invest" className="w-9 h-9 rounded-lg object-contain" />
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold">MEU PAMM</div>
            <div className="text-[9px] tracking-[0.3em] text-gold uppercase">Invest</div>
          </div>
        </div>
      </header>

      {step !== "form" && (
        <div className="h-1.5 bg-card">
          <div className="h-full btn-gold transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      )}

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          {step === "form" && (
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Quiz de Perfil</p>
              <h1 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                Descubra qual caminho <em className="text-gradient-gold not-italic">combina com você</em>
              </h1>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Responda 30 perguntas rápidas sobre seu histórico e objetivos. No final, você descobre se o seu perfil é de Conta PAMM, Curso ou Aula Exclusiva.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-lg bg-card border border-border focus:border-gold outline-none transition"
                />
                <input
                  type="tel"
                  placeholder="Seu WhatsApp (com DDD)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-lg bg-card border border-border focus:border-gold outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-lg bg-card border border-border focus:border-gold outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Sua profissão"
                  value={form.profession}
                  onChange={(e) => setForm({ ...form, profession: e.target.value })}
                  className="w-full px-5 py-4 rounded-lg bg-card border border-border focus:border-gold outline-none transition"
                />
                <button
                  type="button"
                  disabled={!formValid}
                  onClick={() => setStep(0)}
                  className="btn-gold btn-gold-hover w-full py-4 rounded-lg font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Começar o quiz <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {typeof step === "number" && (
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Pergunta {step + 1} de {questions.length}
              </p>
              <h2 className="font-display text-2xl md:text-3xl mb-8 leading-snug">{questions[step].text}</h2>
              <div className="space-y-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => selectAnswer(i)}
                    className={`w-full text-left px-6 py-4 rounded-lg border transition ${
                      answers[step] === i
                        ? "border-gold bg-gold/10"
                        : "border-border bg-card/40 hover:border-gold/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-8 text-sm text-muted-foreground hover:text-gold transition flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>
              )}
            </div>
          )}

          {step === "result" && (
            <div className="text-center">
              <CheckCircle2 className="w-14 h-14 text-gold mx-auto mb-6" />
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Seu resultado</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                <em className="text-gradient-gold not-italic">{profile.title}</em>
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">{profile.desc}</p>
              <div className="flex flex-col gap-3">
                {topProfile === "pamm" && (
                  <a
                    href={ACCOUNT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold btn-gold-hover w-full py-4 rounded-lg font-semibold"
                  >
                    {profile.ctaLabel}
                  </a>
                )}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-lg font-semibold border border-gold/40 text-gold hover:bg-gold/10 transition"
                >
                  Falar comigo no WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
