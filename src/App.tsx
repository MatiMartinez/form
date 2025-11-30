import { useState } from "react";
import "./App.css";
import { exam1, exam2 } from "./exams";
import type { Exam } from "./exams";

const exams: Exam[] = [exam1, exam2];

function App() {
  const [currentExam, setCurrentExam] = useState<Exam>(exam1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExamSelector, setShowExamSelector] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExamChange = (exam: Exam) => {
    setCurrentExam(exam);
    setAnswers({});
    setSubmitted(false);
    setShowExamSelector(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateScore = () => {
    let correct = 0;
    currentExam.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / currentExam.questions.length) * 100);
  };

  const getCorrectCount = () => {
    return currentExam.questions.filter((q) => answers[q.id] === q.correctAnswer).length;
  };

  const score = calculateScore();

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <button className="exam-selector-btn" onClick={() => setShowExamSelector(!showExamSelector)}>
          <span className="selector-icon">☰</span>
          Cambiar examen
        </button>
        <h1>{currentExam.title}</h1>
        <p className="subtitle">{currentExam.description}</p>
        {!submitted && (
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(Object.keys(answers).length / currentExam.questions.length) * 100}%` }} />
          </div>
        )}
      </header>

      {showExamSelector && (
        <div className="exam-selector-modal" onClick={() => setShowExamSelector(false)}>
          <div className="exam-selector-content" onClick={(e) => e.stopPropagation()}>
            <h3>Seleccionar Examen</h3>
            <div className="exam-list">
              {exams.map((exam) => (
                <button key={exam.id} className={`exam-option ${currentExam.id === exam.id ? "active" : ""}`} onClick={() => handleExamChange(exam)}>
                  <span className="exam-option-title">{exam.title}</span>
                  <span className="exam-option-desc">{exam.description}</span>
                </button>
              ))}
            </div>
            <button className="close-selector" onClick={() => setShowExamSelector(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {submitted && (
        <div className={`results-card ${score >= 60 ? "pass" : "fail"}`}>
          <div className="score-circle">
            <span className="score-number">{score}%</span>
          </div>
          <p className="score-text">
            {getCorrectCount()} de {currentExam.questions.length} respuestas correctas
          </p>
          <p className="score-message">{score >= 80 ? "¡Excelente!" : score >= 60 ? "¡Aprobado!" : "Necesitas repasar"}</p>
          <button className="retry-btn" onClick={handleRetry}>
            Reintentar examen
          </button>
        </div>
      )}

      <div className="questions-list">
        {currentExam.questions.map((q, qIndex) => {
          const isCorrect = answers[q.id] === q.correctAnswer;
          const hasAnswer = answers[q.id] !== undefined;

          return (
            <div key={q.id} className={`question-card ${submitted ? (isCorrect ? "correct" : hasAnswer ? "incorrect" : "unanswered") : ""}`}>
              <div className="question-number">{qIndex + 1}</div>
              <h2 className="question-text">{q.question}</h2>

              <div className="options-list">
                {q.options.map((option, oIndex) => {
                  const isSelected = answers[q.id] === oIndex;
                  const isCorrectOption = q.correctAnswer === oIndex;

                  let optionClass = "option";
                  if (submitted) {
                    if (isCorrectOption) optionClass += " correct-option";
                    else if (isSelected && !isCorrectOption) optionClass += " wrong-option";
                  } else if (isSelected) {
                    optionClass += " selected";
                  }

                  return (
                    <button key={oIndex} className={optionClass} onClick={() => handleSelect(q.id, oIndex)} disabled={submitted}>
                      <span className="option-letter">{String.fromCharCode(65 + oIndex)}</span>
                      <span className="option-text">{option}</span>
                      {submitted && isCorrectOption && <span className="check-icon">✓</span>}
                      {submitted && isSelected && !isCorrectOption && <span className="x-icon">✗</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="submit-section">
          <p className="answered-count">
            <strong>{Object.keys(answers).length}</strong> de {currentExam.questions.length} respondidas
          </p>
          <button className="submit-btn" onClick={handleSubmit} disabled={Object.keys(answers).length === 0}>
            Finalizar examen
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
