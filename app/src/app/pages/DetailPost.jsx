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

            <FormComment id={id} fetchPost={fetchPost}/>

            <FormBooking id={id} fetchPost={fetchPost}/>

        </div>
    );
}
 
export default DetailPost;