import styles from './PromptDesc.module.css';
import Image from 'next/image';
import React, {useState} from 'react';

export default function PromptDesc() {
    const [saved, setSaved] = useState(false);

    const handleClickSaved = () => {
        setSaved(!saved);
    }

    return (
        <>
            <div className={styles.promptDescContainer}>
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        <div className={styles.subHead}>
                            <p>New Prompt</p>
                        </div>
                        <div className={styles.header}>
                            <p>Playful Paws</p>
                        </div>
                        <div className={styles.description}>
                            <p>
                            Draw a dog in action, his paws poised to spring into action as he leaps into the air, the wind ruffling his fur as he darts across the grass with unwavering determination. 
                            </p>
                        </div>
                        <div className={styles.tags}>
                            <div className={styles.chip} style={{ color: 'var(--rose)' }}>
                                <p>Dog</p>
                            </div>
                            <div className={styles.chip} style={{ color: 'var(--light-blue)' }}>
                                <p>Adventure</p>
                            </div>
                            <div className={styles.chip} style={{ color: 'var(--blue)' }}>
                                <p>Animal</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.startButton}>
                                <button>Start Now</button>
                            </div>
                            <button 
                                className={`${styles.icon} ${saved ? styles.iconSaved : ''}`}
                                onClick= {handleClickSaved}>
                                    <img src="/images/heart_dark_grey.svg" alt="save prompt"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.topContainer}></div>
            </div>
        </>
    )
}