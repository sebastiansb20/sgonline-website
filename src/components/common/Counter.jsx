import React,{ useState, useEffect, useRef } from 'react';

const Counter = ({ targetNumber = 150, duration = 2000}) =>{
    
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const observerRef = useRef(null);

    useEffect (() => {
        const observer = new IntersectionObserver(
            (entries) =>  {
                if(entries[0].isIntersecting){
                    let start = 0;
                    const increment = Math.ceil(targetNumber / (duration /50));
                
                    const interval = setInterval(() => {
                        start +=increment;
                        if(start >= targetNumber){
                            setCount(targetNumber);
                            clearInterval(interval)
                        }else{
                            setCount(start);
                        }
                    }, 50)

                    observer.unobserve(counterRef.current)
                }
            }, 
            {threshold:0.5}
        )

        if(counterRef.current){
            observer.observe(counterRef.current);
        }

        observerRef.current = observer;

        return () => {
            if(observerRef.current){
                observerRef.current.disconnect();
            }
        }
    }, [targetNumber,duration])

    return(
        <p ref={counterRef} className='text-gray-300 font-bold text-[8rem] md:text-[14rem]'>
            +{count}
        </p>
    )
}

export default Counter;