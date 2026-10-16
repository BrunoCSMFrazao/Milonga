
import Phaser from 'phaser';
import './style.css';

class Milonga extends Phaser.Scene {
  constructor() {
    super('Milonga');
    this.relogio = 0;
    this.dia = true;
    this.pessoas = [];
    this.criancas = [];
    this.folhas = [];
    this.particulasFumaca = [];
    this.rotinaNoturna = false;
  }

  create() {
    this.cameras.main.setBackgroundColor('#83c8e8');

    this.desenharCeu();
    this.desenharCampos();
    this.desenharCaminho();
    this.desenharAcude();
    this.desenharVegetacao();
    this.criarAraucarias();
    this.desenharCerca();
    this.desenharCasa();
    this.criarAnimais();
    this.criarPessoas();
    this.criarCriancas();
    this.criarCavaleiro();
    this.criarVento();
    this.criarNoite();
    this.criarInterface();
  }

  desenharCeu() {
    const g = this.add.graphics();

    // Céu diurno mais vivo, sem gradientes artificiais.
    g.fillStyle(0x78c5e8, 1);
    g.fillRect(0, 0, 960, 280);

    g.fillStyle(0xa7d9e8, 1);
    g.fillRect(0, 210, 960, 75);

    this.sol = this.add.circle(110, 78, 17, 0xffdf76);
    this.sol.setStrokeStyle(3, 0xf2b94b);
    this.sol.setDepth(4);

    this.lua = this.add.circle(110, 78, 13, 0xf7edc8);
    this.lua.setDepth(903);
    this.lua.setVisible(false);

    this.estrelas = [];

    for (let i = 0; i < 60; i++) {
      const estrela = this.add.rectangle(
        Math.floor(Math.random() * 960),
        Math.floor(Math.random() * 270),
        2, 2, 0xfff5d5
      );
      estrela.setAlpha(0);
      estrela.setDepth(902);
      this.estrelas.push(estrela);
    }

    this.nuvens = [];

    for (const [x, y, escala] of [
      [90, 70, 1],
      [390, 112, 0.8],
      [730, 72, 1]
    ]) {
      const nuvem = this.add.graphics();
      nuvem.fillStyle(0xf4f3e8, 1);
      nuvem.fillRect(x, y, 42 * escala, 9 * escala);
      nuvem.fillRect(x + 8 * escala, y - 6 * escala, 24 * escala, 9 * escala);
      nuvem.fillRect(x + 25 * escala, y - 3 * escala, 24 * escala, 7 * escala);
      nuvem.setDepth(3);
      this.nuvens.push(nuvem);
    }
  }

  desenharCampos() {
    const g = this.add.graphics();

    // Coxilhas distantes.
    g.fillStyle(0x7ca65a, 1);
    g.fillEllipse(120, 320, 500, 160);
    g.fillEllipse(435, 316, 560, 170);
    g.fillEllipse(840, 327, 520, 175);

    // Coxilhas intermediárias.
    g.fillStyle(0x67974b, 1);
    g.fillEllipse(60, 365, 400, 125);
    g.fillEllipse(420, 363, 530, 135);
    g.fillEllipse(875, 370, 430, 140);

    // Campo próximo.
    g.fillStyle(0x8dbb55, 1);
    g.fillRect(0, 400, 960, 200);
    g.fillEllipse(250, 415, 560, 130);
    g.fillEllipse(730, 426, 600, 145);

    g.fillStyle(0xa1c764, 1);
    g.fillRect(0, 470, 960, 130);

    g.setDepth(5);
  }

  desenharCaminho() {
    const g = this.add.graphics();

    g.fillStyle(0xa58a5d, 1);
    g.fillPoints([
      { x: 468, y: 325 },
      { x: 552, y: 325 },
      { x: 735, y: 600 },
      { x: 290, y: 600 }
    ], true);

    g.fillStyle(0xc1a778, 1);
    g.fillPoints([
      { x: 491, y: 335 },
      { x: 512, y: 335 },
      { x: 601, y: 495 },
      { x: 570, y: 495 }
    ], true);

    for (let i = 0; i < 22; i++) {
      g.fillStyle(0x88724f, 1);
      g.fillRect(
        330 + Math.random() * 280,
        350 + Math.random() * 240,
        4, 2
      );
    }

    g.setDepth(8);
  }

