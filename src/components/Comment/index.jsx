import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.Comment}>
            <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/61891084?v=4" />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                            <time dateTime='22-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário"><Trash size={20} /></button>
                    </header>
                    <p>Muito bom Devon, parabéns!! </p>
                </div>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Apaludir <span>20</span>
                </button>
            </footer>
        </div>
    )
}