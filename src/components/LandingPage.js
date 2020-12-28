import React from 'react';
import '../sass/abstracts/header.css';
import '../sass/abstracts/landing.scss';
import '../sass/abstracts/_variables.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const LandingPage = () => {
	return (
		<div className="landing-page">
			<header className="header headers header__bg">
				<h1>
					RemoteJobs,<br /> <br />The best to search for remote jobs
					<br />
					<Link to="/jobs">
						<button className="landing-button">Get started!</button>
					</Link>
				</h1>

				<img src="./images/landingpage.png" alt="" />
			</header>
			<div className="" style={{ position: 'relative', bottom: '-1em' }}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#63baba"
						fill-opacity="1"
						d="M0,256L30,229.3C60,203,120,149,180,133.3C240,117,300,139,360,160C420,181,480,203,540,208C600,213,660,203,720,186.7C780,171,840,149,900,128C960,107,1020,85,1080,74.7C1140,64,1200,64,1260,58.7C1320,53,1380,43,1410,37.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
					/>
				</svg>
			</div>
			<Footer color="#5ba4a4" />
		</div>
	);
};

export default LandingPage;
