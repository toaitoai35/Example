
import './style.css';
import { TextField, Button } from '@material-ui/core';
function SearchItem() {

  return (
    <form noValidate autoComplete="off">

           <div className="input-group">
           <TextField className="col-8 mb-2" id="outlined-basic" label="Search item name" size="small" variant="outlined" />
               <div className="input-group-append">
               <Button className="mb-2"variant="contained" color="primary" size="small">Clear</Button>
              </div>
             </div>

      </form>
  );
}

export default SearchItem;
