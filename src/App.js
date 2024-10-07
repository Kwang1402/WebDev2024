import React, { useEffect, useState } from 'react';
import QuestionList from './components/QuestionList/QuestionList';
import questionsData from './_SAMPLE_DATA/questions.json';

import styles from './App.module.scss'

import TodayFeaturedSite from './components/TodayFeaturedSite/TodayFeaturedSite';
import siteData from './_SAMPLE_DATA/todayfeaturedsite.json';
import Footer from './components/Footer/Footer';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData);
      setQuestions(questionArray);
  }, []);

  
  return (
      <div className={styles.container}>
        <QuestionList questions={questions} />
        <TodayFeaturedSite
          image={siteData.image}
          title={siteData.title}
          paragraph={siteData.paragraph}
          questions={siteData.questions}
          answers={siteData.answers}
          answered={siteData.answered}
        />
      </div>
  );
}

export default App;
