import type { Exam } from "./types";

export const exam7: Exam = {
  id: "segundo-parcial-2025",
  title: "Segundo Parcial 2025",
  description: "10 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "De los siguientes ¿cuál es el miorrelajante central utilizado en la hipertermia maligna?",
      options: ["Baclofén", "Dantroleno (antídoto)", "Carisoprodol", "Ninguna es correcta"],
      correctAnswer: 1,
      explanation:
        "El DANTROLENO es el fármaco de elección y antídoto específico para la hipertermia maligna, una reacción hipermetabólica rara pero potencialmente fatal desencadenada por anestésicos volátiles (halotano) o succinilcolina. El dantroleno actúa bloqueando la liberación de calcio desde el retículo sarcoplásmico en músculo esquelético, interrumpiendo el ciclo de contracción-relajación que causa la hipertermia. Se administra por vía endovenosa en dosis de 2-3 mg/kg. El baclofén es miorrelajante central pero no es útil en hipertermia maligna. El carisoprodol es un miorrelajante de acción central pero tampoco es efectivo para este cuadro.",
    },
    {
      id: 2,
      question: "¿Cuántas subunidades tiene un receptor de acetilcolina de la placa motora y a qué subtipo pertenece?",
      options: ["5 - Muscarínico", "5 - Nicotínico neuronal", "5 - Muscarínico", "5 - Nicotínico muscular"],
      correctAnswer: 3,
      explanation:
        "El receptor de acetilcolina en la PLACA MOTORA (unión neuromuscular) es un receptor NICOTÍNICO MUSCULAR formado por 5 SUBUNIDADES (pentámero). En músculo adulto, la composición es 2α, β, γ (o ε en adultos), δ. Cada subunidad tiene 4 dominios transmembrana. Este receptor es un canal iónico que, al unirse la acetilcolina, se abre permitiendo el flujo de Na+ y K+, despolarizando la membrana y generando el potencial de placa terminal que activa el potencial de acción muscular. Los receptores muscarínicos tienen 7 dominios transmembrana (son GPCR), no 5. Los nicotínicos neuronales también tienen 5 subunidades pero composición diferente (solo α y β).",
    },
    {
      id: 3,
      question: "Señale el mecanismo de acción de baclofén:",
      options: ["Agonista alfa 2", "Agonista colinérgico", "Agonista GABAA", "Agonista GABAB"],
      correctAnswer: 3,
      explanation:
        "El BACLOFÉN es un agonista del receptor GABAB (ácido gamma-aminobutírico tipo B). Los receptores GABAB son metabotrópicos (acoplados a proteína G), a diferencia de los GABAA que son ionotrópicos. La activación de GABAB en interneuronas espinales aumenta la conductancia de potasio, hiperpolarizando las neuronas y reduciendo la liberación de neurotransmisores excitatorios. Esto produce miorrelajación central. El baclofén se usa en espasticidad (esclerosis múltiple, lesión medular) y tiene menos efectos sedantes que los miorrelajantes que actúan sobre GABAA. No es agonista alfa 2 ni colinérgico.",
    },
    {
      id: 4,
      question: "Señale el motivo por el cual succinilcolina produce arritmias, dolores musculares postoperatorios y fasciculaciones:",
      options: ["Hiperkalemia", "Hipoglucemia", "Hiperuricemia", "Hiponatremia"],
      correctAnswer: 0,
      explanation:
        "La succinilcolina produce HIPERKALEMIA porque causa despolarización masiva de las fibras musculares, liberando potasio desde el espacio intracelular al plasma. Este aumento de potasio sérico puede causar arritmias cardíacas graves (especialmente peligroso en pacientes con hiperkalemia preexistente, quemaduras, o lesiones medulares). Las fasciculaciones y dolores musculares postoperatorios se deben a la contracción descoordinada de fibras musculares durante la fase de despolarización antes del bloqueo completo. Por esto, la succinilcolina está contraindicada en pacientes con hiperkalemia, miopatías, o riesgo aumentado de hiperkalemia.",
    },
    {
      id: 5,
      question: "¿Cuál es el mecanismo de acción de la toxina botulínica?",
      options: [
        "Bloquea irreversiblemente receptores nicotínicos",
        "Compite con acetilcolina en la unión neuromuscular",
        "Impide presinápticamente la fusión de vesículas",
        "Bloquea calmodulina postsinapticamente",
      ],
      correctAnswer: 2,
      explanation:
        "La TOXINA BOTULÍNICA actúa PRESINÁPTICAMENTE impidiendo la fusión de las vesículas sinápticas con la membrana presináptica. Específicamente, la toxina botulínica (tipo A, B, etc.) es una proteasa que cliva proteínas SNARE (SNAP-25, sintaxina, o sinaptobrevina según el tipo) que son esenciales para la exocitosis de acetilcolina. Sin estas proteínas, las vesículas no pueden fusionarse y liberar acetilcolina, produciendo parálisis flácida. El efecto es reversible (dura 3-6 meses) porque se regeneran nuevas terminales nerviosas. Se usa terapéuticamente en espasmos musculares, migraña, y estética. NO bloquea receptores ni compite con ACh.",
    },
    {
      id: 6,
      question:
        "Ud. debe realizar una exodoncia de dos molares en una paciente de 65 años con antecedentes de hipertensión arterial mal controlada. Para controlar el edema post operatorio decide prescribir un corticoide de alta potencia. ¿Cuál de los siguientes es la elección más segura para este paciente, minimizando el riesgo de un aumento de la presión arterial?",
      options: ["Hidrocortisona", "Clobetasol", "Dexametasona", "Fludrocortisona"],
      correctAnswer: 2,
      explanation:
        "La DEXAMETASONA es la mejor opción porque tiene actividad mineralocorticoide MÍNIMA o nula, por lo que NO causa retención de sodio ni aumento de presión arterial. Es un corticoide sintético de alta potencia glucocorticoide pero sin efectos sobre electrolitos. La hidrocortisona tiene actividad tanto gluco como mineralocorticoide (puede aumentar PA). El clobetasol es un corticoide tópico de muy alta potencia, no se usa sistémicamente. La fludrocortisona es PREDOMINANTEMENTE mineralocorticoide (se usa para insuficiencia suprarrenal por su efecto sobre electrolitos) y causaría aumento significativo de PA. En pacientes hipertensos, se prefieren dexametasona o betametasona.",
    },
    {
      id: 7,
      question:
        "Un paciente de 45 años regresa al consultorio 24hs después de una restauración dental de una caries superficial. No se observan signos de inflamación ni edema. El paciente refiere padecer una gastritis crónica severa. ¿Cuál de los siguientes antiinflamatorios no esteroideos sería más adecuado para este caso?",
      options: ["Ketorolac", "Paracetamol", "Aspirina", "Indometacina"],
      correctAnswer: 1,
      explanation:
        "El PARACETAMOL es la mejor opción porque NO tiene efectos gastrointestinales significativos. A diferencia de los AINE tradicionales que inhiben la COX-1 gástrica (reduciendo prostaglandinas protectoras), el paracetamol actúa principalmente a nivel central y no inhibe la COX-1 gástrica periférica. Es efectivo como analgésico y antipirético, aunque tiene mínima acción antiinflamatoria. El ketorolac, aspirina e indometacina son AINE no selectivos con alto riesgo de efectos GI (gastritis, úlceras, hemorragias), por lo que están contraindicados o deben usarse con precaución en pacientes con gastritis. Si se requiere antiinflamación, los coxibs serían una alternativa, pero con precaución cardiovascular.",
    },
    {
      id: 8,
      question: "¿Qué AINE estaría contraindicado en un paciente con patología cardiovascular debido a que aumenta el riesgo de trombosis?",
      options: ["Paracetamol", "Ácido acetilsalicílico", "Etoricoxib", "Ibuprofeno"],
      correctAnswer: 2,
      explanation:
        "El ETORICOXIB (y otros coxibs como celecoxib, rofecoxib) está contraindicado o debe usarse con precaución en pacientes con patología cardiovascular porque aumenta el riesgo de eventos trombóticos (infarto de miocardio, accidente cerebrovascular). Esto ocurre porque los coxibs inhiben selectivamente la COX-2, que en el endotelio vascular produce prostaciclina (vasodilatadora y antiagregante). Al perder este efecto mientras la COX-1 plaquetaria sigue produciendo tromboxano (proagregante), se desbalancea el sistema hacia la trombogénesis. El rofecoxib fue retirado del mercado por este motivo. El AAS tiene efecto antiagregante (reduce riesgo trombótico). El paracetamol e ibuprofeno tienen menor riesgo CV que los coxibs.",
    },
    {
      id: 9,
      question:
        "Un paciente de 75 será sometido a un tratamiento odontológico invasivo y requiere profilaxis antibiótica, debido a que posee riesgo de endocarditis infecciosa por presentar patología en las válvulas cardíacas y mala higiene bucal. No refiere alergia a la penicilina. ¿Cuál es el antibiótico de elección?",
      options: ["Amoxicilina", "Nitrofurantoína", "Levofloxacina", "Gentamicina"],
      correctAnswer: 0,
      explanation:
        "La AMOXICILINA es el antibiótico de elección para profilaxis de endocarditis infecciosa en procedimientos dentales invasivos en pacientes de riesgo (válvulas cardíacas protésicas, endocarditis previa, cardiopatías congénitas, trasplante cardíaco). Se administra 2g por vía oral una hora antes del procedimiento. La amoxicilina tiene mejor absorción oral que la penicilina V y cubre los estreptococos orales más comunes (S. viridans, S. mutans) que pueden causar endocarditis. La nitrofurantoína es para infecciones urinarias, la levofloxacina es una fluoroquinolona (no primera línea), y la gentamicina se usa en combinación con amoxicilina en pacientes de alto riesgo o alérgicos a penicilina.",
    },
    {
      id: 10,
      question: "¿Qué antibiótico produce la reacción conocida como efecto disulfiram o Antabus al interactuar con el alcohol?",
      options: ["Amoxicilina", "Clindamicina", "Azitromicina", "Metronidazol"],
      correctAnswer: 3,
      explanation:
        "El METRONIDAZOL produce el efecto tipo disulfiram (reacción de Antabus) cuando se consume alcohol durante el tratamiento. Esto ocurre porque el metronidazol inhibe la aldehído deshidrogenasa, la enzima que metaboliza el acetaldehído (metabolito tóxico del alcohol). Al acumularse acetaldehído, se produce una reacción desagradable con síntomas como: rubor facial, náuseas, vómitos, cefalea, taquicardia, hipotensión, y sensación de malestar general. Por esto, durante el tratamiento con metronidazol y hasta 48-72 horas después de finalizarlo, se debe evitar completamente el consumo de alcohol. Otros fármacos que pueden producir este efecto incluyen algunos cefalosporinas (cefotetan, cefoperazona) y el disulfiram mismo (usado para tratamiento del alcoholismo).",
    },
  ],
};