  desenharAcude() {
    const g = this.add.graphics();

    g.fillStyle(0x777e4b, 1);
    g.fillEllipse(810, 447, 188, 72);

    g.fillStyle(0x438d98, 1);
    g.fillEllipse(810, 443, 166, 57);

    g.fillStyle(0x82c4c0, 1);
    g.fillRect(775, 432, 23, 2);
    g.fillRect(817, 444, 26, 2);
    g.fillRect(791, 451, 15, 2);

    g.setDepth(12);
  }

  desenharVegetacao() {
    const g = this.add.graphics();

    for (let i = 0; i < 210; i++) {
      const x = Math.floor(Math.random() * 960);
      const y = Math.floor(355 + Math.random() * 245);
      const cor = [0x477b39, 0x639346, 0x80a84e, 0x9bb85a][i % 4];

      g.fillStyle(cor, 1);
      g.fillRect(x, y, 2, 5);

      if (i % 5 === 0) {
        g.fillStyle(0xe5d078, 1);
        g.fillRect(x + 2, y - 3, 2, 2);
      }
    }

    g.setDepth(42);
  }

  criarAraucarias() {
    this.criarAraucaria(40, 330, 0.8);
    this.criarAraucaria(465, 306, 0.62);
    this.criarAraucaria(865, 326, 0.86);
    this.criarAraucaria(945, 345, 0.68);
  }

  criarAraucaria(x, y, escala) {
    const grupo = this.add.container(x, y);
    const g = this.add.graphics();

    g.fillStyle(0x5b412a, 1);
    g.fillRect(-3, -4, 6, 42);

    g.fillStyle(0x173e2c, 1);
    g.fillPoints([
      { x: 0, y: -83 },
      { x: -7, y: -62 },
      { x: -23, y: -53 },
      { x: -10, y: -49 },
      { x: -30, y: -39 },
      { x: -12, y: -37 },
      { x: -34, y: -25 },
      { x: -13, y: -26 },
      { x: -24, y: -12 },
      { x: 0, y: -19 },
      { x: 24, y: -12 },
      { x: 13, y: -26 },
      { x: 34, y: -25 },
      { x: 12, y: -37 },
      { x: 30, y: -39 },
      { x: 10, y: -49 },
      { x: 23, y: -53 },
      { x: 7, y: -62 }
    ], true);

    g.fillStyle(0x347044, 1);
    g.fillPoints([
      { x: 0, y: -76 },
      { x: -5, y: -61 },
      { x: -17, y: -52 },
      { x: -7, y: -48 },
      { x: -24, y: -39 },
      { x: -8, y: -37 },
      { x: -27, y: -26 },
      { x: -7, y: -26 },
      { x: 0, y: -20 }
    ], true);

    g.fillPoints([
      { x: 0, y: -20 },
      { x: 7, y: -26 },
      { x: 27, y: -26 },
      { x: 8, y: -37 },
      { x: 24, y: -39 },
      { x: 7, y: -48 },
      { x: 17, y: -52 },
      { x: 5, y: -61 }
    ], true);

    grupo.add(g);
    grupo.setScale(escala);
    grupo.setDepth(y);

    this.tweens.add({
      targets: grupo,
      angle: { from: -1, to: 1 },
      duration: 2500,
      yoyo: true,
      repeat: -1
    });
  }

  desenharCerca() {
    const g = this.add.graphics();

    g.lineStyle(5, 0x704b2e, 1);
    g.lineBetween(10, 426, 245, 426);
    g.lineBetween(10, 445, 245, 445);

    for (let x = 15; x < 250; x += 28) {
      g.fillStyle(0x593a26, 1);
      g.fillRect(x, 414, 6, 39);
      g.fillStyle(0x9b7448, 1);
      g.fillRect(x + 1, 416, 2, 33);
    }

    g.setDepth(38);
  }

