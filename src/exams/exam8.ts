import type { Exam } from "./types";

export const exam8: Exam = {
  id: "primer-parcial-2025",
  title: "Primer Parcial 2025",
  description: "10 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "En la curva dosis-respuesta, la DE50 permite comparar (señale la opción correcta):",
      options: [
        "Potencia (dosis efectiva + concentración efectiva)",
        "Eficacia (porque es la dosis efectiva)",
        "Cantidad de receptores",
        "Bloqueo de calcio sarcoplásmico",
      ],
      correctAnswer: 0,
      explanation:
        "La DE50 (Dosis Efectiva 50%) permite comparar la POTENCIA entre fármacos. La potencia se refiere a la cantidad de fármaco necesaria para producir un efecto determinado (en este caso, el 50% del efecto máximo). Un fármaco más potente requiere menor dosis para alcanzar el mismo efecto. La DE50 se relaciona con la afinidad del fármaco por su receptor y su eficacia intrínseca. La eficacia (Emax) es diferente: se refiere al efecto máximo que puede producir un fármaco, independientemente de la dosis. La DE50 NO mide eficacia, cantidad de receptores, ni bloqueo de calcio.",
    },
    {
      id: 2,
      question: "¿Cómo se denomina un fármaco que posee eficacia intrínseca pero no alcanza el Emax?",
      options: ["Agonista total", "Agonista parcial", "Antagonista irreversible", "Ninguna es correcta"],
      correctAnswer: 1,
      explanation:
        "Un AGONISTA PARCIAL es un fármaco que tiene eficacia intrínseca (puede activar el receptor) pero NO alcanza el Emax (efecto máximo) que produce un agonista total, incluso a dosis muy altas. Esto ocurre porque aunque se une al receptor y lo activa, su capacidad de activación es menor. En presencia de un agonista total, un agonista parcial puede actuar como antagonista competitivo porque compite por el mismo sitio de unión pero produce menor respuesta. Un agonista total alcanza el Emax completo. Un antagonista no tiene eficacia intrínseca (no activa el receptor).",
    },
    {
      id: 3,
      question: "Un antagonista competitivo posee (señale la opción correcta):",
      options: ["Eficacia", "Irreversibilidad", "Afinidad", "A y B son correctas"],
      correctAnswer: 2,
      explanation:
        "Un ANTAGONISTA COMPETITIVO posee AFINIDAD por el receptor (se une al receptor) pero NO posee eficacia intrínseca (no activa el receptor, no produce respuesta). La afinidad es la capacidad de unirse al receptor. Un antagonista competitivo es REVERSIBLE (no irreversible), ya que su unión es por enlaces débiles y puede ser desplazado por un agonista si se aumenta la concentración de este (desplazamiento paralelo de la curva dosis-respuesta). Los antagonistas irreversibles forman enlaces covalentes y no pueden ser desplazados. Por tanto, solo la afinidad es correcta.",
    },
    {
      id: 4,
      question: "¿Qué capítulo o capítulos comprende la precinética?",
      options: ["Cociente de extracción hepática", "Metabolismo de primer paso", "Vías de administración (+FF)", "Ninguna es correcta"],
      correctAnswer: 2,
      explanation:
        "La PRECINÉTICA comprende las VÍAS DE ADMINISTRACIÓN y las FORMAS FARMACÉUTICAS (FF). La precinética estudia todo lo relacionado con la administración del fármaco antes de que entre al organismo o llegue al sitio de acción. Incluye: vías de administración (oral, parenteral, tópica, etc.), formas farmacéuticas (comprimidos, cápsulas, inyectables, etc.), y factores que afectan la liberación y absorción inicial. El cociente de extracción hepática y el metabolismo de primer paso pertenecen a la FARMACOCINÉTICA (específicamente a la fase de metabolismo), no a la precinética.",
    },
    {
      id: 5,
      question: "¿En qué momento se alcanza la concentración máxima por vía endovenosa rápida?",
      options: ["De inmediato", "A los 30 minutos", "A los 15 minutos", "Ninguna es correcta"],
      correctAnswer: 0,
      explanation:
        "Por vía ENDOVENOSA RÁPIDA (bolo IV), la concentración máxima (Cmax) se alcanza DE INMEDIATO, ya que el fármaco se administra directamente en el torrente sanguíneo sin pasar por procesos de absorción. No hay fase de absorción, por lo que la concentración plasmática es máxima al momento de la inyección (t=0). Luego, la concentración disminuye por distribución y eliminación. En otras vías (oral, IM, SC) hay un tiempo de absorción antes de alcanzar Cmax. La vía IV rápida es la única donde Cmax ocurre inmediatamente después de la administración.",
    },
    {
      id: 6,
      question: "¿Cuál de las siguientes es la única vía de administración que tiene efecto de primer paso hepático?",
      options: ["Vía subcutánea", "Vía intramuscular", "Vía oral", "Vía endovenosa"],
      correctAnswer: 2,
      explanation:
        "La VÍA ORAL es la única vía de administración que tiene efecto de primer paso hepático significativo. Esto ocurre porque después de la absorción intestinal, el fármaco pasa por la vena porta directamente al hígado antes de llegar a la circulación sistémica. En el hígado, muchos fármacos son metabolizados (glucuronidación, oxidación, etc.), reduciendo la cantidad que llega a la circulación sistémica (biodisponibilidad). Las vías parenterales (IV, IM, SC) evitan el primer paso hepático porque el fármaco entra directamente a la circulación sistémica. La vía sublingual también evita el primer paso hepático (drenaje venoso directo a circulación sistémica).",
    },
    {
      id: 7,
      question: "Todas las siguientes son formas farmacéuticas con vías de administración sistémicas, excepto:",
      options: ["Inyectable intramuscular", "Comprimido oral", "Gotas sublinguales", "Colutorio"],
      correctAnswer: 3,
      explanation:
        "El COLUTORIO es una forma farmacéutica para uso TÓPICO/LOCAL en la cavidad bucal, NO es una vía de administración sistémica. Los colutorios se usan para enjuagues bucales con acción local (antisépticos, anestésicos locales, antiinflamatorios tópicos). Aunque puede haber absorción mínima a través de la mucosa oral, su propósito es acción local. Las otras opciones son vías sistémicas: inyectable IM (absorción a circulación sistémica), comprimido oral (absorción GI a circulación sistémica), y gotas sublinguales (absorción directa a circulación sistémica evitando primer paso hepático).",
    },
    {
      id: 8,
      question: "Con respecto a la administración de fármacos en situaciones especiales, ¿cuál de las siguientes afirmaciones es incorrecta?",
      options: [
        "Ante un paciente adulto mayor debe tenerse en cuenta la función renal",
        "Durante la lactancia se debe recomendar la toma del medicamento inmediatamente al terminar de amamantar",
        "En pacientes pediátricos las dosis deben calcularse según el peso",
        "En un paciente con falla renal no es necesario ajustar las dosis de los medicamentos",
      ],
      correctAnswer: 3,
      explanation:
        "La afirmación INCORRECTA es que 'en un paciente con falla renal no es necesario ajustar las dosis de los medicamentos'. Esto es FALSO porque en la insuficiencia renal, la eliminación de fármacos (especialmente los eliminados por vía renal) está disminuida, lo que puede llevar a acumulación tóxica. Por tanto, SÍ es necesario ajustar dosis (reducir dosis o aumentar intervalo entre dosis) según el aclaramiento de creatinina. Las otras afirmaciones son correctas: en adultos mayores hay disminución de función renal, en lactancia se recomienda tomar medicamentos después de amamantar para reducir exposición del lactante, y en pediatría las dosis se calculan por peso o superficie corporal.",
    },
    {
      id: 9,
      question: "¿Qué efecto adverso grave se puede presentar con la administración excesiva de anestésicos locales?",
      options: [
        "Reacciones alérgicas como anafilaxia",
        "Alteraciones cardíacas como arritmias",
        "Alteraciones neurológicas como convulsiones",
        "Todas las opciones son correctas",
      ],
      correctAnswer: 3,
      explanation:
        "TODAS las opciones son correctas. La administración excesiva de anestésicos locales puede producir efectos adversos graves en múltiples sistemas: 1) REACCIONES ALÉRGICAS como anafilaxia (especialmente con anestésicos tipo éster como procaína, que se metabolizan a PABA, un alérgeno conocido). 2) ALTERACIONES CARDÍACAS como arritmias, bloqueo cardíaco, y depresión miocárdica (los anestésicos locales bloquean canales de sodio cardíacos, pudiendo causar bradicardia, hipotensión, y arritmias ventriculares). 3) ALTERACIONES NEUROLÓGICAS como convulsiones, parestesias, mareos, y pérdida de conciencia (por bloqueo de canales de sodio en SNC). La toxicidad sistémica ocurre cuando se alcanzan concentraciones plasmáticas altas por sobredosis o inyección intravascular accidental.",
    },
    {
      id: 10,
      question: "¿Cómo se denomina el fenómeno por el cual los anestésicos locales realizan su acción?",
      options: ["Tolerancia", "Atrapamiento iónico", "Potenciación", "Sinergia"],
      correctAnswer: 1,
      explanation:
        "El fenómeno se denomina ATRAPAMIENTO IÓNICO (o teoría del bloqueo de uso-dependiente). Los anestésicos locales son bases débiles que en el medio extracelular (pH 7.4) están principalmente en forma no ionizada (liposoluble), lo que les permite atravesar la membrana neuronal. Una vez dentro del axón, el pH intracelular más ácido favorece la ionización del fármaco (forma catiónica), 'atrapándolo' dentro de la célula. La forma ionizada es la que bloquea los canales de sodio voltaje-dependientes desde el lado intracelular, impidiendo la despolarización y la conducción del impulso nervioso. La tolerancia es la disminución de respuesta con uso repetido. La potenciación y sinergia se refieren a interacciones entre fármacos, no al mecanismo de acción de los anestésicos locales.",
    },
  ],
};
