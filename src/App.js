
import { Home } from './components/home'
import { About } from './components/about'
import {Team} from './components/team' 
import {Contact} from './components/contact'
import {Footer} from './components/footer'
function App() {
  return (
    <div className="bg-gray-100  m-auto w-full h-full  flex flex-col ">
      <div >
        <Home />
        <About />
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
