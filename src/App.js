import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './SitePage/HomePage';
import AboutPage from './SitePage/AboutPage';
import SeoPage from './SitePage/SeoPage';
import SocialMediaMarketing from './SitePage/SocialMediaMarketing';
import ContactPage from './SitePage/ContactPage';
import GoogleAds from './SitePage/GoogleAds';
import WebApplicationDevelopement from './SitePage/WebApplicationDevelopement';
import MobileApplicationDevelopment from './SitePage/MobileApplicationDevelopment';
import Footer from './custom_component/Footer';
import Blog from './SitePage/Blog';
import BlogDetails from './SitePage/BlogDetails';
import Defi from './SitePage/Defi';
import './App.css';
import Header from './custom_component/Header';
import Nft from './SitePage/NftPage';
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
              <Route exact path='/' element={< HomePage />}></Route>
              <Route exact path='/about' element={< AboutPage />}></Route>
              <Route exact path='/contact' element={< ContactPage />}></Route>
              <Route exact path='/seopage' element={< SeoPage />}></Route>
              <Route exact path='/SocialMediaMarketing' element={< SocialMediaMarketing />}></Route>
              <Route exact path='/GoogleAds' element={< GoogleAds />}></Route>
              <Route exact path='/WebApplicationDevelopement' element={< WebApplicationDevelopement />}></Route>
              <Route exact path='/MobileApplicationDevelopment' element={< MobileApplicationDevelopment />}></Route>
              <Route exact path='/Nft' element={<Nft />}></Route>
              <Route exact path='/Blog' element={<Blog />}></Route>
              <Route exact path='/BlogDetails/:id' element={<BlogDetails />}></Route>
              <Route exact path='/Defi' element={< Defi />}></Route>
          </Routes>
          <Footer />
      </Router>
      <ul className="bubbles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
    </div>
  );
}
export default App;   

