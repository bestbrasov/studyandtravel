import React, { createContext, useState, useContext } from 'react';

const QuestionContext = createContext();

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  const value = {
    selectedQuestion,
    setSelectedQuestion,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
