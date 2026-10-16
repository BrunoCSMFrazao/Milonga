# MILONGA
## Documentação técnica, histórica e operacional do projeto

**Versão:** 1.0  
**Data de atualização:** 16/10/2026  
**Repositório GitHub:** https://github.com/BrunoCSMFrazao/Milonga.git  
**Tecnologias:** JavaScript, Phaser e Vite  
**Ambiente de desenvolvimento:** Windows, Visual Studio Code e PowerShell

> **Nota:** Esta documentação reúne as informações registradas durante o desenvolvimento do Milonga. Os requisitos planejados são diferenciados das funcionalidades cuja implementação ainda precisa ser verificada diretamente no código e durante a execução do jogo.

---

## 1. Visão geral do projeto

Milonga é um jogo digital em desenvolvimento, ambientado na vida rural do Rio Grande do Sul durante o século XIX.

A proposta visual utiliza pixel art clássico, inspirado em jogos antigos de Nintendo e Game Boy. O mundo do jogo representa a paisagem rural gaúcha, com campos, coxilhas, caminhos de terra, cercas, construções, animais e moradores realizando atividades cotidianas.

O projeto utiliza JavaScript, Phaser e Vite. O desenvolvimento está organizado para permitir a evolução gradual do jogo, a correção de problemas visuais e comportamentais e a preservação das funcionalidades existentes.

Uma ideia inicial do projeto também mencionava um jogo 2D de visão superior, combate por turnos inspirado em Pokémon e possibilidade de um modo história. A relação dessa proposta inicial com a versão rural atual deve ser confirmada por meio da inspeção do código existente.

O princípio central do desenvolvimento é preservar as versões funcionais e realizar melhorias progressivas, evitando reescritas desnecessárias que possam comprometer o jogo.

## 2. Identificação e ambiente técnico

- **Nome:** Milonga.
- **Linguagem principal:** JavaScript.
- **Framework de jogo:** Phaser.
- **Ferramenta de desenvolvimento:** Vite.
- **Editor:** Visual Studio Code.
- **Sistema operacional de desenvolvimento:** Windows.
- **Terminal utilizado:** PowerShell.
- **Diretório local conhecido:** `C:\Users\Bruno\Desktop\Milonga`
- **Repositório GitHub:** https://github.com/BrunoCSMFrazao/Milonga.git
- **Crédito de copyright solicitado:** `© 2026 Brasil Games • Todos os direitos reservados`.

O comando utilizado para iniciar o servidor de desenvolvimento é:

```powershell
npm.cmd run dev
```

Esse comando depende da existência de um script `dev` no arquivo `package.json`.

O uso de `npm.cmd` permite executar o npm no PowerShell quando a política de execução do Windows impede a execução do script `npm.ps1`.

## 3. Histórico do desenvolvimento

### 3.1. Planejamento inicial

O projeto foi planejado para utilizar JavaScript, Phaser e Vite, com uma estrutura que separasse os arquivos e sistemas do jogo.

Entre as ideias iniciais estavam a visão superior, o combate por turnos inspirado em Pokémon e a possibilidade de um modo história.

Ao longo do desenvolvimento, a direção visual passou a enfatizar a vida rural gaúcha, a ambientação histórica e as rotinas dos moradores.

### 3.2. Criação e organização do projeto

O projeto passou a utilizar arquivos comuns de uma aplicação Vite, incluindo:

- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `.gitignore`
- `src/`
- `public/`
- `node_modules/`

Também foram mencionadas pastas como `combat/`, `data/`, `game/` e `milonga-base/`.

A estrutura real deve ser verificada no projeto para identificar a função de cada pasta e evitar duplicações ou conflitos.

### 3.3. Direção visual rural

A ambientação definida representa o interior do Rio Grande do Sul no século XIX.

Os elementos planejados incluem:

- Campos e vegetação do Pampa.
- Coxilhas.
- Caminhos de terra.
- Cercas e porteiras de madeira.
- Casa rural.
- Açude ou lago.
- Araucárias e vegetação nativa.
- Cavalos Crioulos.
- Vacas e galinhas.
- Adultos realizando atividades rurais.
- Crianças brincando durante o dia.

Os personagens devem utilizar roupas coerentes com a época, como bombachas e camisas para os homens e vestidos para as mulheres.

A escala, os contornos e a resolução dos elementos precisam permanecer consistentes para que todo o cenário pareça pertencer ao mesmo jogo.

### 3.4. Ciclo de dia e noite

Foi definido um ciclo ambiental desejado de aproximadamente 15 segundos de dia e 15 segundos de noite.

