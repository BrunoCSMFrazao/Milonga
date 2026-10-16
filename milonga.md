# MILONGA

## Documentação técnica, histórica e operacional do projeto

**Versão:** 1.1  
**Data de atualização:** 16/10/2026  
**Repositório:** https://github.com/BrunoCSMFrazao/Milonga.git  
**Tecnologias:** JavaScript, Phaser e Vite  
**Ambiente de desenvolvimento:** Windows, Visual Studio Code e PowerShell

---

## 1. Apresentação do projeto

Milonga é um jogo 2D em desenvolvimento, ambientado na vida rural do Rio Grande do Sul durante o século XIX.

A proposta é criar um ambiente rural vivo, inspirado na paisagem, na cultura e nos costumes gaúchos, com personagens que realizam atividades cotidianas, animais, construções e mudanças no ambiente ao longo do dia e da noite.

A identidade visual utiliza pixel art clássico, inspirado nos jogos antigos de Nintendo e Game Boy. O cenário deve apresentar elementos coerentes entre si, com proporções consistentes, pixels nítidos e uma composição visual que represente uma propriedade rural habitada.

O desenvolvimento utiliza JavaScript, Phaser e Vite. A prioridade é construir o jogo gradualmente, preservar as funcionalidades existentes e corrigir os problemas sem comprometer a versão funcional.

Uma ideia inicial também mencionava um jogo de visão superior, com combates por turnos inspirados em Pokémon e possibilidade de um modo história. A relação dessa proposta inicial com a direção rural atual deve ser confirmada na implementação existente.

## 2. Objetivos do projeto

O Milonga busca desenvolver um jogo com:

- Cenário rural gaúcho inspirado no século XIX.
- Paisagens com campos, coxilhas, vegetação nativa e caminhos de terra.
- Construções rurais visualmente completas.
- Personagens com movimentação, animações e atividades próprias.
- Animais característicos de uma propriedade rural.
- Ciclo de dia e noite com mudanças visuais e comportamentais.
- Interações entre personagens, construções e ambiente.
- Rotinas coerentes com a vida rural.
- Identidade visual consistente em pixel art.
- Código organizado e preparado para futuras melhorias.
- Controle de versão para preservar o progresso e permitir a recuperação de versões anteriores.

## 3. Identidade visual e direção artística

### 3.1. Paisagem rural

O cenário deve representar o interior do Rio Grande do Sul, com elementos como:

- Campos e vegetação nativa do Pampa.
- Coxilhas.
- Caminhos de terra.
- Cercas e porteiras de madeira.
- Araucárias e outras árvores apropriadas ao ambiente.
- Pastagens.
- Lago ou açude.
- Áreas destinadas aos animais.
- Construções rurais e elementos do cotidiano.

A composição deve transmitir a sensação de uma propriedade rural habitada, evitando cenários vazios ou elementos visualmente desconectados.

### 3.2. Estilo pixel art

Todos os elementos devem seguir uma linguagem visual consistente.

Os principais critérios são:

- Pixels nítidos e bem definidos.
- Contornos legíveis.
- Proporções coerentes entre personagens, animais e construções.
- Paleta de cores consistente.
- Animações compatíveis com o estilo.
- Ausência de borrões e deformações indesejadas.
- Textos legíveis e sem sobreposição.
- Alinhamento correto dos objetos no cenário.

### 3.3. Casa rural

A casa é um dos elementos centrais do cenário.

Sua estrutura deve apresentar paredes, telhado, portas e janelas completos, sem lacunas, transparências indevidas ou partes visualmente desconectadas.

Um problema identificado durante o desenvolvimento está na parede próxima ao telhado, que apresenta aparência vazia ou incompleta. Esse ponto precisa ser verificado e corrigido na versão atual.

Durante a manutenção da casa, devem ser analisados:

- O desenho ou sprite utilizado.
- A posição das paredes e do telhado.
- A ordem de renderização dos elementos.
- A opacidade e a transparência.
- O alinhamento das partes.
- As colisões e os pontos de entrada.
- A iluminação durante a noite.

A construção deve parecer sólida e completa, respeitando a perspectiva e o estilo visual do jogo.

### 3.4. Personagens

Os personagens devem apresentar vestimentas coerentes com a ambientação histórica.

Entre as referências visuais estão bombachas e camisas para os homens e vestidos para as mulheres.

