import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { results } from '../data/results';

type ResultItem = {
  animal: string;
  percentage: number;
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const resultList = (location.state as { result: ResultItem[] })?.result;

  if (!resultList || resultList.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>결과를 찾을 수 없습니다.</div>;
  }

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '30px 25px',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fdf6e3',
        borderRadius: '20px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ fontSize: '2.8rem', marginBottom: '30px', color: '#6d4c41' }}>
        당신과 닮은 동물 TOP 3 🐾
      </h1>

      {resultList.map(({ animal, percentage }) => {
        const info = results[animal];
        if (!info) return null;

        return (
          <div
            key={animal}
            style={{
              marginBottom: '25px',
              padding: '20px',
              backgroundColor: '#fff3e0',
              borderRadius: '15px',
              boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{info.name}</h2>
            <p style={{ fontSize: '1rem', marginBottom: '6px' }}>
              닮은 정도: <strong>{percentage}%</strong>
            </p>
            <p style={{ color: '#6d4c41', fontSize: '1.1rem' }}>{info.description}</p>
          </div>
        );
      })}

      <button
        onClick={() => navigate('/')}
        style={{
          padding: '15px 50px',
          fontSize: '1.2rem',
          borderRadius: '30px',
          border: 'none',
          backgroundColor: '#ffb74d',
          color: '#5d4037',
          cursor: 'pointer',
          boxShadow: '0 5px 12px rgba(255, 183, 77, 0.6)',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffa726')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffb74d')}
      >
        다시 하기
      </button>
    </div>
  );
};

export default ResultPage;
