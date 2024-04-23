import  { useEffect, useState } from 'react';

const useComments = () => {
    const [comments,setComments]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [toggle,setToggle]=useState(true)
    const refetch=()=>{
        setToggle(!toggle)
    }
    useEffect(()=>{
        // setIsLoading(true)
        fetch("http://localhost:5000/comments")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setComments(data)
            setIsLoading(false)
        })
    },[toggle])
    return {comments,setComments,isLoading,setIsLoading,refetch}
};

export default useComments;