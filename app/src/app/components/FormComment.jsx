import { useState } from "react";
import commentService from "../../setup/services/comment.service";

const FormComment = ({id, fetchPost}) => {
    const [comment, setComment] = useState({})

    const handleComment = (e) => {
        const {name, value} = e.target;
        setComment({
            ...comment,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        comment.post = id
        comment.starts = 3
        console.log(comment);
        try {
            const response = await commentService.createComment(comment);
            console.log(response);
            fetchPost();
            if (response) {
                setComment({})
            }
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="username" onChange={(e) => handleComment(e)} placeholder="username"/>
            <input type="text" name="description" onChange={(e) => handleComment(e)} placeholder="commentaire"/>
            <button type="submit">Send</button>
        </form>
    );
}
 
export default FormComment;