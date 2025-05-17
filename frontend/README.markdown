# IntelliSwap - Frontend

## Visão Geral

**Nome do Projeto**: IntelliSwap  
**Problema Resolvido**: Simplifica o investimento em pools de liquidez do protocolo Uniswap V3, reduzindo a barreira de entrada para investidores sem conhecimento avançado em DeFi.  
**Descrição**: IntelliSwap oferece uma interface amigável que permite aos investidores participar de pools de liquidez com poucos cliques, focando em usabilidade e acessibilidade.  
**Público-Alvo**: Investidores em criptomoedas interessados em produtos DeFi, mas sem expertise avançada.  
**Objetivo do MVP**: Completar o ciclo de investimento na rede de testes Sepolia.

## Funcionalidades do MVP

1. **Listagem de Pools por Perfil de Risco** (Principal)

   - Exibe as 10 melhores pools de liquidez com base no perfil de risco do usuário, simplificando a escolha em comparação com plataformas que apresentam gráficos complexos.
   - Primeira solução a oferecer uma abordagem humanizada e acessível para análise de pools.

2. **Cálculo Automático de Distribuição de Tokens** (Em Desenvolvimento)
   - Funcionalidade opcional para otimizar a alocação de tokens em um pool, ainda em fase de implementação.

## Tecnologias Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/) (v15.3.2): Framework React para renderização otimizada e suporte a Turbopack.
  - [React.js](https://reactjs.org/) (v19.0.0): Biblioteca para construção de interfaces de usuário.
  - [TypeScript](https://www.typescriptlang.org/) (v5): Tipagem estática para maior robustez do código.
  - [CSS Modules](https://github.com/css-modules/css-modules): Estilização modular e escalável.
  - [Lucide React](https://lucide.dev/) (v0.510.0): Biblioteca de ícones para interfaces.
- **Ferramentas de Desenvolvimento**:
  - [ESLint](https://eslint.org/) (v9) e [eslint-config-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint) (v15.3.2): Para linting e garantia de qualidade do código.
  - Vercel: Plataforma de deploy contínuo.
- **Ferramentas de IA**: ChatGPT, Claude e Gemini foram usados para produtividade (ex.: debugging, sugestões de código), mas o design e a lógica principal foram desenvolvidos pela equipe para priorizar usabilidade.

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

### Passos para Instalação

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seu-repositorio/intelliswap.git
   cd intelliswap/frontend
   ```

2. **Instale as Dependências**:

   ```bash
   npm install
   ```

3. **Execute o Projeto em Modo de Desenvolvimento**:

   ```bash
   npm run dev
   ```

   O projeto estará disponível em `http://localhost:3000`.

4. **Build para Produção**:

   ```bash
   npm run build
   ```

   Após o build, inicie o servidor:

   ```bash
   npm run start
   ```

5. **Linting**:
   Para verificar a qualidade do código:
   ```bash
   npm run lint
   ```

### Deploy

O MVP está hospedado no Vercel:  
🔗 [https://intelliswap.vercel.app/](https://intelliswap.vercel.app/)

## Estrutura do Projeto

```
frontend/
├── app/                  # Páginas e componentes do Next.js
├── public/               # Arquivos estáticos
├── styles/               # CSS Modules
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configurações do TypeScript
└── README.md             # Documentação do projeto
```

## Aplicação do Princípio 80/20

- **Maior Valor com Menor Esforço**: A análise de risco simplificada, que apresenta pools de forma humanizada, foi a funcionalidade central, reduzindo a complexidade para o usuário.
- **Priorização**: A equipe focou na usabilidade para atender às dores do público-alvo, adiando funcionalidades secundárias como monetização ou otimizações avançadas.

## Lições Aprendidas

- **Foco no Usuário**: A tecnologia deve servir às necessidades do público, não ser o objetivo principal.
- **Desafio Técnico**: Garantir uma interface intuitiva que simplifique conceitos complexos de DeFi.
- **Melhorias Futuras**: Iterar com base em feedback de usuários e implementar a funcionalidade de cálculo automático de tokens.

## Contato

Guilherme M. B. Duccini  
📧 [guilhermeduccini@gmail.com](mailto:guilhermeduccini@gmail.com)
