# Design System – App de Academia "Pulse"

## 1. Visão Geral
- **Nome de trabalho:** Pulse (pode ser personalizado; manter placeholders).
- **Estilo:** Liquid Glass / Glassmorphism com look & feel iOS (Human Interface Guidelines).
- **Tom:** Profissional, motivador e acolhedor.
- **Idioma:** Português do Brasil. Sempre incorporar o placeholder `{{TEXTO_EXTRA_DO_CLIENTE}}` quando fornecido pelo cliente em comunicações contextuais (ex.: cards motivacionais, mensagens de onboarding, mensagens no resumo de treino).
- **Objetivo:** Guiar usuários em treinos de musculação, corridas/caminhadas, alimentação e acompanhamento de metas.

## 2. Fundamentos Visuais
### 2.1 Paleta de Cores
| Uso | Cor Primária | Hex | Contraste com texto |
| --- | --- | --- | --- |
| Primária (CTA, destaques) | Azul-ciano | `#1ECBE1` | Texto em `#0B1A24` (12.4:1) ou `#FFFFFF` (4.7:1) |
| Secundária | Roxo profundo | `#6F4BFF` | Texto em `#0B1A24` (6.7:1) ou `#FFFFFF` (4.2:1) |
| Sucesso | Verde vibrante | `#39D98A` | Texto em `#063F25` (12.1:1) |
| Alerta | Âmbar | `#FFB347` | Texto em `#1F1403` (11.3:1) |
| Plano de fundo gradiente | Azul petróleo `#051826`, roxo `#2A2550`, ciano profundo `#0A3D62` | Usar gradiente radial/linear suave |
| Texto primário | `#F5FBFF` (light mode) / `#E6F3FF` (dark) |
| Texto secundário | `#C3D9E7` (light) / `#9CB7C8` (dark) |
| Texto sobre fundos claros | `#0B1A24` |

### 2.2 Background e Atmosfera
- Fundo panorâmico único com variações sutis por tela: gradiente radial principal (azul petróleo → roxo) combinado com highlight em ciano nas áreas de foco.
- Aplicar **parallax leve** (3–6 px) em elementos de fundo ao rolar.
- Evitar múltiplos gradientes conflitantes; apenas ajustar opacidade do overlay conforme a tela.
- Inserir noise sutil (1%) para reforçar a textura de vidro.

### 2.3 Cartões e Superfícies de Vidro
- **Blur Gaussian:** 24 px (mínimo 20, máximo 30 conforme hierarquia).
- **Opacidade de fundo:** `rgba(10, 27, 39, 0.45)` para cartões principais; `rgba(10, 27, 39, 0.35)` para barras e chips.
- **Borda externa:** 1 px `rgba(255, 255, 255, 0.4)`.
- **Realce interno:** inset 1 px `rgba(255, 255, 255, 0.2)` na parte superior.
- **Sombras:** `0 12px 28px rgba(5, 12, 24, 0.16)` (podendo variar y=8–14, blur=24–32, opacidade 12–18%).
- **Raio:** 20 px padrão (variar 16–24 px conforme componente).

### 2.4 Tipografia (SF Pro)
- Títulos H1: SF Pro Display Bold 32 pt / 120% line-height.
- Títulos H2: SF Pro Display Semibold 24 pt / 120%.
- H3/Subtítulos: SF Pro Text Semibold 20 pt / 130%.
- Corpo principal: SF Pro Text Regular 17 pt / 140%.
- Legendas / Labels: SF Pro Text Medium 15 pt / 140%.
- Numerais de destaque (ex.: cronômetros): SF Pro Display Medium 48 pt.

### 2.5 Ícones
- Ícones lineares (Stroke 1.5 px) com cantos arredondados, inspirados no SF Symbols.
- Primários em `rgba(255,255,255,0.86)`, estados inativos `rgba(255,255,255,0.55)`.

## 3. Componentes Reutilizáveis
### 3.1 Card de Vidro
- Layout: padding 20 px, conteúdo alinhado à esquerda, ações em base.
- Possui header com label, título e status (chips).
- Pode conter progressos circulares ou barras internas.

### 3.2 Botão Primário
- Forma: raio 20 px, altura mínima 52 px.
- Fundo sólido (não translúcido) com gradiente `#1ECBE1 → #17A5D6` (horizontal).
- Texto Semibold 17 pt em `#0B1A24`.
- Estado pressionado: reduzir escala para 0.98 e aumentar sombra interna.
- Estado foco/acessibilidade: outline 2 px `rgba(30,203,225,0.7)`.

