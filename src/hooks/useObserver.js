import { useEffect, useRef, useState } from "react";
export default function(option){
    const [element, setElement] = useState([]);
    const [entrie, setEntrie] = useState([])
    let observer = useRef(new IntersectionObserver(function(observeEntries){
        setEntrie(observeEntries)
    }, option));

    useEffect(()=>{
        const currentObserver = observer.current
        currentObserver.disconnect()
        if(element.length > 0){
            element.forEach(element => currentObserver.observe(element))
        }
        return function cleanUp(){
            if(currentObserver){
                currentObserver.disconnect()
            }
        }
    }, [element])
    return [observer.current, setElement, entrie]
}