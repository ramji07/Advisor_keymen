
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/HomePages';
import Contact from './pages/Contact';
import About from './pages/About';
import JapanDesk from './Desk/JapanDesk';
import NriDesk from './Desk/NriDesk';
import EuropeanDesk from './Desk/EuropeanDesk';
import AmericaDesk from './Desk/AmericaDesk';
import SingaporeDesk from './Desk/Singapore'
import AccountReciveManagement from './Compalice/AccountReciveManagement';
import AccountPayabalManagement from './Compalice/AccountPayabalManagement';
import BookKeppingServices from './Compalice/BookKeppingServices';
import GstCompalience from './Compalice/GstCompalience';
import IncomTaxCompliance from './Compalice/IncomTaxCompliance';
import TdsComplience from './Compalice/TdsComplience';
import OutSoucringServices from './Compalice/OutSoucringServices';
import GstRegistration from './TaxPages/GstRegistration';
import PanTanRegistration from './TaxPages/PanTanRegistration';
//eslint-disable-next-line
import ARegistration from './TaxPages/ARegistration'
import OnePersonCompany from './StartUp/OnePersonCompany'
import PartnershipFirm from './StartUp/PartnershipFirmRegistration'
import LLPRegistration from './StartUp/LLPRegistration'
import SectionCompany from './StartUp/SectionCompany'
import TrustRegistration from './StartUp/TrustRegistration'
import  SocietyRegistration from './StartUp/SocietyRegistration'
import PartnershipLLPRegistration from './StartUp/PartnerShipTollpRegistration'
import BusinessConsultantStartups from './StartUp/BusinessConsultantforStartups'
import VirtualCFO from './VirtualCFO/VirtualCFOServices'
import CAServicesForStartups from './VirtualCFO/CaForStartup'
import LegalServicesforStartUp from './VirtualCFO/LegalServices'
import CompanyValuationforStartups from './VirtualCFO/CompanyValuation'
import FinancialModellingforStartups from './VirtualCFO/FinancialModellingforStartups'
import StartupConsultancyServices from './VirtualCFO/StartupConsultancyServices'
import FinancialReportingServices from './VirtualCFO/FinancialReportingServices'
import TaxConsultancyServices from './VirtualCFO/TaxConsultancyServices'
import RemoteCFOServices from './VirtualCFO/RemoteCFOServices'
import OnDemandCFO from './VirtualCFO/OnDemandCFO'
import Login from './pages/Login';
import AdminDashboard from './Admin/AdminDashboard';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<HomePages/>} />
      <Route path='/About' element={<About/>} />


         {/* {start up} */}

      <Route path='/LLP-Registration' element={<LLPRegistration/>} />
      <Route path='/onePersonCompany' element={<OnePersonCompany/>} />
      <Route path='/PartnershipFirm' element={<PartnershipFirm/>} />
      <Route path='//Section8Company' element={<SectionCompany/>} />
      <Route path='/TrustRegistration' element={<TrustRegistration/>} />
      <Route path='/SocietyRegistration' element={<SocietyRegistration/>} />
      <Route path='/PartnershipLLPRegistration' element={<PartnershipLLPRegistration/>} />
      <Route path='/BusinessConsultantStartups' element={<BusinessConsultantStartups/>} />






      {/* tax routes  */}
      <Route path='/gst-Registration' element={<GstRegistration/>} />
      <Route path='/panApplication' element={<PanTanRegistration/>} />
      <Route path='/12ARegistration' element={<ARegistration/>} />
  


      {/* Compalice  */}
      <Route path='/Account-Receivable-management' element={<AccountReciveManagement/>} />
      <Route path='/Account-Payable-management' element={<AccountPayabalManagement/>} />
      <Route path='/Account-Book-Keeping-Services' element={<BookKeppingServices/>} />
      <Route path='/GST-Compliance' element={<GstCompalience/>} />
      <Route path='/IncomeTax-Compliances' element={<IncomTaxCompliance/>} />
      <Route path='/TDS-Compliances' element={<TdsComplience/>} />
      <Route path='/Accounting-Outsourcing-Services' element={<OutSoucringServices/>} />

       {/* virtual cfo  */}
      <Route path='/VirtualCFO' element={<VirtualCFO/>} />
      <Route path='/CAServicesforStartups' element={<CAServicesForStartups/>} />
      <Route path='/LegalServicesforStartUp' element={<LegalServicesforStartUp/>} />
      <Route path='/CompanyValuationforStartups' element={<CompanyValuationforStartups/>} />
      <Route path='/FinancialModellingforStartups' element={<FinancialModellingforStartups/>} />
      <Route path='/StartupConsultancyServices' element={<StartupConsultancyServices/>} />
      <Route path='/FinancialReportingServices' element={<FinancialReportingServices/>} />
      <Route path='/TaxConsultancyServices' element={<TaxConsultancyServices/>} />
      <Route path='/RemoteCFOServices' element={<RemoteCFOServices/>} />
      <Route path='/OnDemandCFO' element={<OnDemandCFO/>} />


      {/* international Desk  */}
      <Route path='/Japan-business-desk' element={<JapanDesk/>} />
      <Route path='/Nri-business-desk' element={<NriDesk/>} />
      <Route path='/European-Business-desk' element={<EuropeanDesk/>} />
      <Route path='/North-America-desk' element={<AmericaDesk/>} />
      <Route path='/SingaPore-desk' element={<SingaporeDesk/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />

      <Route path='/admin' element={<PrivateRoutes/>}>
      <Route path='dashboard' element={<AdminDashboard/>} />
      </Route>

    </Routes>
  
    </>
  );
}

export default App;
