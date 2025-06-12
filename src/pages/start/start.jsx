import "./styles.scss";
import { useNavigate } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { assets } from "../../assets";

const Start = () => {
  const { callCenter, nossaSeguros } = assets();
  const navigate = useNavigate();

  alert(window.innerWidth)

  return (
    <div className="wrapper_h">
      <div className="first_content_h">
        <div className="logo_container_h">
          <img src={nossaSeguros} alt="Afrimoney" />
        </div>
        <div className="text_container_h">
          <p>SEJA BEM-VINDO</p>
          <p>
            À <span>AFRICELL</span>.
          </p>
          <p>VAMOS TESTAR A</p>
          <p>
            <span>A SUA MEMÓRIA</span>?
          </p>
        </div>
      </div>

      <footer>
        <button
          className="btn_footer_h"
          onClick={() => {
            handleClick(navigate);
          }}
        >
          <strong>JOGAR</strong>
        </button>

        <div className="footer_container_h">
          <div className="image_container_h">
            <img src={callCenter} alt="Call Center" width="250px" />
          </div>


          <div className="social_container_h">
            <ul>
              <li>
                <BiLogoFacebook />
              </li>
              <li>
                <BiLogoLinkedin />
              </li>
              <li>
                <BiLogoInstagram />
              </li>
              <li>
                <BiLogoYoutube />
              </li>
            </ul>
            <span className="nossa_link_h">www.africell.ao</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const handleClick = (navigate) => {
  navigate("/info");
};

export { Start };
