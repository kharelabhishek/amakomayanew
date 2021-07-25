import React from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from '../Component/home/Home'
import Footer from '../Component/resuable component/Footer/Footer'
import Navigation from '../Component/resuable component/navbar/Navigation'
// import NewsMedia from '../Component/Activities&Result/Newmedia'
import Impact from '../Component/Impact/Impact'
import Vtc from '../Component/Immunization/Vtc'
import Nip from '../Component/Immunization/Nip'
import Contact from '../Component/home/Contact/Contact'
// import Gallery from '../Component/Gallery/Gallery'
import Ourservice from '../Component/home/Our service/Ourservice'
import InternTraning from '../Component/Intern&Traning/InternTraning'
import About from '../Component/About/About'
import Ourteam from '../Component/home/Ourteam/Ourteam'
// import Newmedia from '../Component/Activities&Result/Newmedia'
import NewsandStories from '../Component/NewsandStories/Newsandstories'
import Partners from '../Component/Partners/Partners'
import NewandstoriesDetail from '../Component/NewsandStories/NewandstoriesDetail'

function RouteComponent() {
  return (
    <Router>
        <div className="route">
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={About} />
              <Route path="/impact" component={Impact} />
              {/* <Route path="/new-media" component={NewsMedia} /> */}
              <Route path="/vtc" component={Vtc} />
              <Route path="/contact" component={Contact} />
              <Route path="/partners" component={Partners} />
              <Route path="/news-and-stories" component={NewsandStories} />
              <Route path="/news-and-stories-detail/:detailId" component={NewandstoriesDetail} />
              <Route path="/our-team" component={Ourteam} />
              <Route path="/our-service" component={Ourservice} />
              {/* <Route path="/new-media" component={Newmedia} /> */}
              <Route path="/intern-and-traning" component={InternTraning} />
              <Route path="/national-immunization-program" component={Nip} />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default RouteComponent;
