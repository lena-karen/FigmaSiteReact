import '../../style.css';
import AboutUsContainer from '../AboutUsContainer';
import Nav from '../Nav';
import Services from '../Services';
import Contacts from '../Contacts';
import Footer from '../Footer';
import {useState} from 'react'


function App() {
    const [menuVisible, menuShow] = useState('false');
    return (
        <div>
            <Nav menuVisible={menuVisible} menuShow={menuShow}/>
            <Services />
            <AboutUsContainer />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App;