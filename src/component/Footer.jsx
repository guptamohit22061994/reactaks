import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="d-flex justify-content-between text-white footer text-center">
                    <div>
                        <h4 className="text-white">@Copyright 2023</h4>
                    </div>
                    <div>
                        <ul className="d-flex justify-content-between list-style-none align-items-center">
                            <Link to="/"><li className="pr-2">  Home</li></Link>
                            <Link to="/about"> <li className="pr-2">  About</li></Link>
                            <Link to="/contact-us"><li className="pr-2">  Contact</li></Link>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    );

};
export default Footer;