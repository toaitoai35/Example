
import './style.css';
import { FormControl, InputLabel, Select, Button } from '@material-ui/core';

function ButtonItem()  {

  return (
    <div className="submit">
    <Button
        style={{
          backgroundColor: "#28a745",
          color: "#FFFFFF",
          padding: "8px 15px"
      }}
        variant="contained" >Submit</Button>
      <Button
    
      style={{
        marginLeft:"3px",
        padding: "8px 15px"
    }}
    variant="outlined">Cancel</Button>
        </div>
       
       
  );
}

export default ButtonItem;