### 3.3 Botão Secundário (Vidro)
- Fundo translúcido `rgba(14, 40, 58, 0.32)` com borda `rgba(255,255,255,0.4)`.
- Texto e ícone primário `#F5FBFF`.

### 3.4 Chips
- Altura 36 px, raio 18 px.
- Estado selecionado: fill sólido primário, texto em `#0B1A24`.
- Estado neutro: vidro `rgba(18,42,62,0.28)` com texto `rgba(255,255,255,0.78)`.

### 3.5 Modal de Vidro
- Width 92% viewport, max 480 px.
- Fundo `rgba(7, 19, 29, 0.55)` com blur 28 px.
- Header arrastável com pill translúcido.
- Botões alinhados em bottom sheet.

### 3.6 Barra Inferior iOS
- Estilo translucent dock com 5 ícones.
- Fundo `rgba(7, 19, 29, 0.4)` + blur 26 px, outline branco 40%.
- Ícone ativo preenchido com gradiente primário/roxo e título em SF Pro Text Medium 13 pt.

### 3.7 Header Translúcido
- Altura 96 px, com título em H2 e avatar.
- Contém CTA secundário (ex.: editar plano) em botão de vidro.
- Aplica blur 24 px e background `rgba(7,19,29,0.32)`.

### 3.8 Timer/Contador
- Display circular com vidro interno e gradiente suave.
- Números em 48 pt.
- Barra de progresso radial (espessura 6 px) com cor dinâmica (azul → verde ao concluir).

### 3.9 Skeleton Loader
- Blocos translúcidos pulsando entre opacidade 0.24–0.34, com animação 1.2 s.

## 4. Modos de Cor
### 4.1 Modo Claro
- Background base: gradiente claro `#F5FBFF → #DDE9F5` com overlay translúcido escuro `rgba(6,18,28,0.2)` para manter efeito vidro.
- Texto principal `#0B1A24`, manter contraste ≥ 4.5.
- Cartões mantêm blur, mas ajustar opacidade para `rgba(255,255,255,0.55)`.

### 4.2 Modo Escuro
- Background base: gradiente profundo `#051826 → #2A2550 → #0A3D62`.
- Texto primário `#F5FBFF`, secundário `#C3D9E7`.
- Botões sólidos mantêm contrastes mínimos AA.

## 5. Layouts Principais
Todos os layouts baseados em grid de 8 px. Safe areas respeitadas (iPhone 14/15). Espacamentos horizontais 20–24 px.

### 5.1 Onboarding (Fluxo Principal)
1. **Tela 1 – Boas-vindas:** Card central com headline “Eleve seu treino”. CTA primário “Começar” e botão secundário “Entrar”. Incluir mensagem `{{TEXTO_EXTRA_DO_CLIENTE}}` quando disponível.
2. **Tela 2 – Personalização:** Seleção de objetivos (chips) e horário preferido.
3. **Tela 3 – Permissões:** Cards com ícones para “Saúde” e “Localização (GPS)”. Botões sólidos “Permitir acesso” alinhados verticalmente.

### 5.2 Home do Treino (Hoje)
- Header com saudação “Olá, Bruno” + avatar.
- Card “Treino do dia” ocupando 70% da largura, com Tabs A/B/C.
- Cada exercício listado em subcards:
  - Nome + ícone muscular.
  - Séries com progresso (ex.: `3/5 séries`).
  - Timer embutido: botão start/pause circular, presets (30/60/90 s) como chips.
  - CTA “Concluir exercício” (botão primário) aparece ao completar séries.
- Seção lateral (scroll horizontal) com “Próximas metas”, “Resumo de corrida”.
- Botão flutuante do Assistente de Voz no canto inferior direito (vidro circular, 64 px).

### 5.3 Detalhe do Exercício / Contador de Séries
- Breadcrumb + ícone voltar.
- Card principal com foto/ilustração semitransparente.
- Inputs rápidos para reps, carga, notas.
- Contador grandes + e – (botões de 56 px) com haptics.
- Histórico abaixo em lista de cartões menores com data, séries, carga.

### 5.4 Timer de Descanso (Modal)
- Aparece como bottom sheet em vidro.
- Mostrador 48 pt com animação de onda luminosa.
- Botões preset 30/60/90 s (chips) e custom (abrir modal numérico).
- Ao terminar, vibração + cor muda para verde.