  desenharCasa() {
    // Todas as partes da construção são opacas.
    const g = this.add.graphics();

    // Sombra no chão.
    g.fillStyle(0x3d502e, 1);
    g.fillEllipse(281, 364, 260, 35);

    // Fundação de pedra.
    g.fillStyle(0x65523d, 1);
    g.fillRect(159, 346, 247, 17);

    g.fillStyle(0x8b785b, 1);
    for (let x = 165; x < 403; x += 19) {
      g.fillRect(x, 349, 12, 4);
      g.fillRect(x + 5, 357, 10, 3);
    }

    // Paredes completamente preenchidas.
    g.fillStyle(0x895a3b, 1);
    g.fillRect(169, 250, 226, 101);

    // Tábuas horizontais.
    g.fillStyle(0x71472f, 1);
    for (let y = 258; y < 347; y += 12) {
      g.fillRect(171, y, 222, 2);
    }

    // Estrutura dos cantos.
    g.fillStyle(0x513421, 1);
    g.fillRect(168, 248, 9, 104);
    g.fillRect(387, 248, 9, 104);
    g.fillRect(168, 346, 228, 7);

    // Telhado escuro completo.
    g.fillStyle(0x472d21, 1);
    g.fillPoints([
      { x: 142, y: 259 },
      { x: 281, y: 169 },
      { x: 420, y: 259 },
      { x: 411, y: 272 },
      { x: 281, y: 192 },
      { x: 151, y: 272 }
    ], true);

    // Superfície do telhado.
    g.fillStyle(0x79452e, 1);
    g.fillPoints([
      { x: 153, y: 257 },
      { x: 281, y: 179 },
      { x: 409, y: 257 },
      { x: 399, y: 262 },
      { x: 281, y: 194 },
      { x: 163, y: 262 }
    ], true);

    // Fileiras de telhas.
    g.fillStyle(0x9a5b3a, 1);
    for (let i = 0; i < 7; i++) {
      const x = 188 + i * 25;
      const y = 222 - Math.abs(3 - i) * 7;
      g.fillRect(x, y, 13, 3);
    }

    g.fillStyle(0x593522, 1);
    g.fillRect(275, 178, 12, 7);

    // Chaminé atrás do telhado.
    g.fillStyle(0x75432d, 1);
    g.fillRect(329, 186, 18, 45);
    g.fillStyle(0x4a3024, 1);
    g.fillRect(325, 183, 26, 6);
    g.fillStyle(0x9a6240, 1);
    g.fillRect(333, 195, 4, 27);

    // Molduras das janelas.
    for (const x of [194, 330]) {
      g.fillStyle(0x4a2f20, 1);
      g.fillRect(x - 5, 272, 38, 37);

      g.fillStyle(0x93613c, 1);
      g.fillRect(x - 1, 276, 30, 29);

      // Vidro diurno opaco.
      g.fillStyle(0x8bc5d2, 1);
      g.fillRect(x + 2, 279, 24, 23);

      g.fillStyle(0x4a2f20, 1);
      g.fillRect(x + 12, 279, 4, 23);
      g.fillRect(x + 2, 289, 24, 3);

      g.fillStyle(0x68422b, 1);
      g.fillRect(x - 7, 268, 42, 5);
      g.fillRect(x - 7, 307, 42, 5);
    }

    // Porta fechada, com moldura e tábuas.
    g.fillStyle(0x472d20, 1);
    g.fillRect(255, 296, 47, 57);

    g.fillStyle(0x805033, 1);
    g.fillRect(260, 301, 37, 52);

    g.fillStyle(0x5b3824, 1);
    g.fillRect(268, 304, 3, 45);
    g.fillRect(278, 304, 3, 45);
    g.fillRect(288, 304, 3, 45);

    g.fillStyle(0xe1b75e, 1);
    g.fillRect(289, 327, 4, 4);

    // Escada de madeira.
    g.fillStyle(0x775036, 1);
    g.fillRect(249, 352, 59, 5);
    g.fillRect(254, 358, 49, 4);

    g.setDepth(30);

    // Luz das janelas: desenhada por cima do vidro.
    this.luzJanelas = this.add.graphics();
    this.luzJanelas.setDepth(32);
    this.luzJanelas.setAlpha(0);

    this.luzJanelas.fillStyle(0xffb94f, 1);
    this.luzJanelas.fillRect(197, 280, 24, 22);
    this.luzJanelas.fillRect(333, 280, 24, 22);

    this.luzJanelas.fillStyle(0xffe29a, 1);
    this.luzJanelas.fillRect(201, 283, 14, 15);
    this.luzJanelas.fillRect(337, 283, 14, 15);

    this.luzJanelas.fillStyle(0x8c512b, 1);
    this.luzJanelas.fillRect(207, 286, 3, 8);
    this.luzJanelas.fillRect(343, 286, 3, 8);

    this.criarFumaca();
  }

