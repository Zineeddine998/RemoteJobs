import React from 'react';
import Anime, {anime} from 'react-anime';

const NewHeader = (props) => (
    <Anime delay={anime.stagger(100)}
           scale={[.1, .9]}>
        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
    </Anime>
);

export default NewHeader;