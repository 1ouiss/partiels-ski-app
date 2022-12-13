import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import postService from "../../setup/services/post.service";
import FormComment from "../components/FormComment";
import FormBooking from "../components/FormBooking";


const DetailPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({});



    const fetchPost = async () => {
        try {
            const response = await postService.getOnePostById(id);
            console.log(response);
            setPost(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return ( 
        <div>
            <button onClick={()=> navigate('/')}>
                return
            </button>
            <h1>Detail Post</h1>
            {
                post && (
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.price}</p>
                        <p>{post.location}</p>
                        <p>{post.starts}</p>
                    </div>
                )
            }
            {
                post.comments && post.comments.map((comment) => (
                    <div key={comment._id}>
                        <p>{comment.username}</p>
                        <p>{comment.description}</p>
                        <p>{comment.starts}</p>
                    </div>
                ))
            }

            <FormComment id={id} fetchPost={fetchPost}/>

            <FormBooking id={id} fetchPost={fetchPost}/>

        </div>
    );
}
 
export default DetailPost;