import React, { createRef } from 'react';
import {useDispatch} from 'react-redux'
import {textAdditor} from '../store/TextSlice'

const Input = () => {
    const texti = createRef()
    const dispatch = useDispatch()

    function addText() {
        dispatch(textAdditor(texti.current.value))
    }

    return (
        <div>
            <input type="text" ref={texti} />
            <button onClick={addText}>push</button>
        </div>
    );
};

export default Input;