  criarFumaca() {
    for (let i = 0; i < 8; i++) {
      const p = this.add.rectangle(
        338, 183, 5 + (i % 3) * 2, 4,
        0xd9d8cc
      );
      p.setAlpha(0);
      p.setDepth(36);
      this.particulasFumaca.push(p);
    }
  }

  criarAnimais() {
    this.criarVaca(680, 390, 0.8);
    this.criarVaca(718, 405, 0.7);
    this.criarVaca(855, 390, 0.65);

    this.criarGalinha(375, 430);
    this.criarGalinha(398, 438);
    this.criarGalinha(432, 450);
  }

  criarVaca(x, y, escala) {
    const grupo = this.add.container(x, y);
    const g = this.add.graphics();

    g.fillStyle(0xe9e1c8, 1);
    g.fillRect(-18, -12, 35, 18);
    g.fillRect(11, -17, 11, 17);
    g.fillRect(18, -15, 10, 8);

    g.fillStyle(0x493e34, 1);
    g.fillRect(-12, -10, 8, 7);
    g.fillRect(0, -5, 7, 7);

    g.fillRect(-13, 4, 4, 12);
    g.fillRect(-2, 4, 4, 12);
    g.fillRect(9, 4, 4, 12);
    g.fillRect(17, 2, 4, 14);

    g.fillRect(16, -20, 3, 5);
    g.fillRect(23, -20, 3, 5);

    grupo.add(g);
    grupo.setScale(escala);
    grupo.setDepth(y);
  }

  criarGalinha(x, y) {
    const grupo = this.add.container(x, y);
    const g = this.add.graphics();

    g.fillStyle(0xf0e5cb, 1);
    g.fillRect(-5, -5, 10, 8);
    g.fillRect(3, -9, 5, 6);

    g.fillStyle(0xd84b36, 1);
    g.fillRect(4, -12, 3, 4);

    g.fillStyle(0xe1a74a, 1);
    g.fillRect(8, -7, 4, 2);

    g.fillStyle(0x483025, 1);
    g.fillRect(-3, 2, 2, 4);
    g.fillRect(3, 2, 2, 4);
    g.fillRect(6, -8, 2, 2);

    grupo.add(g);
    grupo.setDepth(y);

    this.tweens.add({
      targets: grupo,
      x: { from: x - 5, to: x + 5 },
      duration: 1800,
      yoyo: true,
      repeat: -1
    });
  }

