import React from 'react';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import QuestionBank from './components/QuestionBank';
import styles from 'App.scss';

export const App = () => {
  return (
    <>
    <Navbar />
    <FirstPage />
    <QuestionBank />
    </>
  )
}
