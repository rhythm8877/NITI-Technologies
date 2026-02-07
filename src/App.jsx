import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import BloodConnectPrivacyPolicies from "./components/privacy/blood_connect/privacyPolicy";
import BloodConnectAccountDeletion from "./components/privacy/blood_connect/accountDeletion";
import HornbillPrivacyPolicies from "./components/privacy/hornbill/privacyPolicy";
import HornbillAccountDeletion from "./components/privacy/hornbill/accountDeletion";
import DYRSPrivacyPolicies from "./components/privacy/dyrs/privacyPolicy";
import DYRSAccountDeletion from "./components/privacy/dyrs/accountDeletion";
import KSCJPrivacyPolicies from "./components/privacy/kscj/privacyPolicy";
import KSCJAccountDeletion from "./components/privacy/kscj/accountDeletion";
import NBSEPrivacyPolicies from "./components/privacy/nbse/privacyPolicy";
import NBSEAccountDeletion from "./components/privacy/nbse/accountDeletion";
import TradikartPrivacyPolicies from "./components/privacy/tradikart/privacyPolicy";
import TradikartAccountDeletion from "./components/privacy/tradikart/accountDeletion";
import PeaceChannelPrivacyPolicies from "./components/privacy/peace_channel/privacyPolicy";
import PeaceChannelAccountDeletion from "./components/privacy/peace_channel/accountDeletion";
import SamagraShikshaPrivacyPolicies from "./components/privacy/samagra_shiksha/privacyPolicy";
import SamagraShikshaAccountDeletion from "./components/privacy/samagra_shiksha/accountDeletion";
import RishavSethiPrivacyPolicies from "./components/privacy/rishav_sethi/privacyPolicy";
import RishavSethiAccountDeletion from "./components/privacy/rishav_sethi/accountDeletion";
import AbuMethaPrivacyPolicies from "./components/privacy/abu_metha/privacyPolicy";
import AbuMethaAccountDeletion from "./components/privacy/abu_metha/accountDeletion";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blood-connect/privacy-policy" element={<BloodConnectPrivacyPolicies />} />
        <Route path="/blood-connect/account-deletion" element={<BloodConnectAccountDeletion />} />
        <Route path="/hornbill/privacy-policy" element={<HornbillPrivacyPolicies />} />
        <Route path="/hornbill/account-deletion" element={<HornbillAccountDeletion />} />
        <Route path="/dyrs/privacy-policy" element={<DYRSPrivacyPolicies />} />
        <Route path="/dyrs/account-deletion" element={<DYRSAccountDeletion />} />
        <Route path="/kscj/privacy-policy" element={<KSCJPrivacyPolicies />} />
        <Route path="/kscj/account-deletion" element={<KSCJAccountDeletion />} />
        <Route path="/nbse/privacy-policy" element={<NBSEPrivacyPolicies />} />
        <Route path="/nbse/account-deletion" element={<NBSEAccountDeletion />} />
        <Route path="/tradikart/privacy-policy" element={<TradikartPrivacyPolicies />} />
        <Route path="/tradikart/account-deletion" element={<TradikartAccountDeletion />} />
        <Route path="/peace-channel/privacy-policy" element={<PeaceChannelPrivacyPolicies />} />
        <Route path="/peace-channel/account-deletion" element={<PeaceChannelAccountDeletion />} />
        <Route path="/samagra-shiksha/privacy-policy" element={<SamagraShikshaPrivacyPolicies />} />
        <Route path="/samagra-shiksha/account-deletion" element={<SamagraShikshaAccountDeletion />} />
        <Route path="/er-rishav-sethi/privacy-policy" element={<RishavSethiPrivacyPolicies />} />
        <Route path="/er-rishav-sethi/account-deletion" element={<RishavSethiAccountDeletion />} />
        <Route path="/shri-abu-metha/privacy-policy" element={<AbuMethaPrivacyPolicies />} />
        <Route path="/shri-abu-metha/account-deletion" element={<AbuMethaAccountDeletion />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
