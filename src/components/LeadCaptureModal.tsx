import { useState } from "react";
import { useLeadModal } from "@/lib/leadModalContext";
import { X, Loader2 } from "lucide-react";

// Troque pela sua Access Key gratuita do Web3Forms (web3forms.com).
// Essa chave é pública por natureza (fica visível no código do navegador) —
// o serviço foi desenhado pra isso, não é um segredo.
const WEB3FORMS_ACCESS_KEY = "e9852ebe-398b-4fea-9c7e-f290c51884fa";

type Status = "idle" | "submitting" | "error";

export function LeadCaptureModal() {
  const { isOpen, destinationUrl, closeModal } = useLeadModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Novo lead — Meu PAMM Invest",
          from_name: "Site Meu PAMM Invest",
          name,
          email,
          phone,
        }),
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Falha ao enviar o formulário.");
      }

      // Sucesso: manda pro link de abertura de conta
      window.location.href = destinationUrl;
    } catch (err) {
      setStatus("error");
      setErrorMsg("Não foi possível enviar agora. Tente de novo em instantes.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={closeModal}
    >
      <div
        className="bg-card border border-border rounded-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-2xl mb-2">Antes de continuar</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Deixa seus dados pra eu poder te acompanhar no processo de abertura da conta. Depois disso, você já segue direto pro cadastro na corretora.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Nome</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Telefone (com WhatsApp)</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition"
              placeholder="(11) 99999-9999"
            />
          </div>

          {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-gold btn-gold-hover w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
              </>
            ) : (
              "Continuar para abertura da conta"
            )}
          </button>
        </form>

        <p className="text-[11px] text-muted-foreground text-center mt-4">
          Seus dados são usados só pra contato sobre o processo de abertura de conta. Nunca compartilhados com terceiros.
        </p>
      </div>
    </div>
  );
}
