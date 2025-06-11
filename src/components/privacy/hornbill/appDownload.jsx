import { ToastContainer, toast } from "react-toastify";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import hornbill_icon from "../../../assets/hornbill.png"
import "react-toastify/dist/ReactToastify.css";
import "../privacy-policy.css";
import apkFile from "../../../assets/hornbill-services.apk";

const HornbillServices = () => {

  return (
    <div>
      <div className='home_div_three'>
        <div className="downloadAppContainer">
          <div>
            <Row style={{marginBottom: 15}}>
              <Col md={2} xs={4} sm={4}>
                <img src={hornbill_icon} style={{height: 90, width: 90, borderRadius: 15}} />
              </Col>
              <Col md={10} xs={8} sm={8} style={{marginTop: 10, marginLeft: -10}}>
                <span className="terms-Title">Hornbill Services</span>
                <p className="policy-Txt" style={{marginTop: 3}}>Festival of Festivals</p>
              </Col>
            </Row>
            <p>Download Hornbill Services: The official app by the Directorate of Tourism, Nagaland. This app serves as a platform for Hotels, Guest Houses, Cafes / Restaurants, Tour Operators, Tour Guides, and Cabs to enlist their business.<br/><br/>Designed to enhance convenience for tourists, the app allows users to quickly find relevant services while helping businesses connect with potential customers directly.</p>
            <p className="privacy_policy_address">Directorate of Tourism</p>
            <p className="privacy_policy_address">Officers Hill, Kohima - 797005, NL</p>
            <p className="privacy_policy_address">Phone: 03862-237033</p>
            <button
              className="requestQuote"
              style={{marginTop: 25}}
              onClick={() => {
                const link = document.createElement("a");
                link.href = apkFile;
                link.download = "hornbill-services.apk";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Hornbill Services
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default HornbillServices
