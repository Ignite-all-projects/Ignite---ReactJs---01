import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

const comments = [
    1, 
    2,
    3
]

export function Post({author, publishedAt, content}) {
    const  publisedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatar} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publisedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
         </header>

         <div className={styles.content}>
           {content.map((line => {
            if(line.type === 'paragraph') {
                return <p>{line.content}</p>
            } else if(line.type === 'link') {
                return <p><a href="#">{line.content}</a></p>
            }
           }))}
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
            {comments.map(comment)}
         </div>
        </article>
    )
}