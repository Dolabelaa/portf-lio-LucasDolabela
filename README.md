
# Vitrine Digital - Portfólio Web Interativo

O **Vitrine Digital** é uma aplicação web moderna desenvolvida para funcionar como um portfólio digital interativo, permitindo apresentar projetos, habilidades e informações profissionais de forma visual e dinâmica.

O objetivo do projeto é demonstrar boas práticas de desenvolvimento Front-end, organização de código, uso de animações modernas e criação de interfaces responsivas.

---

## 🚧 Status do Projeto

🟢 **Em desenvolvimento**

---

## 📚 Índice

* [Links Úteis](#-links-úteis)
* [Sobre o Projeto](#-sobre-o-projeto)
* [Funcionalidades Principais](#-funcionalidades-principais)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Arquitetura](#-arquitetura)
* [Instalação e Execução](#️-instalação-e-execução)
* [Configuração do EmailJS](#-configuração-do-formulário-de-contato-emailjs)
* [Deploy](#-deploy)
* [Estrutura de Pastas](#-estrutura-de-pastas)
* [Demonstração](#-demonstração)
* [Testes](#-testes)
* [Documentações Utilizadas](#-documentações-utilizadas)
* [Autores](#-autores)
* [Contribuição](#-contribuição)
* [Agradecimentos](#-agradecimentos)
* [Licença](#-licença)

---

## 🔗 Links Úteis

* **Repositório:** [Portfólio Lucas Dolabela](https://github.com/Dolabelaa/portf-lio-LucasDolabela)
* **Aplicação local (dev):** `http://localhost:3000`

---

## 📖 Sobre o Projeto

O **Vitrine Digital** foi desenvolvido com o objetivo de criar um portfólio digital moderno e interativo, permitindo que desenvolvedores apresentem seus projetos, habilidades e experiências profissionais de maneira organizada e visualmente atrativa.

A ideia principal do projeto surgiu da necessidade de possuir uma plataforma personalizada para divulgação de trabalhos e experiências na área de tecnologia.

O sistema permite que o usuário apresente:

* Projetos desenvolvidos
* Tecnologias dominadas
* Informações pessoais e profissionais
* Links para redes profissionais

**Público-alvo:**

* Desenvolvedores iniciantes
* Estudantes de tecnologia
* Profissionais que desejam divulgar seu portfólio online

---

## ✨ Funcionalidades Principais

* **Apresentação de Portfólio:** Exibição de projetos desenvolvidos.
* **Seção Sobre o Desenvolvedor:** Informações profissionais e acadêmicas.
* **Interface Moderna e Responsiva:** Layout adaptado para desktop e dispositivos móveis.
* **Animações Interativas:** Uso do Framer Motion para melhorar a experiência do usuário.
* **Exibição de Projetos:** Apresentação visual de trabalhos realizados.
* **Links para Redes Profissionais:** GitHub, LinkedIn e outras plataformas.

---

## 🛠 Tecnologias Utilizadas

### Front-end

* **Framework/Biblioteca:** React + JavaScript (ES6+)
* **Build Tool:** Vite
* **Estilização:** TailwindCSS
* **Animações:** Framer Motion
* **Envio de e-mail:** EmailJS (`@emailjs/browser`)
* **Gerenciamento de dependências:** npm

---

## 🏗 Arquitetura

O projeto segue uma arquitetura simples baseada em aplicação Front-end moderna, organizada em componentes reutilizáveis.

**Principais conceitos utilizados:**

* Componentização
* Organização modular
* Separação entre lógica e interface

> **Fluxo geral da aplicação:**
> Usuário → Interface Web → Componentes → Renderização dinâmica

---

## ⚙️ Instalação e Execução

### Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

* Node.js (versão 20 ou superior)
* npm

### 📦 Instalação de Dependências

1. Clone o repositório:
```bash
git clone https://github.com/Dolabelaa/portf-lio-LucasDolabela.git

```


2. Entre na pasta do projeto:
```bash
cd portf-lio-LucasDolabela

```


3. Instale as dependências:
```bash
npm install

```

> Caso precise instalar manualmente o pacote de envio de e-mails, execute:
```bash
npm install @emailjs/browser
```



### ⚡ Como Executar a Aplicação

1. Execute o servidor de desenvolvimento:
```bash
npm run dev

```


2. A aplicação estará disponível em: `http://localhost:3000`

### Execução apenas do front-end (opcional)

Se quiser rodar somente a aplicação web sem comandos do monorepo:

```bash
cd apps/web
npm install
npm run dev
```

---

## 📨 Configuração do formulário de contato (EmailJS)

O formulário da página de contato usa o pacote `@emailjs/browser` e lê as chaves em `apps/web/src/config/emailJsConfig.js`.

1. Crie o arquivo `apps/web/.env` com as variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_para_voce
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_para_cliente
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

2. Reinicie o servidor (`npm run dev`) após criar/alterar o `.env`.

> O arquivo `.env` está no `.gitignore` e não deve ser versionado.

---

## 🚀 Deploy

Para gerar a versão de produção:

```bash
npm run build

```

Os arquivos finais serão gerados na pasta: `dist/`

---

## 📂 Estrutura de Pastas

```text
vitrine-digital
│
├── public          # Arquivos estáticos
├── src
│   ├── components  # Componentes reutilizáveis
│   ├── pages       # Páginas da aplicação
│   ├── assets      # Imagens e mídias
│   ├── styles      # Arquivos de estilo (CSS/Tailwind)
│   └── utils       # Funções utilitárias
│
├── package.json
├── vite.config.js
└── README.md

```

---

## 🎥 Demonstração

Principais telas do sistema:

* Página inicial
* Página de projetos
* Página sobre o desenvolvedor

---

## 🧪 Testes

O projeto pode ser expandido com testes utilizando ferramentas como:

* Jest
* React Testing Library
* Cypress

---

## 📚 Documentações Utilizadas

* [Documentação do Vite](https://vitejs.dev/)
* [Documentação do TailwindCSS](https://tailwindcss.com/docs)
* [Documentação do Framer Motion](https://www.framer.com/motion/)
* [Documentação do EmailJS](https://www.emailjs.com/docs/)
* [Documentação JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 👥 Autores

* **Davi Vinicius Barbosa de Oliveira**
* **Marcos de Oliveira Antunes**
* **Vinicius Zegarra Palhares**
* **Lucas Gonçalves Dolabela**

*Estudantes de Engenharia de Software – PUC Minas*

---

## 🤝 Contribuição

Contribuições são bem-vindas. Para contribuir:

1. Faça um fork do projeto
2. Crie uma nova branch
3. Faça suas alterações
4. Envie um Pull Request

---

## 🙏 Agradecimentos

Agradecimentos ao **Prof. Dr. João Paulo Aramuni** pelo template de documentação utilizado como base neste projeto.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

