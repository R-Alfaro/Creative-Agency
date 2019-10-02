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

				{/* About Component with axios */}
				<About />

				{/* Portfolio Component with axios */}
				<Portfolio />

				{/* Services Component with axios */}
				<Services />

				{/* Features with axios */}
				<Features />

				{/* numbers Component with axios  */}
				<Numbers />

				{/* pricing Component with axios  */}
				<Pricing />

				{/* testimonial Component with axios */}
				<Testimonial />

				{/* team Component with axios */}
				<Team />

				{/* blog Component with axios */}
				<Blog />

				{/* contact */}
				<Contact />

				{/* footer */}
				<Footer />

				<div id="back-to-top"></div>

				{/* Preloader */}
				<Preloader />

			</div>
		);
	}
}

export default App;
