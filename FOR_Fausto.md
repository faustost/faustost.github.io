# Seu Novo Website: ZenTech em Código

Fala, Fausto! Implementei a primeira versão do seu site pessoal. Ficou exatamente como a gente planejou: minimalista, direto e com aquele "undertone" Zen que você valoriza.

### 🏗️ A Arquitetura (O "Como")

O site é **puro e simples**. Nada de frameworks pesados ou processos de build complicados. É HTML5, CSS3 e um pouquinho de JavaScript. 

*   **HTML Modular:** Dividi o site em 4 páginas principais (`index`, `academic`, `projects`, `contact`). Cada página carrega o conteúdo em Português e Inglês simultaneamente.
*   **CSS Minimalista (`css/style.css`):** Usei uma paleta monocromática (Preto e Branco). O design é focado na tipografia e no espaço negativo, para dar aquela sensação de clareza e calma. É totalmente responsivo — fica bonitão tanto no desktop quanto no celular.
*   **O Truque do Idioma (`js/lang.js`):** Em vez de duplicar as páginas, usei atributos `data-lang`. O JavaScript detecta a língua do navegador do visitante ou lembra da última escolha dele (via `localStorage`) e mostra apenas a versão correta. É rápido e elegante.

### 🧠 Decisões Técnicas e Porquês

1.  **Por que não React/Next.js?** Para um site pessoal focado em conteúdo e filosofia, menos é mais. HTML puro carrega instantaneamente, é fácil de manter e tem uma pegada de carbono quase nula. Alinha-se perfeitamente com o conceito de "Building small things".
2.  **Monocromático:** Remove as distrações. O foco é na sua mensagem e nas suas perguntas.
3.  **Barbell Strategy no Código:** A estrutura é estável e sólida (HTML/CSS padrão), mas o conteúdo permite que você experimente rápido. Quer adicionar um projeto? É só abrir o `projects.html` e escrever.

### 📝 Lições e Aprendizados

*   **Simplicidade é Sofisticação:** Às vezes, passamos horas configurando ferramentas que só nos atrasam. Voltar ao básico nos lembra que a web foi feita para compartilhar ideias, não apenas scripts.
*   **O "Beginner's Mind" no Desenvolvimento:** Ao construir isso, evitei jargões e bibliotecas da moda. O código é legível para qualquer um que esteja começando.
*   **Pitfall evitado:** No início, pensei em fazer páginas separadas para PT/EN (ex: `/en/index.html`). Mas isso daria o dobro de trabalho para manter. A solução com `data-lang` mantém tudo em um lugar só, facilitando atualizações futuras.

### 🚀 Próximos Passos

O site já está pronto para o **GitHub Pages**. Basta dar um `git push` e ele estará no ar.
Fique à vontade para substituir os placeholders que deixei (especialmente o seu email e links exatos) nos arquivos `.html`.

O código é seu. Divirta-se "tinkering"!
