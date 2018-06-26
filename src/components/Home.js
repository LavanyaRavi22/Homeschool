import React from 'react';
import profile from '../images/profile.jpg';

const Home = () => (
	<div className="profileSection">
		<img src={profile} alt="Profile Picture" />
		<section>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			Donec cursus lacinia nisl, eu commodo ligula tincidunt vel.
			Maecenas rutrum orci ut enim sodales, luctus finibus lectus 
			vestibulum. Pellentesque fringilla et orci mattis maximus. 
			Vivamus finibus nisl ac semper interdum. Proin quis nunc sit amet 
			tortor pulvinar aliquet. 
			</p>
		</section>
	</div>
);

export default Home;