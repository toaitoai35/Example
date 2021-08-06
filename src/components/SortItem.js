
import './style.css';
import { FormControl, InputLabel, Select, Button } from '@material-ui/core';

function SortItem() {

  return (
    <FormControl variant="outlined" size="small" >
      <div className="input-group">
        <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
        <Select
          native
          label="Sort"
          inputProps={{
            name: 'sort',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={10}>Sort by</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <Button
        style={{
          backgroundColor: "#28a745",
          color: "#FFFFFF",
          marginLeft: "5px"
      }}
        variant="contained" size="small">NAME-DESC</Button>
        </div>
      </FormControl>
  );
}

export default SortItem;
