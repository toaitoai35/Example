import '../footer.css';
import IconList from './IconList';
import logo from '../../../images.png';
function Footer() {
    return (
        <div className="end">
           <img src={logo} alt="Logo" />;
        <p>Creative Tim</p>
            <IconList />
            <div className="end2">Copyright © 2018-2021 Huya PTE. LTD. All Rights Reserved</div>
            </div>
        
        );
    }
    
    export default Footer;