A movimentação deve incluir animações perceptíveis dos braços, das pernas e do corpo. Os personagens não devem parecer deslizar pelo cenário sem movimentar os membros.

As animações devem respeitar os estados dos personagens, incluindo caminhada, parada, mudança de direção e execução de atividades.

### 3.5. Animais

A propriedade deve incluir animais como:

- Cavalos Crioulos.
- Vacas.
- Galinhas.

Os animais devem contribuir para a sensação de um ambiente vivo. Seus comportamentos, deslocamentos e interações devem respeitar os sistemas existentes.

Não se deve considerar um comportamento implementado sem confirmar sua presença no código e seu funcionamento durante a execução.

## 4. Sistemas e comportamentos do jogo

Os comportamentos descritos nesta seção representam os objetivos do projeto. A implementação efetiva de cada recurso deve ser confirmada por meio da análise do código e de testes.

### 4.1. Ciclo de dia e noite

O planejamento prevê aproximadamente 15 segundos de dia e 15 segundos de noite.

O sistema deve contemplar:

- Alternância contínua entre dia e noite.
- Movimento do sol e da lua.
- Transição entre iluminação diurna e noturna.
- Escurecimento significativo do ambiente durante a noite.
- Iluminação das janelas da casa, simulando um ambiente iluminado por lamparinas.
- Efeito visual de vento, quando implementado.
- Fumaça saindo da chaminé, quando implementada.

O ciclo deve funcionar continuamente, sem interferir indevidamente nas animações e nos comportamentos dos personagens.

A duração exata e o funcionamento de cada efeito precisam ser confirmados na versão atual.

### 4.2. Atividades durante o dia

Os adultos devem realizar atividades coerentes com a vida rural, evitando permanecer parados durante todo o dia.

As ações podem envolver deslocamentos, trabalho na propriedade e interação com o ambiente, conforme os sistemas implementados.

As animações devem acompanhar os movimentos e as atividades dos personagens.

### 4.3. Comportamento durante a noite

Durante a noite, os moradores devem seguir uma rotina de recolhimento para dentro da casa, deixando de aparecer no exterior após concluir a entrada.

O comportamento planejado para o cavaleiro inclui:

1. Desmontar do cavalo.
2. Levar ou conduzir o cavalo até um local apropriado próximo da casa.
3. Amarrar ou deixar o cavalo em local adequado, caso esse comportamento esteja implementado.
4. Entrar na residência.

As crianças também devem apresentar uma rotina noturna coerente com o planejamento do jogo.

Esses comportamentos precisam ser verificados no código e durante a execução.

### 4.4. Movimentação e animações

As animações devem acompanhar os estados dos personagens, incluindo:

- Caminhada.
- Parada.
- Mudança de direção.
- Execução de atividades.
- Entrada e saída de construções.
- Outras ações que venham a ser implementadas.

As alterações devem preservar colisões, limites do cenário, posições dos objetos e interações existentes.

## 5. Identidade e interface

O nome do jogo é **Milonga**.

O crédito de copyright solicitado é:

`© 2026 Brasil Games • Todos os direitos reservados`

A frase definida para a tela de título é:

> Luta-se por liberdade, derrama-se sangue e, mesmo na vitória, há perdas que jamais serão reparadas.

A frase deve ser preservada quando fizer parte da versão atual da interface.

Também foi trabalhada uma apresentação da página com fundo verde escuro, moldura em tom bege, sombras e canvas com aparência pixelada.

É importante distinguir a interface da página dos elementos internos do jogo:

- **HTML:** organiza a estrutura da página.
- **CSS:** controla a apresentação da página e da área de jogo.
- **Phaser:** controla cenas, personagens, objetos, animações e grande parte dos elementos visuais do mundo do jogo.

Problemas em personagens, construções e paisagens normalmente exigem a análise do código da cena e dos recursos gráficos, e não apenas alterações no CSS.

## 6. Tecnologias utilizadas

### JavaScript

Linguagem utilizada na lógica do jogo, no comportamento dos personagens e nos sistemas de atualização do ambiente.

### Phaser

Framework de desenvolvimento de jogos 2D, utilizado para trabalhar com cenas, sprites, animações, objetos e lógica de jogo.

### Vite

Ferramenta de desenvolvimento utilizada para executar a aplicação localmente e gerenciar o processo de desenvolvimento.

