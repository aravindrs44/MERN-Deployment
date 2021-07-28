import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Details = ({id}) => {
    const [detailState, setDetailState] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setDetailState(res.data.onePirate[0]))
            .catch(err => console.log(err))
        console.log(detailState)
    }, [])

    return(
        <div>
            <Link to = '/'>Crew Board</Link>
            {
            detailState ? 
            <fieldset>
                <legend>Details Page</legend>
                <h1>{detailState.name}</h1>
                <p>Position: {detailState.crew_position}</p>
                <p>Image: </p><img src={detailState.image_url} alt="Pirate Picture"/>
                <p>Catch Phrase: {detailState.catch_phrase}</p>
                <p>Number of Treasure Chests: {detailState.treasure_chests}</p>
                {detailState.peg_leg ? <p>Peg Leg: {detailState.peg_leg}</p>: null}
                {detailState.eye_patch ? <p>Peg Leg: {detailState.eye_patch}</p>: null}
                {detailState.hook_hand ? <p>Peg Leg: {detailState.hook_hand}</p>: null}
            </fieldset> : <p>Waiting for data!</p>
            }
        </div>
    )
}

export default Details;