import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Create = ({captainState}) => {
    const [validState, setValidState] = useState({})
    const [formState, setFormState] = useState({
        name: "",
        image_url: "",
        treasure_chests: "",
        catch_phrase: "",
        crew_position: "",
    })

    const changeHandler = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/new', formState)
            .then(res => navigate(`/pirate/${res.data.newPirate._id}`))
            .catch(err => setValidState(err.response.data.err.errors))
    }

    return(
        <div>
            <Link to = '/'>Crew Board</Link>
            <fieldset>
                <legend>Create Page</legend>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Pirate Name</label>
                        <input onChange={changeHandler} name="name" type="text"/>
                        {(validState.name) ? <p>{validState.name.message}</p>: null}
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input onChange={changeHandler} name="image_url" type="text"/>
                        {(validState.image_url) ? <p>{validState.image_url.message}</p>: null}
                    </div>
                    <div>
                        <label>Number of Treasure Chests</label>
                        <input onChange={changeHandler} name="treasure_chests" type="number"/>
                        {(validState.treasure_chests) ? <p>{validState.treasure_chests.message}</p>: null}
                    </div>
                    <div>
                        <label>Catch Phrase</label>
                        <input onChange={changeHandler} name="catch_phrase" type="text"/>
                        {(validState.catch_phrase) ? <p>{validState.catch_phrase.message}</p>: null}
                    </div>
                    <div>
                        <label>Crew Postion</label>
                        <select onChange={changeHandler} name="crew_position">
                            {
                                captainState ? null : <option value = "Captain">Captain</option>
                            }
                            <option value = "First Mate">First Mate</option>
                            <option value = "Quarter Master">Quarter Master</option>
                            <option value = "Boatswain">Boatswain</option>
                            <option value = "Powder Monkey">Powder Monkey</option>
                        </select>
                        {captainState ? <p>We already have a captain on board this ship!</p>: null}
                        {(validState.crew_position) ? <p>{validState.crew_position.message}</p>: null}
                    </div>
                    <button type="submit">Add Pirate</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Create;