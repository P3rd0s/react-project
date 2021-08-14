import React, {useEffect, useState} from "react";
import './CustomInput-style.scss';

function CustomInput({title, units, setupInput}) {

    const [inputValue, setInput] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => setupInput(inputValue), 500);
        return () => clearTimeout(timeOut);
    }, [inputValue]);

    return (
        <>
            <p className="input__title">{title}</p>
            <div className="input__wrapper">
                <input className="input__field" type="number"
                       value={inputValue} onChange={event => setInput(event.target.value)}/>
                <p className="input__unit">{units}</p>
            </div>
        </>
    );
}

export default CustomInput;