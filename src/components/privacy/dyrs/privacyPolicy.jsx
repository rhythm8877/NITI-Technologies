import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../privacy-policy.css";

const DYRSPrivacyPolicies = () => {

  return (
    <div>
      <div className='home_div_three'>
        <p className='home_div_three_header'>Privacy Policy for <span style={{color:"#0094d0"}}>DYRS Nagaland</span></p>
        <div className="termscontainer">
          <div>
            <p className="terms-Title">Privacy Policy</p>
            <p className="policy-Txt">The DYRS Nagaland app is developed and maintained by NITI Technologies, with a primary focus on providing a platform to Department of Youth Resources & Sports - Nagaland, employees to mark attendance, upload circulars and create events.</p>
            <p className="policy-SubTitle">1. Information Collection and Use:</p>
            <ul>
              <li>
                  <p>Personal Information: We collect and store personal information such as name, email address, and contact number for user registration and communication purposes.</p>
              </li>
              <li>
                  <p>File Permissions: The app may request access to your device's files to upload profile picture. This access is necessary for the proper functioning of the update profile picture feature and is limited to the intended purpose only.</p>
              </li>
            </ul>

            <p className="policy-SubTitle">2. Information Security:</p>
            <ul>
              <li>
                  <p>Data Storage: Personal information collected through the app is securely stored on cloud servers. We implement industry-standard security measures to protect against unauthorized access, disclosure, alteration, or destruction of your personal information.</p>
              </li>
              <li>
                  <p>We restrict access to your personal information to authorized personnel who require it to perform their duties.</p>
              </li>
            </ul>

            <p className="policy-SubTitle">3. Information Sharing and Disclosure:</p>
            <ul>
              <li>
                  <p>Third-Party Sharing: We do not share any personal and non-personal information collected through the app with any third party.</p>
              </li>
              <li>
                  <p>Aggregated Data: We may use aggregated and anonymized data for statistical analysis and reporting purposes. This data will not personally identify any individual user.</p>
              </li>
            </ul>

            <p className="policy-SubTitle">4. Data Retention & Deletion:</p>
            <ul>
              <li>
                  <p>All your personal and attendance details are retained as long as you use DYRS Nagaland App.</p>
              </li>
              <li>
                  <p>All your data will be deleted if you request to delete your account.</p>
              </li>
            </ul>

            <p className="policy-SubTitle">5. How We Use Your Information:</p>
            <ul>
              <li>
                  <p>To provide and improve our app and its features.</p>
              </li>
              <li>
                  <p>To personalize your experience and tailor content to your interests.</p>
              </li>
              <li>
                  <p>To analyze usage trends and improve the overall user experience.</p>
              </li>
            </ul>

            <p className="policy-SubTitle">6. Face Data Policies:</p>
            <ul>
              <li>
                  <p>Face recognition-based attendance management is exclusively available for registered DYRS officers and is not accessible to public users. This ensures the system’s privacy and security, restricting its use to authorized personnel only.</p>
              </li>
              <li>
                  <p>Face data, i.e., the picture collected, is utilized solely to mark the attendance of specific DYRS officers.</p>
              </li>
              <li>
                  <p>All collected face data is temporarily retained on Firebase Cloud Storage for a duration of 24 hours. After this period, the data is automatically and permanently deleted from the system.</p>
              </li>
              <li>
                  <p>No face data will be shared with any third party, ensuring complete confidentiality. The sole purpose of collecting this data is to facilitate the attendance management system for registered officers.</p>
              </li>
              <li>
                  <p>The face recognition system has been designed prioritizing user privacy and adhering to industry best practices.</p>
              </li>
              <li>
                  <p>Users can contact helpdesk for queries or concerns regarding face data usage, ensuring a transparent and accessible communication channel.</p>
              </li>
            </ul>
            <p className="policy-SubTitle">7. Changes to the Privacy Policy: <span className="policy-spanSubTitle">We reserve the right to modify or update this privacy policy at any time. We will notify you of any material changes through prominent notices on our website.</span></p>
            <p className="policy-SubTitle">8. Contact Us: <span className="policy-spanSubTitle">If you have any questions, concerns, or requests regarding our privacy policy or the handling of your personal information, please contact us using the provided contact information.</span></p>
            <p>Last updated: 01/07/2025</p>
            <p>If you have any further questions or require assistance, please don’t hesitate to contact our customer support team at admin@nititechnologies.in. We are here to assist you.</p>
            <p className="privacy_policy_address">NITI Technologies,</p>
            <p className="privacy_policy_address">Opp: Ram Janaki School, Marwaripatti,</p>
            <p className="privacy_policy_address">Dimapur - 797004, Nagaland, India</p>
            <p className="privacy_policy_address">Phone: 7005291593</p>
            <p className="privacy_policy_address">Email: admin@nititechnologies.in</p>
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

export default DYRSPrivacyPolicies
