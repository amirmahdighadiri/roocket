import {useState} from "react";

const useToggle = (value)=>{
    const [state, setState] = useState(value);

    const toggle = (statusValue) => {

        if (typeof statusValue === 'boolean') {
            setState(statusValue);
        } else {
            setState(prevState => !prevState);
        }
    }

    return [state , toggle]
}

export default useToggle