import React from 'react'
import { Header } from './components/Header/Header'
import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


function App() {

  // author { avatar_url: '', name: '', role: '' }[
  // publishedAt: date
  // content
  const posts = [
    {
      id: 1,
      author: {
        avatar: 'https://github.com/itslucassouza.png',
        name: 'Lucas Souza',
        role: 'Dev front-end'
      },
      content: [
        {type: 'paragraph', content: 'Fala Galera'},
        {type: 'paragraph', content: 'acabei de subir tananan'},
        {type: 'link', content: 'jane.design/doctorcare'}

      ],
      publishedAt: new Date("2022-05-03 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatar: 'https://github.com/diego3g.png',
        name: 'DiegoFernandes',
        role: 'Dev front-end'
      },
      content: [
        {type: 'paragraph', content: 'Fala Galera'},
        {type: 'paragraph', content: 'acabei de subir tananan'},
        {type: 'link', content: 'jane.design/doctorcare'}

      ],
      publishedAt: new Date("2022-05-03 20:00:00"),
    },
  ];
  
  console.log(posts)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </>
  )
}

export default App
