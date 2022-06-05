import React from 'react'
import { Header } from './components/Header/Header'
import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

        <Post author="Lucas Souza" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis beatae tempora eum consequatur quia quam repellendus blanditiis, sequi odit quod esse. Obcaecati eligendi sapiente quam commodi debitis, blanditiis magni iste?"
/>



        <Post author="Lucas Souza" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis beatae tempora eum consequatur quia quam repellendus blanditiis, sequi odit quod esse. Obcaecati eligendi sapiente quam commodi debitis, blanditiis magni iste?"
                />

                </main>

      </div>
    </>
  )
}

export default App