### 5.5 Cronômetro de Corrida/Caminhada
- Tela dedicada com layout full screen.
- Mapa em background (Apple Maps style) com overlay de vidro nos dados.
- Card superior: tempo atual, pace, distância.
- Tabs para splits, ritmo, altimetria.
- Botões start/pause grandes (altura 60 px). Encerrar com CTA vermelho translúcido (garantir contraste: texto em `#0B1A24`).
- Ao finalizar, resumo em card mostrando calorias, ritmo médio, grafico mini.

### 5.6 Dieta / Registro Alimentar
- Header com macros (kcal, carb, prot, gord) em cards circulares.
- Lista de refeições (café, almoço, etc.) com botões “Adicionar”.
- Presets rápidos (chips) e botão para scanner (ícone câmera) em cartão de vidro.
- Espaço para mostrar `{{TEXTO_EXTRA_DO_CLIENTE}}` como dica nutricional.

### 5.7 Calendário de Treinos
- Toggle semanal/mensal.
- Dias como pills de vidro; dias concluídos com highlight verde e check.
- Bottom sheet com detalhes do dia selecionado e ações “Marcar como feito”, “Reprogramar”.

### 5.8 Estatísticas
- Cards em 2 colunas, espaçamento 20 px.
- Gráficos lineares minimalistas (linhas 2 px, sem grid poluído).
- Destaque para metas: progress bar horizontal com marcadores.

### 5.9 Assistente de Voz
- Botão flutuante circular 64 px, gradiente leve `rgba(30,203,225,0.6) → rgba(111,75,255,0.6)`.
- Ao ativar, expandir para painel semitransparente com onda sonora líquida animada.
- Exemplos de comandos listados em chips: “Começar descanso”, “Iniciar corrida”, etc.
- Feedback visual de reconhecimento (texto) em 17 pt, com label menor para status.

### 5.10 Configurações
- Lista de cartões com switches (vidro) seguindo padrão iOS.
- Seção de acessibilidade (tamanhos de fonte, alto contraste).
- Opções de modo claro/escuro e preferências de haptics.

## 6. Interações e Motion
- **Animações de toque:** redução de escala 0.98 em 100 ms com easing out.
- **Transições entre telas:** slide/push padrão iOS com fade suave nos cartões de vidro.
- **Microinterações:**
  - Timer: halo pulsante sincronizado com segundos.
  - Progresso de séries: preencher barra com líquido animado.
  - Assistente de voz: onda responde ao volume.
- **Skeleton loaders:** shimmer translúcido 0.9 s.
- **Parallax:** elementos de background movem 4 px contra o scroll.

## 7. Acessibilidade
- Touch targets ≥ 44x44 px.
- Estado de foco visível (outline 2 px primário com opacidade 0.8).
- Textos sempre ≥ AA (ver tabela de contraste). Evitar textos sobre fundos ruidosos.
- Suporte a VoiceOver: labels descritivas e hints (ex.: “Botão para iniciar descanso de 60 segundos”).
- Fornecer toggles para haptics e sons.

## 8. Conteúdo e Tom de Voz
- Mensagens curtas, motivadoras, profissionais (ex.: “Respire fundo, você está perto da meta”).
- Sempre usar português do Brasil.
- Quando cliente fornecer `{{TEXTO_EXTRA_DO_CLIENTE}}`, inserir como bloco destacado em cards motivacionais ou notificações.

## 9. Protótipo do Fluxo Principal
1. **Onboarding:** 3 telas (boas-vindas → objetivos → permissões).
2. **Home:** mostra treino do dia, métricas rápidas.
3. **Detalhe do exercício:** start/pause timer, registro de séries.
4. **Timer de descanso:** modal.
5. **Conclusão do exercício:** CTA “Concluir exercício”.
6. **Resumo:** Card final com totais, sugestões para próxima sessão.

## 10. Guia de Implementação
- Utilizar blur nativo (UIKit/SwiftUI) com material `.ultraThin` customizado.
- Inserir noise via overlay PNG 1–2% opacidade.
- Gerar sombras com `CALayer` e ajustar para não criar banding.
- Garantir que componentes sejam responsivos (iPhone mini ao Pro Max).

## 11. Assets e Recursos
- Ícones base SF Symbols personalizados (stroke adaptado).
- Ilustrações semitransparentes (tonalidade azul/roxo).
- Paleta exportável (.ase) e tokens JSON para dev.

## 12. Checklist de QA Visual
- [ ] Verificar contraste AA/AAA.
- [ ] Revisar animações ≤ 400 ms.
- [ ] Conferir placeholders `{{TEXTO_EXTRA_DO_CLIENTE}}` substituídos quando necessário.
- [ ] Validar estados claro/escuro.
- [ ] Testar com usuários canhotos (alcance do polegar).