Os comportamentos planejados incluem:

- Alternância contínua entre dia e noite.
- Movimento do sol e da lua.
- Escurecimento significativo do cenário durante a noite.
- Janelas iluminadas na casa.
- Efeito visual de vento.
- Fumaça saindo da chaminé, quando implementada.

A duração e o funcionamento efetivos precisam ser confirmados na versão atual.

### 3.5. Rotina dos moradores

Foi solicitado que os adultos realizem atividades durante o dia, em vez de permanecerem parados no cenário.

Também foi solicitada a animação dos braços e das pernas durante a caminhada, para tornar os movimentos mais naturais dentro das limitações do pixel art.

Para o período noturno, o comportamento planejado é que os moradores entrem na casa e deixem de aparecer no exterior.

A rotina do personagem montado a cavalo deve incluir:

1. Desmontar do cavalo.
2. Levar ou deixar o cavalo próximo da casa.
3. Amarrar o cavalo, caso esse comportamento esteja implementado.
4. Entrar na residência.

As crianças devem brincar durante o dia. O comportamento noturno precisa seguir uma regra consistente, considerando a ideia de que elas entrem na casa para dormir.

Esses comportamentos devem ser verificados no código e durante a execução do jogo.

### 3.6. Problemas visuais identificados

Um dos problemas relatados está na aparência da casa, especialmente na parede próxima ao telhado, que apresenta um aspecto visual vazio ou incompleto.

A construção precisa parecer sólida, completa e opaca, sem lacunas acidentais ou transparências indesejadas.

A correção deve preservar o estilo pixel art e respeitar a organização atual dos elementos da cena.

### 3.7. Alteração que comprometeu o funcionamento

Durante o desenvolvimento, uma substituição completa do arquivo principal `src/main.js` comprometeu o funcionamento do jogo.

A versão anterior, considerada funcional, foi restaurada.

Esse acontecimento estabeleceu uma regra importante: não substituir arquivos principais inteiros sem antes analisar seu conteúdo atual e compreender as funcionalidades existentes.

As próximas alterações devem ser localizadas, controladas e reversíveis.

### 3.8. Interface e CSS

Foi trabalhado um CSS com layout responsivo, canvas com aparência pixelada, fundo verde escuro, moldura em tom bege e sombras.

Entretanto, a aparência geral ainda precisava de melhorias.

É importante separar os elementos da página dos elementos internos do jogo:

- O HTML organiza a estrutura da página.
- O CSS controla a apresentação da página e da área do jogo.
- O Phaser controla a cena, os personagens, os objetos, as animações e grande parte dos elementos visuais do mundo do jogo.

Por isso, problemas na casa, nos personagens ou na paisagem geralmente exigem a análise do código da cena e dos recursos gráficos utilizados, e não apenas alterações no CSS.

## 4. Identidade visual e interface

### 4.1. Estilo artístico

O Milonga deve manter uma estética de pixel art clássico, inspirada nos jogos antigos de Nintendo e Game Boy.

Requisitos visuais:

- Pixels nítidos.
- Contornos legíveis.
- Proporções coerentes entre objetos e personagens.
- Paleta de cores consistente.
- Alinhamento dos elementos.
- Animações compatíveis com o estilo.
- Ausência de borrões ou deformações indesejadas.
- Textos legíveis e sem sobreposição.

### 4.2. Casa rural

A casa deve apresentar paredes completas, telhado coerente, portas e janelas bem definidas.

A construção não deve conter espaços vazios acidentais, paredes transparentes ou partes que pareçam não ter sido desenhadas.

Durante a correção, devem ser verificados:

- O método utilizado para desenhar ou carregar a casa.
- A ordem de renderização do telhado e das paredes.
- Os sprites, as imagens e as formas utilizadas.
- A opacidade e a transparência.
- O alinhamento dos componentes.
- As colisões.
- Os pontos de entrada e saída.
- A iluminação durante a noite.

### 4.3. Personagens

Os personagens devem manter aparência coerente com a ambientação histórica.

Os movimentos precisam ser reconhecíveis, com animações apropriadas para caminhada, parada e execução de atividades.

As roupas, as proporções e os detalhes devem seguir a mesma linguagem visual do cenário.

### 4.4. Título e crédito

O nome do jogo é **Milonga**.

O crédito solicitado para a interface é:

`© 2026 Brasil Games • Todos os direitos reservados`

Também foi definida a seguinte frase para a tela de título:

> Luta-se por liberdade, derrama-se sangue e, mesmo na vitória, há perdas que jamais serão reparadas.

A frase deve ser preservada quando fizer parte da versão atual da interface.

