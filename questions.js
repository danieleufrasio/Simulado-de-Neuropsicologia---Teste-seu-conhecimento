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
  },
  // FUNÇÕES EXECUTIVAS E DESENVOLVIMENTO COGNITIVO
  {
    topic: "Funções executivas",
    title: "Definição de funções executivas",
    text: "As funções executivas podem ser melhor descritas como:",
    options: [
      "Habilidades motoras automáticas, como andar e correr",
      "Conjunto de habilidades cognitivas responsáveis por planejar, organizar, regular e monitorar o comportamento",
      "Capacidades exclusivamente emocionais, sem relação com a cognição",
      "Processos restritos à percepção sensorial"
    ],
    correctIndex: 1,
    correction: "Funções executivas são um conjunto de habilidades cognitivas de alto nível que permitem planejar, organizar, regular e monitorar o comportamento de forma intencional e dirigida a metas."
  },
  {
    topic: "Funções executivas",
    title: "Localização cerebral",
    text: "As funções executivas são mediadas, principalmente, por qual região cerebral?",
    options: [
      "Cerebelo",
      "Lobo occipital",
      "Córtex pré-frontal",
      "Tronco encefálico"
    ],
    correctIndex: 2,
    correction: "As funções executivas são mediadas principalmente pelo córtex pré-frontal, cuja maturação se estende até o início da vida adulta."
  },
  {
    topic: "Memória de trabalho",
    title: "Conceito de memória de trabalho",
    text: "A memória de trabalho refere-se à capacidade de:",
    options: [
      "Armazenar informações para toda a vida sem necessidade de uso",
      "Manter e manipular temporariamente informações para realizar tarefas complexas",
      "Esquecer informações irrelevantes de forma automática",
      "Registrar apenas memórias emocionais intensas"
    ],
    correctIndex: 1,
    correction: "A memória de trabalho é a capacidade de manter e manipular informações por um curto período para executar tarefas como resolução de problemas, leitura e seguir instruções."
  },
  {
    topic: "Memória de trabalho",
    title: "Importância da memória de trabalho",
    text: "Qual situação depende fortemente da memória de trabalho?",
    options: [
      "Apenas reconhecer um rosto familiar sem pensar",
      "Executar uma tarefa automática, como amarrar o cadarço",
      "Resolver mentalmente um problema matemático de vários passos",
      "Ter um reflexo rápido ao encostar em algo quente"
    ],
    correctIndex: 2,
    correction: "Resolver mentalmente um problema matemático de vários passos exige manter informações ativas e manipulá-las, o que é típico da memória de trabalho."
  },
  {
    topic: "Controle inibitório",
    title: "Controle inibitório",
    text: "O controle inibitório é importante para:",
    options: [
      "Aumentar impulsos automáticos sem reflexão",
      "Resistir a impulsos e distrações para adotar comportamentos mais adequados",
      "Reduzir a atenção a qualquer estímulo do ambiente",
      "Impedir a expressão de emoções em qualquer contexto"
    ],
    correctIndex: 1,
    correction: "O controle inibitório permite resistir a impulsos automáticos e distrações, favorecendo a escolha de comportamentos mais adequados às normas e objetivos."
  },
  {
    topic: "Controle inibitório",
    title: "Controle inibitório e TDAH",
    text: "Déficits importantes no controle inibitório estão frequentemente associados a:",
    options: [
      "Transtorno do Espectro Autista (TEA)",
      "Transtorno de Déficit de Atenção e Hiperatividade (TDAH)",
      "Transtorno de pânico",
      "Dislexia"
    ],
    correctIndex: 1,
    correction: "Pesquisas indicam que dificuldades no controle inibitório são centrais em muitos casos de TDAH, afetando a capacidade de autocontrole e atenção."
  },
  {
    topic: "Flexibilidade cognitiva",
    title: "Flexibilidade cognitiva",
    text: "Flexibilidade cognitiva é a capacidade de:",
    options: [
      "Repetir sempre a mesma estratégia, mesmo quando não funciona",
      "Manter um único foco de atenção o tempo todo",
      "Alternar estratégias de pensamento e comportamento diante de novas demandas",
      "Evitar qualquer mudança no ambiente"
    ],
    correctIndex: 2,
    correction: "Flexibilidade cognitiva é a capacidade de mudar estratégias, alternar entre tarefas ou pontos de vista para se adaptar a novas situações."
  },
  {
    topic: "Planejamento e tomada de decisão",
    title: "Planejamento e decisão",
    text: "O planejamento e a tomada de decisão envolvem, entre outros aspectos:",
    options: [
      "Apenas reagir de forma impulsiva aos estímulos",
      "Definir metas, antecipar consequências e escolher estratégias para alcançá-las",
      "Memorizar informações sem analisá-las",
      "Ignorar experiências prévias ao escolher uma ação"
    ],
    correctIndex: 1,
    correction: "Planejamento e tomada de decisão incluem definir metas, analisar alternativas, antecipar consequências e escolher estratégias adequadas."
  },
  {
    topic: "Desenvolvimento do córtex pré-frontal",
    title: "Maturação do córtex pré-frontal",
    text: "Sobre a maturação do córtex pré-frontal e as funções executivas, é correto afirmar que:",
    options: [
      "O córtex pré-frontal amadurece completamente na primeira infância",
      "Sua maturação termina por volta dos 7 anos de idade",
      "Ele continua se desenvolvendo até o final da adolescência e início da vida adulta",
      "Ele não influencia o comportamento social"
    ],
    correctIndex: 2,
    correction: "O córtex pré-frontal passa por um longo processo de mielinização e poda sináptica que se estende até o final da adolescência e início da vida adulta, o que explica a evolução gradual das funções executivas."
  },
  {
    topic: "Ambiente e funções executivas",
    title: "Ambiente e desenvolvimento executivo",
    text: "Qual opção descreve melhor a influência do ambiente sobre o desenvolvimento das funções executivas?",
    options: [
      "O ambiente não interfere no desenvolvimento das funções executivas",
      "Apenas fatores genéticos determinam as funções executivas",
      "Interações familiares, práticas pedagógicas e estimulação cognitiva podem fortalecer ou prejudicar as funções executivas",
      "Somente o uso de tecnologia determina o desenvolvimento executivo"
    ],
    correctIndex: 2,
    correction: "Fatores como interações familiares de qualidade, estimulação cognitiva, práticas pedagógicas e condições socioeconômicas influenciam fortemente o desenvolvimento das funções executivas."
  },
  {
    topic: "Estresse e funções executivas",
    title: "Impacto do estresse tóxico",
    text: "O estresse tóxico e prolongado na infância e adolescência tende a:",
    options: [
      "Melhorar automaticamente a autorregulação e o controle inibitório",
      "Não ter qualquer impacto sobre o cérebro em desenvolvimento",
      "Elevar níveis de cortisol e prejudicar estruturas como hipocampo e córtex pré-frontal",
      "Fortalecer a memória de trabalho em todos os casos"
    ],
    correctIndex: 2,
    correction: "A exposição prolongada ao estresse tóxico aumenta o cortisol e pode afetar negativamente estruturas como o hipocampo e o córtex pré-frontal, prejudicando memória de trabalho, autocontrole e outras funções executivas."
  },
  {
    topic: "Atenção e aprendizagem",
    title: "Tipos de atenção",
    text: "A atenção, importante para a aprendizagem, pode ser dividida em modalidades como:",
    options: [
      "Atenção seletiva, sustentada, alternada e dividida",
      "Apenas atenção motora e visual",
      "Atenção curta e atenção longa",
      "Apenas atenção consciente"
    ],
    correctIndex: 0,
    correction: "Atenção seletiva, sustentada, alternada e dividida são modalidades que envolvem diferentes circuitos neurais e são fundamentais para o rendimento escolar."
  },
  {
    topic: "Atenção e aprendizagem",
    title: "Atenção e desempenho escolar",
    text: "Disfunções nos sistemas atencionais podem levar a:",
    options: [
      "Melhora automática do desempenho escolar",
      "Nenhuma alteração na aprendizagem",
      "Comprometimento do rendimento escolar e necessidade de intervenções específicas",
      "Apenas dificuldades motoras, sem relação com a aprendizagem"
    ],
    correctIndex: 2,
    correction: "Alterações na atenção seletiva, sustentada, alternada ou dividida podem comprometer o desempenho escolar e demandar intervenções adaptadas ao perfil do estudante."
  },
  {
    topic: "Memória e aprendizagem",
    title: "Integração da memória",
    text: "A consolidação das informações na aprendizagem depende principalmente da integração entre:",
    options: [
      "Memória de trabalho, memória de curto prazo e memória de longo prazo",
      "Apenas memória sensorial",
      "Somente memória emocional",
      "Somente memória implícita"
    ],
    correctIndex: 0,
    correction: "A aprendizagem exige articulação entre memória de trabalho, de curto prazo e de longo prazo, mediada por estruturas como hipocampo e córtex pré-frontal."
  },
  {
    topic: "Ambiente escolar e plasticidade",
    title: "Ambiente escolar e cérebro",
    text: "Sobre o papel do ambiente escolar no desenvolvimento cognitivo, é correto afirmar que:",
    options: [
      "Ambientes escolares não influenciam a plasticidade cerebral",
      "Ambientes enriquecidos, seguros e estimulantes favorecem novas conexões neurais e funções executivas",
      "Apenas o uso de tecnologia interfere na aprendizagem",
      "O ambiente escolar só influencia habilidades motoras"
    ],
    correctIndex: 1,
    correction: "Ambientes escolares emocionalmente seguros e intelectualmente estimulantes favorecem a plasticidade cerebral, o fortalecimento das funções executivas e a aprendizagem."
  },
  {
    topic: "Bases neuropsicológicas da linguagem",
    title: "Linguagem como função cognitiva",
    text: "Do ponto de vista neuropsicológico, a linguagem pode ser melhor definida como:",
    options: [
      "Apenas a capacidade de pronunciar sons",
      "Somente a habilidade de nomear objetos do ambiente",
      "Um conjunto de processos que permitem organizar pensamentos, expressar sentimentos e construir significados",
      "Uma função exclusivamente motora ligada aos músculos da fala"
    ],
    correctIndex: 2,
    correction: "Neuropsicologicamente, a linguagem envolve organizar pensamentos, expressar sentimentos, compartilhar experiências e construir significados por meio de uma rede complexa de estruturas cerebrais."
  },
  {
    topic: "Bases neuropsicológicas da linguagem",
    title: "Componentes da linguagem",
    text: "Quais componentes são comumente considerados na análise neuropsicológica da linguagem?",
    options: [
      "Apenas fonologia e sintaxe",
      "Somente semântica e pragmática",
      "Fonologia, semântica, sintaxe, morfologia e pragmática",
      "Apenas compreensão e produção oral"
    ],
    correctIndex: 2,
    correction: "A linguagem envolve diferentes níveis: fonologia, semântica, sintaxe, morfologia e pragmática, que são processados por redes neurais integradas."
  },
  {
    topic: "Bases neuropsicológicas da linguagem",
    title: "Áreas de Broca e Wernicke",
    text: "Sobre as áreas de Broca e Wernicke, é correto afirmar que:",
    options: [
      "Ambas estão localizadas no hemisfério direito em todos os indivíduos",
      "A área de Broca está ligada principalmente à compreensão, e a de Wernicke à articulação da fala",
      "A área de Broca relaciona-se à produção e estruturação gramatical; a de Wernicke, à compreensão da linguagem",
      "Nenhuma delas se relaciona diretamente com a linguagem"
    ],
    correctIndex: 2,
    correction: "A área de Broca, no giro frontal inferior, está ligada à produção da fala e à estruturação gramatical; a área de Wernicke, no giro temporal superior, está relacionada à compreensão da linguagem."
  },
  {
    topic: "Bases neuropsicológicas da linguagem",
    title: "Afasia de Broca",
    text: "A afasia de Broca é caracterizada principalmente por:",
    options: [
      "Fala fluente, mas com conteúdo sem sentido e grande dificuldade de compreensão",
      "Fala lenta, entrecortada e agramatical, com compreensão relativamente preservada",
      "Ausência completa de qualquer forma de linguagem, inclusive não verbal",
      "Dificuldade exclusiva na leitura, sem alterações na fala"
    ],
    correctIndex: 1,
    correction: "Na afasia de Broca, a fala é lenta, entrecortada e com prejuízo gramatical, enquanto a compreensão costuma estar relativamente preservada."
  },
  {
    topic: "Bases neuropsicológicas da linguagem",
    title: "Afasia de Wernicke",
    text: "Qual é uma característica típica da afasia de Wernicke?",
    options: [
      "Produção verbal reduzida, porém gramaticalmente correta",
      "Fala fluente, porém com conteúdo sem sentido e compreensão prejudicada",
      "Dificuldades apenas em repetir palavras, sem alteração de compreensão",
      "Comprometimento motor severo sem alterações de linguagem"
    ],
    correctIndex: 1,
    correction: "Na afasia de Wernicke, a fala tende a ser fluente, mas com conteúdo desorganizado ou sem sentido, acompanhada de comprometimento importante da compreensão."
  },
  {
    topic: "Bases neuropsicológicas da linguagem",
    title: "Rede ampliada da linguagem",
    text: "Estudos recentes indicam que a linguagem não se restringe apenas às áreas de Broca e Wernicke, mas envolve também:",
    options: [
      "Somente o cerebelo",
      "Apenas o córtex occipital",
      "Córtex pré-frontal, giros temporais médios e inferiores, giro angular e estruturas subcorticais",
      "Somente o hipocampo"
    ],
    correctIndex: 2,
    correction: "Além de Broca e Wernicke, a linguagem envolve redes que incluem córtex pré-frontal, áreas temporais, giro angular e estruturas subcorticais como tálamo e gânglios da base."
  },
  {
    topic: "Desenvolvimento da linguagem",
    title: "Linguagem e interação social",
    text: "Segundo abordagens histórico-culturais, o desenvolvimento da linguagem está fortemente ligado:",
    options: [
      "Apenas à maturação biológica, independente do contexto social",
      "Exclusivamente à herança genética, sem influência do ambiente",
      "À interação social e às práticas culturais nas quais a criança está inserida",
      "Somente à exposição passiva a programas de TV"
    ],
    correctIndex: 2,
    correction: "Perspectivas como a de Vygotsky destacam que a linguagem se desenvolve na interação social, mediada culturalmente, e depois é internalizada como linguagem interna, fundamental para o pensamento."
  },
  {
    topic: "Desenvolvimento da linguagem",
    title: "Janela de oportunidade para linguagem",
    text: "A chamada 'janela de oportunidade' para o desenvolvimento da linguagem refere-se a:",
    options: [
      "Um único dia específico da vida em que a linguagem se desenvolve",
      "Um período precoce da infância em que o cérebro é especialmente sensível aos estímulos linguísticos",
      "Um momento exclusivo da adolescência em que se aprende a falar",
      "Uma fase apenas da vida adulta em que se adquire vocabulário"
    ],
    correctIndex: 1,
    correction: "A 'janela de oportunidade' para a linguagem corresponde aos primeiros anos de vida, quando o cérebro é altamente sensível a estímulos linguísticos e à interação comunicativa."
  },
  {
    topic: "Linguagem escrita e dislexia",
    title: "Bases neurais da leitura",
    text: "A leitura envolve principalmente a integração de quais tipos de processamento?",
    options: [
      "Apenas processamento motor",
      "Apenas processamento emocional",
      "Processamento visual, fonológico e semântico em redes corticais integradas",
      "Somente processamento auditivo"
    ],
    correctIndex: 2,
    correction: "A leitura exige integração de informações visuais, fonológicas e semânticas em áreas como a região occipitotemporal esquerda e outros circuitos linguísticos."
  },
  {
    topic: "Linguagem escrita e dislexia",
    title: "Dislexia",
    text: "A dislexia é caracterizada por:",
    options: [
      "Dificuldade global de inteligência e ausência de escolarização",
      "Comprometimento motor amplo sem alterações de leitura",
      "Dificuldades significativas na decodificação fonológica e na fluência de leitura, apesar de inteligência e escolarização adequadas",
      "Apenas problemas comportamentais sem relação com leitura"
    ],
    correctIndex: 2,
    correction: "A dislexia envolve dificuldades persistentes de decodificação fonológica e fluência de leitura, não explicadas por déficits intelectuais ou falta de escolarização."
  },
  {
    topic: "Linguagem escrita e dislexia",
    title: "Neuroimagem na dislexia",
    text: "Estudos de neuroimagem em indivíduos com dislexia frequentemente mostram:",
    options: [
      "Ativação idêntica à de leitores típicos em todas as áreas da linguagem",
      "Padrões atípicos de ativação em regiões como o giro fusiforme esquerdo e áreas temporais",
      "Lesões extensas no cerebelo em todos os casos",
      "Ausência total de atividade cerebral nas tarefas de leitura"
    ],
    correctIndex: 1,
    correction: "Pesquisas indicam padrões atípicos de ativação em regiões como o giro fusiforme esquerdo e áreas temporais em pessoas com dislexia, o que orienta intervenções focadas em treino fonológico e multissensorial."
  },
  {
    topic: "Bilinguismo e linguagem",
    title: "Bilinguismo e cognição",
    text: "Sobre o bilinguismo, pesquisas neuropsicológicas sugerem que:",
    options: [
      "Falar duas línguas sempre prejudica o desenvolvimento cognitivo",
      "O uso de mais de uma língua não produz qualquer efeito no cérebro",
      "O bilinguismo pode estar associado a maior recrutamento de áreas ligadas ao controle executivo e à memória de trabalho",
      "O bilinguismo impede o desenvolvimento da linguagem escrita"
    ],
    correctIndex: 2,
    correction: "Estudos indicam que bilíngues frequentemente apresentam maior envolvimento de áreas ligadas ao controle executivo e à memória de trabalho, o que pode trazer benefícios além do domínio linguístico."
  },
  {
    topic: "Avaliação neuropsicológica da linguagem",
    title: "Avaliação neuropsicológica",
    text: "Na avaliação neuropsicológica da linguagem, é correto afirmar que:",
    options: [
      "Os testes devem ser aplicados de forma mecânica, sem considerar o contexto de vida do sujeito",
      "A interpretação deve considerar apenas o desempenho quantitativo em testes padronizados",
      "A avaliação deve integrar dados de testes, história de vida, contexto familiar e escolar",
      "O vínculo com o paciente não interfere na qualidade dos dados"
    ],
    correctIndex: 2,
    correction: "A avaliação neuropsicológica deve ser compreendida como um processo amplo que integra resultados de testes, história de vida, contexto familiar, escolar e cultural do sujeito."
  },
  {
    topic: "Avaliação neuropsicológica da linguagem",
    title: "Devolutiva na avaliação",
    text: "A devolutiva na avaliação neuropsicológica da linguagem deve:",
    options: [
      "Ser evitada para não influenciar a família",
      "Focar apenas nos déficits, sem discutir potencialidades",
      "Ser clara, sensível, valorizar as potencialidades e indicar caminhos de intervenção",
      "Ser feita apenas por escrito, sem diálogo com a família ou escola"
    ],
    correctIndex: 2,
    correction: "A devolutiva deve ser conduzida com sensibilidade, esclarecendo dificuldades, valorizando potencialidades e propondo estratégias de intervenção contextualizadas."
  }
];
