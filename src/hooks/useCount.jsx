import {useState} from "react";

export const useCount = (initial, min, max) => {

    if(initial < min || initial > max) initial = min;

    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < max) setCount(count + 1);
    }

    const decrement = () => {
        if(count > min) setCount(count - 1);
    }

    const reset = () => {
        setCount(initial)
    }

    return {count, increment, decrement, reset}
}