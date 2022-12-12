import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const PostList = ({posts}) => {
    const navigate = useNavigate();

    const [postsSearch, setPostsSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false)
    const [weight, setWeight] = useState('')
    const [style, setStyle] = useState('')
    const [height, setHeight] = useState('')

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
        const weight = e.target.value
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
        const style = e.target.value
        setStyle(style);
        const filteredPosts = posts.filter(post => post.style === style)
        setPostsSearch(filteredPosts);
        setIsSearch(true);
    }
    const handleChangeHeight = (e) => {
        const height = e.target.value
        setStyle(height);
        const filteredPosts = posts.filter(post => post.height === height)
        setPostsSearch(filteredPosts);
        setIsSearch(true);
    }

    return ( 
        <div>
            <h1>Post List</h1>

            <input type="text" onChange={(e) => handleSearch(e)} />

            <FormControl sx={{
                width: "200px"
            }}>
                <InputLabel id="demo-simple-select-label">Poids</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Poids"
                    value={weight}
                    onChange={(e) => handleChangeWeight(e)}
                >
                    <MenuItem value={45}>Ten</MenuItem>
                    <MenuItem value={46}>Twenty</MenuItem>
                    <MenuItem value={65}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{
                width: "200px"
            }}>
                <InputLabel id="demo-simple-select-label">Style</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Style"
                    value={style}
                    onChange={(e) => handleChangeStyle(e)}
                >
                    <MenuItem value={"Freeride"}>Freeride</MenuItem>
                    <MenuItem value={"Freestyle"}>Freestyle</MenuItem>
                    <MenuItem value={"Piste"}>Piste</MenuItem>
                    <MenuItem value={"Polyvalent"}>Polyalent</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{
                width: "200px"
            }}>
                <InputLabel id="demo-simple-select-label">Style</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Style"
                    value={height}
                    onChange={(e) => handleChangeHeight(e)}
                >
                    <MenuItem value={"Freeride"}>Freeride</MenuItem>
                    <MenuItem value={"Freestyle"}>Freestyle</MenuItem>
                    <MenuItem value={"Piste"}>Piste</MenuItem>
                    <MenuItem value={"Polyvalent"}>Polyalent</MenuItem>
                </Select>
            </FormControl>

            <div>
                {
                    isSearch ? postsSearch.map(post => (
                        <div key={post._id} onClick={() => navigate(`/${post._id}`)}>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                        </div>
                    )) :
                    posts.map(post => (
                        <div key={post._id} onClick={() => navigate(`/${post._id}`)}>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default PostList;