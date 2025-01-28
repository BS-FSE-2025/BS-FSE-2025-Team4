import React, { Component } from 'react';

class ErrorBoundary extends Component { //פונקציה שמקבלת פרופס ומחזירה קומפוננטה
  constructor(props) {
    super(props);
    this.state = { hasError: false };  //סטייט של האם יש שגיאה
  }

  static getDerivedStateFromError(error) {  //פונקציה שמקבלת שגיאה ומחזירה אובייקט
    // עדכון סטייט כך שהדף ירנדר עם השגיאה
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // אתה יכול לשלוח את השגיאה לשרת שלך
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // אתה יכול להציג כל דבר שאתה רוצה במקום השגיאה
      return <h1>משהו השתבש </h1>;
    }

    return this.props.children; //החזרת הקומפוננטה שהיא ילד של הקומפוננטה
  }
}

export default ErrorBoundary;