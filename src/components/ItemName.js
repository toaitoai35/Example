
import './style.css';
import { TextField, FormControl, Select, Button } from '@material-ui/core';

function ItemName()  {

  return (
    <FormControl variant="outlined" size="small" >

    <div className="input-group tim">
    <TextField className="col-7 mb-2 txt" id="outlined-basic" label="Search item name" size="small" variant="outlined" />
        <div className="input-group-append">
        <Select
        variant="outlined"
          native
          className="mb-2"
          label="Sort"
          inputProps={{
            name: 'sort',
            id: 'outlined-age-native-simple',
          }}
          style={{
            marginLeft: "5px"
          }}
        >
          <option value={10}>Sort by</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
       </div>
      </div>

</FormControl>
  );
}

export default ItemName;
