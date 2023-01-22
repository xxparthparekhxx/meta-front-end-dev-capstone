
import './App.css';
import Header from './components/common/Header';
import NavBar from './components/common/Nav';
import { Testemonials } from './components/common/Testemonials';
import Footer from './components/home/Footer';
import Hero from './components/home/Hero';
import Info from './components/home/info';
import Specials from './components/home/specials';

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Hero></Hero>
      <Specials></Specials>
      <Testemonials></Testemonials>
      <Info></Info>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
