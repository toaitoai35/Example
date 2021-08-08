import '../footer.css';
import { TextField } from '@material-ui/core';
function EmailEnter() {
    return (
        <div className="aa">
            <div className="enter">
                <h1>Join our newsletter</h1>
                <TextField className="col-8 mb-2 email"
                    id="outlined-basic" label="Enter Email" size="small" variant="outlined"/>
                <button className="btn-email"><i className="far fa-paper-plane"></i> Join</button>
            </div>
        </div>
    );
}

export default EmailEnter;