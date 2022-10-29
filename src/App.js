import React from 'react'
import { Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/home/home.page'
import About from './pages/about/about.page'
import Article from './pages/article/article.page'
import NotFound from './pages/not-found/not-found.page'
import ArticleList from './pages/articleList/article-list.page'
import NavBar from './routes/nav/navbar.component'


import "./App.css"



const App = () => {
  return (
    <div className='App'>
      
        <div className='page-body'>
          <Routes>
            <Route path='/' element={<NavBar />}>
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='articles' element={ <ArticleList /> } />
            <Route path='articles/:articlesId' element={ <Article /> } />
            </Route>
            
          </Routes>
      </div>
    </div>
  )
}

export default App
