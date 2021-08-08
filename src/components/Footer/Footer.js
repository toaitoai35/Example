import FooterLink1 from './FooterLink/FooterLink1';
import FooterLink2 from './FooterLink/FooterLink2';
import FooterLink3 from './FooterLink/FooterLink3';
import FooterLink4 from './FooterLink/FooterLink4';
import FooterHeader from './FooterHeader/FooterHeader';
import FooterEnd from './FooterEnd/FooterEnd';
import './footer.css';
function Footer() {
    return (
        <div className="Footer">
            <div className="FooterHeader">
            <div className="Container">     
                <FooterHeader />    
                        </div>      
            </div>
            <div className="Box">
                <div className="Container">
                    <div className="Row">
                        <FooterLink1 />
                        <FooterLink2 />
                        <FooterLink3 />
                        <FooterLink4 />
                    </div>
                </div>
            </div>
            <hr/>
            <div className="FooterEnd">
                <FooterEnd />
            </div>
        </div>
    );
}

export default Footer;