  // Personagens com braços e pernas em peças separadas.
  criarPessoa(x, y, tipo, corRoupa = 0x8e6346) {
    const grupo = this.add.container(x, y);
    const mulher = tipo === 'mulher';
    const corpo = this.add.graphics();
    const cabeca = this.add.graphics();

    const pernas = this.add.container(0, -5);
    const bracos = this.add.container(0, -24);

    const pernaEsquerda = this.add.rectangle(
      -4, 5, 5, 12, mulher ? 0x51372a : 0x806c50
    );
    const pernaDireita = this.add.rectangle(
      4, 5, 5, 12, mulher ? 0x51372a : 0x806c50
    );

    pernas.add([pernaEsquerda, pernaDireita]);

    if (mulher) {
      corpo.fillStyle(0x7e4b48, 1);
      corpo.fillRect(-6, -28, 12, 12);
      corpo.fillPoints([
        { x: -6, y: -17 },
        { x: 6, y: -17 },
        { x: 12, y: 0 },
        { x: -12, y: 0 }
      ], true);
    } else {
      corpo.fillStyle(corRoupa, 1);
      corpo.fillRect(-7, -29, 14, 15);

      corpo.fillStyle(0x62412a, 1);
      corpo.fillRect(-8, -16, 16, 3);

      corpo.fillStyle(0x806c50, 1);
      corpo.fillRect(-7, -13, 6, 9);
      corpo.fillRect(1, -13, 6, 9);
    }

    cabeca.fillStyle(0xd5a174, 1);
    cabeca.fillRect(-4, -39, 9, 10);

    cabeca.fillStyle(0x493025, 1);
    cabeca.fillRect(-5, -42, 11, 5);
    cabeca.fillRect(-10, -39, 21, 3);

    // Os braços giram a partir do ombro.
    const bracoE = this.add.container(-8, -1);
    const bracoD = this.add.container(8, -1);

    bracoE.add(this.add.rectangle(
      0, 5, 4, 12, mulher ? 0xe2c8a2 : corRoupa
    ));

    bracoD.add(this.add.rectangle(
      0, 5, 4, 12, mulher ? 0xe2c8a2 : corRoupa
    ));

    bracos.add([bracoE, bracoD]);

    grupo.add([pernas, corpo, bracos, cabeca]);
    grupo.setDepth(y);

    grupo.setData('tipo', tipo);
    grupo.setData('indoParaCasa', false);
    grupo.setData('recolhido', false);
    grupo.setData('velocidade', 30 + Math.random() * 8);
    grupo.setData('membros', {
      pernas,
      bracos,
      pernaEsquerda,
      pernaDireita,
      bracoE,
      bracoD
    });

    this.pessoas.push(grupo);

    return grupo;
  }

  animarCaminhada(personagem) {
    if (personagem.getData('caminhadaAtiva')) return;

    const membros = personagem.getData('membros');
    if (!membros) return;

    personagem.setData('caminhadaAtiva', true);

    this.tweens.add({
      targets: membros.pernaEsquerda,
      angle: { from: -28, to: 28 },
      duration: 180,
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: membros.pernaDireita,
      angle: { from: 28, to: -28 },
      duration: 180,
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: membros.bracoE,
      angle: { from: 28, to: -28 },
      duration: 180,
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: membros.bracoD,
      angle: { from: -28, to: 28 },
      duration: 180,
      yoyo: true,
      repeat: -1
    });
  }

  pararCaminhada(personagem) {
    const membros = personagem.getData('membros');
    if (!membros) return;

    this.tweens.killTweensOf(membros.pernaEsquerda);
    this.tweens.killTweensOf(membros.pernaDireita);
    this.tweens.killTweensOf(membros.bracoE);
    this.tweens.killTweensOf(membros.bracoD);

    membros.pernaEsquerda.setAngle(0);
    membros.pernaDireita.setAngle(0);
    membros.bracoE.setAngle(0);
    membros.bracoD.setAngle(0);

    personagem.setData('caminhadaAtiva', false);
  }

  criarPessoas() {
    this.criarPessoa(510, 392, 'homem', 0xe8dcc0);
    this.criarPessoa(555, 408, 'homem', 0xe8dcc0);
    this.criarPessoa(440, 400, 'mulher');
    this.criarPessoa(325, 402, 'mulher');
  }

  criarCriancas() {
    for (const [x, y, cor] of [
      [110, 475, 0x8c6546],
      [145, 470, 0x54714c],
      [178, 478, 0x7a5147]
    ]) {
      const crianca = this.criarPessoa(x, y, 'crianca', cor);
      crianca.setScale(0.72);
      crianca.setData('velocidade', 45 + Math.random() * 15);
      crianca.setData('alvo', null);
      crianca.setData('perseguidora', false);
      this.criancas.push(crianca);
    }

    if (this.criancas.length) {
      this.criancas[0].setData('perseguidora', true);
    }
  }

