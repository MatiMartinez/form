import { useState } from "react";
import "./App.css";
import { exam1, exam2, exam3, exam4, exam5, exam6, exam7, exam8 } from "./exams";
import type { Exam } from "./exams";

const exams: Exam[] = [exam1, exam2, exam3, exam4, exam5, exam6, exam7, exam8];

function App() {
  const [currentExam, setCurrentExam] = useState<Exam>(exam1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExamSelector, setShowExamSelector] = useState(false);
  const [showLovePopup, setShowLovePopup] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted || answers[questionId] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowLovePopup(true);
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
      {/* Love Popup */}
      {showLovePopup && (
        <div className="love-popup-overlay" onClick={() => setShowLovePopup(false)}>
          <div className="love-popup" onClick={(e) => e.stopPropagation()}>
            <div className="love-hearts">
              <span className="heart heart-1">💕</span>
              <span className="heart heart-2">💖</span>
              <span className="heart heart-3">💕</span>
            </div>
            <div className="love-emoji">🥰</div>
            <h2 className="love-title">Te amo mucho princesa</h2>
            <p className="love-subtitle">💝</p>
            <div className="love-sparkles">✨💫✨</div>
            <button className="love-close-btn" onClick={() => setShowLovePopup(false)}>
              Ver mis resultados 💪
            </button>
          </div>
        </div>
      )}

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
          const hasAnswer = answers[q.id] !== undefined;
          const isCorrect = answers[q.id] === q.correctAnswer;
          const isLocked = hasAnswer;

          return (
            <div key={q.id} className={`question-card ${hasAnswer ? (isCorrect ? "correct" : "incorrect") : ""} ${isLocked ? "locked" : ""}`}>
              <div className="question-number">{qIndex + 1}</div>
              <h2 className="question-text">{q.question}</h2>

              <div className="options-list">
                {q.options.map((option, oIndex) => {
                  const isSelected = answers[q.id] === oIndex;
                  const isCorrectOption = q.correctAnswer === oIndex;

                  let optionClass = "option";
                  if (hasAnswer) {
                    if (isCorrectOption) optionClass += " correct-option";
                    else if (isSelected && !isCorrectOption) optionClass += " wrong-option";
                  } else if (isSelected) {
                    optionClass += " selected";
                  }

                  return (
                    <button key={oIndex} className={optionClass} onClick={() => handleSelect(q.id, oIndex)} disabled={isLocked}>
                      <span className="option-letter">{String.fromCharCode(65 + oIndex)}</span>
                      <span className="option-text">{option}</span>
                      {hasAnswer && isCorrectOption && <span className="check-icon">✓</span>}
                      {hasAnswer && isSelected && !isCorrectOption && <span className="x-icon">✗</span>}
                    </button>
                  );
                })}
              </div>

              {hasAnswer && (
                <div className={`feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
                  <div className="feedback-header">
                    <span className="feedback-icon">{isCorrect ? "✓" : "✗"}</span>
                    <span className="feedback-title">{isCorrect ? "¡Correcto!" : "Incorrecto"}</span>
                  </div>
                  {isCorrect && q.explanation && <p className="feedback-explanation">{q.explanation}</p>}
                  {!isCorrect && (
                    <p className="feedback-explanation">
                      La respuesta correcta es: <strong>{String.fromCharCode(65 + q.correctAnswer)}</strong> - {q.options[q.correctAnswer]}
                      {q.explanation && (
                        <>
                          <br />
                          <br />
                          {q.explanation}
                        </>
                      )}
                    </p>
                  )}
                </div>
              )}
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
