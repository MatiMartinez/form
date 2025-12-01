import type { Exam } from "./types";

export const exam4: Exam = {
  id: "febrero",
  title: "Examen Febrero",
  description: "30 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "Las kinasas involucradas en la fosforilación de fármacos:",
      options: [
        "Tienen baja especificidad por su sustrato",
        "Tienen nula especificidad por su sustrato",
        "Tienen alta especificidad por su sustrato",
        "No tienen afinidad por su sustrato",
      ],
      correctAnswer: 0,
      explanation:
        "Las kinasas (proteinquinasas) involucradas en la fosforilación de fármacos y proteínas tienen BAJA ESPECIFICIDAD por sus sustratos. Aunque son más específicas que las enzimas metabolizadoras de fármacos, pueden fosforilar múltiples sustratos con secuencias consenso similares. Por ejemplo, la proteína quinasa A (PKA) puede fosforilar numerosas proteínas que contengan el motivo de reconocimiento. Esta baja especificidad permite que un mismo sistema de señalización (como AMPc/PKA) regule múltiples procesos celulares simultáneamente.",
    },
    {
      id: 2,
      question: "Ante una alcalosis plasmática, el volumen de distribución aparente de los fármacos:",
      options: [
        "Aumenta en fármacos que son bases débiles",
        "Disminuye en fármacos que son ácidos débiles",
        "Aumenta en fármacos que son ácidos fuertes",
        "Aumenta en fármacos que son ácidos débiles",
      ],
      correctAnswer: 0,
      explanation:
        "En alcalosis, el pH del plasma aumenta. Para una base débil, cuando el pH es mayor que el pKa, predomina la forma NO IONIZADA (liposoluble). Esta forma puede atravesar membranas fácilmente y distribuirse hacia los tejidos, aumentando el volumen de distribución. Por el contrario, los ácidos débiles en alcalosis se ionizan más (se vuelven más hidrosolubles), quedando más confinados al plasma y reduciendo su Vd. Este principio es el opuesto a lo que ocurre en acidosis.",
    },
    {
      id: 3,
      question: "¿Cuál de los siguientes fármacos es un inductor enzimático?",
      options: ["Bicarbonato de sodio", "Eritromicina", "Ranitidina", "Fenobarbital"],
      correctAnswer: 3,
      explanation:
        "El FENOBARBITAL es uno de los inductores enzimáticos más potentes del citocromo P450. Activa el receptor nuclear PXR, aumentando la transcripción de enzimas como CYP3A4, CYP2C9 y CYP2C19. Esto acelera el metabolismo de múltiples fármacos, reduciendo su eficacia. El bicarbonato de sodio no afecta enzimas, la eritromicina es INHIBIDORA (no inductora), y la ranitidina tiene mínimos efectos sobre CYP450. Otros inductores importantes incluyen rifampicina, carbamazepina y fenitoína.",
    },
    {
      id: 4,
      question: "De los siguientes ¿cuál es un antagonista muscarínico?",
      options: ["Nicotina", "Atropina", "Neostigmina", "Tizanidina"],
      correctAnswer: 1,
      explanation:
        "La ATROPINA es un antagonista competitivo de los receptores muscarínicos de acetilcolina. Bloquea los efectos parasimpáticos, produciendo midriasis, taquicardia, sequedad de boca, retención urinaria y reducción de secreciones. La nicotina es agonista de receptores nicotínicos, la neostigmina es inhibidor de acetilcolinesterasa (aumenta ACh), y la tizanidina es un agonista α2-adrenérgico central usado como miorrelajante. La atropina es el prototipo de los anticolinérgicos/antimuscarínicos.",
    },
    {
      id: 5,
      question: "¿Qué efectos puede ocasionar la lidocaína en dosis tóxicas?",
      options: ["Convulsiones", "Retención urinaria", "Bradiarritmias", "a y c son correctas"],
      correctAnswer: 3,
      explanation:
        "La lidocaína en dosis tóxicas puede causar CONVULSIONES (por bloqueo de canales de Na+ en neuronas del SNC, causando hiperexcitabilidad) y BRADIARRITMIAS (por bloqueo de canales de Na+ en células cardíacas, reduciendo la conducción y el automatismo). La progresión tóxica es: síntomas del SNC (mareos, parestesias, convulsiones) seguidos de depresión cardiorrespiratoria. La retención urinaria no es un efecto de la lidocaína. Las dosis máximas recomendadas son 4.5 mg/kg sin epinefrina y 7 mg/kg con epinefrina.",
    },
    {
      id: 6,
      question: "Con respecto a antagonistas irreversibles, señale la opción correcta:",
      options: [
        "Presentan menor afinidad que los agonistas",
        "Tienen actividad intrínseca mayor a uno",
        "Poseen similar eficacia con respecto a los agonistas, pero menos potencia",
        "Ninguna es correcta",
      ],
      correctAnswer: 3,
      explanation:
        "Los antagonistas irreversibles se unen COVALENTEMENTE al receptor, inactivándolo permanentemente. No tienen actividad intrínseca (eficacia = 0), no compiten con agonistas (no hay competencia reversible), y su efecto NO puede revertirse aumentando la dosis del agonista. Ejemplos: fenoxibenzamina (antagonista α-adrenérgico irreversible), algunos inhibidores de MAO. El bloqueo persiste hasta que se sintetizan nuevos receptores. Ninguna de las opciones A, B o C es correcta para antagonistas irreversibles.",
    },
    {
      id: 7,
      question:
        "En el siguiente gráfico (considerar como cero el punto de origen para ambas variables) se muestra el efecto de tres fármacos sobre el diámetro bronquial. Seleccione la opción correcta:",
      options: [
        "A es un agonista parcial de receptores beta adrenérgicos",
        "B es un agonista irreversible beta2 adrenérgico",
        "C es un agonista total de receptores beta adrenérgicos",
        "Todas son correctas",
      ],
      correctAnswer: 2,
      explanation:
        "Un agonista TOTAL de receptores β-adrenérgicos puede alcanzar el efecto máximo teórico (100% de broncodilatación). En una curva dosis-respuesta, el agonista total alcanza la meseta máxima. Los agonistas parciales tienen eficacia menor (no alcanzan el máximo), y los antagonistas irreversibles eliminan la curva (no desplazan). Basándose en la descripción típica de curvas, C representa un agonista total que produce el efecto máximo al activar completamente los receptores β2 bronquiales.",
    },
    {
      id: 8,
      question:
        "En el siguiente gráfico se indican las curvas tiempo–acción de tres fármacos (A, B y C). En ellas se indica un momento de referencia (T1 y T2). Señale la opción correcta:",
      options: [
        "La curva A indica administración intramuscular",
        "La latencia de B es de 4 horas",
        "La duración de acción de C es de 14 horas",
        "El punto 3 es terapéutico",
      ],
      correctAnswer: 0,
      explanation:
        "La administración INTRAMUSCULAR muestra características intermedias entre IV y oral: tiene fase de absorción (latencia), alcanza un pico de concentración, y luego declina. La curva A típicamente muestra estas características: inicio con latencia (absorción desde músculo), pico intermedio, y descenso por eliminación. La vía IM tiene mejor absorción que oral pero peor que IV. La latencia, duración y puntos terapéuticos dependen de los valores específicos del gráfico, pero la opción A es la más general y correcta para identificar vía IM.",
    },
    {
      id: 9,
      question: "¿Para tratar farmacológicamente un paciente que sufre convulsiones en la consulta, cuál de los siguientes fármacos resultaría de elección?",
      options: ["Zolpidem por vía intramuscular", "Diazepam por vía oral", "Fenobarbital por vía inhalatoria", "Ninguna es correcta"],
      correctAnswer: 3,
      explanation:
        "Ninguna de las opciones es correcta para el tratamiento agudo de convulsiones en consulta. El DIAZEPAM es el fármaco de elección pero debe administrarse por vía ENDOVENOSA o RECTAL (en niños), no oral (la absorción oral es lenta para una emergencia). El zolpidem es un hipnótico, no anticonvulsivante. El fenobarbital no se administra por vía inhalatoria (no existe esa presentación) y tiene inicio de acción lento. Para convulsiones agudas, se requiere administración IV o rectal de benzodiacepinas para lograr efecto rápido.",
    },
    {
      id: 10,
      question: "¿Cuál de las siguientes es la vía de administración que posee efecto de 1º paso hepático?",
      options: ["Vía sublingual", "Vía intramuscular", "Vía oral", "Vía endovenosa"],
      correctAnswer: 2,
      explanation:
        "La VÍA ORAL es la que presenta primer paso hepático. Cuando un fármaco se absorbe desde el intestino, entra al sistema portal y pasa primero por el hígado antes de llegar a la circulación sistémica. En el hígado puede sufrir metabolismo extenso, reduciendo la biodisponibilidad. La vía sublingual evita el primer paso (drena a vena cava), la IM y IV también lo evitan. El primer paso hepático explica por qué algunos fármacos (como propranolol, morfina) tienen biodisponibilidad oral mucho menor que por otras vías.",
    },
    {
      id: 11,
      question: "¿Cuál de las siguientes formas farmacéuticas tiene vía de administración tópica, por lo que carece de absorción sistémica?",
      options: ["Inyectable intramuscular", "Comprimido oral", "Gotas sublinguales", "Colutorio"],
      correctAnswer: 3,
      explanation:
        "El COLUTORIO (enjuague bucal) es una forma farmacéutica de administración TÓPICA en la cavidad bucal. Se usa para enjuagar y escupir, no se traga, por lo que tiene mínima o nula absorción sistémica. Ejemplos: colutorios con clorhexidina, fluoruros, o antisépticos. Las otras opciones sí tienen absorción sistémica: inyectable IM se absorbe al torrente sanguíneo, comprimido oral se absorbe en intestino, y gotas sublinguales se absorben a través de la mucosa sublingual hacia la circulación sistémica.",
    },
    {
      id: 12,
      question: "¿Cuál es la vía de administración que ofrece la máxima biodisponibilidad y menor tiempo de latencia?",
      options: [
        "Vía de administración intramuscular",
        "Vía de administración sublingual",
        "Vía de administración endovenosa (no posee tiempo de latencia)",
        "Vía de administración vaginal",
      ],
      correctAnswer: 2,
      explanation:
        "La VÍA ENDOVENOSA ofrece biodisponibilidad del 100% (el fármaco se inyecta directamente en el torrente sanguíneo, sin pérdidas por absorción o primer paso hepático) y tiempo de latencia CERO o mínimo (el efecto puede comenzar en segundos). No hay fase de absorción. Las otras vías tienen: IM (biodisponibilidad variable, latencia de minutos), sublingual (biodisponibilidad variable, latencia de minutos), vaginal (biodisponibilidad variable, latencia variable). La IV es la vía de elección en emergencias donde se requiere efecto inmediato y dosis precisa.",
    },
    {
      id: 13,
      question: "¿Qué característica posee un fármaco de índice terapéutico estrecho?",
      options: ["Mayor riesgo de toxicidad", "Mejor eficacia", "Mejor tolerancia", "Menor variabilidad en la respuesta"],
      correctAnswer: 0,
      explanation:
        "Un fármaco con ÍNDICE TERAPÉUTICO ESTRECHO (IT bajo, cercano a 1) tiene la dosis efectiva muy próxima a la dosis tóxica. Esto significa MAYOR RIESGO DE TOXICIDAD porque pequeños cambios en dosis, metabolismo o eliminación pueden llevar al fármaco de niveles terapéuticos a tóxicos. Ejemplos: digoxina, litio, warfarina, teofilina. Estos fármacos requieren monitorización estrecha de niveles plasmáticos y ajuste cuidadoso de dosis. El IT estrecho NO implica mejor eficacia ni tolerancia, y puede haber mayor variabilidad interindividual.",
    },
    {
      id: 14,
      question: "Con respecto a la administración de fármacos en situaciones patológicas, ¿cuál de las siguientes afirmaciones es INCORRECTA?",
      options: [
        "Ante un paciente adulto mayor debe tenerse en cuenta la función de filtrado renal",
        "Durante la lactancia se debe recomendar la toma del medicamento inmediatamente al terminar de amamantar",
        "En pacientes pediátricos las dosis deben calcularse",
        "En un paciente con falla renal no es necesario ajustar las dosis de los medicamentos",
      ],
      correctAnswer: 3,
      explanation:
        "La afirmación INCORRECTA es que en falla renal no es necesario ajustar dosis. En insuficiencia renal, muchos fármacos se acumulan porque se eliminan principalmente por vía renal. Se debe AJUSTAR la dosis según el clearance de creatinina para evitar toxicidad. Los ancianos tienen función renal disminuida, requiriendo ajuste. En lactancia, tomar el medicamento después de amamantar reduce la exposición del bebé. En pediatría, las dosis se calculan por peso o superficie corporal. La opción D es claramente incorrecta.",
    },
    {
      id: 15,
      question: "¿Cuál es el mecanismo de acción de los anestésicos locales?",
      options: [
        "Bloquean los canales de calcio; su efecto depende del equilibrio entre las formas ionizada y no ionizada, determinado por el entorno fisiológico",
        "Inhiben los receptores GABA; su acción está modulada por la liposolubilidad, que afecta la velocidad de inicio del bloqueo nervioso",
        "Bloquean los canales de sodio; en pH fisiológico, la forma no ionizada atraviesa la membrana del axón neuronal y la ionizada bloquea el canal",
        "Inhiben la liberación de neurotransmisores; la penetración a través de la membrana depende del coeficiente de partición lípido/agua del fármaco",
      ],
      correctAnswer: 2,
      explanation:
        "Los anestésicos locales BLOQUEAN los CANALES DE SODIO voltaje-dependientes en la membrana del axón. El mecanismo es: 1) La forma NO IONIZADA (liposoluble) atraviesa la membrana del nervio, 2) Dentro del axón, se re-ioniza al pH intracelular, 3) La forma IONIZADA se une al canal de Na+ desde el lado interno, bloqueándolo. Sin canales de Na+ funcionales, no hay potencial de acción y la conducción nerviosa se bloquea. El equilibrio entre formas ionizada/no ionizada (determinado por pKa y pH) es crucial para la penetración y efectividad.",
    },
    {
      id: 16,
      question: "Los anestésicos locales presentan menor eficacia cuando se aplican en sitios con infección e inflamación, ¿a qué se debe este fenómeno?",
      options: [
        "El pH ácido del tejido inflamado produce un aumento de la fracción ionizada del anestésico, dificultando su ingreso al axón neuronal",
        "Los cambios en la permeabilidad de la membrana celular provocados por la inflamación dificultan el ingreso del anestésico",
        "Los mediadores químicos inflamatorios bloquean directamente los canales de sodio, lo que impide la acción del anestésico",
        "La inflamación puede afectar la estructura del axón neuronal, reduciendo la capacidad del anestésico para bloquear la señal nerviosa",
      ],
      correctAnswer: 0,
      explanation:
        "En tejidos inflamados, el pH local desciende (acidosis tisular, pH ~6-6.5). Los anestésicos locales son bases débiles. En pH ácido, predomina la forma IONIZADA (protonada), que es hidrosoluble y NO puede atravesar la membrana lipídica del nervio. Para actuar, el anestésico debe entrar al axón en forma no ionizada. Si se ioniza antes de entrar (por pH ácido extracelular), queda 'atrapado' fuera y no puede alcanzar los canales de Na+ intracelulares. Este fenómeno se llama 'atrapamiento iónico' y explica por qué los anestésicos locales son menos efectivos en tejidos infectados o inflamados.",
    },
    {
      id: 17,
      question: "¿Cuál efecto adverso se puede presentar con la administración de anestésicos locales?",
      options: ["Náuseas", "Arritmias cardíacas", "Hipoglucemia", "Gastritis"],
      correctAnswer: 1,
      explanation:
        "Los anestésicos locales en dosis tóxicas pueden causar ARRITMIAS CARDÍACAS. A nivel cardíaco, bloquean canales de sodio, lo que puede causar bradicardia, bloqueos de conducción (bloqueo AV), y arritmias ventriculares. La lidocaína, aunque es antiarrítmica a dosis terapéuticas, puede ser proarrítmica a dosis altas. Otros efectos tóxicos incluyen: convulsiones (por bloqueo de canales Na+ en SNC), depresión respiratoria, y colapso cardiovascular. Las náuseas pueden ocurrir pero son menos específicas. La hipoglucemia y gastritis no son efectos típicos de anestésicos locales.",
    },
    {
      id: 18,
      question:
        "Se presenta en su consulta un paciente con gastritis crónica y usted debe prescribirle un analgésico para el tratamiento del dolor. ¿Cuál/cuales de los siguientes AINES carecen de efectos gástricos por lo que serían una buena alternativa en este paciente?",
      options: ["Ketorolac", "Paracetamol", "Etoricoxib", "a y b son correctas"],
      correctAnswer: 1,
      explanation:
        "El PARACETAMOL carece de efectos gástricos significativos porque no inhibe la COX-1 gástrica periférica. Actúa principalmente a nivel central. El ETORICOXIB (coxib) también tiene menor riesgo GI que AINE no selectivos porque respeta la COX-1 gástrica, pero la opción correcta según el texto es 'b' (paracetamol). El KETOROLAC es un AINE no selectivo con alto riesgo de efectos GI. En pacientes con gastritis, el paracetamol es la mejor opción para analgesia, y si se requiere antiinflamación, los coxibs son preferibles a AINE no selectivos, aunque con precaución cardiovascular.",
    },
    {
      id: 19,
      question: "¿Cuál es uno de los efectos adversos característicos asociados al uso de paracetamol?",
      options: ["Hepatotoxicidad", "Insuficiencia renal", "Gastritis", "Reacciones alérgicas"],
      correctAnswer: 0,
      explanation:
        "La HEPATOTOXICIDAD es el efecto adverso más característico y grave del paracetamol. A dosis tóxicas (>10-15g en adultos), el paracetamol se metaboliza a NAPQI (N-acetil-p-benzoquinoneimina), un metabolito altamente reactivo que causa necrosis hepática. Normalmente, el NAPQI se detoxifica con glutatión, pero cuando este se agota (por dosis altas o déficit de glutatión), el NAPQI se acumula y daña el hígado. El antídoto es N-acetilcisteína, que repone el glutatión. La insuficiencia renal puede ocurrir pero es menos común. La gastritis es rara con paracetamol.",
    },
    {
      id: 20,
      question: "¿Qué AINE estaría contraindicado en un paciente con patología cardiovascular debido a que aumenta el riesgo de trombosis?",
      options: ["Paracetamol", "Ácido acetilsalicílico", "Etoricoxib", "Ibuprofeno"],
      correctAnswer: 2,
      explanation:
        "El ETORICOXIB (y otros coxibs como celecoxib) está contraindicado o debe usarse con precaución en pacientes con patología cardiovascular porque aumenta el riesgo de eventos trombóticos (infarto, accidente cerebrovascular). Esto ocurre porque los coxibs inhiben selectivamente la COX-2, que en el endotelio produce prostaciclina (vasodilatadora y antiagregante). Al perder este efecto mientras la COX-1 plaquetaria sigue produciendo tromboxano (proagregante), se desbalancea el sistema hacia la trombogénesis. El rofecoxib fue retirado del mercado por este motivo. El AAS tiene efecto antiagregante (reduce riesgo trombótico).",
    },
    {
      id: 21,
      question: "Los glucocorticoides (o corticoides) poseen numerosos efectos terapéuticos. ¿Cuál de los siguientes NO es uno de ellos?",
      options: ["Inmunosupresor", "Antiinflamatorio", "Antihipertensivo", "Analgésico"],
      correctAnswer: 2,
      explanation:
        "Los glucocorticoides NO son antihipertensivos; de hecho, pueden CAUSAR hipertensión como efecto adverso. Sus efectos terapéuticos incluyen: inmunosupresión (útil en enfermedades autoinmunes, trasplantes), antiinflamación (útil en artritis, asma, enfermedades inflamatorias), y efecto analgésico indirecto (al reducir la inflamación que causa dolor). La hipertensión por corticoides se debe a retención de sodio y agua (efecto mineralocorticoide), aumento del tono vascular, y efectos sobre el sistema renina-angiotensina. Los corticoides con menor efecto mineralocorticoide (como dexametasona) tienen menor riesgo de hipertensión.",
    },
    {
      id: 22,
      question: "Todos los abajo enunciados son efectos adversos posibles de encontrar en pacientes tratados con corticosteroides, excepto:",
      options: ["Gastritis", "Síntomas neuropsiquiátricos", "Hiperglucemia", "Broncoespasmo"],
      correctAnswer: 3,
      explanation:
        "El BRONCOESPASMO NO es un efecto adverso de los corticoides; de hecho, los corticoides se usan para TRATAR el broncoespasmo (en asma, EPOC). Los efectos adversos correctos son: gastritis/úlceras (por reducción de prostaglandinas protectoras), síntomas neuropsiquiátricos (euforia, depresión, psicosis, insomnio), e hiperglucemia (por resistencia a insulina y aumento de gluconeogénesis). Los corticoides inhalados pueden causar candidiasis oral y disfonía, pero no broncoespasmo. El broncoespasmo paradójico es un efecto raro de los agonistas β2, no de corticoides.",
    },
    {
      id: 23,
      question:
        "Ud. necesita prescribir corticoides a una paciente hipertensa, ¿cuál de ellos tendría el menor efecto sobre el aumento de la presión arterial debido a su baja actividad mineralocorticoide?",
      options: ["Dexametasona (también puede ser betametasona)", "Prednisolona", "Cortisol", "Fludrocortisona"],
      correctAnswer: 0,
      explanation:
        "La DEXAMETASONA (y betametasona) tienen actividad mineralocorticoide MÍNIMA o nula. Estos corticoides sintéticos tienen alta potencia glucocorticoide pero prácticamente no retienen sodio ni causan hipertensión. La prednisolona tiene actividad mineralocorticoide moderada, el cortisol (hidrocortisona) tiene actividad tanto gluco como mineralocorticoide, y la fludrocortisona es PREDOMINANTEMENTE mineralocorticoide (se usa para insuficiencia suprarrenal por su efecto sobre electrolitos). En pacientes hipertensos, se prefieren dexametasona o betametasona para minimizar efectos sobre la presión arterial.",
    },
    {
      id: 24,
      question: "Los siguientes son efectos adversos de los opioides, EXCEPTO:",
      options: ["Depresión respiratoria", "Constipación", "Tolerancia", "Gastritis"],
      correctAnswer: 3,
      explanation:
        "La GASTRITIS NO es un efecto adverso típico de los opioides. Los efectos adversos correctos son: depresión respiratoria (por acción en centros respiratorios del tronco encefálico, especialmente peligroso en sobredosis), constipación (por reducción de motilidad intestinal y aumento del tono de esfínteres), y tolerancia (necesidad de aumentar dosis para mantener el mismo efecto, ocurre con uso crónico). Los opioides pueden causar náuseas y vómitos, pero no gastritis. La gastritis es más característica de AINE.",
    },
    {
      id: 25,
      question: "¿Qué antibiótico puede causar decoloración permanente de los dientes si se administra en niños?",
      options: ["Azitromicina", "Tetraciclinas", "Amoxicilina", "Metronidazol"],
      correctAnswer: 1,
      explanation:
        "Las TETRACICLINAS (doxiciclina, minociclina, tetraciclina) pueden causar decoloración permanente de los dientes (dientes amarillos, grises o marrones) y alteraciones del esmalte si se administran durante el desarrollo dental (desde el segundo trimestre de embarazo hasta los 8 años de edad). El calcio de los dientes en formación se quelata con las tetraciclinas, formando complejos que se depositan en el esmalte y dentina. Por esto están contraindicadas en embarazadas (segundo y tercer trimestre) y niños menores de 8 años. Las otras opciones no tienen este efecto.",
    },
    {
      id: 26,
      question: "¿Qué droga se usa para tratar reacciones alérgicas graves (anafilaxia) en el consultorio odontológico?",
      options: ["Loratadina", "Adrenalina", "Dexametasona", "Difenhidramina"],
      correctAnswer: 1,
      explanation:
        "La ADRENALINA (epinefrina) es el fármaco de PRIMERA LÍNEA y de ELECCIÓN para anafilaxia en cualquier contexto, incluyendo consultorios odontológicos. Se administra por vía intramuscular (0.3-0.5 mg en muslo anterolateral) y actúa en minutos. Sus efectos incluyen: broncodilatación (β2), vasoconstricción (α1) que revierte la hipotensión, aumento del gasto cardíaco (β1), y estabilización de mastocitos. Los antihistamínicos (loratadina, difenhidramina) y corticoides (dexametasona) son coadyuvantes pero NO reemplazan a la adrenalina. Todo consultorio odontológico debe tener adrenalina disponible.",
    },
    {
      id: 27,
      question: "Con respecto a los antibióticos, ¿cuál de los siguientes NO pertenece al grupo de los antibióticos betalactámicos?",
      options: ["Amoxicilina", "Ampicilina", "Penicilina", "Claritromicina"],
      correctAnswer: 3,
      explanation:
        "La CLARITROMICINA NO es un betalactámico; es un MACRÓLIDO. Los betalactámicos se caracterizan por tener un anillo betalactámico en su estructura: incluyen penicilinas (penicilina G, amoxicilina, ampicilina), cefalosporinas, carbapenémicos y monobactámicos. La claritromicina pertenece a la familia de los macrólidos (junto con eritromicina, azitromicina), que tienen un anillo macrocíclico lactónico, no betalactámico. Los macrólidos inhiben la síntesis de proteínas bacterianas (unión a subunidad 50S del ribosoma), no la pared celular.",
    },
    {
      id: 28,
      question: "¿Qué antibiótico es de elección en pacientes alérgicos a la penicilina?",
      options: ["Amoxicilina", "Clindamicina", "Cefalexina", "Metronidazol"],
      correctAnswer: 1,
      explanation:
        "La CLINDAMICINA es una excelente alternativa para pacientes alérgicos a penicilina. Es efectiva contra estreptococos (S. pyogenes, S. pneumoniae) y tiene buena actividad contra anaerobios. Se usa en infecciones odontológicas, osteomielitis, y abscesos. La amoxicilina es una penicilina (contraindicada). Las cefalosporinas tienen reactividad cruzada del 5-10% con penicilina, por lo que se evitan en alergias severas. El metronidazol es activo solo contra anaerobios y algunos protozoos, no cubre estreptococos. Otras alternativas incluyen macrólidos (azitromicina, eritromicina) pero hay resistencia creciente.",
    },
    {
      id: 29,
      question: "¿Qué antibiótico es útil para infecciones asociadas a bacterias anaerobias?",
      options: ["Amoxicilina", "Azitromicina", "Metronidazol", "Doxiciclina"],
      correctAnswer: 2,
      explanation:
        "El METRONIDAZOL es muy efectivo contra BACTERIAS ANAEROBIAS (Bacteroides, Clostridium, Fusobacterium, Prevotella). Es bactericida y se usa en infecciones odontológicas (abscesos periapicales, periodontitis), infecciones intraabdominales, y colitis por C. difficile. La amoxicilina tiene actividad limitada contra anaerobios. La azitromicina tiene actividad variable. La doxiciclina tiene alguna actividad pero el metronidazol es superior. En odontología, se usa frecuentemente en combinación con amoxicilina (amoxicilina + metronidazol) para cubrir tanto aerobios como anaerobios en infecciones mixtas.",
    },
  ],
};
