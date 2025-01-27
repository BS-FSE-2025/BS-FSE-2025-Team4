import React, { useState, useEffect } from 'react';

const App = () => {
  const [rules, setRules] = useState([]);
  const [ruleTitle, setRuleTitle] = useState('');
  const [ruleDescription, setRuleDescription] = useState('');

  const fetchRules = async () => {
    try {
      const response = await fetch('http://localhost:3000/rules');
      const data = await response.json();
      setRules(data);
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRule = {
      title: ruleTitle,
      description: ruleDescription,
    };

    try {
      const response = await fetch('http://localhost:3000/add-rule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRule),
      });

      if (response.ok) {
        alert('החוק נשמר בהצלחה');
        fetchRules();
        setRuleTitle('');
        setRuleDescription('');
      } else {
        alert('שגיאה בשמירת החוק');
      }
    } catch (error) {
      console.error('Error adding rule:', error);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(100deg, rgba(159,215,156,1) 0%, rgb(250, 203, 77) 100%)',
        padding: '50px',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#010101' }}>ניהול חוקים ותקנונים</h1>

      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          marginTop: '30px',
          maxWidth: '600px',
          margin: '30px auto',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>הוסף חוק או תקנון חדש</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ruleTitle">כותרת החוק:</label>
          <input
            type="text"
            id="ruleTitle"
            value={ruleTitle}
            onChange={(e) => setRuleTitle(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />

          <label htmlFor="ruleDescription">תיאור החוק:</label>
          <textarea
            id="ruleDescription"
            rows="4"
            value={ruleDescription}
            onChange={(e) => setRuleDescription(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: '#60db34',
              color: 'white',
              border: 'none',
              padding: '15px 25px',
              fontSize: '1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#60db34')}
          >
            שלח את החוק
          </button>
        </form>
      </div>

      <div
        style={{
          marginTop: '40px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#010101' }}>החוקים והתקנונים הקיימים</h2>
        <div>
          {rules.map((rule, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '20px',
                marginBottom: '20px',
                borderRadius: '8px',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '10px' }}>{rule.title}</h3>
              <p style={{ color: '#7f8c8d' }}>
                <strong>תיאור:</strong> {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
