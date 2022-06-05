import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/61891084?v=4" />
                <div className={styles.authorInfo}>
                    <strong>Lucas Souza</strong>
                    <span>Web developer</span>
                </div>
            </div>

            <time dateTime='22-05-11 08:13:00'>Publicado há 1h</time>
         </header>

         <div className={styles.content}>
            <p>Fala galeraa 👋 </p>

            <p>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
            </p>
            <p>
                <a href="#">
            👉 jane.design/doctorcare

                </a>
            </p>
         </div>

         <form className={styles.commentForm}>
             <strong>Deixe seu Feedback</strong>
             <textarea 
                placeholder='Deixe um comentário'
             />
             <footer>
                 
             <button type='submit'>Publicar</button>
             </footer>
         </form>

         <div className={styles.commentList}>
            <Comment />
         </div>
        </article>
    )
}