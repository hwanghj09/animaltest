import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#f0f8ff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#2c3e50',
      }}
    >
      <h1 style={{ fontSize: '3rem' }}>🐾 동물 심리 테스트 🐾</h1>
      <p style={{ fontSize: '1.2rem', color: '#34495e' }}>
        당신은 어떤 동물과 닮았을까요?
      </p>
      <button
        onClick={() => navigate('/quiz')}
        style={{
          backgroundColor: '#27ae60',
          color: 'white',
          border: 'none',
          padding: '15px 40px',
          fontSize: '1.2rem',
          borderRadius: '30px',
          cursor: 'pointer',
          boxShadow: '0 6px 12px rgba(39, 174, 96, 0.4)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#219150')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#27ae60')}
      >
        시작하기
      </button>
    </div>
  );
};

export default HomePage;