  criarCavaleiro() {
    this.cavalo = this.add.container(170, 392);
    const cg = this.add.graphics();

    cg.fillStyle(0x67432d, 1);
    cg.fillRect(-22, -12, 38, 17);
    cg.fillRect(9, -19, 10, 13);
    cg.fillRect(15, -24, 14, 10);
    cg.fillRect(23, -17, 8, 4);

    cg.fillStyle(0x38271e, 1);
    cg.fillRect(-25, -12, 5, 13);
    cg.fillRect(15, -26, 11, 4);
    cg.fillRect(-15, 4, 4, 13);
    cg.fillRect(-5, 4, 4, 13);
    cg.fillRect(7, 4, 4, 13);
    cg.fillRect(15, 2, 4, 15);

    this.cavalo.add(cg);
    this.cavalo.setDepth(392);
    this.cavalo.setData('amarrado', false);

    this.cavaleiro = this.criarPessoa(
      170, 392, 'homem', 0xe8dcc0
    );

    this.cavaleiro.setDepth(393);
    this.cavaleiro.setScale(0.9);
    this.cavaleiro.setData('montado', true);
    this.cavaleiro.setData('recolhido', false);
  }

  criarVento() {
    for (let i = 0; i < 14; i++) {
      const folha = this.add.rectangle(
        Math.random() * 960,
        370 + Math.random() * 200,
        4, 2, 0xd2bb72
      );

      folha.setDepth(500);
      this.folhas.push(folha);
    }
  }

  criarNoite() {
    this.filtroNoite = this.add.rectangle(
      480, 300, 960, 600, 0x111a34
    );
    this.filtroNoite.setAlpha(0);
    this.filtroNoite.setDepth(900);
  }

  criarInterface() {
    this.interface = this.add.container(0, 0);
    const g = this.add.graphics();

    g.fillStyle(0x38271c, 1);
    g.fillRect(294, 13, 360, 105);
    g.fillStyle(0x9a7146, 1);
    g.fillRect(300, 19, 348, 93);

    g.lineStyle(3, 0x432b1d, 1);
    g.strokeRect(300, 19, 348, 93);

    const titulo = this.add.text(474, 31, 'MILONGA', {
      fontFamily: 'monospace',
      fontSize: '36px',
      fontStyle: 'bold',
      color: '#f6dfa3',
      stroke: '#402819',
      strokeThickness: 5,
      align: 'center',
      resolution: 1
    }).setOrigin(0.5, 0);

    const subtitulo = this.add.text(
      474, 78, 'A VIDA NOS CAMPOS DO SUL', {
        fontFamily: 'monospace',
        fontSize: '10px',
        fontStyle: 'bold',
        color: '#fff0c9',
        align: 'center',
        resolution: 1
      }
    ).setOrigin(0.5, 0);

    g.fillStyle(0x38271c, 1);
    g.fillRect(367, 421, 226, 45);
    g.fillStyle(0x315c3a, 1);
    g.fillRect(362, 416, 226, 45);
    g.lineStyle(3, 0xd3b56e, 1);
    g.strokeRect(362, 416, 226, 45);

    const botao = this.add.text(475, 429, 'INICIAR JORNADA', {
      fontFamily: 'monospace',
      fontSize: '13px',
      fontStyle: 'bold',
      color: '#fff0c9',
      align: 'center',
      resolution: 1
    }).setOrigin(0.5, 0);

    botao.setInteractive({ useHandCursor: true });
    botao.on('pointerover', () => botao.setColor('#ffffff'));
    botao.on('pointerout', () => botao.setColor('#fff0c9'));
    botao.on('pointerdown', () => botao.setText('EM BREVE'));

    const frase = this.add.text(
      480, 501,
      'LUTA-SE POR LIBERDADE, DERRAMA-SE SANGUE',
      {
        fontFamily: 'monospace',
        fontSize: '9px',
        color: '#fff0d1',
        align: 'center',
        resolution: 1
      }
    ).setOrigin(0.5);

    const frase2 = this.add.text(
      480, 517,
      'E HA PERDAS QUE JAMAIS SERAO REPARADAS.',
      {
        fontFamily: 'monospace',
        fontSize: '9px',
        color: '#fff0d1',
        align: 'center',
        resolution: 1
      }
    ).setOrigin(0.5);

    const copyright = this.add.text(
      480, 578,
      '© 2026 BRASIL GAMES',
      {
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#fff0d1',
        stroke: '#34271d',
        strokeThickness: 3,
        align: 'center',
        resolution: 1
      }
    ).setOrigin(0.5);

    this.interface.add([
      g, titulo, subtitulo, botao, frase, frase2, copyright
    ]);
    this.interface.setDepth(1000);
  }

