import '../footer.css';
import EmailEnter from './EmailEnter';
import { TextField, Button } from '@material-ui/core';
function InfoCount() {
    return (
        <div className="foo">
            <div className="RowHeader">
        <div className="Column">
            <h3>1,635,941</h3>
            <p>accounts</p>
            </div>
            <div className="Column">
            <h3>3,000,941</h3>
            <p>downloads</p>
            </div>
            <div className="Column">
            <h3>210</h3>
            <p>products</p>
            </div>
            <div className="Column">
            <EmailEnter />
           
            </div>
            </div>
            {/* <EmailEnter /> */}
            </div>
        );
    }
    
    export default InfoCount;