import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const StyleFilter = ({style, setStyle}) => {
    return (
        <FormControl sx={{
            width: "200px"
        }}>
            <InputLabel id="demo-simple-select-label">Style</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Style"
                name='style'
                value={style}
                onChange={(e) => setStyle(e)}
            >
                <MenuItem value={"Freeride"}>Freeride</MenuItem>
                <MenuItem value={"Freestyle"}>Freestyle</MenuItem>
                <MenuItem value={"Piste"}>Piste</MenuItem>
                <MenuItem value={"Polyvalent"}>Polyalent</MenuItem>
            </Select>
        </FormControl>
    );
}
 
export default StyleFilter;