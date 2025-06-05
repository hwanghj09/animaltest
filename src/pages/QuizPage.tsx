import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (animal: string) => {
    const newAnswers = [...answers, animal];

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setAnswers(newAnswers);
    } else {
      // 결과 계산 및 퍼센트 포함
      const result = calculateResult(newAnswers);
      navigate('/result', { state: { result } });
    }
  };

  const calculateResult = (answers: string[]) => {
    const count: Record<string, number> = {};
    answers.forEach((animal) => {
      count[animal] = (count[animal] || 0) + 1;
    });

    const total = answers.length;

    // 상위 3개의 동물 결과 반환
    return Object.entries(count)
      .map(([animal, cnt]) => ({
        animal,
        percentage: Math.round((cnt / total) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  };
  const q = questions[current];

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f9f9f9',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#34495e' }}>
        Q{current + 1}. {q.question}
      </h2>
      <div>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.animal)}
            style={{
              display: 'block',
              width: '100%',
              padding: '15px 0',
              marginBottom: '15px',
              fontSize: '1.1rem',
              borderRadius: '10px',
              border: '2px solid #27ae60',
              backgroundColor: '#2ecc71',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s, border-color 0.3s',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#27ae60';
              e.currentTarget.style.borderColor = '#219150';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2ecc71';
              e.currentTarget.style.borderColor = '#27ae60';
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
