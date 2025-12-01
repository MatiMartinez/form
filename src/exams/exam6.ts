import type { Exam } from "./types";

export const exam6: Exam = {
  id: "primer-parcial-2024",
  title: "Primer Parcial 2024",
  description: "10 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "¿Cuál de las siguientes es la única vía de administración que tiene efecto de 1er paso hepático?",
      options: ["Vía subcutánea", "Vía intramuscular", "Vía oral", "Vía endovenosa"],
      correctAnswer: 2,
      explanation:
        "La VÍA ORAL es la única que presenta primer paso hepático (metabolismo de primer paso). Cuando un fármaco se absorbe desde el intestino delgado, entra al sistema venoso portal y pasa primero por el hígado antes de llegar a la circulación sistémica. En el hígado puede sufrir metabolismo extenso (por enzimas como CYP450), reduciendo significativamente la biodisponibilidad. Las otras vías (subcutánea, intramuscular, endovenosa) evitan el primer paso hepático porque el fármaco llega directamente a la circulación sistémica o se absorbe hacia venas que no pasan por el hígado primero.",
    },
    {
      id: 2,
      question: "¿Cuál es el nombre de la forma farmacéutica líquida que se administra de manera tópica para ejercer su acción en la cavidad bucal?",
      options: ["Óvulo", "Colutorio", "Gel", "Colirio"],
      correctAnswer: 1,
      explanation:
        "El COLUTORIO (enjuague bucal) es una solución líquida diseñada para administración tópica en la cavidad bucal. Se usa para enjuagar y escupir, no se traga, por lo que ejerce su acción localmente con mínima absorción sistémica. Ejemplos: colutorios con clorhexidina (antiséptico), fluoruros (prevención de caries), o antisépticos. El óvulo es para vía vaginal/rectal, el gel puede ser tópico pero no específicamente bucal, y el colirio es para administración ocular.",
    },
    {
      id: 3,
      question: "Todas las siguientes son formas farmacéuticas con vías de administración sistémica, excepto:",
      options: ["Inyectable intramuscular", "Comprimido oral", "Gotas sublinguales", "Crema dérmica"],
      correctAnswer: 3,
      explanation:
        "La CREMA DÉRMICA es una forma farmacéutica de administración TÓPICA (local), no sistémica. Se aplica sobre la piel para ejercer su efecto localmente, con mínima o nula absorción sistémica. Las otras opciones son vías sistémicas: inyectable IM (el fármaco se absorbe al torrente sanguíneo), comprimido oral (se absorbe en intestino hacia circulación sistémica), y gotas sublinguales (se absorben a través de mucosa sublingual hacia circulación sistémica). Las cremas, pomadas y ungüentos son formas tópicas diseñadas para acción local.",
    },
    {
      id: 4,
      question: "¿Cuál de las siguientes es una contraindicación absoluta para indicar fármacos por vía oral?",
      options: ["Hipertensión", "Alteración de la conciencia", "Fiebre", "Pancreatitis"],
      correctAnswer: 1,
      explanation:
        "La ALTERACIÓN DE LA CONCIENCIA es una contraindicación ABSOLUTA para la vía oral porque el paciente no puede tragar de forma segura, existe riesgo de aspiración pulmonar (el fármaco puede ir a los pulmones en lugar del estómago), y no hay garantía de que el paciente pueda ingerir y retener el medicamento. En estos casos se usan vías alternativas: endovenosa, intramuscular, sublingual, o rectal. La hipertensión, fiebre y pancreatitis no son contraindicaciones absolutas para vía oral, aunque pueden requerir precauciones o vías alternativas según la situación clínica.",
    },
    {
      id: 5,
      question: "Con respecto a la administración de un fármaco en situaciones especiales, ¿cuál de las siguientes afirmaciones es incorrecta?",
      options: [
        "Ante un paciente adulto mayor debe tenerse en cuenta la función de filtrado renal",
        "Durante la lactancia se debe recomendar la toma del medicamento al terminar de amamantar",
        "En pacientes pediátricos la dosis debe calcularse",
        "En un paciente con falla renal no es necesario ajustar la dosis de los medicamentos",
      ],
      correctAnswer: 3,
      explanation:
        "La afirmación INCORRECTA es que en falla renal no es necesario ajustar dosis. En insuficiencia renal, muchos fármacos se acumulan porque se eliminan principalmente por vía renal. Se DEBE AJUSTAR la dosis según el clearance de creatinina para evitar toxicidad. Las otras afirmaciones son correctas: los ancianos tienen función renal disminuida (requiere ajuste), en lactancia tomar el medicamento después de amamantar reduce la exposición del bebé (el fármaco se elimina antes de la próxima toma), y en pediatría las dosis se calculan por peso o superficie corporal porque los niños tienen farmacocinética diferente a adultos.",
    },
    {
      id: 6,
      question: "¿De lo siguiente qué forma parte de la farmacocinética?",
      options: ["Vías de administración", "Concentración plasmática", "Formas farmacéuticas", "A y C son correctas"],
      correctAnswer: 3,
      explanation:
        "La farmacocinética estudia el movimiento del fármaco en el organismo: absorción, distribución, metabolismo y eliminación (ADME). Las VÍAS DE ADMINISTRACIÓN y las FORMAS FARMACÉUTICAS son parte fundamental porque determinan cómo y dónde se absorbe el fármaco, afectando toda la farmacocinética posterior. La concentración plasmática es un RESULTADO de la farmacocinética (se determina por los procesos ADME), no un componente del estudio en sí. Por tanto, A y C son correctas: las vías de administración y formas farmacéuticas son parte del estudio farmacocinético.",
    },
    {
      id: 7,
      question: "¿Cuál es la vía de administración más empleada?",
      options: ["Rectal", "Intramuscular", "Oral", "Ninguna es correcta"],
      correctAnswer: 2,
      explanation:
        "La VÍA ORAL es la vía de administración más empleada en todo el mundo. Sus ventajas incluyen: facilidad de administración (no requiere personal sanitario), comodidad para el paciente, buena aceptación, y costo relativamente bajo. Es la vía de elección para la mayoría de tratamientos crónicos y agudos ambulatorios. Las vías rectal e intramuscular se usan cuando la vía oral no es posible o cuando se requiere efecto más rápido. La vía oral tiene desventajas: primer paso hepático, absorción variable, y no es adecuada en emergencias o cuando el paciente no puede tragar.",
    },
    {
      id: 8,
      question: "La concentración de un fármaco en sangre depende de:",
      options: ["La absorción", "La distribución", "La eliminación", "Todas son correctas"],
      correctAnswer: 3,
      explanation:
        "La concentración plasmática de un fármaco depende de TODOS los procesos farmacocinéticos: ABSORCIÓN (cuánto fármaco entra al organismo y a qué velocidad), DISTRIBUCIÓN (cómo se reparte el fármaco entre plasma y tejidos), y ELIMINACIÓN (metabolismo y excreción que remueven el fármaco del organismo). Estos procesos están interrelacionados y determinan la concentración en cualquier momento. La ecuación básica es: Concentración = (Absorción - Eliminación) / Volumen de distribución. Por eso, cambios en cualquiera de estos procesos (ej: insuficiencia renal que reduce eliminación, o interacciones que afectan metabolismo) alteran la concentración plasmática.",
    },
    {
      id: 9,
      question: "Una ampolla de diclofenac es una forma farmacéutica:",
      options: ["Sólida", "Tópica", "Inhalatoria", "Ninguna es correcta"],
      correctAnswer: 3,
      explanation:
        "Una AMPOLLA de diclofenac es una forma farmacéutica LÍQUIDA para administración PARENTERAL (generalmente intramuscular o endovenosa). No es sólida (las sólidas son comprimidos, cápsulas), no es tópica (las tópicas son cremas, pomadas para aplicar sobre piel), y no es inhalatoria (las inhalatorias son aerosoles, nebulizaciones). Las ampollas contienen una solución estéril del fármaco lista para inyección. El diclofenac en ampolla se usa para dolor agudo postoperatorio o cuando se requiere efecto rápido, mientras que las formas orales (comprimidos) se usan para tratamientos más prolongados.",
    },
    {
      id: 10,
      question: "Al denominar un fármaco es preferible la utilización de:",
      options: ["El nombre comercial", "El nombre genérico", "La fórmula química", "Ninguna es correcta"],
      correctAnswer: 1,
      explanation:
        "El NOMBRE GENÉRICO (o denominación común internacional, DCI) es preferible porque: 1) Es universal y estandarizado (mismo nombre en todos los países), 2) No depende del fabricante (cada laboratorio tiene su marca comercial diferente), 3) Facilita la comunicación entre profesionales de salud, 4) Permite identificar el principio activo independientemente de la marca, 5) Es más económico (los genéricos suelen ser más baratos). El nombre comercial varía según el país y fabricante (ej: 'Aspirina' es marca, 'ácido acetilsalicílico' es genérico). La fórmula química es muy compleja para uso clínico diario. Las guías internacionales recomiendan prescribir por nombre genérico.",
    },
  ],
};
