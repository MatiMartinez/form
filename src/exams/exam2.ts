import type { Exam } from "./types";

export const exam2: Exam = {
  id: "farmacologia-avanzada",
  title: "Examen de Farmacología Avanzada",
  description: "100 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "Señale lo verdadero con respecto a PEPTIDOS OPIOIDES ENDOGENOS",
      options: [
        "El estímulo de receptores μ se asocia con analgesia supraespinal",
        "El estímulo de receptores μ se asocia con disforia",
        "El estímulo de receptores κ se asocia con euforia",
        "Los receptores delta no tienen localización en medula espinal",
        "Todo lo anterior es correcto",
      ],
      correctAnswer: 0,
      explanation:
        "Los receptores μ (mu) opioides median la analgesia supraespinal (cerebral), además de euforia, depresión respiratoria y dependencia física. Los receptores κ producen disforia (no euforia), y los receptores delta sí tienen localización en médula espinal.",
    },
    {
      id: 2,
      question: "Señale lo FALSO con respecto a la clasificación de analgésicos",
      options: [
        "ASPIRINA se ubica en grupo 1",
        "DEXTROPROPOXIFENO se ubica en grupo 2",
        "MORFINA se ubica en grupo 3",
        "TRAMADOL se ubica en grupo 2",
        "PARACETAMOL se ubica en el grupo 2",
      ],
      correctAnswer: 4,
      explanation:
        "Según la escalera analgésica de la OMS: Grupo 1 = AINE y paracetamol, Grupo 2 = opioides débiles (tramadol, codeína, dextropropoxifeno), Grupo 3 = opioides fuertes (morfina). El PARACETAMOL pertenece al grupo 1, no al grupo 2.",
    },
    {
      id: 3,
      question: "Señale lo FALSO con respecto al MECANISMO DE ACCION de glucocorticoides",
      options: [
        "Interactúan con receptor intracelular",
        "Interactúan con receptor en el núcleo de las células",
        "Activan la transcripción de genes",
        "Inhiben la transcripción de genes",
        "Inducen síntesis de proteína inhibitoria sobre eicosanoides",
      ],
      correctAnswer: 1,
      explanation:
        "Los glucocorticoides se unen a receptores CITOPLASMÁTICOS (no nucleares). El complejo hormona-receptor luego se transloca al núcleo donde modula la transcripción génica. El receptor no está en el núcleo, sino en el citoplasma unido a proteínas chaperonas como HSP90.",
    },
    {
      id: 4,
      question: "Señale lo FALSO",
      options: [
        "FOSFOLIPASA A2 genera ACIDO ARAQUIDONICO",
        "Ciclooxigenasa genera PGG2 Y PGH2",
        "LIPOCORTINA inhibe a la ciclooxigenasa",
        "Los glucocorticoides reducen la acción de LEUCOTRIENOS",
        "Los glucocorticoides reducen la acción de PROSTAGLANDINAS",
      ],
      correctAnswer: 2,
      explanation:
        "La LIPOCORTINA (anexina-1) inhibe a la FOSFOLIPASA A2, no a la ciclooxigenasa. Al inhibir la fosfolipasa A2, impide la liberación de ácido araquidónico y por tanto reduce la síntesis de todos los eicosanoides (prostaglandinas Y leucotrienos).",
    },
    {
      id: 5,
      question: "Señale lo FALSO con respecto a las acciones antiinflamatorias de los glucocorticoides",
      options: [
        "Inhiben la producción de IL1",
        "Bloquean la liberación de HISTAMINA",
        "Inducen la síntesis de ICAM-1",
        "Frenan la proliferación de fibroblastos",
        "Bloquean la liberación de IL-6",
      ],
      correctAnswer: 2,
      explanation:
        "Los glucocorticoides INHIBEN (no inducen) la expresión de moléculas de adhesión como ICAM-1. Esta inhibición reduce la migración de leucocitos al sitio de inflamación. Todas las demás opciones son efectos antiinflamatorios correctos de los glucocorticoides.",
    },
    {
      id: 6,
      question: "Señale lo VERDADERO con respecto a la inflamación",
      options: [
        "La fase aguda se caracteriza por infiltración de leucocitos",
        "La fase subaguda se caracteriza por aumento de permeabilidad capilar",
        "En la fase proliferativa existe tendencia a la fibrosis",
        "La fase catabólica se caracteriza por infiltración de leucocitos",
        "Todo lo anterior es correcto",
      ],
      correctAnswer: 2,
      explanation:
        "La fase proliferativa o de reparación tisular se caracteriza por proliferación de fibroblastos, angiogénesis y depósito de colágeno, lo que puede llevar a fibrosis. La fase aguda tiene aumento de permeabilidad y la subaguda tiene infiltración leucocitaria.",
    },
    {
      id: 7,
      question: "Señale lo FALSO con respecto a la inflamación",
      options: [
        "La acción de ciclooxigenasa genera prostaglandinas",
        "La acción de fosfolipasa A2 genera leucotrienos",
        "Los basófilos liberan HISTAMINA",
        "En los gránulos de los mastocitos hay niveles muy elevados de CITOKINAS",
        "La activación del endotelio lleva a la expresión de ELAM",
      ],
      correctAnswer: 3,
      explanation:
        "Los gránulos de los mastocitos contienen principalmente HISTAMINA, heparina, proteasas y algunos factores quimiotácticos, pero NO citokinas en niveles elevados. Las citokinas se sintetizan de novo tras la activación celular, no están preformadas en gránulos.",
    },
    {
      id: 8,
      question: "Señale lo FALSO",
      options: ["C5A es una QUIMIOKINA", "IL-1 es una QUIMIOKINA", "PGE2 es un autacoide", "TNF es una CITOKINA", "LTB4 es una QUIMIOKINA"],
      correctAnswer: 1,
      explanation:
        "IL-1 es una CITOKINA proinflamatoria, no una quimiokina. Las quimiokinas son citokinas quimioatrayentes específicas (como IL-8, RANTES, MCP-1). IL-1 tiene múltiples funciones pero su rol principal no es la quimioatracción sino la activación de respuestas inflamatorias sistémicas.",
    },
    {
      id: 9,
      question: "Señale lo FALSO con respecto a la acción de los AINES sobre DOLOR Y FIEBRE",
      options: [
        "BRADIQUININA es mediador químico del dolor",
        "HISTAMINA es mediador químico del dolor",
        "La acción antipirética de los AINES depende de su acción antiinflamatoria periférica",
        "PGE2 es mediador químico de la fiebre",
        "Los AINES no producen hipotermia",
      ],
      correctAnswer: 2,
      explanation:
        "La acción antipirética de los AINE es CENTRAL, no periférica. Actúan inhibiendo la síntesis de PGE2 en el hipotálamo, que es el mediador de la fiebre. La acción antiinflamatoria periférica es independiente del efecto antipirético.",
    },
    {
      id: 10,
      question: "Señale lo VERDADERO con respecto a la clasificación de AINES",
      options: [
        "PARACETAMOL es AINE ácido",
        "NIMESULIDA es inhibidor no selectivo de la ciclooxigenasa",
        "ACIDO ACETIL SALICILICO es derivado del ácido acético",
        "MELOXICAM es inhibidor selectivo de la ciclooxigenasa 2",
        "DICLOFENAC es derivado del ácido benzoico",
      ],
      correctAnswer: 3,
      explanation:
        "El meloxicam es un inhibidor preferencial/selectivo de la COX-2, perteneciente al grupo de los oxicams. Paracetamol no es ácido, nimesulida es selectivo COX-2, AAS es derivado del ácido salicílico, y diclofenac es derivado del ácido fenilacético.",
    },
    {
      id: 11,
      question: "Señale lo VERDADERO con respecto al ACIDO ACETIL SALICILICO",
      options: [
        "Es inhibidor reversible de la ciclooxigenasa",
        "Su metabolito (ACIDO SALICILICO) es inhibidor no selectivo de la ciclooxigenasa",
        "Su acción antiinflamatoria se manifiesta con dosis de 2g/día",
        "Genera acidosis con dosis menores que las necesarias para producir alcalosis",
        "Sus niveles en sangre de 2mg/ml generan efectos no letales",
      ],
      correctAnswer: 1,
      explanation:
        "El AAS se hidroliza a ácido salicílico, que es un inhibidor reversible y no selectivo de ambas isoformas de COX. El AAS en sí es un inhibidor IRREVERSIBLE (acetila la COX), pero su metabolito actúa de forma diferente.",
    },
    {
      id: 12,
      question: "Señale lo FALSO con respecto al ACIDO ACETIL SALICILICO",
      options: [
        "Se utiliza como antiinflamatorio en dosis de 500 mg cada 6 horas",
        "Se utiliza como antipirético en dosis de 2g una vez al día",
        "Se utiliza como antitrombótico en dosis de 100mg/día",
        "Se utiliza como antitrombótico en dosis de 200mg/día",
        "Se utiliza en tratamiento de preeclampsia",
      ],
      correctAnswer: 1,
      explanation:
        "La dosis antipirética de AAS es de 500-1000 mg cada 4-6 horas, NO 2g de una sola vez. Las dosis antiinflamatorias son altas (3-6g/día), las antitrombóticas son bajas (75-325 mg/día), y efectivamente se usa en prevención de preeclampsia.",
    },
    {
      id: 13,
      question: "Señale lo VERDADERO",
      options: [
        "El sistema microsomal hepático reduce al PARACETAMOL",
        "N-ACETILCISTEINA reduce la dosis tóxica del PARACETAMOL",
        "El metabolito tóxico del PARACETAMOL se conjuga con GLUTATION",
        "FENOBARBITAL incrementa la dosis tóxica del PARACETAMOL",
        "Todo lo anterior es correcto",
      ],
      correctAnswer: 2,
      explanation:
        "El metabolito tóxico NAPQI (N-acetil-p-benzoquinoneimina) se detoxifica conjugándose con glutatión. La N-acetilcisteína es antídoto porque repone el glutatión. El fenobarbital DISMINUYE la dosis tóxica (es inductor enzimático, genera más NAPQI).",
    },
    {
      id: 14,
      question: "Señale lo VERDADERO con respecto al PARACETAMOL",
      options: [
        "Es eficaz como analgésico y antipirético",
        "Posee escasa toxicidad renal",
        "Tiene acción similar sobre las isoformas de la ciclooxigenasa",
        "Se conjuga solamente con ácido glucurónico",
        "Sin tratamiento con inductores enzimáticos, su dosis letal es 10 a 15 g/día",
      ],
      correctAnswer: 0,
      explanation:
        "El paracetamol es un analgésico-antipirético eficaz pero con mínima acción antiinflamatoria. Actúa principalmente a nivel central, posiblemente inhibiendo la COX-3 o una variante de COX-1 cerebral. Es el analgésico de elección en muchas situaciones por su buen perfil de seguridad a dosis terapéuticas.",
    },
    {
      id: 15,
      question: "Señale lo FALSO con respecto al PARACETAMOL",
      options: [
        "Tiene alta biodisponibilidad por vía oral",
        "Alcanza la Cmax en 10 minutos",
        "Su unión a proteínas plasmáticas es 20 a 50%",
        "Su vida media es 2 horas",
        "Se elimina como fármaco metabolizado en el 90 a 100% de la dosis administrada",
      ],
      correctAnswer: 1,
      explanation:
        "El paracetamol alcanza su concentración máxima (Cmax) en 30-60 minutos por vía oral, no en 10 minutos. Su absorción es rápida pero no tan inmediata. Las demás características farmacocinéticas mencionadas son correctas.",
    },
    {
      id: 16,
      question: "Señale lo FALSO con respecto al DICLOFENAC",
      options: [
        "Su vida media es de 6 horas",
        "Puede generar edema",
        "Puede generar efectos sobre el Sistema Nervioso Central",
        "Está indicado en tratamiento de osteoartritis",
        "Es útil en tratamiento del dolor post-operatorio",
      ],
      correctAnswer: 0,
      explanation:
        "La vida media del diclofenac es de aproximadamente 1-2 horas, no 6 horas. A pesar de su corta vida media, tiene buena penetración en líquido sinovial donde permanece más tiempo, lo que explica su efectividad en patología articular con dosis cada 8-12 horas.",
    },
    {
      id: 17,
      question: "Señale lo FALSO",
      options: [
        "El R IBUPROFENO es responsable de la acción antineutrófila",
        "El S IBUPROFENO inhibe a la ciclooxigenasa",
        "Los pacientes con alteraciones visuales por IBUPROFENO deben suspender el tratamiento",
        "Los efectos adversos más frecuentes del IBUPROFENO son alteraciones visuales",
        "La función hepática regula la acción antiinflamatoria del IBUPROFENO",
      ],
      correctAnswer: 3,
      explanation:
        "Los efectos adversos más frecuentes del ibuprofeno son GASTROINTESTINALES (náuseas, dispepsia, úlceras), no visuales. Las alteraciones visuales son raras pero cuando ocurren sí requieren suspender el tratamiento. El S-ibuprofeno es el enantiómero activo.",
    },
    {
      id: 18,
      question: "Señale lo VERDADERO con respecto al IBUPROFENO",
      options: [
        "La dosis es 1200 mg una vez por día",
        "En niños, la dosis es 100 mg/kg/día",
        "La dosis máxima total es 80 mg/kg/día",
        "En artritis reumatoidea la dosis llega a 80 mg/kg/día",
        "En artritis reumatoidea, con peso menor de 30 kg, la dosis máxima es 500 mg/día",
      ],
      correctAnswer: 4,
      explanation:
        "En niños con peso menor a 30 kg con artritis reumatoidea, la dosis máxima de ibuprofeno es 500 mg/día. La dosis pediátrica habitual es 5-10 mg/kg cada 6-8 horas, con un máximo de 40 mg/kg/día, no 80 ni 100 mg/kg/día.",
    },
    {
      id: 19,
      question: "Señale lo FALSO con respecto al PIROXICAM",
      options: [
        "Se utiliza en tratamiento de patología osteoarticular",
        "Inhibe la síntesis de prostaglandinas",
        "Bloquea la acción de neutrófilos",
        "Su vida media es 24 horas",
        "Tiene circulación enterohepática",
      ],
      correctAnswer: 3,
      explanation:
        "La vida media del piroxicam es de aproximadamente 50 horas (no 24), lo que permite administración una vez al día. Esta larga vida media se debe a su extensa unión a proteínas plasmáticas (99%) y a la circulación enterohepática.",
    },
    {
      id: 20,
      question: "Señale lo VERDADERO",
      options: [
        "PIROXICAM se elimina en un 60% por orina",
        "PIROXICAM alcanza el estado de equilibrio en 2 días",
        "La dosis de PIROXICAM es 10 a 20 mg/día",
        "La vida media del MELOXICAM es 48 horas",
        "IBUPROFENO es más seguro y potente que MELOXICAM",
      ],
      correctAnswer: 2,
      explanation:
        "La dosis habitual de piroxicam es de 10-20 mg una vez al día. Por su larga vida media (~50h), alcanza el estado estable en 7-12 días (no 2). El meloxicam tiene vida media de ~20 horas y es más selectivo para COX-2 que el ibuprofeno.",
    },
    {
      id: 21,
      question: "Señale lo VERDADERO con respecto al control farmacológico de la analgesia espinal",
      options: [
        "El neurotransmisor GABA se controla con benzodiacepinas",
        "El neurotransmisor encefalina se controla con pregabalina",
        "El neurotransmisor glutamato se controla con opiáceos",
        "El neurotransmisor 5HT se controla con valproico",
      ],
      correctAnswer: 0,
      explanation:
        "Las benzodiacepinas potencian la acción del GABA al unirse al receptor GABA-A, aumentando la frecuencia de apertura del canal de cloro. El GABA es el principal neurotransmisor inhibitorio y modula la transmisión del dolor a nivel espinal.",
    },
    {
      id: 22,
      question: "Señale lo FALSO, con respecto a la vía del dolor, a nivel supraespinal",
      options: [
        "La activación del sistema retículo medular genera analgesia",
        "El sistema mesencéfalo medular se origina en la SGP",
        "La activación del sistema cortico medular genera dolor",
        "En la neuromodulación de origen supraespinal participa serotonina",
      ],
      correctAnswer: 2,
      explanation:
        "La activación del sistema cortico-medular genera ANALGESIA (no dolor) a través de vías descendentes inhibitorias. Los sistemas descendentes (retículo-medular, mesencéfalo-medular desde la SGP) modulan e inhiben la transmisión nociceptiva espinal usando serotonina y noradrenalina.",
    },
    {
      id: 23,
      question: "Señale lo FALSO, con respecto a la clasificación de analgésicos",
      options: ["Aspirina es del GRUPO 1", "Buprenorfina es del GRUPO 2", "Propoxifeno es del GRUPO 2", "Morfina es del GRUPO 3"],
      correctAnswer: 1,
      explanation:
        "La buprenorfina es un opioide potente (agonista parcial μ) que pertenece al GRUPO 3, no al grupo 2. Los opioides débiles del grupo 2 son tramadol, codeína y dextropropoxifeno. La buprenorfina, aunque agonista parcial, tiene alta potencia analgésica.",
    },
    {
      id: 24,
      question: "Señale lo FALSO, con respecto a la clasificación de epilepsia",
      options: [
        "El GRAN MAL es epilepsia primaria",
        "El PEQUEÑO MAL es epilepsia primaria",
        "Las convulsiones parciales simples pertenecen a epilepsia secundaria",
        "El síndrome de WEST es epilepsia secundaria",
      ],
      correctAnswer: 2,
      explanation:
        "Las convulsiones parciales simples NO necesariamente son epilepsia secundaria. Pueden ser primarias (idiopáticas) o secundarias (sintomáticas). La clasificación primaria/secundaria se refiere a la etiología, no al tipo de crisis. Las crisis parciales pueden tener ambos orígenes.",
    },
    {
      id: 25,
      question: "Señale lo VERDADERO, con respecto a la clasificación de drogas antiepilépticas",
      options: [
        "Fenobarbital genera inhibición del canal sodio",
        "Etosuximida genera inhibición del complejo calcio calmodulina",
        "Valproico genera disminución de función GABA",
        "Vigabatrina genera disminución de función GABA",
      ],
      correctAnswer: 1,
      explanation:
        "La etosuximida actúa inhibiendo los canales de calcio tipo T en neuronas talámicas, que están involucrados en la generación de descargas de ausencia. El fenobarbital potencia GABA, el valproico aumenta GABA (no lo disminuye), y la vigabatrina también aumenta GABA.",
    },
    {
      id: 26,
      question: "Señale lo FALSO, con respecto a las indicaciones de drogas antiepilépticas",
      options: [
        "Fenobarbital está indicado en el GRAN MAL",
        "Valproico está indicado en STATUS EPILEPTICO",
        "Clonazepam está indicado en el PEQUEÑO MAL",
        "Clonazepam está indicado en convulsiones mioclónicas",
      ],
      correctAnswer: 1,
      explanation:
        "El valproico NO es el fármaco de primera línea para el status epiléptico. Para el status epiléptico se usan benzodiacepinas IV (diazepam, lorazepam) como primera línea, seguidas de fenitoína o fenobarbital IV. El valproico puede usarse pero no es la primera opción.",
    },
    {
      id: 27,
      question: "Señale lo VERDADERO, con respecto a acciones farmacológicas de benzodiacepinas",
      options: ["Son drogas ansiolíticas", "Son drogas sedantes", "Son drogas miorrelajantes", "Todo lo anterior es correcto"],
      correctAnswer: 3,
      explanation:
        "Las benzodiacepinas tienen múltiples efectos: ansiolítico, sedante-hipnótico, miorrelajante, anticonvulsivante y amnésico. Todos estos efectos se deben a la potenciación de la neurotransmisión GABAérgica en diferentes áreas del SNC.",
    },
    {
      id: 28,
      question: "En términos de Índice Terapéutico, ¿cuál de los siguientes parámetros caracteriza al fármaco más seguro?",
      options: ["0,8", "1", "20", "40"],
      correctAnswer: 3,
      explanation:
        "El Índice Terapéutico (IT) = DL50/DE50. Un IT mayor indica mayor seguridad porque la dosis letal está más alejada de la dosis efectiva. Un IT de 40 significa que la dosis letal es 40 veces mayor que la dosis efectiva, lo que representa el fármaco más seguro de las opciones.",
    },
    {
      id: 29,
      question: "En una emergencia ¿por qué motivo emplearía la administración endovenosa?",
      options: ["Su absorción es rápida", "No se afecta por citocromo P-450", "La biodisponibilidad es del 100%", "Porque el paciente no tolera la vía oral"],
      correctAnswer: 2,
      explanation:
        "La vía endovenosa garantiza una biodisponibilidad del 100% porque el fármaco llega directamente a la circulación sistémica sin pasar por procesos de absorción. Además, permite un inicio de acción inmediato y control preciso de la dosis, crucial en emergencias.",
    },
    {
      id: 30,
      question: "¿A qué clase de receptores pertenece el receptor de glucocorticoides?",
      options: ["Metabotrópico", "Asociados a proteína G", "Ionotrópico de sodio", "Citoplasmático"],
      correctAnswer: 3,
      explanation:
        "Los receptores de glucocorticoides son receptores CITOPLASMÁTICOS (intracelulares) que pertenecen a la superfamilia de receptores nucleares. Una vez que se une el ligando, el complejo se transloca al núcleo donde actúa como factor de transcripción.",
    },
    {
      id: 31,
      question: "Un antagonista competitivo puro se caracteriza por:",
      options: [
        "Producir un efecto opuesto al agonista",
        "Impedir la acción del agonista sin poseer eficacia",
        "No requerir la presencia de receptor de reserva",
        "Carecer de afinidad por el receptor",
      ],
      correctAnswer: 1,
      explanation:
        "Un antagonista competitivo puro tiene AFINIDAD por el receptor (se une al mismo sitio que el agonista) pero carece de EFICACIA (no produce respuesta). Bloquea la unión del agonista de manera reversible y superable aumentando la concentración de agonista.",
    },
    {
      id: 32,
      question: "¿Cuál es el mecanismo de transporte más frecuente por el cual los fármacos son absorbidos?",
      options: ["Difusión simporter", "Difusión antiporter", "Transporte activo", "Difusión simple"],
      correctAnswer: 3,
      explanation:
        "La mayoría de los fármacos se absorben por DIFUSIÓN SIMPLE (pasiva) a través de las membranas lipídicas. Este proceso no requiere energía y depende del gradiente de concentración y de las propiedades fisicoquímicas del fármaco (liposolubilidad, grado de ionización).",
    },
    {
      id: 33,
      question: "¿Qué es un profármaco?",
      options: [
        "Un fármaco que ha sido retirado del mercado por presentar reacciones adversas severas",
        "Un producto inactivo que se convierte enzimáticamente en un fármaco activo dentro del organismo",
        "Un compuesto de origen natural del que se obtiene uno o más principios activos",
        "Una droga que carece de actividad pero hace sinergia potenciando la acción de otros fármacos",
      ],
      correctAnswer: 1,
      explanation:
        "Un profármaco es un compuesto farmacológicamente INACTIVO que se transforma en el organismo (generalmente por enzimas hepáticas o plasmáticas) en un metabolito ACTIVO. Ejemplos: enalapril → enalaprilato, codeína → morfina, levodopa → dopamina.",
    },
    {
      id: 34,
      question: "Señale la opción correcta con respecto a los anestésicos locales:",
      options: [
        "Interactúan directamente con canales operados por ligandos",
        "Las fibras nerviosas en actividad frecuente son más sensibles",
        "El descenso del pH del medio aumenta sus potencias",
        "Las fibras gruesas motoras presentan un bloqueo más rápido y precoz",
      ],
      correctAnswer: 1,
      explanation:
        "Los anestésicos locales presentan 'bloqueo uso-dependiente': las fibras nerviosas que descargan con mayor frecuencia son más sensibles porque el fármaco accede mejor al canal cuando está abierto. Esto explica el bloqueo diferencial (primero dolor, luego temperatura, tacto y finalmente motor).",
    },
    {
      id: 35,
      question: "¿Por qué los pacientes asmáticos tratados con salbutamol presentan taquiarritmias como efecto adverso?",
      options: [
        "Interacción medicamentosa que interfiere con la acción farmacológica del salbutamol",
        "La hipercapnia generada por el broncoespasmo desencadena taquiarritmia",
        "El aumento de la frecuencia del uso del salbutamol provoca pérdida de selectividad por el subtipo β2",
        "Estos pacientes se insensibilizan frente al uso frecuente del salbutamol",
      ],
      correctAnswer: 2,
      explanation:
        "El uso frecuente de agonistas β2 puede llevar a pérdida de selectividad, estimulando también receptores β1 cardíacos y causando taquiarritmias. Además, a dosis altas, todos los agonistas β2 tienen cierto efecto β1. La desensibilización (tolerancia) también ocurre con uso crónico.",
    },
    {
      id: 36,
      question: "En un estudio de fase 2 con efectos adversos medidos por escore visual [1] y técnicas bioquímicas [2], seleccione la correcta:",
      options: [
        "Medición directa para [1] y uso de doble ciego para [2]",
        "Uso de ciego para [1] y doble ciego para [2]",
        "Uso de doble ciego para [1] y directa para [2]",
        "Uso de ciego tanto para [1] como para [2]",
      ],
      correctAnswer: 2,
      explanation:
        "La evaluación visual subjetiva [1] requiere DOBLE CIEGO para evitar sesgos del evaluador y del sujeto. La técnica bioquímica digitalizada [2] es objetiva y automatizada, por lo que puede ser medición DIRECTA sin riesgo de sesgo interpretativo.",
    },
    {
      id: 37,
      question: "La vida media de la atropina es de 4.3 h. Esto quiere decir que es correcto afirmar:",
      options: [
        "Después de una administración única, la concentración decae aproximadamente a D/4 al pasar 4h",
        "El valor numérico del Vd es aproximadamente 5.6 veces el valor de la depuración",
        "Si la absorción intestinal estuviera facilitada, la vida media seguiría siendo la misma",
        "Conociendo la depuración sería imposible estimar el valor del Vd",
      ],
      correctAnswer: 2,
      explanation:
        "La vida media de eliminación depende del Vd y del clearance (t½ = 0.693 × Vd/Cl), NO de la absorción. La velocidad de absorción afecta el Tmax pero no la vida media de eliminación. Por eso, aunque cambie la absorción, la vida media permanece igual.",
    },
    {
      id: 38,
      question: "La ranitidina tiene un gran volumen de distribución. Este conocimiento permite afirmar que:",
      options: [
        "Al ser similar al volumen plasmático, se concentra en líquido extracelular",
        "Como es mayor que el agua corporal total, se concentra en los tejidos",
        "Al ser mayor que el volumen extracelular, queda confinada en el plasma",
        "Como equivalente al líquido intracelular, ingresa a las células",
      ],
      correctAnswer: 1,
      explanation:
        "Un Vd mayor que el agua corporal total (~42L) indica que el fármaco se CONCENTRA EN TEJIDOS (se une a proteínas tisulares o se acumula en compartimentos específicos). Un Vd muy grande significa baja concentración plasmática porque el fármaco está mayormente fuera del plasma.",
    },
    {
      id: 39,
      question: "Una mujer medicada con benzodiacepinas amamanta a su bebé que comienza a tener compromiso del sensorio. Elija la opción correcta:",
      options: [
        "El bebé tiene inmadurez hepática y no puede metabolizar las drogas de la leche materna",
        "El pH de la leche materna produce aumento de la concentración del fármaco",
        "El bebé debería estar desnutrido para explicar hipoproteinemia",
        "Es poco probable que el compromiso del sensorio esté vinculado a dosis mínimas de la droga",
      ],
      correctAnswer: 0,
      explanation:
        "Los neonatos tienen inmadurez del sistema enzimático hepático (especialmente CYP450 y glucuronidación), lo que prolonga la vida media de las benzodiacepinas. Las BZD pasan a la leche materna y pueden acumularse en el bebé causando sedación, hipotonía y dificultad para alimentarse.",
    },
    {
      id: 40,
      question: "Un paciente con cáncer tratado con morfina recibe dextropropoxifeno y el dolor aumenta. ¿Qué explica esto?",
      options: [
        "El dextropropoxifeno es un agonista opioide μ parcial",
        "La saturación de los receptores μ provocó una regulación en menos",
        "Ambas drogas compiten por el sistema P450",
        "El dextropropoxifeno no puede actuar debido a la saturación por morfina",
      ],
      correctAnswer: 0,
      explanation:
        "El dextropropoxifeno tiene actividad de AGONISTA PARCIAL μ. En presencia de un agonista completo como morfina (que satura los receptores), un agonista parcial actúa como antagonista funcional, desplazando a la morfina y reduciendo el efecto analgésico total.",
    },
    {
      id: 41,
      question: "Con respecto a los receptores de la superfamilia esteroide, indique la opción correcta:",
      options: [
        "Se dimerizan para fijarse a los consensos regulatorios del ADN",
        "Tienen localización en la membrana y viajan al núcleo con un transportador",
        "Los que ligan glucocorticoides también ligan somatomedinas 1 y 2",
        "Forman complejos con proteínas como la HSP90",
      ],
      correctAnswer: 3,
      explanation:
        "Los receptores de esteroides en estado inactivo están unidos a proteínas chaperonas como HSP90, HSP70 y otras. Cuando el ligando (hormona) se une, el receptor se libera de las chaperonas, se dimeriza y transloca al núcleo para regular la transcripción génica.",
    },
    {
      id: 42,
      question: "Investigadores usan manganeso para crear parkinsonismo en ratas. Elija la opción correcta:",
      options: [
        "La toxicidad subaguda sirve para determinar la Dosis Letal 50",
        "La toxicidad crónica dura entre 1 y 6 meses y sirve para estudiar efectos en la progenie",
        "La toxicidad subaguda estudia cuál es el órgano sobre el que impacta la droga a dosis no letales",
        "La toxicidad crónica es inaplicable en este modelo",
      ],
      correctAnswer: 2,
      explanation:
        "Los estudios de toxicidad SUBAGUDA (14-90 días) permiten identificar órganos diana y efectos tóxicos a dosis repetidas no letales. El modelo de parkinsonismo por manganeso es un ejemplo de toxicidad subaguda que afecta específicamente los ganglios basales.",
    },
    {
      id: 43,
      question: "De los siguientes efectos de un antagonista de canales de calcio, ¿cuál es el efecto terapéutico?",
      options: ["Relajación del músculo liso arterial", "Vasodilatación", "Bloqueo de los canales lentos de calcio", "Disminución de la tensión arterial"],
      correctAnswer: 3,
      explanation:
        "El EFECTO TERAPÉUTICO es la disminución de la tensión arterial (el objetivo clínico buscado). La relajación del músculo liso y vasodilatación son efectos farmacológicos, y el bloqueo de canales de calcio es el mecanismo de acción. La cadena es: mecanismo → efecto farmacológico → efecto terapéutico.",
    },
    {
      id: 44,
      question: "Indique una ventaja farmacocinética de los análogos de insulina de acción prolongada:",
      options: [
        "Se absorbe desde el tejido subcutáneo de forma más predecible",
        "La duración del efecto no depende de la dosis",
        "La formación de dímeros justifica su mayor duración de efecto",
        "El pico de acción resulta inmediato a su administración",
      ],
      correctAnswer: 0,
      explanation:
        "Los análogos de insulina de acción prolongada (glargina, detemir) tienen absorción subcutánea más predecible y reproducible que la NPH. Esto reduce la variabilidad glicémica día a día. La glargina forma microprecipitados al pH fisiológico que se absorben lentamente.",
    },
    {
      id: 45,
      question: "Un paciente diabético recibe instrucciones para autoadministración de insulina. ¿Qué parámetro farmacocinético se modifica?",
      options: ["El metabolismo", "La eliminación", "La absorción", "La distribución"],
      correctAnswer: 2,
      explanation:
        "El sitio de aplicación, la temperatura local y la profundidad de inyección afectan la ABSORCIÓN de insulina subcutánea. El ejercicio y el calor aumentan el flujo sanguíneo local y aceleran la absorción. La inyección intramuscular (más profunda) también acelera la absorción.",
    },
    {
      id: 46,
      question: "Indique el mecanismo de acción de la dapagliflozina:",
      options: [
        "Inhibe selectiva y reversiblemente el cotransportador sodio-glucosa 2 a nivel renal",
        "Reduce la gluconeogénesis y glucogenólisis",
        "Inhibe la enzima dipeptidil-peptidasa 4 (DPP-4)",
        "Bloquea los canales de potasio dependientes de ATP en células beta",
      ],
      correctAnswer: 0,
      explanation:
        "La dapagliflozina es un inhibidor del SGLT2 (cotransportador sodio-glucosa tipo 2) en el túbulo proximal renal. Reduce la reabsorción de glucosa, aumentando su excreción urinaria (glucosuria). Es independiente de la insulina y también tiene beneficios cardiovasculares y renales.",
    },
    {
      id: 47,
      question: "Conociendo el mecanismo de acción de antieméticos, ¿cuál puede presentar parkinsonismo?",
      options: ["Ondansetrón", "Metoclopramida", "Hioscina", "Difenhidramina"],
      correctAnswer: 1,
      explanation:
        "La metoclopramida es un antagonista dopaminérgico D2. El bloqueo de receptores D2 en los ganglios basales puede producir efectos extrapiramidales como parkinsonismo, distonía aguda, acatisia y discinesia tardía. Ondansetrón (anti-5HT3) no tiene estos efectos.",
    },
    {
      id: 48,
      question: "A un paciente con hemorragia digestiva se le administra dextrano de 70 kDa. ¿Cuál es su Vd aparente (en litros)?",
      options: ["5", "4", "28", "42"],
      correctAnswer: 0,
      explanation:
        "El dextrano 70 es un expansor plasmático que permanece en el espacio intravascular debido a su alto peso molecular. Su Vd es aproximadamente igual al volumen plasmático (~3-5 litros), ya que no atraviesa las paredes capilares hacia el intersticio.",
    },
    {
      id: 49,
      question: "¿Cuál sería la fuente más adecuada para buscar información sobre un fármaco nuevo?",
      options: ["El formulario terapéutico nacional (FTN)", "Libro de textos", "Metaanálisis", "Ensayos clínicos"],
      correctAnswer: 2,
      explanation:
        "Los METAANÁLISIS combinan resultados de múltiples ensayos clínicos, proporcionando la evidencia más robusta y actualizada. Son la cúspide de la pirámide de evidencia. Para fármacos nuevos, un metaanálisis de ensayos clínicos ofrece la mejor síntesis de eficacia y seguridad disponible.",
    },
    {
      id: 50,
      question: "Ana tiene mutación heterocigota para factor V de Leiden. ¿Ante qué fármacos presenta mayor riesgo de trombosis?",
      options: ["Estatinas", "Estrógenos", "Antiinflamatorios no esteroideos", "Opioides"],
      correctAnswer: 1,
      explanation:
        "Los ESTRÓGENOS aumentan significativamente el riesgo de tromboembolismo venoso, especialmente en pacientes con trombofilia como el factor V Leiden. La combinación de estrógenos + factor V Leiden multiplica el riesgo de trombosis hasta 30-50 veces. Están contraindicados en estas pacientes.",
    },
    {
      id: 51,
      question: "Una persona con mutación homocigota recesiva para enzimas metabolizadoras CYP2:",
      options: [
        "Procesa los fármacos en tiempo y forma adecuada",
        "No es capaz de procesar los fármacos",
        "Metaboliza los fármacos de forma ultrarrápida",
        "Incrementa la acción de esta familia de enzimas",
      ],
      correctAnswer: 1,
      explanation:
        "Una mutación homocigota recesiva que inactiva las enzimas CYP2 resulta en un fenotipo 'metabolizador lento' o nulo. Estos pacientes no pueden metabolizar ciertos fármacos, lo que lleva a acumulación, mayor riesgo de toxicidad y necesidad de ajustar dosis.",
    },
    {
      id: 52,
      question: "Al seleccionar un medicamento para un anciano, se debe tener en cuenta que:",
      options: [
        "La absorción intestinal suele ser algo más rápida que en adultos",
        "La albúmina plasmática suele estar disminuida, por lo que la fracción libre es menor",
        "Los mecanismos enzimáticos son menos activos, lo que prolonga la semivida",
        "La proporción de masa magra es mayor, aumentando el Vd de fármacos lipofílicos",
      ],
      correctAnswer: 2,
      explanation:
        "En ancianos, la función hepática y renal disminuyen, reduciendo el metabolismo y la excreción de fármacos, lo que PROLONGA la vida media. Además, hay menor albúmina (más fracción libre), menos agua corporal, más grasa (aumenta Vd de lipofílicos). Se requiere ajuste de dosis.",
    },
    {
      id: 53,
      question: "Las diferencias en la respuesta a fármacos en niños están determinadas por factores farmacocinéticos, entre ellos:",
      options: [
        "El pH urinario muy básico potencia la excreción de ácidos débiles",
        "La absorción oral suele ser más rápida por las características del peristaltismo",
        "La absorción cutánea es menor debido al espesor de la piel del niño",
        "Existe mayor cantidad de agua en compartimentos corporales y menor fijación a proteínas",
      ],
      correctAnswer: 3,
      explanation:
        "Los niños tienen mayor porcentaje de agua corporal total (hasta 80% en neonatos vs 60% en adultos) y menor concentración de proteínas plasmáticas. Esto aumenta el Vd de fármacos hidrosolubles y la fracción libre de fármacos que se unen a proteínas.",
    },
    {
      id: 54,
      question: "¿Qué fuente de información es más útil para evaluar la seguridad de un analgésico nuevo?",
      options: [
        "Un libro de texto actualizado",
        "Un metaanálisis publicado en Cochrane",
        "Un ensayo clínico controlado de buena calidad",
        "Estudio de casos y controles, y estudio de cohortes",
      ],
      correctAnswer: 3,
      explanation:
        "Para evaluar SEGURIDAD (efectos adversos raros), los estudios observacionales (casos-controles y cohortes) son mejores porque incluyen más pacientes y seguimiento más prolongado que los ensayos clínicos. Los efectos adversos raros no se detectan bien en ensayos clínicos por su tamaño limitado.",
    },
    {
      id: 55,
      question: "Un medicamento puede ser retirado del mercado en fase IV porque:",
      options: [
        "La experiencia en el mercado es limitada y eso implica alto riesgo",
        "Carece de ensayos clínicos controlados",
        "La seguridad solo se pudo conocer cuando permaneció mucho tiempo en el mercado",
        "A pesar de ser eficaz y seguro, no cumplió con ser accesible",
      ],
      correctAnswer: 2,
      explanation:
        "La fase IV (farmacovigilancia post-comercialización) permite detectar efectos adversos RAROS que no se identificaron en las fases previas debido al número limitado de pacientes. Ejemplos: rofecoxib (Vioxx) retirado por riesgo cardiovascular detectado años después de su comercialización.",
    },
    {
      id: 56,
      question: "¿En qué etapa del estudio de un nuevo medicamento se realizan los ensayos clínicos que documentan su eficacia?",
      options: ["Fase I", "Fase II", "Fase III", "Fase IV"],
      correctAnswer: 2,
      explanation:
        "La FASE III son los ensayos clínicos pivotales que documentan la eficacia y seguridad del fármaco comparado con placebo o tratamiento estándar. Son estudios grandes (cientos a miles de pacientes), multicéntricos, aleatorizados y doble ciego. Sus resultados determinan la aprobación regulatoria.",
    },
    {
      id: 57,
      question: "Para tratar el parkinsonismo por neurolépticos, ¿cuál fármaco emplearía?",
      options: ["L-Dopa", "Trihexifenidilo", "Amantadina", "Selegilina"],
      correctAnswer: 1,
      explanation:
        "El TRIHEXIFENIDILO es un anticolinérgico antimuscarínico de acción central, útil para el parkinsonismo inducido por neurolépticos. La L-Dopa no se usa porque los neurolépticos bloquean los receptores dopaminérgicos, anulando su efecto. Los anticolinérgicos corrigen el desbalance dopamina/acetilcolina.",
    },
    {
      id: 58,
      question: "Según su mecanismo de acción, ¿cuál fármaco sería mejor para un paciente diabético obeso?",
      options: ["Meglitinidas", "Metformina", "Acarbosa", "Sitagliptina"],
      correctAnswer: 1,
      explanation:
        "La METFORMINA es el fármaco de elección en diabéticos tipo 2 obesos. Reduce la producción hepática de glucosa, mejora la sensibilidad periférica a insulina, NO produce hipoglucemia ni aumento de peso, y tiene beneficios cardiovasculares. Es el único antidiabético que ha demostrado reducir mortalidad.",
    },
    {
      id: 59,
      question: "Un paciente con tratamiento hipolipemiante refiere mialgias y aumento de CPK. ¿Cuál fármaco sospecharía?",
      options: ["Ácido nicotínico", "Colestiramina", "Ezetimiba", "Atorvastatina"],
      correctAnswer: 3,
      explanation:
        "Las ESTATINAS (como atorvastatina) pueden causar miopatía, desde mialgias leves hasta rabdomiólisis. El aumento de CPK indica daño muscular. El riesgo aumenta con dosis altas, interacciones (fibratos, macrólidos) y factores predisponentes. Requiere suspensión del fármaco.",
    },
    {
      id: 60,
      question: "¿En qué etapa se estudia el fármaco para determinar la mejor vía de administración y máxima dosis tolerada?",
      options: ["Fase I", "Fase II", "Fase III", "Fase IV"],
      correctAnswer: 0,
      explanation:
        "La FASE I se realiza en voluntarios sanos (20-100 personas) para estudiar farmacocinética, farmacodinamia, tolerabilidad y determinar la dosis máxima tolerada. Se evalúan diferentes vías de administración, dosis únicas y múltiples, y efectos adversos dosis-dependientes.",
    },
    {
      id: 61,
      question: "Para revertir el bloqueo neuromuscular con neostigmina, ¿qué bloqueante se empleó en la cirugía?",
      options: ["Succinilcolina", "Diazepam", "Baclofén", "Vecuronio"],
      correctAnswer: 3,
      explanation:
        "El VECURONIO es un bloqueante neuromuscular NO DESPOLARIZANTE (competitivo) que puede revertirse con anticolinesterásicos como neostigmina. La succinilcolina es despolarizante y NO se revierte con neostigmina (la empeoraría). Diazepam y baclofén actúan a nivel central, no en la placa motora.",
    },
    {
      id: 62,
      question: "El empleo de glucocorticoides en dosis farmacológicas prolongadas puede causar todos los siguientes EXCEPTO:",
      options: ["Susceptibilidad a infecciones", "Desarrollo de hipoglucemia", "Miopatía", "Osteoporosis"],
      correctAnswer: 1,
      explanation:
        "Los glucocorticoides causan HIPERGLUCEMIA (no hipoglucemia) porque antagonizan la acción de insulina, aumentan la gluconeogénesis y causan resistencia periférica a la insulina. Pueden desencadenar diabetes esteroidea. Los otros efectos adversos mencionados sí son causados por corticoides crónicos.",
    },
    {
      id: 63,
      question: "Señale lo verdadero con respecto al sistema nervioso simpático:",
      options: [
        "Es de origen torácico-lumbar",
        "Las fibras nerviosas preganglionares son adrenérgicas",
        "Las fibras nerviosas postganglionares son colinérgicas",
        "Es un sistema anabólico",
      ],
      correctAnswer: 0,
      explanation:
        "El sistema simpático tiene origen TORACOLUMBAR (T1-L2/L3). Las fibras preganglionares son COLINÉRGICAS (liberan ACh en el ganglio), y las postganglionares son NORADRENÉRGICAS (excepto las de glándulas sudoríparas). Es un sistema CATABÓLICO (respuesta de lucha o huida).",
    },
    {
      id: 64,
      question: "En las terminaciones nerviosas adrenérgicas:",
      options: [
        "El precursor de adrenalina es tirosina",
        "Se forma DOPA en la vesícula granulosa",
        "La enzima MAO actúa en la célula post-sináptica",
        "La enzima COMT actúa en terminal nerviosa presináptica",
      ],
      correctAnswer: 0,
      explanation:
        "La síntesis de catecolaminas comienza con TIROSINA → DOPA (tirosina hidroxilasa en citoplasma) → dopamina (DOPA descarboxilasa) → noradrenalina (dopamina β-hidroxilasa en vesículas) → adrenalina (PNMT en médula suprarrenal). MAO actúa intracelularmente, COMT extracelularmente.",
    },
    {
      id: 65,
      question: "Señale lo FALSO con respecto al mecanismo de acción de fármacos en el compartimento celular:",
      options: [
        "Los fármacos de nivel 1 se ligan a receptores de neurotransmisores",
        "Los fármacos de nivel 2 modifican la actividad de la proteína G",
        "Los fármacos de nivel 3 modifican la actividad de segundos mensajeros",
        "Adrenalina es un fármaco de nivel 5",
      ],
      correctAnswer: 3,
      explanation:
        "La adrenalina es un fármaco de NIVEL 1, ya que se liga directamente a receptores adrenérgicos (α y β) en la membrana celular. No actúa a niveles intracelulares más profundos (proteína G, segundos mensajeros, quinasas), sino que inicia la cascada desde el receptor.",
    },
    {
      id: 66,
      question: "Señale lo verdadero:",
      options: [
        "FENILEFRINA es agonista β adrenérgico",
        "PRAZOSIN es antagonista alfa 1 adrenérgico",
        "YOHIMBINA es agonista alfa 2 adrenérgico",
        "CLONIDINA es agonista beta 2 adrenérgico",
      ],
      correctAnswer: 1,
      explanation:
        "PRAZOSÍN es un antagonista selectivo α1-adrenérgico, usado como antihipertensivo y en hiperplasia prostática. Fenilefrina es agonista α1 (no β), yohimbina es antagonista α2 (no agonista), y clonidina es agonista α2 (no β2).",
    },
    {
      id: 67,
      question: "Señale lo FALSO con respecto al receptor beta adrenérgico:",
      options: [
        "Su activación genera broncodilatación",
        "Su activación genera vasodilatación coronaria",
        "Su activación genera vasodilatación periférica",
        "Su activación genera menor secreción de insulina",
      ],
      correctAnswer: 3,
      explanation:
        "La activación de receptores β2 en el páncreas AUMENTA (no disminuye) la secreción de insulina. Los receptores α2 son los que inhiben la liberación de insulina. Los efectos β correctos son: broncodilatación (β2), vasodilatación (β2), taquicardia e inotropismo + (β1).",
    },
    {
      id: 68,
      question: "Señale lo verdadero:",
      options: [
        "El receptor ionotrópico funciona con segundo mensajero",
        "El receptor alfa 1 adrenérgico es ionotrópico",
        "El receptor beta 1 adrenérgico es ionotrópico",
        "El receptor beta 2 adrenérgico es metabotrópico",
      ],
      correctAnswer: 3,
      explanation:
        "Los receptores β2 (y todos los adrenérgicos α y β) son METABOTRÓPICOS (acoplados a proteína G). Los receptores β están acoplados a Gs, que activa adenilato ciclasa y aumenta AMPc. Los receptores ionotrópicos (como nicotínicos) son canales iónicos que NO usan segundos mensajeros.",
    },
    {
      id: 69,
      question: "Señale lo verdadero con respecto a los receptores beta adrenérgicos postganglionares:",
      options: [
        "Funcionan con proteína Gs",
        "Son presinápticos",
        "Noradrenalina en bajo nivel interacciona con estos receptores",
        "Su activación aumenta la liberación de noradrenalina",
      ],
      correctAnswer: 0,
      explanation:
        "Los receptores β-adrenérgicos están acoplados a proteína Gs (estimuladora), que activa la adenilato ciclasa aumentando AMPc intracelular. Son principalmente POSTsinápticos en los órganos efectores. Los receptores β2 presinápticos sí existen y facilitan la liberación de NA.",
    },
    {
      id: 70,
      question: "Señale lo FALSO con respecto a los receptores alfa 2 adrenérgicos postganglionares:",
      options: [
        "Funcionan con proteína Gq",
        "Son presinápticos",
        "Noradrenalina en alto nivel interacciona con estos receptores",
        "Su activación bloquea la liberación de noradrenalina",
      ],
      correctAnswer: 0,
      explanation:
        "Los receptores α2 funcionan con proteína Gi (inhibitoria), NO Gq. Gq es la proteína asociada a receptores α1 que activa fosfolipasa C. Los α2 presinápticos, al activarse por altos niveles de NA, inhiben la adenilato ciclasa y reducen la liberación de más NA (retroalimentación negativa).",
    },
    {
      id: 71,
      question: "Señale lo verdadero con respecto a la acción intracelular de receptores adrenérgicos:",
      options: [
        "El receptor β1 inactiva la proteinquinasa",
        "El receptor β2 funciona con proteína Gi",
        "El receptor alfa 1 activa a la proteinquinasa",
        "El receptor alfa 2 presináptico funciona con proteína Gs",
      ],
      correctAnswer: 2,
      explanation:
        "El receptor α1 (acoplado a Gq) activa la fosfolipasa C → IP3 + DAG → DAG activa la proteinquinasa C (PKC). Los receptores β activan PKA (no la inactivan), β2 usa Gs (no Gi), y α2 usa Gi (no Gs).",
    },
    {
      id: 72,
      question: "Señale lo FALSO con respecto a la acción intracelular de los receptores adrenérgicos:",
      options: [
        "En músculo liso bronquial, el receptor β2 activa a la proteinquinasa",
        "En músculo liso bronquial, el receptor β2 activa una proteína funcional",
        "En músculo liso bronquial, la activación del receptor β2 reduce el calcio iónico",
        "En músculo cardíaco, la activación del receptor β1 reduce el calcio iónico",
      ],
      correctAnswer: 3,
      explanation:
        "En músculo cardíaco, la activación β1 AUMENTA (no reduce) el calcio intracelular, causando mayor contractilidad (inotropismo +). El β1 activa PKA que fosforila canales de calcio tipo L, aumentando la entrada de Ca2+. En músculo liso bronquial, β2 reduce calcio causando relajación.",
    },
    {
      id: 73,
      question: "Señale lo verdadero con respecto a la activación de receptores adrenérgicos:",
      options: [
        "El receptor alfa 1 genera contracción del músculo radial del iris",
        "El receptor β2 genera contracción de arteriolas del músculo esquelético",
        "El receptor β1 genera aumento de la motilidad intestinal",
        "El receptor β1 genera disminución de la secreción de renina",
      ],
      correctAnswer: 0,
      explanation:
        "La estimulación α1 del músculo radial del iris produce MIDRIASIS (dilatación pupilar) por contracción del músculo dilatador de la pupila. β2 produce vasodilatación (no contracción), la activación simpática inhibe (no aumenta) la motilidad intestinal, y β1 aumenta (no disminuye) la renina.",
    },
    {
      id: 74,
      question: "Señale lo FALSO con respecto a la activación de los siguientes receptores adrenérgicos:",
      options: [
        "El receptor alfa genera contracción del útero",
        "El receptor alfa genera secreción localizada de glándulas sudoríparas",
        "El receptor alfa genera aumento de la secreción de insulina",
        "En glándulas salivales, el receptor alfa genera secreción de agua",
      ],
      correctAnswer: 2,
      explanation:
        "Los receptores α2 en células β pancreáticas INHIBEN (no aumentan) la secreción de insulina. Es un mecanismo de la respuesta de estrés (simpática) que mantiene la glucemia elevada. Los β2, por el contrario, estimulan la liberación de insulina.",
    },
    {
      id: 75,
      question: "Señale lo FALSO:",
      options: [
        "NORADRENALINA no tiene radical metilo",
        "ADRENALINA se metaboliza en el hígado",
        "DOPAMINA carece de hidroxilo en la cadena lateral",
        "ISOPROTERENOL tiene acciones beta adrenérgicas",
      ],
      correctAnswer: 2,
      explanation:
        "La DOPAMINA SÍ tiene un hidroxilo en la cadena lateral (es una catecolamina: tiene catecol + cadena lateral con amina). Lo que le falta es el hidroxilo en el carbono β de la cadena lateral que sí tiene la noradrenalina. Noradrenalina no tiene metilo en el N (lo tiene adrenalina).",
    },
    {
      id: 76,
      question: "Señale lo verdadero:",
      options: [
        "FENILEFRINA no se administra por vía oral",
        "METOXAMINA tiene acción en sistema nervioso central",
        "METARAMINOL es antagonista alfa adrenérgico",
        "DOBUTAMINA es una catecolamina",
      ],
      correctAnswer: 3,
      explanation:
        "La DOBUTAMINA es una catecolamina sintética (tiene el núcleo catecol), agonista β1 selectivo usado como inotrópico en insuficiencia cardíaca. Fenilefrina SÍ se administra oral, metoxamina no penetra el SNC (es polar), y metaraminol es agonista (no antagonista) α.",
    },
    {
      id: 77,
      question: "Señale lo FALSO con respecto a ANFETAMINA:",
      options: [
        "Es una fenilamina",
        "En su estructura química posee un núcleo bencénico",
        "Se administra por vía oral",
        "No posee acción simpaticomimética indirecta",
      ],
      correctAnswer: 3,
      explanation:
        "La anfetamina SÍ tiene acción simpaticomimética INDIRECTA: entra a la terminal nerviosa, desplaza la noradrenalina de las vesículas y promueve su liberación al espacio sináptico. También inhibe la MAO. Es el prototipo de simpaticomimético indirecto.",
    },
    {
      id: 78,
      question: "Señale lo FALSO:",
      options: [
        "Los derivados de imidazolina son vasoconstrictores nasales",
        "Los derivados de imidazolina están contraindicados con fármacos IMAO",
        "Los derivados de imidazolina están contraindicados en glaucoma de ángulo cerrado",
        "NAFAZOLINA se administra por vía oral",
      ],
      correctAnswer: 3,
      explanation:
        "La NAFAZOLINA se administra por vía TÓPICA (nasal u oftálmica), no oral. Es un agonista α-adrenérgico usado como descongestionante nasal y para enrojecimiento ocular. Su administración sistémica causaría efectos cardiovasculares indeseados.",
    },
    {
      id: 79,
      question: "Señale lo verdadero con respecto a DOPAMINA:",
      options: [
        "Se usa en el shock cardiogénico",
        "En dosis de 2 mcg/kg/minuto produce vasodilatación renal",
        "En dosis de 10 mcg/kg/minuto produce aumento del VMC",
        "Todo lo anterior es correcto",
      ],
      correctAnswer: 3,
      explanation:
        "La dopamina tiene efectos dosis-dependientes: dosis bajas (1-3 μg/kg/min) → efecto dopaminérgico (vasodilatación renal), dosis intermedias (3-10 μg/kg/min) → efecto β1 (↑ gasto cardíaco), dosis altas (>10 μg/kg/min) → efecto α (vasoconstricción). Útil en shock cardiogénico.",
    },
    {
      id: 80,
      question: "Señale lo FALSO con respecto a DOPAMINA:",
      options: [
        "Su vida media es muy breve",
        "Está contraindicada en pacientes tratados con halotano",
        "Está contraindicada en pacientes tratados con fármacos IMAO",
        "Está indicada en pacientes con feocromocitoma",
      ],
      correctAnswer: 3,
      explanation:
        "La dopamina está CONTRAINDICADA en feocromocitoma porque podría precipitar crisis hipertensiva severa. El feocromocitoma ya produce catecolaminas en exceso. La dopamina sí está contraindicada con IMAO (potenciación) y con halotano (arritmias).",
    },
    {
      id: 81,
      question: "Señale lo verdadero:",
      options: [
        "DOPAMINA produce vasodilatación",
        "NORADRENALINA está indicada en shock anafiláctico",
        "ISOPROTERENOL genera vasoconstricción",
        "ADRENALINA está contraindicada en pacientes con paro cardíaco",
      ],
      correctAnswer: 1,
      explanation:
        "La NORADRENALINA está indicada en shock anafiláctico refractario a adrenalina, por su potente efecto vasoconstrictor α1 que revierte la hipotensión severa. Dopamina a dosis altas produce vasoconstricción, isoproterenol produce vasodilatación (β), y adrenalina es el fármaco de elección en paro cardíaco.",
    },
    {
      id: 82,
      question: "Señale lo FALSO:",
      options: [
        "FENILEFRINA posee acción simpaticomimética directa",
        "TIRAMINA tiene acción alfa adrenérgica",
        "ISOXSUPRINA genera contracción uterina",
        "EFEDRINA está indicada en pacientes con asma bronquial",
      ],
      correctAnswer: 2,
      explanation:
        "La ISOXSUPRINA es un agonista β2 que produce RELAJACIÓN uterina (tocolítico), no contracción. Se usaba para prevenir parto prematuro. La contracción uterina está mediada por receptores α-adrenérgicos y oxitocina.",
    },
    {
      id: 83,
      question: "El transporte de sustancias a través de membranas corporales:",
      options: ["Es por difusión simple", "Es por ultrafiltración", "Es por transporte activo", "Todo lo anterior es correcto"],
      correctAnswer: 3,
      explanation:
        "Las sustancias atraviesan membranas por múltiples mecanismos: difusión simple (moléculas liposolubles), difusión facilitada, transporte activo (requiere ATP), ultrafiltración (a través de poros, dependiente de presión hidrostática), pinocitosis, etc. Cada mecanismo es adecuado para diferentes tipos de moléculas.",
    },
    {
      id: 84,
      question: "En la difusión simple de sustancias a través de membranas corporales:",
      options: ["La fuente de energía es la hidrólisis de ATP", "Se transporta sustancia hidrosoluble", "No posee selectividad", "Posee competitividad"],
      correctAnswer: 2,
      explanation:
        "La difusión simple es un proceso PASIVO que NO requiere energía (no usa ATP), transporta moléculas LIPOSOLUBLES pequeñas, NO es selectiva (cualquier molécula con las propiedades adecuadas puede pasar), y NO presenta competitividad ni saturabilidad.",
    },
    {
      id: 85,
      question: "Teniendo en cuenta la fórmula del pKa para un ácido:",
      options: [
        "Cuando el pH es menor que el pKa predomina el ácido no ionizado",
        "El numerador es la concentración molecular del ácido ionizado",
        "En medio ácido siempre predomina el ácido no ionizado",
        "Cuando el pH es mayor que el pKa predomina el ácido protonado",
      ],
      correctAnswer: 0,
      explanation:
        "Según la ecuación de Henderson-Hasselbalch: cuando pH < pKa, predomina la forma protonada (no ionizada) del ácido (HA). Cuando pH > pKa, predomina la forma ionizada (A-). Los ácidos débiles están más no ionizados (y por tanto mejor absorbidos) en pH ácido.",
    },
    {
      id: 86,
      question: "Señale lo verdadero:",
      options: [
        "En sangre las drogas solamente circulan unidas a proteínas plasmáticas",
        "Las drogas hidrosolubles ingresan al SNC por difusión simple",
        "A la biofase llegan las drogas libres en plasma",
        "Todo lo anterior es correcto",
      ],
      correctAnswer: 2,
      explanation:
        "Solo la fracción LIBRE (no unida a proteínas) puede difundir hacia los tejidos y alcanzar la biofase (sitio de acción). Las drogas en sangre circulan tanto libres como unidas a proteínas. Las drogas hidrosolubles NO atraviesan la barrera hematoencefálica por difusión simple.",
    },
    {
      id: 87,
      question: "Señale lo correcto con respecto a la interacción del AAS con la ciclooxigenasa:",
      options: ["Es el efecto fisiológico del AAS", "Es el efecto biológico del AAS", "Es el sitio de acción del AAS", "Es el mecanismo de acción del AAS"],
      correctAnswer: 3,
      explanation:
        "La inhibición irreversible de la ciclooxigenasa por acetilación es el MECANISMO DE ACCIÓN del AAS. El sitio de acción sería la enzima COX misma. Los efectos fisiológicos/biológicos serían las consecuencias de esa inhibición (reducción de prostaglandinas, antiinflamación, antiagregación).",
    },
    {
      id: 88,
      question: "Señale lo incorrecto sobre farmacocinética:",
      options: [
        "Se ocupa de la distribución de las drogas",
        "Es independiente de la posología de las drogas",
        "Determina la concentración de una droga en su sitio de acción",
        "Determina la duración de la acción de una droga",
      ],
      correctAnswer: 1,
      explanation:
        "La farmacocinética NO es independiente de la posología; de hecho, la posología (dosis, intervalo, vía) está determinada por los parámetros farmacocinéticos (Vd, clearance, vida media, biodisponibilidad). La farmacocinética permite calcular las dosis óptimas.",
    },
    {
      id: 89,
      question: "Señale lo FALSO:",
      options: [
        "Para que una droga genere efectos debe llegar a la biofase",
        "En la administración extravascular existe absorción",
        "En la administración intravascular existe absorción para que la droga llegue al plasma",
        "En las drogas hidrosolubles predomina la droga libre en el plasma",
      ],
      correctAnswer: 2,
      explanation:
        "En la administración INTRAVASCULAR (IV) NO hay absorción porque el fármaco se administra directamente en el torrente sanguíneo. La biodisponibilidad es del 100% y no hay proceso de absorción. La absorción solo ocurre en vías extravasculares (oral, IM, SC, etc.).",
    },
    {
      id: 90,
      question: "Señale lo verdadero:",
      options: [
        "Las indicaciones de una droga se relacionan especialmente con su farmacocinética",
        "Las contraindicaciones de una droga se relacionan especialmente con la farmacodinamia",
        "La toxicología de una droga se relaciona con su posología",
        "La toxicología de una droga se relaciona con su farmacocinética",
      ],
      correctAnswer: 3,
      explanation:
        "La toxicología se relaciona con la FARMACOCINÉTICA porque la acumulación tóxica depende de la absorción, distribución, metabolismo y eliminación. Un fármaco con clearance reducido (ej. insuficiencia renal) se acumula y puede alcanzar niveles tóxicos. Las indicaciones dependen más de la farmacodinamia.",
    },
    {
      id: 91,
      question: "Según el proceso neurofisiológico de la transmisión del dolor, ¿qué fármaco afecta la modulación descendente inhibitoria?",
      options: ["Ibuprofeno", "Tramadol", "Meloxicam", "Prednisona"],
      correctAnswer: 1,
      explanation:
        "El TRAMADOL potencia las vías inhibitorias descendentes porque inhibe la recaptación de serotonina y noradrenalina, además de ser agonista μ opioide débil. Estas monoaminas modulan la transmisión del dolor a nivel espinal. Los AINE actúan periféricamente, no en vías descendentes.",
    },
    {
      id: 92,
      question: "¿Cuál es el mecanismo de acción del celecoxib?",
      options: ["Inhibición de COX 1", "Inhibición de COX 2", "Inhibición de COX 3", "Inhibición de fosfolipasa A2"],
      correctAnswer: 1,
      explanation:
        "El CELECOXIB es un inhibidor selectivo de la COX-2 (coxib). Esta selectividad reduce los efectos gastrointestinales (la COX-1 gástrica queda intacta) pero mantiene el efecto antiinflamatorio (COX-2 es la isoforma inducible en inflamación). Aumenta el riesgo cardiovascular.",
    },
    {
      id: 93,
      question: "¿Cuál es el efecto adverso más frecuente de los AINES?",
      options: ["Úlceras gastrointestinales", "Cardiopatías isquémicas", "Depresión respiratoria", "Nefrotoxicidad"],
      correctAnswer: 0,
      explanation:
        "Los efectos adversos GASTROINTESTINALES (dispepsia, gastritis, úlceras, hemorragias) son los más frecuentes con AINE. Se deben a la inhibición de COX-1 que reduce las prostaglandinas protectoras de la mucosa gástrica (PGE2). La nefrotoxicidad y efectos CV son menos frecuentes.",
    },
    {
      id: 94,
      question: "¿A qué denominamos biofase en farmacología?",
      options: [
        "A la fase donde se produce la metabolización de la droga",
        "Espacio biofísico donde se produce la absorción de la droga",
        "Espacio biofísico en que se encuentra la droga con su órgano blanco",
        "A la fase donde se produce la eliminación de la droga",
      ],
      correctAnswer: 2,
      explanation:
        "La BIOFASE es el compartimiento o espacio donde el fármaco interactúa con su receptor/diana para producir el efecto farmacológico. Es el 'sitio de acción' donde la droga se encuentra con su órgano blanco. Puede ser diferente al sitio de administración o al plasma.",
    },
    {
      id: 95,
      question: "¿Cuál es el cociente que define el índice terapéutico de un fármaco?",
      options: ["DE50/DL50", "DE99/DL1", "DL50/DE50", "DL1/DE99"],
      correctAnswer: 2,
      explanation:
        "El Índice Terapéutico (IT) = DL50/DE50 (Dosis Letal 50 / Dosis Efectiva 50). Indica cuántas veces mayor es la dosis letal respecto a la efectiva. Un IT alto indica mayor seguridad. El margen de seguridad (DL1/DE99) es más estricto pero menos usado.",
    },
    {
      id: 96,
      question: "La intoxicación por organofosforado es irreversible por el siguiente motivo:",
      options: ["Agotamiento molecular del receptor", "Taquifilaxia", "Regulación hacia arriba del receptor", "Formación de enlaces covalentes"],
      correctAnswer: 3,
      explanation:
        "Los organofosforados forman un ENLACE COVALENTE con la acetilcolinesterasa, fosforilándola irreversiblemente. Este proceso se llama 'envejecimiento' y hace que la enzima quede permanentemente inactivada. Se requiere síntesis de nueva enzima para recuperar la función. La pralidoxima puede revertirlo si se usa antes del envejecimiento.",
    },
    {
      id: 97,
      question: "¿Cuál de los siguientes opiáceos es un agonista parcial?",
      options: ["Buprenorfina", "Morfina", "Naloxona", "Fentanilo"],
      correctAnswer: 0,
      explanation:
        "La BUPRENORFINA es un agonista PARCIAL de receptores μ opioides (alta afinidad, baja eficacia). Tiene 'efecto techo' para depresión respiratoria, lo que la hace más segura. También es antagonista κ. Morfina y fentanilo son agonistas completos; naloxona es antagonista puro.",
    },
    {
      id: 98,
      question: "¿Cuál es la opción correcta aplicada a formas farmacéuticas endovenosas?",
      options: ["Rápido comienzo de acción", "Gran biodisponibilidad", "Mayor índice terapéutico", "A y B son correctas"],
      correctAnswer: 3,
      explanation:
        "La vía IV ofrece: 1) Biodisponibilidad del 100% (sin pérdidas por absorción o primer paso), 2) Inicio de acción inmediato (segundos). El índice terapéutico NO cambia por la vía de administración, depende del fármaco mismo. Las opciones A y B son correctas.",
    },
    {
      id: 99,
      question: "Señale la opción correcta en relación a la potencia de un fármaco:",
      options: [
        "Es más potente cuando requiere dosis menores para producir efecto",
        "Es más potente cuando requiere dosis mayores para producir efecto",
        "No tiene relación con la dosis",
        "Ninguna es correcta",
      ],
      correctAnswer: 0,
      explanation:
        "La POTENCIA se refiere a la cantidad de fármaco necesaria para producir un efecto determinado. Un fármaco es MÁS POTENTE si produce el mismo efecto con MENOR dosis (menor DE50). No confundir con eficacia, que es el efecto máximo alcanzable independientemente de la dosis.",
    },
    {
      id: 100,
      question: "¿Cuántos dominios transmembrana tiene un receptor ionotrópico de acetilcolina?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      explanation:
        "El receptor nicotínico de acetilcolina (ionotrópico) está formado por 5 SUBUNIDADES, cada una con 4 dominios transmembrana (M1-M4). Las 5 subunidades (2α, β, γ, δ en músculo) forman un pentámero que constituye el canal iónico permeable a Na+ y K+.",
    },
  ],
};
