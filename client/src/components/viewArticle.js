import React from 'react'
//import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

export default function ViewArticle({article}){
    return(
   
   <Card
    bg="info"
    key={article.text}
    text="white"
    style={{ width: '20rem' , textAlign:'left',margin:'10px 10px 10px 10px'}}
    className="mb-8"
  >
    <Card.Header>Author : {article.author}</Card.Header>
    <Card.Body>
      <Card.Title>{article.title}</Card.Title>
      <Card.Text>
        {article.text}
      </Card.Text>
    </Card.Body>
  </Card>
   
   )
};