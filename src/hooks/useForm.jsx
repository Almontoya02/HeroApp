import {useState} from 'react'

export const useForm = (initialState={}) => {
    const [formValues, setvalues] = useState(initialState)
    const reset = ()=>{
        setvalues(initialState)
    }
    const handleInputChange =({target})=>{
        setvalues({
            ...formValues,
            [target.name]:target.value
        })
    }
    
    return [formValues,handleInputChange,reset];
}


