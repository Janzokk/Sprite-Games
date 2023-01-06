import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
    <div className="footer-menu">
        <div id="col">
            <Link id="menu_op" to="/donate">DONATE</Link>
            <a id="menu_op" href="https://twitter.com/Doritozzboi" target="_blank">TWITTER </a>
        </div>
        <div id="col">
            <a id="menu_op" href="https://www.youtube.com/watch?v=O70MSRovido" target="_blank">ABOUT US</a>
            <a id="menu_op" href="https://discord.gg/KuUZZBxh" target="_blank">DISCORD</a>
        </div>
        <div id="col">
            <a id="menu_op" href="https://www.youtube.com/watch?v=WtGq_FAu_aU" target="_blank">LEGAL</a>
            <a id="menu_op" href="https://github.com/Janzokk" target="_blank">GITHUB</a>
        </div>
    </div>
    )
}

export default Footer;    