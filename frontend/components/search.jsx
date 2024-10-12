import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search(props){
    function handleSubmit(event){
        event.preventDefault();
        props.handlePage(1);
    }
    return(
        // <div className='search-div'>
        //     <FontAwesomeIcon icon={faSearch} />
        //     <input placeholder='Search' />
        // </div>
        <div className='search-div'>
            <FontAwesomeIcon icon={faSearch} />
            <form onSubmit={handleSubmit}> 
                <input placeholder='Search' />
            </form>
        </div>
    )
}