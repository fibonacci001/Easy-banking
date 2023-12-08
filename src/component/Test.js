import { useState, useEffect } from 'react';

const Test = () => {
    const [text, settext] = useState(null);
    const [checked, setChecked] = useState(false);
    useEffect( () => {
        const texter = document.querySelector('.texinput');
        settext(texter)

    },[])
    const toggleChecked = () => {
        setChecked(checked => !checked)
        if (!checked) {
            
            console.log(text)
        }
    }
    
    return ( 
        <div>
        <input 
    type="checkbox"
    checked={checked}
    onChange={toggleChecked} />
    <input type="text" className='textinput' />
    </div>
     );
}
 
export default Test;