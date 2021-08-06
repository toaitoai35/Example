
import './style.css';
import { Button } from '@material-ui/core';

function AddItem()  {
 
  return (
    <Button
   className="col-12"
    variant="contained" size="large" color="primary" style={{
      marginTop: "5px"
     
  }}>
  Add Item
</Button>
  );
}
export default AddItem;
