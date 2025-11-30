import type { Exam } from "./types";

export const exam1: Exam = {
  id: "farmacologia-basica",
  title: "Examen de Farmacología Básica",
  description: "20 preguntas · Selección múltiple",
  questions: [
    {
      id: 1,
      question: "Con respecto a los efectos adversos de los AINE, señale ¿Cuál de las siguientes opciones es FALSA?",
      options: [
        "A dosis toxicas, causan acidosis metabólica",
        "Al inhibir la ciclooxigenasa impiden la síntesis de prostaglandinas responsables de mantener el flujo sanguíneo renal",
        "En la hipófisis, inhiben los receptores D2, produciendo un aumento de la liberación de prolactina",
        "La acetilación irreversible de la ciclooxigenasa plaquetaria reduce la concentración de TXA2 en plaquetas",
      ],
      correctAnswer: 2,
      explanation:
        "Los AINE actúan específicamente inhibiendo las enzimas ciclooxigenasa (COX-1 y COX-2), que son responsables de convertir el ácido araquidónico en prostaglandinas y tromboxanos. Los receptores D2 de dopamina en la hipófisis son bloqueados por fármacos antipsicóticos (como haloperidol o metoclopramida), no por los AINE. Este bloqueo D2 es lo que causa hiperprolactinemia como efecto adverso de los antipsicóticos, ya que la dopamina normalmente inhibe la liberación de prolactina.",
    },
    {
      id: 2,
      question: "Las BDZ administradas endovenosas en niños producen:",
      options: ["Incontinencia urinaria", "Convulsiones", "Migrañas", "Amnesia"],
      correctAnswer: 3,
      explanation:
        "Las benzodiacepinas actúan potenciando el efecto del GABA en el receptor GABA-A, aumentando la frecuencia de apertura del canal de cloro. En el hipocampo, estructura fundamental para la formación de nuevas memorias, este efecto GABAérgico interfiere con los procesos de consolidación de la memoria, produciendo amnesia anterógrada. Los niños son particularmente susceptibles a este efecto. Por esto, el midazolam se usa como premedicación anestésica, aprovechando este 'efecto amnésico' para que el paciente no recuerde procedimientos desagradables.",
    },
    {
      id: 3,
      question: "De las siguientes cual es característica del barbitúrico fenobarbital:",
      options: ["Irritabilidad", "Insomnio", "Estimulación centro respiratorio", "Inducción enzimática"],
      correctAnswer: 3,
      explanation:
        "El fenobarbital es uno de los inductores enzimáticos más potentes conocidos. Actúa activando el receptor nuclear PXR (receptor de pregnano X), que aumenta la transcripción de enzimas del citocromo P450, especialmente CYP3A4, CYP2C9 y CYP2C19. Esto tiene implicancias clínicas muy importantes: puede reducir la eficacia de anticonceptivos orales, warfarina, y muchos otros fármacos. Los pacientes que usan fenobarbital crónicamente metabolizan más rápido no solo otros medicamentos, sino también sustancias endógenas como la vitamina D, lo que puede contribuir a osteomalacia.",
    },
    {
      id: 4,
      question: "La via de administración sublingual se caracteriza por:",
      options: [
        "Ser la mas fisiológica",
        "Carecer de absorción y por lo tanto de efectos adversos",
        "Evitar el primer paso hepático",
        "Permitir acceso al Sistema Nervioso Central",
      ],
      correctAnswer: 2,
      explanation:
        "La mucosa sublingual tiene un rico plexo venoso que drena directamente a la vena cava superior, evitando completamente el sistema portal hepático. Esto significa que el fármaco llega a la circulación sistémica sin pasar primero por el hígado, donde normalmente sufriría metabolismo de primer paso. Esta característica es crucial para fármacos con alto metabolismo hepático como la nitroglicerina (que por vía oral tiene biodisponibilidad menor al 10%, pero por vía sublingual alcanza el 80%). Otros ejemplos son el buprenorfina y algunos antieméticos.",
    },
    {
      id: 5,
      question: "¿A que se denomina biofase?",
      options: ["Unión del receptor a su sitio de acción", "Circulación sistémica", "Regulación alostérica", "Ninguna es correcta"],
      correctAnswer: 3,
      explanation:
        "La biofase es un concepto farmacocinético que se refiere al compartimento donde el fármaco ejerce su efecto farmacológico, es decir, donde se encuentra con sus receptores o dianas moleculares. No es simplemente el plasma ni la circulación sistémica, sino el microentorno tisular donde ocurre la interacción fármaco-receptor. Por ejemplo, para un antibiótico que trata meningitis, la biofase sería el líquido cefalorraquídeo; para un broncodilatador inhalado, sería el músculo liso bronquial. La concentración en biofase es lo que realmente determina el efecto, no la concentración plasmática.",
    },
    {
      id: 6,
      question: "Neostigmina, por su mecanismo de acción, se clasifica como:",
      options: ["Parasimpaticomimético directo", "Parasimpaticolítico indirecto", "Parasimpaticolítico directo", "Parasimpaticomimético indirecto"],
      correctAnswer: 3,
      explanation:
        "La neostigmina inhibe reversiblemente la acetilcolinesterasa, la enzima que degrada la acetilcolina en la sinapsis. Al inhibir esta enzima, se acumula acetilcolina en el espacio sináptico, potenciando los efectos parasimpáticos. Es 'indirecto' porque no actúa directamente sobre los receptores muscarínicos o nicotínicos, sino que aumenta la disponibilidad del neurotransmisor endógeno. Se usa clínicamente para revertir el bloqueo neuromuscular postanestésico (donde aumenta la ACh en la placa motora), en miastenia gravis, y en íleo paralítico postoperatorio.",
    },
    {
      id: 7,
      question: "La dosis de carga incluye el siguiente parámetro farmacocinético:",
      options: ["Depuración", "Vd aparente", "K disociación", "Vida ½"],
      correctAnswer: 1,
      explanation:
        "La dosis de carga (DC) se calcula con la fórmula: DC = Vd × Cp deseada. El volumen de distribución aparente (Vd) nos indica cómo se distribuye el fármaco en el organismo, representando el volumen teórico necesario para contener la cantidad total de fármaco a la misma concentración que en plasma. Un fármaco con Vd grande (como la digoxina, ~500L) necesita una dosis de carga mayor para alcanzar rápidamente niveles terapéuticos. La depuración (clearance) se usa para calcular la dosis de mantenimiento, no la de carga.",
    },
    {
      id: 8,
      question: "En relación a un formulario terapéutico:",
      options: ["No se utiliza con frecuencia", "Se basa en patologías prevalentes", "Lo hace ANMAT", "Lo supervisa la OMS"],
      correctAnswer: 1,
      explanation:
        "Un formulario terapéutico es una lista de medicamentos seleccionados según criterios de eficacia, seguridad, calidad y costo, diseñada para cubrir las necesidades de salud más frecuentes de una población específica. Se construye identificando las patologías prevalentes de esa comunidad y seleccionando los fármacos más adecuados para tratarlas. Cada hospital o sistema de salud puede tener su propio formulario. El concepto de 'medicamentos esenciales' de la OMS sigue este mismo principio: cubrir el 95% de las necesidades de salud de una población con una lista limitada pero bien seleccionada de medicamentos.",
    },
    {
      id: 9,
      question:
        "En términos de Volumen de distribución aparente grandes (por ej, 12000 lts) ¿Cuál de los siguientes concentraciones plasmáticas iniciales es compatible con dicho valor?",
      options: ["1 ug/ml", "0,8 ug/ml", "40 ug/ml", "20ug/ml"],
      correctAnswer: 1,
      explanation:
        "El Vd se calcula como: Vd = Dosis administrada / Concentración plasmática. Un Vd de 12,000 litros (mucho mayor que el agua corporal total de ~42L) indica que el fármaco abandona rápidamente el plasma para acumularse en tejidos, dejando muy poca concentración en sangre. Usando la fórmula con una dosis típica, concentraciones muy bajas como 0.8 μg/ml son compatibles con Vd tan grandes. Fármacos lipofílicos como la cloroquina tienen Vd enormes porque se acumulan en tejidos grasos y en membranas celulares, permaneciendo muy poco en el plasma.",
    },
    {
      id: 10,
      question: "La clorhexidina es un antiséptico utilizado frecuentemente en la siguiente forma farmacéutica:",
      options: ["Pomadas", "Tinturas", "Colirios", "Colutorios"],
      correctAnswer: 3,
      explanation:
        "La clorhexidina es una biguanida catiónica con amplio espectro antibacteriano, muy utilizada en odontología y cirugía maxilofacial en forma de colutorios (enjuagues bucales). Su gran ventaja es la sustantividad: se une a las proteínas de la mucosa oral y se libera lentamente durante horas, manteniendo efecto antibacteriano prolongado. Se usa para control de placa dental, gingivitis, y post-cirugía oral. También existe en otras formas (jabones quirúrgicos, soluciones para antisepsia de piel), pero los colutorios son su uso más característico.",
    },
    {
      id: 11,
      question: "Con respecto a un fármaco base débil:",
      options: ["Se ioniza al pH acido de la orina", "El pH del medio no lo afecta", "Se absorbe mejor en intestino", "Resulta mejor absorbido en estomago"],
      correctAnswer: 0,
      explanation:
        "Una base débil acepta protones (H+) en medio ácido, convirtiéndose en su forma ionizada (protonada). Según la ecuación de Henderson-Hasselbalch, cuando el pH del medio es menor que el pKa de la base, predomina la forma ionizada. En la orina ácida (pH ~5-6), una base débil como la anfetamina se ioniza, se vuelve hidrosoluble y no puede reabsorberse en el túbulo renal, favoreciendo su eliminación. Este principio se usa terapéuticamente: acidificar la orina acelera la eliminación de bases débiles en intoxicaciones.",
    },
    {
      id: 12,
      question: "¿Cuántos son los pasos de Proceso de la Terapéutica Razonada que se especifican en la guía de la OMS?",
      options: ["4", "6", "7", "5"],
      correctAnswer: 1,
      explanation:
        "La OMS desarrolló la Guía de la Buena Prescripción con 6 pasos sistemáticos: 1) Definir el problema del paciente (diagnóstico), 2) Especificar el objetivo terapéutico (qué queremos lograr), 3) Seleccionar el tratamiento farmacológico (elegir el P-treatment personal), 4) Iniciar el tratamiento (receta, dosis, duración), 5) Dar información, instrucciones y advertencias al paciente, 6) Supervisar el tratamiento (eficacia, efectos adversos, adherencia). Este proceso estructurado busca racionalizar la prescripción y evitar errores.",
    },
    {
      id: 13,
      question: "Indique cuantas subunidades tiene un receptor muscarínico y cuál es su ligando endógeno:",
      options: ["5- acetilcolina", "3- acetilcolina", "5- noradrenalina", "5- dopamina"],
      correctAnswer: 0,
      explanation:
        "Los receptores muscarínicos pertenecen a la familia de receptores acoplados a proteína G (GPCR), con 7 dominios transmembrana. Existen 5 subtipos (M1-M5) de receptores muscarínicos, cada uno con diferente distribución tisular y acoplamiento a proteínas G. M1, M3 y M5 se acoplan a Gq (activan fosfolipasa C), mientras que M2 y M4 se acoplan a Gi (inhiben adenilato ciclasa). Su ligando endógeno es la acetilcolina, el mismo neurotransmisor que activa los receptores nicotínicos, pero los efectos y los mecanismos de transducción son muy diferentes.",
    },
    {
      id: 14,
      question: "¿Cómo se denomina la forma farmacéutica para administrar fármacos en los ojos?",
      options: ["Ungüentos", "Lagrimas", "Tinturas", "Colirios"],
      correctAnswer: 3,
      explanation:
        "Los colirios son soluciones o suspensiones estériles diseñadas específicamente para instilación ocular. Deben cumplir requisitos especiales: esterilidad absoluta, pH cercano al de las lágrimas (7.4), isotonicidad con el líquido lagrimal, y ausencia de partículas. Pueden contener conservantes (cloruro de benzalconio), pero estos pueden dañar el epitelio corneal con uso prolongado, por lo que existen presentaciones en monodosis sin conservantes. Los colirios permiten tratar patologías oculares con alta concentración local y mínimos efectos sistémicos.",
    },
    {
      id: 15,
      question: 'De los siguientes fármacos ¿Cuál sufre del fenómeno denominado "atrapamiento iónico"?',
      options: ["Amoxicilina", "Lidocaína", "Neostigmina", "Neomicina"],
      correctAnswer: 1,
      explanation:
        "La lidocaína es un anestésico local tipo amida con pKa de 7.9, lo que significa que es una base débil. En tejidos normales (pH 7.4), existe equilibrio entre forma ionizada y no ionizada. Pero en tejidos inflamados o infectados, el pH local desciende a 6-6.5 (acidosis). En este ambiente ácido, la lidocaína se ioniza casi completamente, volviéndose hidrosoluble e incapaz de atravesar la membrana del nervio para llegar a su sitio de acción (el canal de Na+ intracelular). Este 'atrapamiento' en forma ionizada explica por qué los anestésicos locales funcionan mal en tejidos infectados.",
    },
    {
      id: 16,
      question: "Un antagonista competitivo puro se caracteriza por:",
      options: [
        "Carácter de afinidad por el receptor",
        "Producir un efecto opuesto al agonista",
        "No requerir la presencia de receptores de reserva",
        "Impedir la acción del agonista sin poseer eficacia",
      ],
      correctAnswer: 3,
      explanation:
        "En farmacología, distinguimos dos propiedades de los fármacos: afinidad (capacidad de unirse al receptor) y eficacia (capacidad de activarlo). Un antagonista competitivo puro tiene afinidad pero CERO eficacia intrínseca. Se une al mismo sitio que el agonista (compiten) pero no genera señal intracelular. Su efecto es simplemente 'ocupar espacio', impidiendo que el agonista se una. Ejemplos clásicos: atropina (antagonista muscarínico), propranolol (antagonista β), naloxona (antagonista opioide). El bloqueo es superable: aumentando la concentración de agonista se puede desplazar al antagonista.",
    },
    {
      id: 17,
      question: "La denominación DE50 o CE50 es una variable que se utiliza para comparar:",
      options: ["Seguridad de fármacos", "Adecuación de fármacos", "Eficacia de fármacos", "Potencia de fármacos"],
      correctAnswer: 3,
      explanation:
        "La DE50 (Dosis Efectiva 50) es la dosis que produce el 50% del efecto máximo. Es una medida de POTENCIA: cuanto menor sea la DE50, más potente es el fármaco porque necesita menos cantidad para producir el mismo efecto. Importante: potencia NO es lo mismo que eficacia. Dos fármacos pueden tener diferente potencia pero igual eficacia máxima. Por ejemplo, morfina y fentanilo tienen eficacia similar (ambos pueden producir analgesia completa), pero fentanilo es ~100 veces más potente (necesita dosis 100 veces menores). Para comparar seguridad se usa el Índice Terapéutico (IT = DL50/DE50).",
    },
    {
      id: 18,
      question: "El pH inflamatorio de la cavidad bucal actúa sobre anestésicos locales del siguiente modo:",
      options: [
        "Los ioniza y hace más lipofílicos",
        "Los neutraliza y hace más hidrofílicos",
        "Los ioniza y hace más hidrofílicos",
        "Los neutraliza y hace más lipofílicos",
      ],
      correctAnswer: 2,
      explanation:
        "Los anestésicos locales son bases débiles. En el pH ácido del tejido inflamado (puede bajar a pH 6 o menos), estas bases captan protones (H+) y se convierten en su forma ionizada/protonada (BH+). Las moléculas ionizadas son hidrofílicas porque la carga les impide atravesar las membranas lipídicas. Para actuar, el anestésico debe: 1) atravesar la membrana en forma no ionizada, 2) re-ionizarse dentro de la célula para bloquear el canal de sodio. Si se ioniza antes de entrar (por pH ácido extracelular), no puede penetrar la membrana y el anestésico es inefectivo.",
    },
    {
      id: 19,
      question: "¿Cuál de los siguientes fármacos inhibe la síntesis de la pared celular?",
      options: ["Anisomicina", "Vancomicina", "Eritromicina", "Ácido clavulánico"],
      correctAnswer: 1,
      explanation:
        "La vancomicina es un glucopéptido que inhibe la síntesis de pared celular bacteriana por un mecanismo único: se une al dipéptido terminal D-alanil-D-alanina de los precursores del peptidoglicano, impidiendo físicamente que la transpeptidasa realice el entrecruzamiento. A diferencia de los β-lactámicos (que inhiben directamente la transpeptidasa), la vancomicina actúa sobre el sustrato. Es el antibiótico de elección para infecciones graves por Staphylococcus aureus resistente a meticilina (MRSA) y para colitis por Clostridioides difficile (vía oral). La resistencia (enterococo VRE) surge cuando las bacterias modifican el dipéptido terminal a D-ala-D-lactato.",
    },
    {
      id: 20,
      question: "La ventaja del uso de un AINE selectivo sobre la COX 2, como el CELECOXIB implica:",
      options: ["Mayor poder antiinflamatorio", "Menor riesgo de toxicidad gastrointestinal", "Menor efecto antiplaquetario", "Mayor poder antipirético"],
      correctAnswer: 1,
      explanation:
        "Los inhibidores selectivos de COX-2 (coxibs) fueron desarrollados para mantener el efecto antiinflamatorio (mediado principalmente por COX-2, la isoforma inducible en inflamación) mientras se preserva la COX-1 constitutiva que protege la mucosa gástrica (produce prostaglandinas citoprotectoras PGE2 y PGI2). El resultado es menor incidencia de úlceras y hemorragias digestivas. Sin embargo, esta selectividad tiene una desventaja cardiovascular: la COX-2 vascular produce prostaciclina (vasodilatadora y antiagregante), mientras que la COX-1 plaquetaria produce tromboxano (vasoconstrictor y proagregante). Al inhibir solo COX-2, se pierde el balance, aumentando el riesgo de eventos trombóticos.",
    },
  ],
};
