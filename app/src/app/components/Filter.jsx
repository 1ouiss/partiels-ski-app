import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const Filter = ({data, setData, setDatas}) => {
    return (
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
    );
}
 
export default Filter;