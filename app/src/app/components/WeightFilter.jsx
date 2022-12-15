import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const WeightFilter = ({weight, setWeight}) => {
    return (
        <FormControl sx={{
            width: "200px"
        }}>
            <InputLabel id="demo-simple-select-label">Poids</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Poids"
                name='weight'
                value={weight}
                onChange={(e) => setWeight(e)}
            >
                <MenuItem value={45}>moins de 45kg</MenuItem>
                <MenuItem value={46}>entre 45 et 65kg</MenuItem>
                <MenuItem value={65}>plus de 65 kg</MenuItem>
            </Select>
        </FormControl>
    );
}
 
export default WeightFilter;