import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

const Button = (props) => {
    return ( 
        <button><HandThumbUpIcon />{props.texto}</button>        
     );
}
 
export default Button;