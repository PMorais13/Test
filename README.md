# Pulse – Guia de Design Liquid Glass

Este repositório contém a especificação completa de design para um app de academia moderno em estilo Liquid Glass/Glassmorphism seguindo o look & feel do iOS (HIG). O objetivo é oferecer uma experiência profissional, motivadora e acessível para treinos, corridas/caminhadas, dieta e acompanhamento de metas.

## Conteúdo
- [Site do guia (index.html)](index.html): visual completo em glassmorphism com tema claro/escuro, cards interativos e destaques das principais funcionalidades.
- [Design System – App de Academia "Pulse"](docs/design-liquid-glass-fitness.md)
  - Fundamentos visuais (paleta, tipografia, padrões de vidro realista)
  - Componentes reutilizáveis (cards, botões, chips, modais, barra inferior iOS, headers)
  - Layouts detalhados de telas (Onboarding, Home do Treino, Contador de Séries, Timer de Descanso, Corrida, Dieta, Calendário, Estatísticas, Assistente de Voz, Configurações)
  - Diretrizes de acessibilidade, motion, conteúdo e fluxo principal prototipado
  - Checklist de QA visual e orientação de implementação

## Uso
- Utilize os tokens, combinações de cores e especificações de blur/shadow descritos no documento principal para manter o efeito de vidro realista e alto contraste (mínimo WCAG AA).
- Garanta que qualquer texto adicional fornecido pelo cliente seja incorporado através do placeholder `{{TEXTO_EXTRA_DO_CLIENTE}}`.
- Replique os padrões de animação e haptics sugeridos para preservar a sensação premium iOS.

## Licença
Uso interno para planejamento e desenvolvimento do app Pulse.
