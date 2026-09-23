# 💍 Casamento Taís & Ângelo

Website desenvolvido como convite virtual para o casamento de **Taís & Ângelo**, com foco em uma experiência elegante, romântica e intuitiva para os convidados.

O projeto reúne informações importantes sobre o casamento, além de elementos visuais personalizados inspirados na identidade escolhida para o evento.

---

## ✨ Sobre o projeto

O site foi pensado para funcionar como um convite digital e central de informações para os convidados.

A proposta visual utiliza tons de verde escuro, creme e dourado, combinados com elementos florais e tipografia clássica.

A identidade do projeto busca transmitir:

- Elegância
- Romantismo
- Delicadeza
- Sofisticação
- Atmosfera clássica e religiosa

---

## 🌿 Funcionalidades

Atualmente, o projeto possui/prevê:

- Hero principal com identidade visual do casamento
- Slider automático com:
  - Taís & Ângelo
  - Save the Date
  - Data e contador regressivo
- Convite virtual
- Versículo bíblico
- Seção de chamada para informações
- Página com informações da cerimônia e recepção
- Data, horário e localização
- Link para mapa
- Informações sobre traje
- Estacionamento
- Confirmação de presença
- Lista de presentes
- Layout responsivo
- Menu mobile

---

## 🎨 Identidade visual

### Cores principais

```css
--primary: #010e04;
--primary-hover: #011604;
--primary-light: #ece9cc;
--text-on-primary: #e7e6d9;
--gold: #b89a57;
```

## Desenvolvimento

O site usa HTML, CSS e JavaScript, sem etapa de compilação. Abra `index.html` no navegador ou sirva a pasta com um servidor HTTP local.

- `css/colors.css`: cores compartilhadas.
- `css/global.css` e `css/header.css`: estilos comuns às páginas.
- `scripts/menu.js`: menu mobile compartilhado.
- `scripts/home.js`: slides e contador da página inicial.
- `scripts/recados.js`: formulário e mural; os recados ficam no navegador via `localStorage`.

### Padrão de código

Use dois espaços, UTF-8, finais de linha LF e comentários curtos em português que expliquem decisões ou pendências. Preserve os nomes de classes e IDs usados entre HTML, CSS e JavaScript.

Com Node.js e npm instalados:

```sh
npm install
npm run format
npm run format:check
```

O Prettier tem versão fixada no projeto e o EditorConfig aplica as mesmas regras no editor.

### Pendências existentes

As imagens `informacoes-fundo.png`, `recados-fundo.png` e `qrcode-pix.png` ainda não estão no repositório. A seção `#noivos`, os dados do evento e os dados de Pix também aguardam conteúdo definitivo.
