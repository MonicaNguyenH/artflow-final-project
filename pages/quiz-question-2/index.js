import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/Quiz.module.css";

export default function QuestionTwo() {

  const searchParams = useSearchParams();
  const [selectedValues, setSelectedValues] = useState({});
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  useEffect(() => {
    // Convert searchParams to an object
    const params = Object.fromEntries(searchParams);
    // Setting the state to have the object that carried over from the last page(s)
    setSelectedValues(params);
  }, [searchParams]);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues({
      ...selectedValues,
      [name]: value
    });
  };

  return (
    <div className={`${styles.question_2} ${styles.quiz}`}> 
    <nav className={styles.quizQuestionNav}>
      <div>&nbsp;</div>
      <div className={styles.progress}>
        <div className={styles['progress-value']}></div>
      </div>
      <p><span className={styles.pinkNumber}>2</span>/5</p>
    </nav>
      {answerSubmitted &&
        <div className={styles.overlay2}>  
          <h3>The verdict is...</h3>
          <h4>Henri Matisse</h4>    
          <p>He used bold colors and simplified forms to capture the exoticism and beauty of these places, aiming to evoke a sense of paradise and spiritual harmony.</p>
          <Image src='/images/quiz/question2.png' alt="henri matisse art" width={800} height={800} />
          <Link href={{
            pathname: '/quiz-question-3',
            query: selectedValues
          }}><button>Next</button></Link>
      </div>}
      <div className={styles.quiz}>      
        <h1>Question 2</h1>
        <p>Which artist is famous for his use of vibrant, colorful patterns in his paintings, often depicting Tahitian landscapes and Polynesian women?</p>
        <div className={styles.questions}>
          <input type="radio" id="a" name="question_2" value="A" onChange={handleRadioChange} />
          <label htmlFor="a" className={selectedValues.question_2 === 'A' ? styles.selected : ''}>A. Vincent van Gogh</label>
          <input type="radio" id="b" name="question_2" value="B" onChange={handleRadioChange} />
          <label htmlFor="b" className={selectedValues.question_2 === 'B' ? styles.selected : ''}>B. Henri Matisse</label>
          <input type="radio" id="c" name="question_2" value="C" onChange={handleRadioChange} />
          <label htmlFor="c" className={selectedValues.question_2 === 'C' ? styles.selected : ''}>C. Pablo Picasso</label>  
          <input type="radio" id="d" name="question_2" value="D" onChange={handleRadioChange} />
          <label htmlFor="d" className={selectedValues.question_2 === 'D' ? styles.selected : ''}>D. Paul Gauguin</label>  
          <button className={styles.button} onClick={() => {selectedValues.question_2 && setAnswerSubmitted(true)}}>Next</button>        
        </div>
      </div>      
    </div>
  );
}