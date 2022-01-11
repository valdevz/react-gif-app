import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setcategories}) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setcategories(category =>{
                var indice = category.indexOf(inputValue);
                if(indice === -1){
                    setinputValue('')
                    return [ inputValue, ...category ]
                  }
                  alert('ese elemento ya existe')
                  return category
            })
        }

    }
    return (
         <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
          />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}