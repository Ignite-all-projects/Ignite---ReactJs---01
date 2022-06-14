import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export function Comment({content}) {
    return (
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/61891084?v=4" />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                            <time dateTime='22-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário"><Trash size={20} /></button>
                    </header>
                    <p>{content}</p>
                </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Apaludir <span>20</span>
                </button>
            </footer>
            </div>
        </div>
    )
}