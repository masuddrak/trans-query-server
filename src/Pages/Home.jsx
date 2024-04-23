import Comments from "../components/Comments";
import useComments from "../components/useComments";

const Home = () => {
    const {isLoading,setIsLoading,refetch}=useComments()
    if(isLoading){
        return <h1 className="text-7xl">Loading</h1>
    }
    const handelCommnent=(e)=>{
        e.preventDefault()
        const message=e.target.message.value
        console.log(message)
        const messageIfo={message}
        setIsLoading(true)
        fetch("http://localhost:5000/comments",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(messageIfo)
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            setIsLoading(false)
            console.log(data)
        })
    }
  
    return (
        <div className="relative min-h-[80vh]">
            <div>
                <Comments></Comments>
            </div>
            <form onSubmit={handelCommnent} className="absolute bottom-0 right-0">
                <textarea name="message" className="border" placeholder="Type your message..." id="" cols="30" rows="5"></textarea>
                <br />
                <button className="btn btn-primary">comment</button>
            </form>
        </div>
    );
};

export default Home;