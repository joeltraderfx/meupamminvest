# Atualização automática mensal dos Resultados

Todo dia 1º do mês, o site busca sozinho o histórico real da sua conta VT
Markets (via MetaApi, com acesso **somente leitura**) e atualiza a seção
"Resultados" — sem você precisar exportar e enviar relatório nenhum.

## O que você precisa fazer (uma vez só)

### 1. Achar sua senha de investidor

No MetaTrader (MT4/MT5), no e-mail que a VT Markets te mandou quando abriu a
conta, ou no Client Portal da VT Markets, existem **duas senhas**:
- Senha **Master** (mexe na conta, faz operações) — **não use essa aqui**
- Senha de **Investidor** (só leitura, não consegue operar nem sacar) — é essa

Se não achar, peça pra VT Markets reenviar (é comum eles reenviarem por
e-mail rapidinho).

### 2. Criar conta no MetaApi (grátis pro seu caso)

1. Acesse **https://app.metaapi.cloud** → crie uma conta
2. No painel, vá em **"Add account"** (Adicionar conta)
3. Preencha:
   - **Login**: o número da sua conta na VT Markets (ex: 27754781)
   - **Password**: a senha de **investidor** (não a master!)
   - **Server**: o nome do servidor (ex: `VTMarkets-Live 7` — está no mesmo
     e-mail/login da corretora)
   - **Platform**: MT4 ou MT5 (confira no seu MetaTrader qual você usa)
4. Depois de adicionar, o MetaApi leva alguns minutos "provisionando" a
   conexão. Quando o status virar verde/"Connected", está pronto.

### 3. Pegar o Token e o ID da conta

1. No painel do MetaApi → **Settings/API access** (ícone de chave/token) →
   gere um **API token**. Copie e guarde.
2. Na página da conta que você adicionou no passo 2, tem um **Account ID**
   (um código tipo `abc12345-...`). Copie também.

### 4. Cadastrar no GitHub

No repositório `meupamminvest` → **Settings → Secrets and variables →
Actions → New repository secret**:

| Nome | Valor |
|---|---|
| `METAAPI_TOKEN` | o token do passo 3 |
| `METAAPI_ACCOUNT_ID` | o Account ID do passo 3 |

## Pronto — funciona sozinho a partir daqui

Todo dia 1º do mês, às 9h (horário de Brasília), o site:
1. Busca o histórico completo de operações fechadas da conta, de janeiro até
   agora
2. Recalcula lucro % e drawdown de cada mês (mesma fórmula já validada,
   batendo centavo a centavo com o relatório oficial da corretora)
3. Atualiza `src/data/resultados.json` e publica o site automaticamente

## Testar sem esperar até o dia 1º

No GitHub → aba **Actions** → **"Atualizar Resultados (mensal)"** → botão
**"Run workflow"** → dispara na hora, pra você conferir se está tudo
funcionando antes do primeiro ciclo automático de verdade.

## Segurança

- A senha de investidor **nunca** vai pro código nem pro GitHub — ela fica
  só dentro do MetaApi, que você configura uma vez direto no painel deles
- O GitHub só guarda o Token do MetaApi e o ID da conta, como "Secrets"
  (criptografados, ninguém enxerga o valor depois de salvo, nem eu)
- Com a senha de investidor, é **fisicamente impossível** operar, sacar ou
  mexer no saldo — só dá pra ler o histórico

## Se um mês a conta tiver depósito ou saque no meio do período

O cálculo assume que a variação do saldo vem só do resultado das operações.
Se você depositar ou sacar dinheiro da conta, isso vai aparecer misturado
como se fosse lucro/prejuízo daquele mês — distorcendo o número. Se isso
acontecer, me avisa que ajusto o script pra descontar depósitos/saques
(a API do MetaApi também expõe isso, é só eu incluir).
