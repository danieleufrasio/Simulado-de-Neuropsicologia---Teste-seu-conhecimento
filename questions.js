// Cada questão tem um campo "topic" para saber a qual tópico pertence
// Você pode ampliar esse array com base no seu texto grande.
const questions = [
  {
    topic: "Introdução ao desenvolvimento humano",
    title: "Desenvolvimento humano",
    text: "O desenvolvimento humano é melhor descrito como:",
    options: [
      "Um processo estático, definido apenas pelos genes",
      "Um processo dinâmico, contínuo e multifatorial ao longo da vida",
      "Um fenômeno restrito à infância",
      "Um fenômeno apenas emocional, sem relação com fatores biológicos"
    ],
    correctIndex: 1,
    correction: "O desenvolvimento humano é dinâmico, contínuo e envolve fatores biológicos, psicológicos e ambientais ao longo de todo o ciclo vital."
  },
  {
    topic: "Neurodesenvolvimento: bases biológicas",
    title: "Neurodesenvolvimento",
    text: "O neurodesenvolvimento refere-se principalmente a:",
    options: [
      "Processo de envelhecimento cerebral após os 60 anos",
      "Formação, organização e maturação do sistema nervoso da fase embrionária à vida adulta",
      "Apenas às mudanças emocionais na adolescência",
      "Somente à formação da personalidade"
    ],
    correctIndex: 1,
    correction: "Neurodesenvolvimento é o processo pelo qual o sistema nervoso se forma, organiza e amadurece desde o período embrionário até a vida adulta."
  },
  {
    topic: "Plasticidade neural e janelas de oportunidade",
    title: "Plasticidade neural",
    text: "A plasticidade neural se refere à capacidade de:",
    options: [
      "Manter o cérebro rígido e imutável",
      "Modificar estrutura e função em resposta a experiências e lesões",
      "Impedir a formação de novas sinapses",
      "Eliminar qualquer influência ambiental no cérebro"
    ],
    correctIndex: 1,
    correction: "Plasticidade neural é a capacidade do sistema nervoso de se reorganizar estrutural e funcionalmente em resposta a experiências, aprendizagem e lesões."
  },
  {
    topic: "Plasticidade neural e janelas de oportunidade",
    title: "Janelas de oportunidade",
    text: "Períodos críticos/sensíveis de desenvolvimento indicam que:",
    options: [
      "Toda habilidade só pode ser aprendida em um único dia da vida",
      "A experiência não influencia o desenvolvimento de habilidades",
      "Existem fases com maior sensibilidade a certos tipos de estímulo",
      "A plasticidade neural é idêntica em todas as idades"
    ],
    correctIndex: 2,
    correction: "Janelas de oportunidade são fases em que o cérebro está especialmente sensível a determinados estímulos, facilitando o desenvolvimento de habilidades."
  },
  {
    topic: "Introdução ao desenvolvimento humano",
    title: "Desenvolvimento humano",
    text: "O desenvolvimento humano é melhor descrito como:",
    options: [
      "Um processo estático, definido apenas pelos genes",
      "Um processo dinâmico, contínuo e multifatorial ao longo da vida",
      "Um fenômeno restrito à infância",
      "Um fenômeno apenas emocional, sem relação com fatores biológicos"
    ],
    correctIndex: 1,
    correction: "O desenvolvimento humano é dinâmico e contínuo, resultando da interação entre fatores biológicos, psicológicos e ambientais ao longo de toda a vida."
  },
  {
    topic: "Introdução ao desenvolvimento humano",
    title: "Dimensões do desenvolvimento",
    text: "Quais dimensões principais costumam ser consideradas na análise do desenvolvimento humano?",
    options: [
      "Apenas a dimensão física",
      "Apenas a dimensão cognitiva",
      "Dimensões física, cognitiva, emocional e social",
      "Somente a dimensão social"
    ],
    correctIndex: 2,
    correction: "O desenvolvimento humano envolve mudanças físicas, cognitivas, emocionais e sociais interligadas."
  },
  {
    topic: "Introdução ao desenvolvimento humano",
    title: "Interação entre fatores",
    text: "A relação entre fatores biológicos e ambientais no desenvolvimento humano pode ser descrita como:",
    options: [
      "Totalmente independente, sem influência entre si",
      "Inteiramente determinada pelo ambiente, sem influência genética",
      "Inteiramente determinada pela genética, sem influência do ambiente",
      "Uma interação complexa entre predisposições biológicas e experiências ambientais"
    ],
    correctIndex: 3,
    correction: "O desenvolvimento humano resulta da interação complexa entre predisposições biológicas e experiências ambientais ao longo do tempo."
  },
  {
    topic: "Neurodesenvolvimento: bases biológicas",
    title: "Definição de neurodesenvolvimento",
    text: "O neurodesenvolvimento refere-se principalmente a:",
    options: [
      "Processo de envelhecimento cerebral após os 60 anos",
      "Formação, organização e maturação do sistema nervoso da fase embrionária à vida adulta",
      "Apenas às mudanças emocionais na adolescência",
      "Somente à formação da personalidade"
    ],
    correctIndex: 1,
    correction: "Neurodesenvolvimento é o processo pelo qual o sistema nervoso se forma, organiza e amadurece desde a fase embrionária até a vida adulta."
  },
  {
    topic: "Neurodesenvolvimento: bases biológicas",
    title: "Sinaptogênese e poda",
    text: "O que ocorre durante o processo de sinaptogênese seguido de poda sináptica?",
    options: [
      "As sinapses se formam e nunca mais se alteram",
      "Formam-se muitas conexões, e depois as menos utilizadas são eliminadas",
      "Todas as sinapses são destruídas para dar lugar a novas",
      "Apenas neurônios motores formam sinapses"
    ],
    correctIndex: 1,
    correction: "Na sinaptogênese há formação exuberante de sinapses, seguida por poda sináptica, em que conexões pouco usadas são eliminadas e as relevantes se fortalecem."
  },
  {
    topic: "Neurodesenvolvimento: bases biológicas",
    title: "Mielinização",
    text: "A mielinização dos axônios contribui para:",
    options: [
      "Reduzir a velocidade de condução nervosa",
      "Aumentar a velocidade e a eficiência na transmissão dos impulsos nervosos",
      "Impedir a comunicação entre diferentes áreas cerebrais",
      "Substituir permanentemente os neurônios danificados"
    ],
    correctIndex: 1,
    correction: "A mielina aumenta a velocidade e a eficiência da condução dos impulsos nervosos ao longo dos axônios."
  },
  {
    topic: "Neurodesenvolvimento: bases biológicas",
    title: "Influência ambiental no cérebro",
    text: "Ambientes enriquecidos na infância tendem a:",
    options: [
      "Reduzir a densidade sináptica e a plasticidade",
      "Não ter impacto relevante sobre o cérebro em desenvolvimento",
      "Favorecer aumento da densidade sináptica e maior plasticidade",
      "Bloquear o processo de mielinização"
    ],
    correctIndex: 2,
    correction: "Ambientes enriquecidos, com estímulos variados e interações sociais positivas, favorecem aumento da densidade sináptica e a neuroplasticidade."
  },

  // 3 – Plasticidade neural e janelas de oportunidade
  {
    topic: "Plasticidade neural e janelas de oportunidade",
    title: "Plasticidade neural",
    text: "A plasticidade neural se refere à capacidade de:",
    options: [
      "Manter o cérebro rígido e imutável",
      "Modificar estrutura e função em resposta a experiências e lesões",
      "Impedir a formação de novas sinapses",
      "Eliminar qualquer influência ambiental no cérebro"
    ],
    correctIndex: 1,
    correction: "Plasticidade neural é a capacidade do sistema nervoso de reorganizar sua estrutura e funcionamento em resposta a experiências, aprendizagem e lesões."
  },
  {
    topic: "Plasticidade neural e janelas de oportunidade",
    title: "Períodos críticos e sensíveis",
    text: "Períodos críticos ou sensíveis de desenvolvimento indicam que:",
    options: [
      "Toda habilidade só pode ser aprendida em um único dia da vida",
      "A experiência não influencia o desenvolvimento de habilidades",
      "Existem fases com maior sensibilidade a certos tipos de estímulo",
      "A plasticidade neural é idêntica em todas as idades"
    ],
    correctIndex: 2,
    correction: "Períodos críticos ou sensíveis são fases em que o cérebro está particularmente receptivo a determinados estímulos, facilitando o desenvolvimento de certas habilidades."
  },
  {
    topic: "Plasticidade neural e janelas de oportunidade",
    title: "Plasticidade ao longo da vida",
    text: "Sobre a plasticidade neural ao longo do ciclo vital, é correto afirmar que:",
    options: [
      "Ela existe apenas nos primeiros anos de vida",
      "Ela desaparece completamente na fase adulta",
      "Ela é mais intensa na infância, mas permanece, em menor grau, na vida adulta e na velhice",
      "Ela só ocorre após lesões cerebrais graves"
    ],
    correctIndex: 2,
    correction: "A plasticidade é mais intensa na infância, mas continua presente na vida adulta e na velhice, podendo ser estimulada por experiências e aprendizagem."
  },
  {
    topic: "Plasticidade neural e janelas de oportunidade",
    title: "Ambiente e plasticidade",
    text: "Qual alternativa descreve melhor o impacto de ambientes adversos (como negligência e estresse tóxico) na plasticidade neural?",
    options: [
      "Esses ambientes sempre fortalecem a plasticidade e melhoram o desempenho cognitivo",
      "Não há relação entre ambiente adverso e funcionamento cerebral",
      "Ambientes adversos podem limitar a plasticidade e prejudicar funções cognitivas e emocionais",
      "Ambientes adversos apenas afetam a motricidade, sem impacto nas emoções"
    ],
    correctIndex: 2,
    correction: "Ambientes adversos, como negligência e estresse crônico, podem restringir a plasticidade e comprometer o desenvolvimento cognitivo e emocional."
  }
];