### Visual Studio Code

Editor utilizado para trabalhar nos arquivos do projeto.

### PowerShell

Terminal utilizado no ambiente Windows para executar comandos do projeto e do Git.

### Comando de desenvolvimento

O comando utilizado para iniciar o servidor de desenvolvimento é:

```powershell
npm.cmd run dev
```

A disponibilidade desse comando depende da existência de um script `dev` no arquivo `package.json`.

O uso de `npm.cmd` permite executar o npm no PowerShell quando a política de execução do Windows impede a execução do script `npm.ps1`.

## 7. Estrutura técnica do projeto

A estrutura registrada durante o desenvolvimento inclui os seguintes arquivos e diretórios:

```text
Milonga/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
├── src/
│   ├── main.js
│   └── style.css
├── public/
├── combat/
├── data/
├── game/
├── milonga-base/
└── node_modules/
```

Essa estrutura é aproximada e deve ser comparada com os arquivos atuais antes de ser considerada definitiva.

### 7.1. Arquivos principais

**`index.html`**

Arquivo HTML de entrada da aplicação. Sua função exata deve ser confirmada no conteúdo atual.

**`package.json`**

Registra as dependências e os scripts utilizados pelo projeto, incluindo o comando de desenvolvimento.

**`package-lock.json`**

Registra as versões resolvidas das dependências para ajudar a manter instalações consistentes.

**`vite.config.js`**

Arquivo de configuração do Vite.

**`src/main.js`**

Arquivo JavaScript principal mencionado durante o desenvolvimento. Deve ser analisado antes de qualquer alteração.

**`src/style.css`**

Arquivo de estilos da página e da área de jogo.

**`public/`**

Diretório normalmente destinado a recursos estáticos. Seu conteúdo atual deve ser inventariado.

**`combat/`, `data/` e `game/`**

Pastas mencionadas para organização dos sistemas de combate, dados e jogo. As responsabilidades reais precisam ser confirmadas.

**`milonga-base/`**

Pasta mencionada no histórico cuja finalidade e relação com a raiz do projeto precisam ser verificadas.

**`node_modules/`**

Diretório de dependências instaladas. Normalmente não deve ser incluído no repositório Git.

A estrutura real, as dependências e as relações entre os módulos devem ser verificadas antes de novas alterações.

## 8. Histórico do desenvolvimento

### 8.1. Planejamento inicial

O projeto foi planejado para utilizar JavaScript, Phaser e Vite, com uma estrutura que separasse os arquivos e sistemas do jogo.

Entre as ideias iniciais estavam a visão superior, o combate por turnos inspirado em Pokémon e a possibilidade de um modo história.

Posteriormente, a direção visual passou a enfatizar a vida rural gaúcha, a ambientação histórica e as rotinas dos moradores.

A relação entre a proposta inicial e a versão rural atual ainda precisa ser confirmada na implementação.

### 8.2. Organização dos arquivos

Durante o desenvolvimento, foram mencionados arquivos comuns de uma aplicação Vite, incluindo `index.html`, `package.json`, `package-lock.json`, `vite.config.js` e `.gitignore`.

Também foram mencionadas as pastas `src/`, `public/`, `combat/`, `data/`, `game/` e `milonga-base/`.

A função exata de cada diretório deve ser confirmada por meio da inspeção dos arquivos existentes.

### 8.3. Problemas durante alterações no código

Uma substituição completa do arquivo principal `src/main.js` comprometeu o funcionamento do jogo.

A versão anterior, considerada funcional, foi restaurada.

Esse acontecimento demonstrou a importância de analisar o código existente antes de modificar arquivos importantes.

As próximas alterações devem ser localizadas, controladas e reversíveis, preservando as funcionalidades não relacionadas ao problema em questão.

### 8.4. Estado do desenvolvimento

Os pontos de atenção registrados durante o desenvolvimento incluem:

- Correção da estrutura visual da casa, especialmente da parede próxima ao telhado.
- Eliminação de espaços vazios e transparências indevidas na construção.
- Melhoria das animações dos personagens.
- Implementação ou correção das atividades dos adultos durante o dia.
- Verificação do ciclo de dia e noite.
- Verificação das rotinas noturnas dos moradores.
- Preservação das funcionalidades existentes.

Esses pontos precisam ser reavaliados na versão atual antes da realização de novas alterações.

