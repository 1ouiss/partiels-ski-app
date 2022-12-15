import { Box, Button, FormControl, TextField, MenuItem, Select, InputLabel } from "@mui/material";
import { useState } from "react";
import commentService from "../../setup/services/comment.service";

const FormComment = ({id, fetchPost}) => {
    const [comment, setComment] = useState({
        starts: 1
    })

    const handleComment = (e) => {
        const {name, value} = e.target;
        setComment({
            ...comment,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        comment.post = id
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
        <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{display: "flex", flexDirection: "column", maxWidth: 345, height: '300px', justifyContent:"space-around"}}>
            <TextField type="text" name="username" onChange={(e) => handleComment(e)} label="username"/>
            <TextField type="text" name="description" onChange={(e) => handleComment(e)} label="commentaire"/>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Nombre d'étoile</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Nombre d'étoile"
                    value={comment.starts}
                    name="starts"
                    onChange={(e) => handleComment(e)}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit">Send</Button>
        </Box>
    );
}
 
export default FormComment;