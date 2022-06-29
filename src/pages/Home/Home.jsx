import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import dummy from '../../assets/img/dummy.jpg'
import axios from 'axios'
import './home.css'

const Home = () => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
      const getArticles = async ()=>{
        try {
        const result = await axios.get("http://localhost:8000/articles")
        console.log(result.data);
        setArticles(result.data.result)
        } catch (error) {
          console.log(error);
        }
      }
      getArticles()
    },[]);
    
  return (
    <>
    <Header/>
    <div className="newArticle">
        {articles.map(article=>
        <div className='col-lg-4 col-sm-3'>
          <div className="tittle">{article.tittle}</div>
          <div className="author"> Author : {article.author}</div>
          <img src={dummy} alt="" />
          <div className="singleArticle">{article.content}</div>
        </div>  
        )}
    </div>
    </>
  )
}

export default Home