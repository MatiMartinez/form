import type { Exam } from "./types";

export const exam3: Exam = {
  id: "preguntas-final",
  title: "Preguntas de Final",
  description: "20 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "Los enzimas involucrados en el metabolismo de fármacos:",
      options: [
        "Tienen baja especificidad por su sustrato",
        "Tienen nula afinidad por sus sustratos",
        "Tienen alta afinidad por sus sustratos",
        "No tienen afinidad por su sustrato",
      ],
      correctAnswer: 0,
      explanation:
        "Las enzimas metabolizadoras de fármacos (principalmente del sistema citocromo P450) tienen BAJA ESPECIFICIDAD por sus sustratos. Esto significa que una misma enzima puede metabolizar múltiples fármacos diferentes con estructuras químicas variadas. Por ejemplo, CYP3A4 metaboliza más del 50% de los fármacos comercializados. Esta baja especificidad es ventajosa evolutivamente porque permite al organismo procesar una gran variedad de xenobióticos, pero también explica las múltiples interacciones farmacológicas que pueden ocurrir.",
    },
    {
      id: 2,
      question: "Ante una acidosis de fármaco, el volumen de distribución (Vd):",
      options: [
        "Aumenta en fármacos que son bases débiles",
        "Disminuye en fármacos que son ácidos débiles",
        "Aumenta en fármacos que son ácidos fuertes",
        "Aumenta en fármacos que son ácidos débiles",
      ],
      correctAnswer: 3,
      explanation:
        "En un estado de acidosis, el pH del plasma y los tejidos disminuye. Para un ácido débil, cuando el pH baja (pH < pKa), predomina la forma no ionizada (protonada). La forma no ionizada es liposoluble y puede atravesar membranas fácilmente, distribuyéndose hacia los tejidos. Esto aumenta el volumen de distribución porque el fármaco abandona el plasma para acumularse en tejidos. Por el contrario, las bases débiles se ionizan más en acidosis, volviéndose hidrosolubles y quedando más confinadas al plasma, reduciendo su Vd.",
    },
    {
      id: 3,
      question: "Ante un paciente obeso ¿Cómo se modifica el volumen de distribución aparente?",
      options: [
        "Aumenta en ambos tipos de fármacos",
        "Aumenta en fármacos hidrosolubles",
        "Aumenta en fármacos liposolubles",
        "Disminuye en ambos tipos de fármacos",
      ],
      correctAnswer: 2,
      explanation:
        "En pacientes obesos, el volumen de distribución AUMENTA para fármacos LIPOSOLUBLES porque hay mayor masa de tejido adiposo donde estos fármacos pueden acumularse. Fármacos como diazepam, tiopental o algunos antidepresivos tricíclicos tienen Vd significativamente mayor en obesos. Para fármacos hidrosolubles, el Vd puede no cambiar mucho o incluso disminuir ligeramente porque el agua corporal total no aumenta proporcionalmente al peso en obesidad (el exceso de peso es principalmente grasa, no agua). Esto tiene implicancias clínicas importantes para el cálculo de dosis.",
    },
    {
      id: 4,
      question: "¿Cuál de las siguientes fármacos es un inhibidor enzimático?",
      options: ["Fenitoína", "Eritromicina", "Carbamazepina", "Rifampicina"],
      correctAnswer: 1,
      explanation:
        "La ERITROMICINA es un inhibidor enzimático del citocromo P450, específicamente de CYP3A4. Los inhibidores enzimáticos reducen el metabolismo de otros fármacos, aumentando sus concentraciones plasmáticas y el riesgo de toxicidad. Por ejemplo, la eritromicina puede aumentar los niveles de teofilina, warfarina o carbamazepina. Por el contrario, la FENITOÍNA, CARBAMACEPINA y RIFAMPICINA son INDUCTORES enzimáticos (aumentan la actividad de CYP450), lo que acelera el metabolismo de otros fármacos y puede reducir su eficacia.",
    },
    {
      id: 5,
      question: "¿Qué tipo de fármaco es la atropina?",
      options: ["Antagonista muscarínico", "Agonista muscarínico", "Inhibidor de la acetilcolinesterasa", "Agonista adrenérgico"],
      correctAnswer: 0,
      explanation:
        "La ATROPINA es un antagonista competitivo de los receptores muscarínicos de acetilcolina. Se obtiene de la planta Atropa belladonna y bloquea los efectos parasimpáticos. Sus efectos incluyen: midriasis (dilatación pupilar), taquicardia, sequedad de boca, retención urinaria, y reducción de secreciones. Se usa en anestesia (reduce secreciones), en bradicardia sintomática, en intoxicación por organofosforados (bloquea efectos muscarínicos), y como premedicación quirúrgica. Es el prototipo de los anticolinérgicos/antimuscarínicos.",
    },
    {
      id: 6,
      question: "¿Cómo se denominan las convulsiones producidas por lidocaína en dosis tóxicas?",
      options: ["Idiosincrático", "Paradojal", "Esperado", "Analógico"],
      correctAnswer: 2,
      explanation:
        "Las convulsiones por lidocaína en dosis tóxicas son un efecto ESPERADO (o predecible). La lidocaína es un anestésico local que bloquea canales de sodio. A dosis altas, puede alcanzar el SNC y bloquear canales de sodio neuronales, causando hiperexcitabilidad y convulsiones. Este es un efecto dosis-dependiente y predecible, no idiosincrático. Los efectos tóxicos de la lidocaína siguen una progresión: primero síntomas del SNC (mareos, parestesias), luego convulsiones, y finalmente depresión cardiorrespiratoria. Por eso se debe usar con precaución y nunca exceder las dosis máximas recomendadas.",
    },
    {
      id: 7,
      question: "Con respecto a antagonistas competitivos, señale la opción correcta:",
      options: [
        "Presentan menor afinidad que los agonistas",
        "Su efecto puede ser revertido con mayores dosis del agonista",
        "Poseen similar eficacia con respecto a los agonistas, pero menos potencia",
        "Tienen actividad intrínseca mayor a uno",
      ],
      correctAnswer: 1,
      explanation:
        "Los antagonistas competitivos se caracterizan porque su bloqueo es REVERSIBLE y SUPERABLE aumentando la concentración del agonista. Compiten por el mismo sitio de unión al receptor. Si aumentamos la dosis del agonista, podemos desplazar al antagonista y restaurar el efecto. Esto se visualiza en curvas dosis-respuesta: el antagonista desplaza la curva hacia la derecha (reduce la potencia) pero no cambia la eficacia máxima. Ejemplo clásico: naloxona (antagonista opioide) puede revertirse aumentando la dosis de morfina. Los antagonistas tienen afinidad pero eficacia = 0.",
    },
    {
      id: 8,
      question:
        "En el siguiente gráfico (considere como cero el punto de origen para ambas variables) se muestra el efecto de tres fármacos sobre el diámetro bronquial. Seleccione la opción correcta:",
      options: [
        "A es un agonista total de receptores beta2 adrenérgicos",
        "B es un antagonista irreversible beta2 adrenérgico",
        "C es un agonista irreversible de A en bajas dosis",
        "Todas son correctas",
      ],
      correctAnswer: 0,
      explanation:
        "Un agonista total de receptores β2 adrenérgicos produce broncodilatación máxima al activar completamente estos receptores. Los receptores β2 en músculo liso bronquial, al activarse, aumentan AMPc intracelular, lo que reduce el calcio y causa relajación. Un agonista total (como salbutamol o formoterol) puede alcanzar el efecto máximo teórico. Los antagonistas irreversibles no desplazan curvas, las eliminan. Un agonista irreversible no existe como concepto farmacológico estándar. La opción A es la correcta basándose en la descripción típica de curvas dosis-respuesta.",
    },
    {
      id: 9,
      question:
        "En el siguiente gráfico se indican las curvas farmacocinéticas de tres fármacos (A, B y C). En ellas se indica un número de referencia (1, 2 y 3). Señale la opción correcta:",
      options: [
        "La curva A indica administración endovenosa",
        "La duración de acción de B es de 10 horas",
        "El efecto de A es tan eficaz como C",
        "La latencia de B es de 4 horas",
      ],
      correctAnswer: 0,
      explanation:
        "La administración ENDOVENOSA se caracteriza por: 1) Ausencia de fase de absorción (el fármaco se inyecta directamente en el torrente sanguíneo), 2) Concentración plasmática máxima inmediata (Cmax al tiempo 0), 3) Curva que comienza en el punto más alto y desciende desde ahí. A diferencia de la vía oral que muestra una curva con ascenso (absorción), pico (Cmax), y descenso (eliminación). La curva A típicamente muestra estas características de administración IV: inicio inmediato sin fase de latencia, y concentración máxima desde el tiempo cero.",
    },
    {
      id: 10,
      question: "Para tratar farmacológicamente un paciente que sufre de convulsiones en tu consulta, ¿cuál de los siguientes fármacos resultaría de elección?",
      options: ["Zolpidem", "Diazepam", "Fenobarbital", "B y C son correctas"],
      correctAnswer: 1,
      explanation:
        "El DIAZEPAM es el fármaco de elección para el tratamiento agudo de convulsiones en el consultorio o en emergencias. Se administra por vía endovenosa o rectal (en niños) y tiene inicio de acción rápido. Actúa potenciando el GABA en receptores GABA-A, aumentando la inhibición neuronal. El FENOBARBITAL también es anticonvulsivante pero tiene inicio de acción más lento y mayor riesgo de depresión respiratoria. El ZOLPIDEM es un hipnótico, no anticonvulsivante. Aunque B y C son anticonvulsivantes, el diazepam es la primera línea por su rapidez y perfil de seguridad en uso agudo.",
    },
    {
      id: 11,
      question: "¿Cuáles son los efectos adversos más frecuentes asociados al uso de AINEs?",
      options: ["Hipotiroidismo", "Gastritis", "Hipertensión", "Hiperglucemia"],
      correctAnswer: 1,
      explanation:
        "La GASTRITIS y otros efectos gastrointestinales (dispepsia, úlceras, hemorragias) son los efectos adversos más frecuentes de los AINE. Ocurren porque los AINE inhiben la COX-1, que produce prostaglandinas protectoras de la mucosa gástrica (PGE2 y PGI2). Estas prostaglandinas mantienen el flujo sanguíneo mucoso, estimulan la secreción de moco y bicarbonato, e inhiben la secreción ácida. Al perder esta protección, la mucosa es vulnerable al ácido gástrico. El riesgo aumenta con dosis altas, uso prolongado, edad avanzada, y antecedentes de úlcera. Los AINE no causan hipotiroidismo, y la hipertensión/hiperglucemia son menos frecuentes.",
    },
    {
      id: 12,
      question: "¿Cuál de los siguientes AINE NO tiene acción antiinflamatoria significativa?",
      options: ["Ibuprofeno", "Paracetamol", "Diclofenac", "Naproxeno"],
      correctAnswer: 1,
      explanation:
        "El PARACETAMOL (acetaminofén) es un analgésico-antipirético pero tiene mínima acción antiinflamatoria. A diferencia de otros AINE que inhiben la COX en tejidos periféricos (causando antiinflamación), el paracetamol actúa principalmente a nivel central, posiblemente inhibiendo una variante de COX-1 cerebral (COX-3) o una isoforma específica. Por eso es útil para dolor y fiebre pero no para artritis o inflamación. No causa los efectos GI típicos de los AINE porque no inhibe la COX-1 gástrica periférica de manera significativa.",
    },
    {
      id: 13,
      question: "¿Cuál de los siguientes AINE está contraindicado en patologías cardiovasculares por riesgo de trombosis?",
      options: ["Ibuprofeno", "Etoricoxib", "Naproxeno", "Diclofenac"],
      correctAnswer: 1,
      explanation:
        "El ETORICOXIB (y otros coxibs como celecoxib, rofecoxib) están contraindicados o deben usarse con precaución en pacientes con enfermedad cardiovascular por riesgo aumentado de eventos trombóticos. Esto ocurre porque los coxibs inhiben selectivamente la COX-2, que en el endotelio vascular produce prostaciclina (vasodilatadora y antiagregante). Al inhibir solo COX-2, se pierde este efecto protector mientras que la COX-1 plaquetaria sigue produciendo tromboxano (proagregante), desbalanceando el sistema hacia la trombogénesis. El rofecoxib fue retirado del mercado por este motivo. Los AINE no selectivos tienen menor riesgo CV.",
    },
    {
      id: 14,
      question: "¿Cuál es el mecanismo de acción de los betalactámicos?",
      options: [
        "Inhibición de la síntesis de la pared celular",
        "Inhibición de la síntesis de proteínas",
        "Inhibición de la síntesis de ácidos nucleicos",
        "Alteración de la permeabilidad de membrana",
      ],
      correctAnswer: 0,
      explanation:
        "Los antibióticos BETALACTÁMICOS (penicilinas, cefalosporinas, carbapenémicos) inhiben la síntesis de la pared celular bacteriana. Específicamente, se unen a las proteínas fijadoras de penicilina (PBP) que son transpeptidasas y carboxipeptidasas responsables del entrecruzamiento del peptidoglicano. Al inhibir estas enzimas, la pared celular no se forma correctamente, y la bacteria (que está en un ambiente hipotónico) se lisa por presión osmótica. Este mecanismo es bactericida y específico para bacterias (las células humanas no tienen pared celular). La resistencia surge por producción de betalactamasas que hidrolizan el anillo betalactámico.",
    },
    {
      id: 15,
      question: "¿Cuál es el fármaco de elección para tratar alergias graves en el consultorio?",
      options: ["Diphenhidramina", "Adrenalina", "Prednisona", "Cetirizina"],
      correctAnswer: 1,
      explanation:
        "La ADRENALINA (epinefrina) es el fármaco de primera línea para anafilaxia y reacciones alérgicas graves. Se administra por vía intramuscular (preferiblemente en el muslo anterolateral) en dosis de 0.3-0.5 mg. Sus efectos incluyen: broncodilatación (β2), vasoconstricción (α1) que revierte la hipotensión, aumento del gasto cardíaco (β1), y reducción de la liberación de mediadores de mastocitos. Actúa en minutos y es esencial en el manejo de anafilaxia. Los antihistamínicos y corticoides son coadyuvantes pero no reemplazan a la adrenalina en situaciones graves.",
    },
    {
      id: 16,
      question: "¿Cuál de los siguientes es un efecto adverso de los corticoides?",
      options: ["Hipoglucemia", "Hiperglucemia", "Hipotiroidismo", "Hipocalcemia"],
      correctAnswer: 1,
      explanation:
        "La HIPERGLUCEMIA es un efecto adverso común de los glucocorticoides. Ocurren por múltiples mecanismos: 1) Aumentan la gluconeogénesis hepática, 2) Reducen la captación de glucosa periférica (resistencia a insulina), 3) Inhiben la secreción de insulina, 4) Aumentan la degradación de proteínas musculares (proporcionando sustratos para gluconeogénesis). Los pacientes con diabetes pueden requerir ajuste de dosis de insulina o antidiabéticos orales durante tratamientos con corticoides. También pueden desarrollar 'diabetes esteroidea' en pacientes previamente normoglucémicos. Este efecto es dosis y tiempo-dependiente.",
    },
    {
      id: 17,
      question: "¿Dónde se metabolizan principalmente los fármacos que son ésteres?",
      options: ["Esterasas plasmáticas", "Citocromo P450 hepático", "Glucuronidación hepática", "Sulfatación hepática"],
      correctAnswer: 0,
      explanation:
        "Los fármacos que son ÉSTERES (como succinilcolina, cocaína, procaina, esmolol) se metabolizan principalmente por ESTERASAS PLASMÁTICAS, especialmente la colinesterasa plasmática (pseudocolinesterasa) y otras esterasas no específicas. Estas enzimas hidrolizan el enlace éster, inactivando el fármaco. La succinilcolina es un ejemplo clásico: tiene vida media de minutos porque es rápidamente hidrolizada por colinesterasa plasmática. Pacientes con déficit genético de esta enzima pueden tener apnea prolongada. Las esterasas también están presentes en hígado, pero las plasmáticas son las más importantes para ésteres.",
    },
    {
      id: 18,
      question: "¿Cuál es el antibiótico de elección para profilaxis en procedimientos dentales en pacientes sin alergia a penicilina?",
      options: ["Amoxicilina", "Azitromicina", "Clindamicina", "Cefalexina"],
      correctAnswer: 0,
      explanation:
        "La AMOXICILINA es el antibiótico de elección para profilaxis de endocarditis infecciosa en procedimientos dentales en pacientes de riesgo (válvulas cardíacas protésicas, endocarditis previa, cardiopatías congénitas). Se administra 2g una hora antes del procedimiento. La amoxicilina tiene mejor absorción oral que la penicilina V y cubre los estreptococos orales más comunes (S. viridans). En pacientes alérgicos a penicilina, se usa clindamicina o azitromicina. La profilaxis está indicada solo en pacientes de alto riesgo según las guías actuales.",
    },
    {
      id: 19,
      question: "¿Qué sustancia se agrega a los anestésicos locales para prolongar su duración de acción?",
      options: ["Noradrenalina", "Adrenalina", "Dopamina", "Isoproterenol"],
      correctAnswer: 1,
      explanation:
        "La ADRENALINA (epinefrina) se agrega a los anestésicos locales en concentraciones de 1:100,000 a 1:200,000 para prolongar su duración de acción. El mecanismo es la vasoconstricción local: al reducir el flujo sanguíneo en el sitio de inyección, se retarda la absorción sistémica del anestésico, manteniéndolo más tiempo en el tejido donde debe actuar. Esto aumenta la duración del bloqueo nervioso y reduce la concentración plasmática máxima (menor toxicidad sistémica). Está contraindicada en áreas con circulación terminal (dedos, nariz, pene) porque puede causar isquemia y necrosis.",
    },
    {
      id: 20,
      question: "¿Cuál es el antibiótico de elección para un paciente alérgico a penicilina que necesita tratamiento para infección por estreptococo?",
      options: ["Amoxicilina", "Clindamicina", "Cefalexina", "Ampicilina"],
      correctAnswer: 1,
      explanation:
        "La CLINDAMICINA es una excelente alternativa para pacientes alérgicos a penicilina que requieren tratamiento de infecciones por estreptococos. Es efectiva contra S. pyogenes (causa de faringitis, celulitis) y S. pneumoniae. Tiene buena penetración ósea (útil en osteomielitis) y se concentra en abscesos. También es activa contra anaerobios. Se administra por vía oral o IV. Otras alternativas incluyen macrólidos (eritromicina, azitromicina) pero hay resistencia creciente. Las cefalosporinas tienen reactividad cruzada del 5-10% con penicilina, por lo que se evitan en alergias severas.",
    },
  ],
};
