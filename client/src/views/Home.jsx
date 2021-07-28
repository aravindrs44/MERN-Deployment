import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Home = ({captainState, setCaptainState}) => {
    const [deleteState, setDeleteState] = useState(false);
    const [listState, setListState] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setListState(res.data.allPirates))
            .catch(err => console.log(err))
    }, [deleteState])

    const viewHandler = e => {
        navigate(`${e.target.name}`);
    }

    const deleteHandler = e => {
        if(e.target.id === "Captain"){
            setCaptainState(false);
        }
        axios.delete(`http://localhost:8000/api/${e.target.name}`)
            .then(res => setDeleteState(!deleteState))
            .catch(err => console.log(err))
    }

    // const captainChecker = list => {
    //     for(let pirate of list) {
    //         console.log(pirate.crew_position)
    //         if(pirate.crew_position == "Captain")   {
    //             setCaptainState(true);
    //             break;
    //             console.log(captainState)
    //         }
    //     }
    // }

    return(
        <div>
            <button><Link to = '/pirate/new'>Add Pirate</Link></button>
            {
                listState ?
            <fieldset>
                <legend>Home Page</legend>
                {
                    listState.map((pirate, i) => (
                        <div key = {i}>
                            <h3>{ pirate.name }</h3>
                            <img src={pirate.image_url} alt="Pirate Picture"/><br></br>
                            <button onClick = { viewHandler } name = {`/pirate/${pirate._id}`}>View Pirate</button>
                            <button onClick = { deleteHandler } id = {pirate.crew_position} name = {`pirates/delete/${pirate._id}`}>Walk the Plank</button>
                            {
                                pirate.crew_position === "Captain" ? setCaptainState(true) : console.log(captainState)
                            }
                        </div>
                    ))
                }
            </fieldset>: <p>Waiting for data!</p>
            }
        </div>
    )
}

export default Home;