import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt}) {
    return (
        <article className={styles.post}>
            aaa
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatar} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time dateTime='22-05-11 08:13:00'>{publishedAt.toString()}</time>
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