// write your custom hook here to control your checkout form
// since there is a set value in the handle submit that is what i am going to be using to do my custom hook


import { useState } from 'react'

const useForm = (initialValue) =>{

    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, handleChanges];
  
}

export default useForm;