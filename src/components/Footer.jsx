import '../App.css'

function Footer(props){
    return(
        <div className="footer">
            <div className="links" id='iconos'>
                <a href="#">
                    <i className="fab fa-facebook-f fa"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
        
    );
}
export default Footer;