## 9. Estado das funcionalidades

A tabela abaixo reúne os principais comportamentos planejados e a situação conhecida a partir do histórico do projeto.

| Funcionalidade | Resultado esperado | Situação conhecida |
|---|---|---|
| Cenário rural | Paisagem coerente com a proposta | Requisitos definidos; implementação a verificar |
| Casa rural | Construção completa e opaca | Problema visual relatado |
| Ciclo de dia e noite | Alternância contínua | Implementação a verificar |
| Movimento do sol e da lua | Acompanhamento do ciclo | Implementação a verificar |
| Iluminação das janelas | Janelas iluminadas à noite | Implementação a verificar |
| Efeito de vento | Movimento ambiental | Implementação a verificar |
| Fumaça da chaminé | Efeito ambiental | Implementação a verificar |
| Atividades dos adultos | Trabalho durante o dia | Melhoria solicitada |
| Animação de caminhada | Movimento dos membros | Melhoria solicitada |
| Entrada dos moradores | Recolhimento noturno | Implementação a verificar |
| Rotina do cavaleiro | Desmontar, deixar o cavalo e entrar | Implementação a verificar |
| Rotina das crianças | Brincadeiras durante o dia e recolhimento noturno | Implementação a verificar |

Para manter a documentação confiável, uma funcionalidade deve ser classificada como concluída somente após a confirmação no código e, quando aplicável, a realização de testes.

## 10. Controle de versão com Git

O Git foi instalado e inicializado na pasta do projeto.

Inicialmente, o comando `git add .` falhou porque o diretório ainda não era reconhecido como um repositório Git. Em seguida, foi executado `git init`.

Também foram configuradas localmente as informações utilizadas nos commits.

O primeiro commit informado durante o desenvolvimento foi criado com a mensagem:

`Registra versao funcional inicial do Milonga`

A criação desse commit local foi confirmada durante a conversa.

Posteriormente, o terminal mostrou que a branch `main` estava sincronizada com `origin/main`. Isso confirma o estado informado naquele momento, mas não garante que todos os arquivos desejados estejam publicados.

### 10.1. Verificar o estado do repositório

```powershell
git status
```

### 10.2. Conferir o endereço remoto

```powershell
git remote -v
```

### 10.3. Consultar os commits recentes

```powershell
git log --oneline --decorate -10
```

### 10.4. Conferir alterações locais

```powershell
git diff
```

### 10.5. Registrar uma alteração

Depois de revisar e testar as alterações:

```powershell
git add caminho/do/arquivo
git commit -m "Descreve a alteracao realizada"
```

É preferível adicionar arquivos específicos quando se deseja controlar exatamente o que será incluído no commit.

### 10.6. Enviar alterações ao GitHub

```powershell
git push
```

Se a branch ainda não estiver vinculada ao remoto, poderá ser necessário configurar o envio inicial:

```powershell
git push -u origin main
```

### 10.7. Recuperação e segurança

Antes de restaurar um arquivo, confira as alterações locais.

O comando abaixo descarta alterações locais não commitadas do arquivo indicado:

```powershell
git restore caminho/do/arquivo
```

Quando um commit já foi compartilhado, `git revert ID_DO_COMMIT` costuma ser uma opção mais segura para registrar uma reversão sem reescrever o histórico.

Comandos destrutivos, como `git reset --hard`, `git clean` e force push, não devem ser executados sem análise prévia.

## 11. Integração com o GitHub

O repositório remoto informado é:

https://github.com/BrunoCSMFrazao/Milonga.git

A conexão com o GitHub foi configurada como parte do processo de desenvolvimento. O terminal posteriormente indicou que a branch `main` estava sincronizada com `origin/main`.

Para conferir novamente a situação:

```powershell
git status
git remote -v
git branch -vv
```

Para atualizar as informações do repositório remoto:

```powershell
git fetch origin
```

Para verificar os commits existentes:

```powershell
git log --oneline --decorate --all -10
```

Antes de realizar operações de sincronização, deve-se verificar se existem commits diferentes no computador e no GitHub.

Senhas, tokens de acesso e outras credenciais não devem ser armazenados no código, na documentação ou nos commits.

## 12. Diretrizes de manutenção

O desenvolvimento deve seguir princípios que preservem a estabilidade do projeto.

