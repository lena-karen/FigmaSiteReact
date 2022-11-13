import '../../style.css';
import AboutUsContainer from '../AboutUsContainer';
import Nav from '../Nav';
import Services from '../Services';
import Contacts from '../Contacts';
import Footer from '../Footer';



function App() {
    return (
        <div>
            <Nav />
            <Services />
            <AboutUsContainer />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App;