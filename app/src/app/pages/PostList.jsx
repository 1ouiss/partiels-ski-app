import { useState } from "react";
import WeightFilter from "../components/WeightFilter";
import StyleFilter from "../components/StyleFilter";
import SizeFilter from "../components/SizeFilter";
import PostCard from "../components/PostCard";
import { Box, TextField } from "@mui/material";

const PostList = ({posts}) => {

    const [postsSearch, setPostsSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false)
    const [weight, setWeight] = useState('')
    const [style, setStyle] = useState('')
    const [size, setSize] = useState('')

    const handleSearch = (e) => {
        const search = e.target.value;
        if (search.length > 0) {   
            setIsSearch(true);
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
            setPostsSearch(filteredPosts);
        }else{
            setIsSearch(false);
            setPostsSearch([]);
        }

    }

    const handleChangeWeight = (e) => {
        const weight = e.target.value;
        setWeight(weight);
        if (weight === 45) {
            const filteredPosts = posts.filter(post => post.weight <= 45)
            setPostsSearch(filteredPosts);
        }else if (weight === 46) {
            const filteredPosts = posts.filter(post => post.weight >= 45 && post.weight < 65)
            setPostsSearch(filteredPosts);
        }else{
            const filteredPosts = posts.filter(post => post.weight > 65)
            setPostsSearch(filteredPosts);
        }
        setIsSearch(true);
    }

    const handleChangeStyle = (e) => {
        const style = e.target.value;
        setStyle(style);
        const filteredPosts = posts.filter(post => post.style === style)
        setPostsSearch(filteredPosts);
        setIsSearch(true);
    }

    const handleChangeSize = (e) => {
        const size = e.target.value
        setSize(size);
        console.log(e.target.value);
        console.log(size);
        const filteredPosts = posts.filter(post => post.size === size)
        setPostsSearch(filteredPosts);
        setIsSearch(true);
    }

    

    return ( 
        <>

            <TextField onChange={(e) => handleSearch(e)} id="outlined-basic" label="Recheche" variant="outlined" />

            <WeightFilter weight={weight} setWeight={handleChangeWeight}/>
            <StyleFilter style={style} setStyle={handleChangeStyle}/>
            <SizeFilter size={size} setSize={handleChangeSize}/>

            <Box>
                {
                    isSearch ? postsSearch.map(post => (
                        <PostCard post={post}/>
                    )) :
                    posts.map(post => (
                        <PostCard post={post}/>
                    ))
                }
            </Box>
        </>
    );
}
 
export default PostList;