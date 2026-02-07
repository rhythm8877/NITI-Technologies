import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../privacy-policy.css";

const AbuMethaPrivacyPolicies = () => {


    return (
        <div>
            <div className='home_div_three'>
                <p className='home_div_three_header'>Privacy Policy for <span style={{ color: "#0094d0" }}>Shri. Abu Metha</span></p>
                <div className="termscontainer">
                    <div>
                        <p className="terms-Title">Privacy Policy</p>
                        <p className="policy-Txt">The Shri. Abu Metha app is developed and maintained by NITI Technologies, aimed at providing a platform to share professional insights, blogs, events, and connect with users interested in engineering and technology expertise.</p>
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
                                <p>All your personal details are retained as long as you use Shri. Abu Metha app.</p>
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

                        <p className="policy-SubTitle">6. Changes to the Privacy Policy: <span className="policy-spanSubTitle">We reserve the right to modify or update this privacy policy at any time. We will notify you of any material changes through app notifications or email communication.</span></p>
                        <p className="policy-SubTitle">7. Contact Us: <span className="policy-spanSubTitle">If you have any questions, concerns, or requests regarding our privacy policy or the handling of your personal information, please contact us using the provided contact information.</span></p>
                        <p>Last updated: 10/07/2025</p>
                        <p>If you have any further questions or require assistance, please don't hesitate to contact our customer support team at admin@nititechnologies.in. We are here to assist you.</p>
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

export default AbuMethaPrivacyPolicies
