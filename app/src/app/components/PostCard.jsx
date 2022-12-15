import { Card, CardMedia, CardContent, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";


const PostCard = ({post}) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', m:2}} onClick={()=> navigate(`/${post._id}`)} key={post._id}>
            <CardMedia
            component="img"
            height="140"
            image={post.imageUrl}
            alt={post.title}
            sx={{maxWidth: 345}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.price} €
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default PostCard;