## 5. Requisitos de funcionamento

### 5.1. Ciclo ambiental

| Funcionalidade | Resultado esperado | Situação |
|---|---|---|
| Alternância entre dia e noite | Ciclo contínuo | A confirmar |
| Duração do ciclo | Aproximadamente 15 segundos para cada período | A confirmar |
| Movimento do sol e da lua | Acompanhamento do ciclo | A confirmar |
| Escurecimento noturno | Ambiente significativamente mais escuro | A confirmar |
| Iluminação das janelas | Janelas iluminadas à noite | A confirmar |
| Efeito de vento | Movimento visual da vegetação ou de outros elementos | A confirmar |
| Fumaça da chaminé | Efeito ambiental | A confirmar |

### 5.2. Comportamento dos moradores

| Funcionalidade | Resultado esperado | Situação |
|---|---|---|
| Atividades dos adultos | Realização de tarefas durante o dia | Melhoria solicitada |
| Animação de caminhada | Movimento dos braços e das pernas | Melhoria solicitada |
| Entrada na casa | Moradores deixam o exterior durante a noite | A confirmar |
| Rotina do cavaleiro | Desmontar, deixar o cavalo e entrar na casa | A confirmar |
| Brincadeiras das crianças | Atividades durante o dia | A confirmar |
| Rotina noturna das crianças | Entrada na casa durante a noite | A confirmar |

### 5.3. Classificação das funcionalidades

Para evitar confusões entre planejamento e implementação, cada funcionalidade deve ser classificada como:

- **Confirmada no código:** existe uma implementação identificável.
- **Testada:** o comportamento foi observado durante a execução.
- **Parcial:** parte do comportamento está implementada.
- **Pendente:** ainda precisa ser desenvolvida.
- **Não verificada:** não existem informações suficientes para confirmar seu estado.

Uma funcionalidade não deve ser considerada concluída apenas porque foi solicitada ou planejada.

## 6. Estrutura técnica conhecida

A estrutura aproximada registrada durante o desenvolvimento é:

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

Essa estrutura precisa ser comparada com os arquivos atuais antes de ser considerada definitiva.

### 6.1. Arquivos principais

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

## 7. Procedimento de desenvolvimento

O desenvolvimento deve seguir um processo controlado para preservar a versão funcional.

### 7.1. Antes de alterar o código

1. Abrir a pasta correta do projeto.
2. Verificar o estado do Git.
3. Identificar os arquivos relacionados ao problema.
4. Ler o código atual.
5. Entender as dependências entre os sistemas.
6. Confirmar que existe uma versão funcional registrada.
7. Planejar a alteração antes de executá-la.

### 7.2. Durante a alteração

1. Modificar apenas o necessário.
2. Preservar as funcionalidades não relacionadas.
3. Evitar duplicar funções.
4. Evitar criar sistemas paralelos sem necessidade.
5. Não assumir que códigos de versões anteriores correspondem ao estado atual.
6. Manter a compatibilidade com as dependências instaladas.

### 7.3. Depois da alteração

1. Iniciar o jogo.
2. Verificar erros no terminal.
3. Verificar o console do navegador.
4. Testar a funcionalidade modificada.
5. Testar os sistemas próximos que possam ter sido afetados.
6. Examinar as diferenças no código.
7. Criar um commit quando a alteração estiver validada.
8. Enviar os commits ao GitHub quando o repositório remoto estiver configurado.

## 8. Controle de versão com Git

O Git foi instalado e inicializado na pasta do projeto.

Inicialmente, o comando `git add .` falhou porque o diretório não era reconhecido como um repositório Git. Em seguida, foi executado `git init`.

Também foram configurados localmente o nome e o e-mail utilizados nos commits.

O primeiro commit informado pelo usuário foi criado com a mensagem:

`Registra versao funcional inicial do Milonga`

O sucesso desse commit local foi informado durante a conversa. Entretanto, isso não comprova que a versão tenha sido publicada no GitHub.

### 8.1. Verificar o estado do repositório

```powershell
git status
```

### 8.2. Conferir o endereço remoto

```powershell
git remote -v
```

### 8.3. Consultar os commits recentes

```powershell
git log --oneline --decorate -10
```

### 8.4. Conferir alterações locais

```powershell
git diff
```

### 8.5. Registrar uma alteração

```powershell
git add .
git commit -m "Descreve a alteracao realizada"
```

### 8.6. Enviar alterações ao GitHub

```powershell
git push
```

Caso a branch ainda não esteja vinculada ao remoto, poderá ser necessário:

```powershell
git push -u origin main
```

