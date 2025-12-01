import type { Exam } from "./types";

export const exam5: Exam = {
  id: "segundo-parcial-2024",
  title: "Segundo Parcial 2024",
  description: "10 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "Todos los siguientes son efectos adversos de los fármacos analgésicos opioides, excepto:",
      options: ["Depresión respiratoria", "Síndrome de abstinencia", "Inhibición motilidad intestinal", "Hiperglucemia"],
      correctAnswer: 3,
      explanation:
        "La HIPERGLUCEMIA NO es un efecto adverso típico de los opioides. Los opioides pueden causar HIPOGLUCEMIA leve en algunos casos, pero no hiperglucemia. Los efectos adversos correctos son: depresión respiratoria (por acción en centros respiratorios del tronco encefálico, especialmente peligroso en sobredosis), síndrome de abstinencia (cuando se suspende abruptamente tras uso crónico, con síntomas como ansiedad, insomnio, náuseas, diarrea), e inhibición de la motilidad intestinal (constipación, por reducción del peristaltismo y aumento del tono de esfínteres). La hiperglucemia es más característica de glucocorticoides.",
    },
    {
      id: 2,
      question: "¿Cuál es el principal mecanismo de acción de los corticoides en el control de la inflamación?",
      options: ["Inhibición de la enzima COMT", "Inhibición de la fosfolipasa A2", "Antagonismo de los receptores de histamina", "Inhibición de la enzima MAO"],
      correctAnswer: 1,
      explanation:
        "Los glucocorticoides inhiben la FOSFOLIPASA A2 (PLA2) mediante la síntesis de proteínas llamadas lipocortinas (anexinas). La PLA2 es la enzima que libera ácido araquidónico desde los fosfolípidos de membrana. Al inhibir la PLA2, se reduce la disponibilidad de ácido araquidónico, lo que impide la síntesis de TODOS los eicosanoides (prostaglandinas, tromboxanos, leucotrienos). Esto explica el amplio efecto antiinflamatorio de los corticoides. La COMT y MAO son enzimas que metabolizan catecolaminas, no están relacionadas con corticoides. Los corticoides no antagonizan receptores de histamina directamente.",
    },
    {
      id: 3,
      question: "¿Cuál es el principal mecanismo de acción de los anestésicos locales, como la lidocaína?",
      options: [
        "Inhibición de la acetilcolina",
        "Bloqueo de los canales de calcio tipo L",
        "Bloqueo de los canales de sodio voltaje dependientes",
        "Aumento de la liberación de neurotransmisores",
      ],
      correctAnswer: 2,
      explanation:
        "Los anestésicos locales bloquean los CANALES DE SODIO VOLTAJE-DEPENDIENTES en la membrana del axón neuronal. El mecanismo es: 1) La forma no ionizada (liposoluble) del anestésico atraviesa la membrana del nervio, 2) Dentro del axón, se re-ioniza al pH intracelular, 3) La forma ionizada se une al canal de Na+ desde el lado interno, bloqueándolo en su estado inactivado. Sin canales de Na+ funcionales, no se puede generar potencial de acción y la conducción nerviosa se bloquea. Este bloqueo es reversible y uso-dependiente (más efectivo en fibras que descargan frecuentemente). Los anestésicos locales NO afectan acetilcolina, canales de calcio, ni liberación de neurotransmisores.",
    },
    {
      id: 4,
      question: "¿Qué efecto adverso grave se puede presentar con la administración excesiva de anestésicos locales?",
      options: [
        "Reacciones alérgicas, anafilaxia",
        "Alteraciones cardíacas, arritmias",
        "Alteraciones neurológicas, convulsiones",
        "Todas las opciones son correctas",
      ],
      correctAnswer: 3,
      explanation:
        "TODAS las opciones son efectos adversos graves posibles con sobredosis de anestésicos locales. Las reacciones alérgicas/anafilaxia pueden ocurrir (especialmente con anestésicos tipo éster como procaina, menos común con amidas como lidocaína). Las alteraciones cardíacas incluyen bradicardia, bloqueos de conducción, y arritmias ventriculares por bloqueo de canales de Na+ cardíacos. Las alteraciones neurológicas incluyen convulsiones (por bloqueo de canales Na+ en SNC causando hiperexcitabilidad), seguido de depresión del SNC y colapso cardiorrespiratorio. La progresión tóxica típica es: síntomas del SNC (mareos, parestesias, convulsiones) → depresión cardiorrespiratoria. Por esto se deben respetar las dosis máximas recomendadas.",
    },
    {
      id: 5,
      question: "El uso de vasoconstrictores (adrenalina) junto a los anestésicos locales se utiliza para:",
      options: [
        "Disminuir el pasaje del anestésico al resto del organismo",
        "Reducir el sangrado en la zona",
        "Prolongar la duración del efecto anestésico",
        "Todas las opciones son correctas",
      ],
      correctAnswer: 3,
      explanation:
        "TODAS las opciones son correctas. La adrenalina (epinefrina) agregada a anestésicos locales en concentraciones de 1:100,000 a 1:200,000 produce: 1) VASOCONSTRICCIÓN LOCAL que reduce el flujo sanguíneo, disminuyendo la absorción sistémica del anestésico (menor toxicidad sistémica), 2) HEMOSTASIA local (reduce el sangrado en el sitio quirúrgico, mejorando la visualización), y 3) PROLONGACIÓN de la duración del bloqueo nervioso (al retener el anestésico más tiempo en el tejido donde debe actuar). Está contraindicada en áreas con circulación terminal (dedos, nariz, pene, orejas) porque puede causar isquemia y necrosis.",
    },
    {
      id: 6,
      question: "El efecto de un fármaco depende críticamente de (señale la opción correcta):",
      options: ["El cociente de extracción", "El pH renal", "La fracción no ionizada", "Concentración plasmática"],
      correctAnswer: 3,
      explanation:
        "La CONCENTRACIÓN PLASMÁTICA es fundamental porque determina la cantidad de fármaco disponible para distribuirse a los tejidos y alcanzar la biofase (sitio de acción). La concentración plasmática depende de la dosis, biodisponibilidad, distribución, metabolismo y eliminación. El cociente de extracción afecta el metabolismo hepático pero no es el factor crítico principal. El pH renal afecta la eliminación de ácidos/bases débiles pero no es el determinante principal del efecto. La fracción no ionizada es importante para la absorción y distribución, pero la concentración plasmática total es el parámetro más crítico que relaciona farmacocinética con farmacodinamia.",
    },
    {
      id: 7,
      question: "Con respecto a los antibióticos, ¿cuál de los siguientes NO pertenece al grupo de los betalactámicos?",
      options: ["Amoxicilina", "Ampicilina", "Penicilina", "Claritromicina"],
      correctAnswer: 3,
      explanation:
        "La CLARITROMICINA NO es un betalactámico; es un MACRÓLIDO. Los betalactámicos se caracterizan por tener un anillo betalactámico en su estructura química: incluyen penicilinas (penicilina G, amoxicilina, ampicilina), cefalosporinas, carbapenémicos y monobactámicos. La claritromicina pertenece a la familia de los macrólidos (junto con eritromicina, azitromicina), que tienen un anillo macrocíclico lactónico, no betalactámico. Los macrólidos inhiben la síntesis de proteínas bacterianas (unión a subunidad 50S del ribosoma), mientras que los betalactámicos inhiben la síntesis de la pared celular.",
    },
    {
      id: 8,
      question: "¿Qué variables relaciona la curva dosis-respuesta gradual?",
      options: ["Tiempo-toxicidad", "Tiempo-concentración", "Dosis-respuesta", "Ninguna es correcta"],
      correctAnswer: 2,
      explanation:
        "La curva DOSIS-RESPUESTA relaciona la DOSIS (o concentración) del fármaco con la MAGNITUD DE LA RESPUESTA. En el eje X se representa la dosis (generalmente en escala logarítmica) y en el eje Y la respuesta (porcentaje del efecto máximo). Esta curva permite determinar parámetros importantes como: DE50 (dosis que produce 50% del efecto máximo, mide potencia), eficacia máxima, pendiente de la curva. Las curvas tiempo-toxicidad y tiempo-concentración son diferentes: tiempo-concentración muestra la evolución de la concentración plasmática a lo largo del tiempo (farmacocinética), mientras que dosis-respuesta muestra la relación dosis-efecto (farmacodinamia).",
    },
    {
      id: 9,
      question: "¿Cómo se denomina a un fármaco que produce un efecto similar a su ligando endógeno?",
      options: ["Antagonista competitivo", "Antagonista irreversible", "Agonista", "Ninguna es correcta"],
      correctAnswer: 2,
      explanation:
        "Un AGONISTA es un fármaco que se une a un receptor y produce una respuesta biológica similar (o idéntica) a la del ligando endógeno. Por ejemplo, la morfina es un agonista de receptores opioides μ (el ligando endógeno sería endorfinas), el salbutamol es un agonista de receptores β2 (el ligando endógeno sería adrenalina). Los agonistas tienen tanto afinidad (se unen al receptor) como eficacia (activan el receptor). Un antagonista competitivo se une pero NO produce efecto (eficacia = 0), y un antagonista irreversible se une covalentemente inactivando el receptor permanentemente.",
    },
    {
      id: 10,
      question: "¿Cómo se denomina a la dosis capaz de producir el efecto en la mitad de la población?",
      options: ["Dosis efectiva 50", "Tolerancia", "Inducción enzimática", "Ninguna es correcta"],
      correctAnswer: 0,
      explanation:
        "La DOSIS EFECTIVA 50 (DE50 o ED50) es la dosis que produce el efecto deseado en el 50% de la población o individuos estudiados. Es un parámetro de POTENCIA: cuanto menor sea la DE50, más potente es el fármaco (necesita menos dosis para producir el efecto). Se determina experimentalmente en estudios con múltiples sujetos o animales. La tolerancia es un fenómeno donde se requiere mayor dosis para mantener el mismo efecto tras uso repetido. La inducción enzimática es un proceso donde ciertos fármacos aumentan la actividad de enzimas metabolizadoras. La DE50 es fundamental en farmacología para comparar la potencia de diferentes fármacos.",
    },
  ],
};
