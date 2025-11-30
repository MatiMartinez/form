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
    },
    {
      id: 2,
      question: "Las BDZ administradas endovenosas en niños producen:",
      options: ["Incontinencia urinaria", "Convulsiones", "Migrañas", "Amnesia"],
      correctAnswer: 3,
    },
    {
      id: 3,
      question: "De las siguientes cual es característica del barbitúrico fenobarbital:",
      options: ["Irritabilidad", "Insomnio", "Estimulación centro respiratorio", "Inducción enzimática"],
      correctAnswer: 3,
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
    },
    {
      id: 5,
      question: "¿A que se denomina biofase?",
      options: ["Unión del receptor a su sitio de acción", "Circulación sistémica", "Regulación alostérica", "Ninguna es correcta"],
      correctAnswer: 3,
    },
    {
      id: 6,
      question: "Neostigmina, por su mecanismo de acción, se clasifica como:",
      options: ["Parasimpaticomimético directo", "Parasimpaticolítico indirecto", "Parasimpaticolítico directo", "Parasimpaticomimético indirecto"],
      correctAnswer: 3,
    },
    {
      id: 7,
      question: "La dosis de carga incluye el siguiente parámetro farmacocinético:",
      options: ["Depuración", "Vd aparente", "K disociación", "Vida ½"],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "En relación a un formulario terapéutico:",
      options: ["No se utiliza con frecuencia", "Se basa en patologías prevalentes", "Lo hace ANMAT", "Lo supervisa la OMS"],
      correctAnswer: 1,
    },
    {
      id: 9,
      question:
        "En términos de Volumen de distribución aparente grandes (por ej, 12000 lts) ¿Cuál de los siguientes concentraciones plasmáticas iniciales es compatible con dicho valor?",
      options: ["1 ug/ml", "0,8 ug/ml", "40 ug/ml", "20ug/ml"],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "La clorhexidina es un antiséptico utilizado frecuentemente en la siguiente forma farmacéutica:",
      options: ["Pomadas", "Tinturas", "Colirios", "Colutorios"],
      correctAnswer: 3,
    },
    {
      id: 11,
      question: "Con respecto a un fármaco base débil:",
      options: ["Se ioniza al pH acido de la orina", "El pH del medio no lo afecta", "Se absorbe mejor en intestino", "Resulta mejor absorbido en estomago"],
      correctAnswer: 0,
    },
    {
      id: 12,
      question: "¿Cuántos son los pasos de Proceso de la Terapéutica Razonada que se especifican en la guía de la OMS?",
      options: ["4", "6", "7", "5"],
      correctAnswer: 1,
    },
    {
      id: 13,
      question: "Indique cuantas subunidades tiene un receptor muscarínico y cuál es su ligando endógeno:",
      options: ["5- acetilcolina", "3- acetilcolina", "5- noradrenalina", "5- dopamina"],
      correctAnswer: 0,
    },
    {
      id: 14,
      question: "¿Cómo se denomina la forma farmacéutica para administrar fármacos en los ojos?",
      options: ["Ungüentos", "Lagrimas", "Tinturas", "Colirios"],
      correctAnswer: 3,
    },
    {
      id: 15,
      question: 'De los siguientes fármacos ¿Cuál sufre del fenómeno denominado "atrapamiento iónico"?',
      options: ["Amoxicilina", "Lidocaína", "Neostigmina", "Neomicina"],
      correctAnswer: 1,
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
    },
    {
      id: 17,
      question: "La denominación DE50 o CE50 es una variable que se utiliza para comparar:",
      options: ["Seguridad de fármacos", "Adecuación de fármacos", "Eficacia de fármacos", "Potencia de fármacos"],
      correctAnswer: 3,
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
    },
    {
      id: 19,
      question: "¿Cuál de los siguientes fármacos inhibe la síntesis de la pared celular?",
      options: ["Anisomicina", "Vancomicina", "Eritromicina", "Ácido clavulánico"],
      correctAnswer: 1,
    },
    {
      id: 20,
      question: "La ventaja del uso de un AINE selectivo sobre la COX 2, como el CELECOXIB implica:",
      options: ["Mayor poder antiinflamatorio", "Menor riesgo de toxicidad gastrointestinal", "Menor efecto antiplaquetario", "Mayor poder antipirético"],
      correctAnswer: 1,
    },
  ],
};
