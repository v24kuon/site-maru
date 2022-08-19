import './App.css';
import Navbar from './components/Navbar';
import Top from './components/Top';
import LinkImage from './components/LinkImage';
import News from './components/News';
import Service from './components/Service';
import EstatePosts from './components/EstatePosts';
import Greeting from './components/Greeting';
import About from './components/About';
import Footer from './components/Footer';
import RemodelingPost from './components/RemodelingPost';

const App = () => (
  <div className="App">
    <Navbar />
    <Top />
    <LinkImage />
    <News />
    <Service />
    <EstatePosts />
    <RemodelingPost />
    <Greeting />
    <About />
    <Footer />
  </div>
);

export default App;
