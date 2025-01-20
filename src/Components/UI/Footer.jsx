import FooterData from "../../api/FooterData.json";
import {FaLocationDot} from "react-icons/fa6";
import {BiSolidPhoneCall} from "react-icons/bi";
import {MdMarkEmailUnread} from "react-icons/md";

const Footer = () => {
  const footerIcons = {
    MdPlace: <FaLocationDot />,
    IoCallSharp: <BiSolidPhoneCall />,
    TbMailPlus: <MdMarkEmailUnread />,
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container grid grid-three-col">
          {FooterData.map((Data, i) => {
            const {icon, title, details} = Data;
            return (
              <div className="footer-contact" key={i}>
                <div className="icon">{footerIcons[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-text">
              <p>Copyright &copy; 2024, All Right Reserved</p>
            </div>
          </div>

          
        </div>
      </footer>
    </>
  );
};

export default Footer;
