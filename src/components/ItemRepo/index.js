import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>dio/ulisses</p>
        <a href={repo.html_url} target="blank">{repo.full_name}</a> <br/>
        <a href="#" rel='noreferrer' className='remover'>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
