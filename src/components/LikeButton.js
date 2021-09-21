import { useState } from 'react';

export default function LikeButton() {
    const [count, setCount] = useState(0);
    //let count = 0;

    const incrementCount = () => {
        //count++;
        setCount(count + 1);
        console.log(count);

    };

    return <button onClick={incrementCount}>Likes: {count}</button>
}