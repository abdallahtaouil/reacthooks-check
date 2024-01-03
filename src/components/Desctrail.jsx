import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
function Desctrail({movies}) {
    const {id} =useParams()
    console.log(id)
    const movie=movies.find(e=>e.id==id)
    console.log(movie)
  return (
    <div>
        <Link to='/' type='button'>Home</Link>
       <p>{movie.description}</p> 
       <iframe height={500} width={500} src={movie.trailer} frameborder="0"></iframe>
    </div>
  )
}

export default Desctrail