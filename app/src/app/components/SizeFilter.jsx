import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const SizeFilter = ({size, setSize}) => {
    return (
        <FormControl sx={{
            width: "200px"
        }}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Size"
                name='size'
                value={size}
                onChange={(e) => setSize(e)}
            >
                <MenuItem value={140}>140cm</MenuItem>
                <MenuItem value={145}>145cm</MenuItem>
                <MenuItem value={150}>150cm</MenuItem>
                <MenuItem value={155}>155cm</MenuItem>
                <MenuItem value={160}>160cm</MenuItem>
                <MenuItem value={165}>165cm</MenuItem>
                <MenuItem value={170}>170cm</MenuItem>
                <MenuItem value={175}>175cm</MenuItem>
                <MenuItem value={180}>180cm</MenuItem>
                <MenuItem value={185}>185cm</MenuItem>
                <MenuItem value={190}>190cm</MenuItem>
                <MenuItem value={195}>195cm</MenuItem>
            </Select>
        </FormControl>
    );
}
 
export default SizeFilter;