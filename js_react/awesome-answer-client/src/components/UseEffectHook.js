import React, { useEffect, useState } from 'react';

export default function UseEffectHook() {
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //1 Component Did Mount
    //2 Component Did Update
    //3 Component Will Unmount

    //if you pass an empty array as the second argument of useEffect Hook
    //then it's the same as componentDidMount
    // useEffect(() => {
    //     console.log('now you are inside useEffect function');
    // }, [])

    
    //if don't pass that array, the useEffect becomes the componentDidUpdate
    // useEffect(() => {
    //     console.log('now you are inside useEffect function');
    // }, [name])

    // useEffect(() => {
    //     return () => {
    //         console.log('componentWillUnmount');
    //     }
    // }, [])

    useEffect(() => {
            console.log('now you are inside uesEffect function')
            return () => {
                console.log('componentWillUnmount');
            }
        }, [])
        return (
            <div>
                {date.toLocaleString()}
                <button onClick={()=> setCount(count + 1)}>Count + 1</button>
            </div>
        )
}


