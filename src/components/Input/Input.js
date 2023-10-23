import React from 'react'

export default function Input({elem , type, className, validation }) {

 const element = 
 elem === 'input' ? (
    <input
     type={type} 
     className={className}
     {...validation}
     />
 ) : (
    <textarea
    className={className}
    />
 )
 return element
}
