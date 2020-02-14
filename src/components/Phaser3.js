import React, { useEffect } from 'react';
import Game from '../phaserGame/Game';

const Phaser3 = () => {
	const parentId = 'phaser3Container';

	useEffect(() => {
		const game = new Game(parentId);
	}, []);

	return <div key={parentId} id={parentId}></div>;
};

export default Phaser3;
