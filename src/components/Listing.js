import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ApplyButton from './AppllyButton';
import Avatar from './Avatar';

const Listing = (props) => (
	<Zoom duration={700}>
		<div
			className={

					props.featured ? 'listing listing--featured' :
					'listing'
			}
		>
			{
				props.company ? <Avatar logo={props.company} /> :
				<img
					className="listing__logo"
					src="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png"
					style={{ borderRadius: '50%', backgroundColor: 'white' }}
					alt=""
				/>}
			<div className="listing__content">
				<div className="listing__top-row">
					{
						props.new ? <div className="listing__tag listing__tag--new">New!</div> :
						null}
					{
						props.featured ? <div className="listing__tag listing__tag--featured">Featured</div> :
						null}
				</div>
				<h1 className="listing__title">{props.title}</h1>
				<div className="listing__bottom-row">
					<span className="listing__bottom-text">{props.posted}</span>
					<span className="listing__dot">&bull;</span>
					<span className="listing__bottom-text">{props.location}</span>
				</div>
			</div>
			<div className="listing__seperator" />
			<div className="listing__button-row">{props.buttons}</div>
			<div className="listing__seperator" />
			<ApplyButton link={props.link} />
		</div>
	</Zoom>
);
export default Listing;