### 8.7. Cuidados ao restaurar arquivos

O comando abaixo descarta as alterações locais não commitadas do arquivo indicado:

```powershell
git restore caminho/do/arquivo
```

Ele só deve ser utilizado depois de conferir o conteúdo que será perdido.

Quando um commit já foi compartilhado, `git revert ID_DO_COMMIT` costuma ser uma opção mais segura para registrar uma reversão sem reescrever o histórico.

Comandos destrutivos, como `git reset --hard`, `git clean` e force push, não devem ser executados sem análise prévia.

## 9. Integração com o GitHub

O repositório informado é:

`https://github.com/BrunoCSMFrazao/Milonga.git`

Foram orientados os seguintes comandos para conectar e publicar o projeto:

```powershell
git remote add origin https://github.com/BrunoCSMFrazao/Milonga.git
git branch -M main
git push -u origin main
```

A execução bem-sucedida desses comandos ainda precisa ser confirmada.

Se o Git informar que `origin` já existe, verificar a configuração antes de tentar adicionar o remoto novamente:

```powershell
git remote -v
```

Para conferir o estado local e remoto:

```powershell
git status
git branch -vv
git fetch origin
git log --oneline --decorate --all -10
```

Antes de executar operações de sincronização, verificar se existem commits diferentes no computador e no GitHub.

Não armazenar senhas, tokens de acesso ou outras credenciais no código, na documentação ou nos commits.

## 10. Auditoria técnica necessária

Antes de implementar novas funcionalidades, deve ser realizada uma auditoria da versão atual.

A auditoria deve identificar:

1. A estrutura real dos arquivos e diretórios.
2. As versões do Phaser, Vite e demais dependências.
3. Os pontos de entrada e as cenas do jogo.
4. Os módulos e sistemas existentes.
5. Os recursos gráficos, sonoros e outros arquivos de mídia.
6. As funcionalidades implementadas e testadas.
7. Os erros observados no terminal e no navegador.
8. O estado do Git e a sincronização com o GitHub.
9. Os problemas visuais e comportamentais comprovados.
10. As hipóteses que ainda precisam de teste.
11. As prioridades de correção.
12. Os riscos de cada alteração planejada.

A auditoria deve ser concluída antes de qualquer reescrita significativa.

## 11. Lista de melhorias e pendências

A lista abaixo reúne as tarefas identificadas durante o desenvolvimento. Cada item deve ser marcado como concluído somente após sua realização e validação.

- [ ] Confirmar a versão funcional atual do jogo.
- [ ] Confirmar a conexão do repositório local com o GitHub.
- [ ] Verificar se o primeiro commit foi publicado no remoto.
- [ ] Inspecionar a estrutura real de arquivos e pastas.
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
- [ ] Verificar se todas as funcionalidades existentes foram preservadas.
- [ ] Atualizar a documentação após as alterações.

## 12. Critérios de qualidade

Uma alteração será considerada concluída quando:

- O jogo iniciar corretamente.
- A funcionalidade solicitada funcionar como esperado.
- Os sistemas relacionados continuarem funcionando.
- A direção visual permanecer consistente.
- Não forem introduzidos novos erros conhecidos.
- A alteração estiver registrada em um commit descritivo.
- A documentação corresponder ao estado real do projeto.

Quando um teste não puder ser realizado, essa limitação deverá ser registrada. Não se deve afirmar que uma funcionalidade foi validada sem evidências.

## 13. Próximas etapas recomendadas

A continuidade do projeto deve começar pela confirmação da versão funcional atual.

A sequência recomendada é:

1. Verificar o estado do Git.
2. Confirmar a conexão e a sincronização com o GitHub.
3. Inspecionar os arquivos reais do projeto.
4. Identificar os sistemas responsáveis pela casa, pelos personagens e pelo ciclo ambiental.
5. Reproduzir os problemas relatados.
6. Escolher a menor alteração capaz de corrigir cada problema.
7. Testar cada mudança antes de iniciar outra.
8. Registrar versões funcionais no Git.
9. Atualizar esta documentação.

A prioridade é preservar o que funciona e evoluir o Milonga gradualmente, com alterações controladas e verificáveis.

## 14. Histórico deste documento

| Data | Alteração |
|---|---|
| 16/10/2026 | Consolidação do histórico conhecido, dos requisitos visuais e comportamentais, das orientações de manutenção e do estado conhecido do Git e do GitHub. |

O histórico deverá ser atualizado a cada etapa relevante do desenvolvimento. Os registros devem distinguir funcionalidades planejadas, implementadas e efetivamente testadas.

---

**Fim da documentação.**