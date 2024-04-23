
import useComments from "./useComments";

const Comments = () => {
    const { comments,refetch } = useComments()
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/comments/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
        })
        console.log(id)
    }
    return (
        <div className="">
            {
                comments.map(comment => <div key={comment._id} className="border border-spacing-2 p-3 m-3 flex justify-between">
                    {comment.message}
                    <button onClick={() => handelDelete(comment._id)} className="btn btn-warning">delete</button>
                </div>)
            }
        </div>
    );
};

export default Comments;