- Preservar a implementação funcional existente.
- Evitar reescrever arquivos inteiros sem necessidade.
- Analisar as dependências entre os sistemas antes de modificá-los.
- Preferir alterações pequenas e localizadas.
- Evitar modificar vários sistemas independentes ao mesmo tempo.
- Testar as funcionalidades afetadas e suas dependências.
- Conferir as diferenças no código antes de criar um commit.
- Registrar as mudanças importantes no Git.
- Manter a documentação atualizada.
- Diferenciar funcionalidades comprovadas de recursos planejados.
- Não considerar uma funcionalidade concluída sem verificar seu funcionamento.
- Evitar incluir arquivos desnecessários no repositório.

Antes de modificar um arquivo importante, é necessário compreender sua implementação atual e identificar os possíveis impactos da mudança.

## 13. Plano de continuidade

### Etapa 1 — Auditoria

Examinar a estrutura dos arquivos, as dependências, a arquitetura do projeto e os sistemas existentes.

### Etapa 2 — Verificação do repositório

Confirmar a situação do Git local, o endereço remoto, o histórico de commits e a sincronização com o GitHub.

### Etapa 3 — Diagnóstico

Verificar os problemas visuais da casa, as animações, as atividades diurnas e os comportamentos noturnos.

### Etapa 4 — Correções

Implementar melhorias pequenas, priorizando problemas comprovados e preservando os sistemas existentes.

### Etapa 5 — Testes

Executar o jogo e verificar tanto as funcionalidades modificadas quanto os sistemas que possam ter sido afetados.

### Etapa 6 — Registro

Criar commits descritivos e enviar as versões validadas ao GitHub.

### Etapa 7 — Documentação

Registrar o estado atualizado do projeto, as mudanças realizadas, os problemas pendentes e as próximas tarefas.

## 14. Lista de tarefas pendentes

As tarefas abaixo devem ser marcadas como concluídas somente depois de sua realização e validação.

- [ ] Confirmar a versão funcional atual do jogo.
- [ ] Conferir a sincronização do repositório local com o GitHub.
- [ ] Verificar se os documentos desejados foram publicados.
- [ ] Inspecionar a estrutura real dos arquivos e diretórios.
- [ ] Confirmar as versões das dependências.
- [ ] Identificar as cenas e os sistemas existentes.
- [ ] Corrigir a parede da casa próxima ao telhado.
- [ ] Garantir que a casa esteja completa e sem transparências acidentais.
- [ ] Melhorar a coerência visual dos elementos em pixel art.
- [ ] Fazer os adultos executarem atividades durante o dia.
- [ ] Melhorar a animação de caminhada dos personagens.
- [ ] Validar o ciclo de dia e noite.
- [ ] Validar o movimento do sol e da lua.
- [ ] Verificar a iluminação noturna das janelas.
- [ ] Verificar o efeito de vento.
- [ ] Verificar a fumaça da chaminé.
- [ ] Validar a rotina noturna dos moradores.
- [ ] Verificar a rotina do cavaleiro e do cavalo.
- [ ] Confirmar o comportamento das crianças durante o dia e a noite.
- [ ] Testar colisões e entradas da casa.
- [ ] Verificar se as funcionalidades existentes foram preservadas.
- [ ] Atualizar a documentação após as alterações relevantes.

## 15. Critérios de qualidade

Uma alteração deve ser considerada concluída quando:

- O projeto inicia corretamente.
- A funcionalidade modificada apresenta o comportamento esperado.
- Os sistemas relacionados continuam funcionando.
- A identidade visual permanece consistente.
- Não foram introduzidos novos erros conhecidos.
- As alterações estão registradas em um commit descritivo.
- A documentação corresponde ao estado real do projeto.

Quando não for possível realizar testes, essa limitação deve ser registrada. Não se deve afirmar que uma funcionalidade foi validada sem evidências.

## 16. Histórico deste documento

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | 16/10/2026 | Consolidação do histórico conhecido, dos requisitos visuais e comportamentais e das orientações de manutenção. |
| 1.1 | 16/10/2026 | Organização dos requisitos, consolidação das informações complementares e atualização das diretrizes de continuidade e controle de versão. |

Este documento deve ser atualizado a cada etapa relevante do desenvolvimento. Os registros precisam distinguir funcionalidades planejadas, implementadas e efetivamente testadas.

---

**Fim da documentação do projeto Milonga.**