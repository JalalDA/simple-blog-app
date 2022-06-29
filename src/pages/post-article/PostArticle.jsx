import React, { useState } from 'react'
import Header from '../../components/header/Header'
import './postArticle.css'

const PostArticle = () => {
    // const [tittle, setTittle] = useState('')
    // const [content, setContent] = useState('')
    // const [authoer, setAuthor] = useState('')
  return (
    <>
    <Header/>
    <div className='write'>
        <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput">
        </label>
        <input type="text" placeholder='Title Here' className='writeInput' autoFocus={true}/>
      </div>
      <div className="writeFormGroup">
        <textarea placeholder='Write your article here'
        type='text'
        className='writeInput writeText'>
        </textarea>
      </div>
      <button className="writeSubmit">Publish</button>
        </form>
    </div>
    </>
    
  )
}

export default PostArticle