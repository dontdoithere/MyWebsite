    import React from 'react';
    import styles from './Projects.module.css';




    const Projects: React.FC<{}> = () => {

        return ( 
               <section id={styles.projects}>
               <h2 id={styles['h-projects']}>My Projects</h2>
               <div id={styles['flex-container']}>
                 <article id={styles['project-box-1']}>
                   <h3 className={styles['project-names']}>Android Application</h3>
                   <img src="./pictures/homeScreen.png" className={styles['project-pics']} alt="Project 1 Image" />
                   <hr className={styles['separator-line']} />
                   <button className={styles.button}>Full Story</button>
                   </article>
         
                   <div id={styles['square-container']}>
                     <div className={styles.square}></div>
                     <div className={styles.square}></div>
                     <div className={styles.square}></div>
                 </div>
               </div>
             
                  <div id={styles['flex-project-box2']}>
                   <article id={styles['project-box-2']}>
                     <h3 className={styles['project-names']}>Arduino/Pi system</h3>
                     <img src="./pictures/second-picture.png" className={styles['project-pics']} alt="Project 2 Image" />
                     <hr className={styles['separator-line']} />
                     <button className={styles.button}>Full Story</button>
                     </article>

                     <div></div>
                  </div>
             </section>
          );
    }

    export default Projects;