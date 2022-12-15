import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import postService from "../../setup/services/post.service";
import FormComment from "../components/FormComment";
import FormBooking from "../components/FormBooking";
import { Button, Typography, Box } from "@mui/material";


const DetailPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [noteMoyenne, setNoteMoyenne] = useState(0)

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

    const calculNoteMoyenne = () => {
        let note = 0;
        let nb = 0; 
        post.comments && post.comments.map((comment) => {
            note += comment.starts
            nb += 1
        })
        let moyenne = Math.round(note/nb)
        setNoteMoyenne(moyenne)
    }

    useEffect(() => {
        fetchPost();
    }, [])

    useEffect(() => {
        calculNoteMoyenne();
    }, [post])

    return ( 
        <>
            <Button onClick={()=> navigate('/')}>
                Retour
            </Button>

            <Box>
                <img src={post.imageUrl} alt="" />
                <Box>
                    <Typography variant="body2">
                        Note Moyenne : &nbsp;
                        {noteMoyenne === 0 && <span>☆ ☆ ☆ ☆ ☆</span>}
                        {noteMoyenne === 1 && <span>⭐ ☆ ☆ ☆ ☆</span>}
                        {noteMoyenne === 2 && <span>⭐ ⭐ ☆ ☆ ☆</span>}
                        {noteMoyenne === 3 && <span>⭐ ⭐ ⭐ ☆ ☆</span>}
                        {noteMoyenne === 4 && <span>⭐ ⭐ ⭐ ⭐ ☆</span>}
                        {noteMoyenne === 5 && <span>⭐ ⭐ ⭐ ⭐ ⭐</span>}
                    </Typography>
                </Box>
                <Typography variant="h4">
                    {post.title}
                </Typography>
                <Typography variant="body1">
                    {post.description}
                </Typography>
                <Typography variant="body1">
                    {post.price} €
                </Typography>
                <Typography variant="body1">
                    Taille : {post.size} cm
                </Typography>
                <Typography variant="body1">
                    Style : {post.style}
                </Typography>
                <Typography variant="body1">
                    Poids : {post.weight} kg
                </Typography>
            </Box>

            <FormBooking id={id} fetchPost={fetchPost} shop={post.shop}/>

            <Box>
                <FormComment id={id} fetchPost={fetchPost}/>
                <Box>
                    {
                        post && post.comments && post.comments.map((comment) => {
                            return (
                                <Box key={comment._id}>
                                    {
                                        comment.starts === 1 && <Typography variant="body2">⭐ ☆ ☆ ☆ ☆</Typography>
                                    }
                                    {
                                        comment.starts === 2 && <Typography variant="body2">⭐ ⭐ ☆ ☆ ☆</Typography>
                                    }
                                    {
                                        comment.starts === 3 && <Typography variant="body2">⭐ ⭐ ⭐ ☆ ☆</Typography>
                                    }
                                    {
                                        comment.starts === 4 && <Typography variant="body2">⭐ ⭐ ⭐ ⭐ ☆</Typography>
                                    }
                                    {
                                        comment.starts === 5 && <Typography variant="body2">⭐ ⭐ ⭐ ⭐ ⭐</Typography>
                                    }
                                    <Typography variant="h6">{comment.username}</Typography>
                                    <Typography variant="body1">{comment.description}</Typography>
                                </Box>
                            )
                        }
                        )
                    }
                </Box>
            </Box>

        </>
    );
}
 
export default DetailPost;