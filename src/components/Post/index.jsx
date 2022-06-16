import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { useState } from 'react';

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

//programação inperativa

    //o que deve ser feito (passo-a-passo)

//programação declarativa (utilizada no react)

    //quais as condições para eu ter o resultado final



export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
      'Post muito bacana, hein?'
    ]);

    const [newCommentText, setNewCommentText] = useState('') 

    const  publisedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        //setando o valor no estado
        setComments([...comments, newCommentText]);

        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

    function handleNewCommentInvalid() {
        //setCustoma nativo do html
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete) {

        //imutabilidade
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                return <p key={line.content}>{line.content}</p>
            } else if(line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
            }
           }))}
         </div>

         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
             <strong>Deixe seu Feedback</strong>
             <textarea 
                value={newCommentText}
                onChange={handleNewCommentChange}
                name="comment"
                required
                onInvalid={handleNewCommentInvalid}
                placeholder='Deixe um comentário'
             />
             <footer>
                 
             <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
             </footer>
         </form>

         <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment 
                onDeleteComment={deleteComment}
                key={comment} 
                content={comment}/>
            })}
         </div>
        </article>
    )
}