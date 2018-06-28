import React from 'react';
import gallery1 from '../../images/A1_and_A2.jpg';
import gallery2 from '../../images/A1_building_blocks.jpg';
import gallery3 from '../../images/A2_building_blocks.jpg';
import gallery4 from '../../images/aarthi_2.jpg';
import gallery5 from '../../images/six.jpg';

const Images = () => (
	<div className="gallery">
		<img className="galleryList" style={{transform: `rotate(-8deg)`,zIndex: 0}} src={gallery1} alt="Gallery Image 1" />
		<img className="galleryList" style={{transform: `rotate(8deg)`,zIndex: 2}} src={gallery2} alt="Gallery Image 1" />		
		<img className="galleryList" style={{transform: `rotate(-5deg)`,zIndex: 0}} src={gallery3} alt="Gallery Image 1" />		
		<img className="galleryList" style={{transform: `rotate(10deg)`,zIndex: 0}} src={gallery4} alt="Gallery Image 1" />		
		<img className="galleryList" style={{transform: `rotate(-15deg)`,zIndex: 2}} src={gallery5} alt="Gallery Image 1" />		
	</div>
);

export default Images;