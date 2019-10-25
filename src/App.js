import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Features from './components/Features';
import Numbers from './components/Numbers';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* Header Component with axios */}
				<Header />

				{/* About Component with axios and HOC */}
				<About />

				{/* Portfolio Component with axios and HOC */}
				<Portfolio />

				{/* Services Component with axiosa and HOC */}
				<Services />

				{/* Features Component with axios and HOC todo:images */}
				<Features />

				{/* numbers Component with axios and HOC */}
				<Numbers />

				{/* pricing Component with axios and HOC */}
				<Pricing />

				{/* testimonial Component with axios and HOC todo:images */}
				<Testimonial />

				{/* team Component with axios and HOC */}
				<Team />

				{/* blog Component with axios and HOC */}
				<Blog />

				{/* contact Component with axios */}
				<Contact />

				{/* footer Component with axios  */}
				<Footer />

				<div id="back-to-top"></div>

				{/* Preloader */}
				<Preloader />
			</div>
		);
	}
}

export default App;
