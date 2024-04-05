import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/Quiz.module.css";

export default function QuestionFour() {

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
    <div className={`${styles.question_4} ${styles.quiz}`}> 
    <nav className={styles.quizQuestionNav}>
      <div>&nbsp;</div>
      <div className={styles.progress}>
        <div className={styles['progress-value']}></div>
      </div>
      <p><span className={styles.pinkNumber}>4</span>/5</p>
    </nav>
      {answerSubmitted &&
        <div className={styles.overlay}>  
          <h3>The verdict is...</h3>
          <h4>Carmine</h4>    
          <p>It is obtained from the cochineal insect and has been employed for centuries in various applications such as textiles, cosmetics, and food coloring.</p>
          <Image src='/images/quiz/question4.png' alt="carmine beetles" width={800} height={800} />
          <Link href={{
            pathname: '/quiz-question-5',
            query: selectedValues
          }}><button>Next</button></Link>
      </div>}
      <div className={styles.quiz}>      
        <h1>Question 4</h1>
        <p>What is the color of the pigment derived from crushed insects, historically used to create a vibrant red dye?</p>
        <div>
          <input type="radio" id="a" name="question_4" value="A" onChange={handleRadioChange} />
          <label htmlFor="a" className={selectedValues.question_4 === 'A' ? styles.selected : ''}>A. Carmine</label>
          <input type="radio" id="b" name="question_4" value="B" onChange={handleRadioChange} />
          <label htmlFor="b" className={selectedValues.question_4 === 'B' ? styles.selected : ''}>B. Ultramarine</label>
          <input type="radio" id="c" name="question_4" value="C" onChange={handleRadioChange} />
          <label htmlFor="c" className={selectedValues.question_4 === 'C' ? styles.selected : ''}>C. Sienna</label>  
          <input type="radio" id="d" name="question_4" value="D" onChange={handleRadioChange} />
          <label htmlFor="d" className={selectedValues.question_4 === 'D' ? styles.selected : ''}>D. Ochre</label>  
          <button onClick={() => {selectedValues.question_4 && setAnswerSubmitted(true)}}>Submit</button>        
        </div>
      </div>      
    </div>
  );
}