  moverAte(objeto, x, y, velocidade, delta) {
    const dx = x - objeto.x;
    const dy = y - objeto.y;
    const distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia < 3) {
      objeto.setPosition(x, y);
      this.pararCaminhada(objeto);
      return true;
    }

    this.animarCaminhada(objeto);

    const passo = velocidade * delta / 1000;
    const fator = Math.min(passo, distancia) / distancia;

    objeto.x += dx * fator;
    objeto.y += dy * fator;
    objeto.setDepth(objeto.y + 10);

    return false;
  }

  iniciarNoite() {
    this.rotinaNoturna = true;

    this.pessoas.forEach(pessoa => {
      pessoa.setData('indoParaCasa', true);
    });

    this.criancas.forEach(crianca => {
      crianca.setData('indoParaCasa', true);
      crianca.setData('alvo', null);
    });

    this.cavaleiro.setData('montado', false);
    this.cavaleiro.setData('indoParaCasa', true);
    this.cavalo.setData('indoParaCasa', true);
  }

  iniciarDia() {
    this.rotinaNoturna = false;

    this.pessoas.forEach(pessoa => {
      pessoa.setVisible(true);
      pessoa.setData('recolhido', false);
      pessoa.setData('indoParaCasa', false);
      pessoa.setPosition(
        270 + Math.random() * 100,
        365 + Math.random() * 45
      );
    });

    this.criancas.forEach(crianca => {
      crianca.setVisible(true);
      crianca.setData('recolhido', false);
      crianca.setData('indoParaCasa', false);
      crianca.setPosition(
        100 + Math.random() * 90,
        465 + Math.random() * 25
      );
      crianca.setData('alvo', null);
    });

    this.cavaleiro.setVisible(true);
    this.cavaleiro.setData('recolhido', false);
    this.cavaleiro.setData('montado', true);
    this.cavaleiro.setData('indoParaCasa', false);
    this.cavaleiro.setPosition(this.cavalo.x, this.cavalo.y);

    this.cavalo.setVisible(true);
    this.cavalo.setData('amarrado', false);
    this.cavalo.setData('indoParaCasa', false);
    this.cavalo.setPosition(170, 392);
  }

  atualizarRotinas(delta) {
    if (!this.dia && this.rotinaNoturna) {
      this.pessoas.forEach(pessoa => {
        if (!pessoa.active || !pessoa.visible) return;
        if (!pessoa.getData('indoParaCasa')) return;

        if (this.moverAte(pessoa, 280, 350, 35, delta)) {
          pessoa.setVisible(false);
          pessoa.setData('recolhido', true);
          pessoa.setData('indoParaCasa', false);
        }
      });

      this.criancas.forEach(crianca => {
        if (!crianca.active || !crianca.visible) return;
        if (!crianca.getData('indoParaCasa')) return;

        if (this.moverAte(crianca, 280, 350, 50, delta)) {
          crianca.setVisible(false);
          crianca.setData('recolhido', true);
          crianca.setData('indoParaCasa', false);
        }
      });

      // O cavalo chega à casa e fica amarrado.
      if (this.cavalo.getData('indoParaCasa')) {
        if (this.moverAte(this.cavalo, 347, 366, 28, delta)) {
          this.cavalo.setData('indoParaCasa', false);
          this.cavalo.setData('amarrado', true);
        }
        this.cavaleiro.setPosition(this.cavalo.x + 18, this.cavalo.y);
      }

      if (
        this.cavalo.getData('amarrado') &&
        this.cavaleiro.visible &&
        this.cavaleiro.getData('indoParaCasa')
      ) {
        if (this.moverAte(this.cavaleiro, 280, 350, 34, delta)) {
          this.cavaleiro.setVisible(false);
          this.cavaleiro.setData('recolhido', true);
          this.cavaleiro.setData('indoParaCasa', false);
        }
      }
    }

    if (this.dia) this.atualizarPegaPega(delta);

    this.nuvens.forEach(nuvem => {
      nuvem.x += delta * 0.002;
      if (nuvem.x > 100) nuvem.x = -10;
    });

    this.folhas.forEach(folha => {
      folha.x += delta * 0.02;
      folha.y += Math.sin(this.relogio / 300 + folha.x) * 0.05;
      if (folha.x > 970) folha.x = -5;
    });

    this.atualizarFumaca(delta);
  }

  atualizarPegaPega(delta) {
    if (this.criancas.length < 2) return;

    let perseguidora = this.criancas.find(
      c => c.getData('perseguidora')
    );

    if (!perseguidora) {
      perseguidora = this.criancas[0];
      perseguidora.setData('perseguidora', true);
    }

    for (const crianca of this.criancas) {
      if (!crianca.visible || crianca.getData('indoParaCasa')) continue;

      if (crianca === perseguidora) {
        let alvo = crianca.getData('alvo');

        if (!alvo || !alvo.visible) {
          alvo = this.criancas.find(
            c => c !== crianca && c.visible &&
              !c.getData('indoParaCasa')
          );
          crianca.setData('alvo', alvo);
        }

        if (alvo) {
          this.moverAte(
            crianca,
            alvo.x,
            alvo.y,
            crianca.getData('velocidade'),
            delta
          );

          if (Phaser.Math.Distance.Between(
            crianca.x, crianca.y, alvo.x, alvo.y
          ) < 14) {
            crianca.setData('perseguidora', false);
            crianca.setData('alvo', null);
            alvo.setData('perseguidora', true);
            alvo.setData('alvo', null);
            perseguidora = alvo;
          }
        }
      } else {
        this.animarCaminhada(crianca);

        let direcao = crianca.getData('direcao');
        if (!direcao) {
          direcao = Math.random() < 0.5 ? -1 : 1;
          crianca.setData('direcao', direcao);
        }

        crianca.x += direcao *
          crianca.getData('velocidade') * delta / 1000;

        crianca.y += Math.sin(this.relogio / 180 + crianca.x) *
          delta * 0.003;

        if (crianca.x < 30) {
          crianca.x = 30;
          crianca.setData('direcao', 1);
        }

        if (crianca.x > 930) {
          crianca.x = 930;
          crianca.setData('direcao', -1);
        }

        crianca.setDepth(crianca.y + 10);
      }
    }
  }

  atualizarFumaca(delta) {
    const noite = !this.dia;
    this.luzJanelas.setAlpha(noite ? 1 : 0);

    this.particulasFumaca.forEach((p, i) => {
      p.setAlpha(noite ? 0.58 : 0.04);
      p.x = 338 + Math.sin(this.relogio / 300 + i) * 5;
      p.y -= delta * 0.012;

      if (p.y < 145) {
        p.y = 183;
        p.x = 338;
      }
    });
  }

  atualizarCiclo(delta) {
    this.relogio += delta;

    const fase = this.relogio % 30000;
    const diaAgora = fase < 15000;

    if (diaAgora !== this.dia) {
      this.dia = diaAgora;
      if (this.dia) this.iniciarDia();
      else this.iniciarNoite();
    }

    const progresso = (fase % 15000) / 15000;
    const x = 45 + progresso * 870;
    const y = 210 - Math.sin(progresso * Math.PI) * 135;

    this.sol.setPosition(x, y);
    this.sol.setVisible(this.dia);

    this.lua.setPosition(x, y);
    this.lua.setVisible(!this.dia);

    this.filtroNoite.setAlpha(
      this.dia ? 0 : 0.66 + 0.12 * Math.sin(progresso * Math.PI)
    );

    this.estrelas.forEach(estrela => {
      estrela.setAlpha(this.dia ? 0 : 0.9);
    });
  }

  update(time, delta) {
    this.atualizarCiclo(delta);
    this.atualizarRotinas(delta);
  }
}

const config = {
  type: Phaser.CANVAS,
  width: 960,
  height: 600,
  parent: 'app',
  backgroundColor: '#78c5e8',
  pixelArt: true,
  antialias: false,
  roundPixels: true,
  scene: [Milonga],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

new Phaser.Game(config);
