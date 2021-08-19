import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Rating from './Rating';
const AddMovies = ({ HandlAdd }) => {
    const [form, setForm] = useState({
        title: "",
        Image: "",
        Rating: 1,
    })
    const HandlChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        }

        )
    }
    const HandlSubmit = (e) => {
        e.preventDefault();
        let film = { ...form, id: Math.random() };
        HandlAdd(film);
    }

    Modal.setAppElement('#root');
    const HandlRate=(rate)=>{
       setForm({...form,rating:rate})

    }
    return (
        <div>
         
                <form onSubmit={HandlSubmit} className="form">
                    <label>Name of MOvies</label><input type="text" value={form.title} name="title" onChange={HandlChange} /><br/>
                    <label>Lien de l'image</label><input type="url" value={form.image} name="image" onChange={HandlChange} /><br/>
                    <Rating rate={form.rating}  HandlRate={HandlRate}/><br/>
                    <button >Add</button>
                    <Link to="/"><button >Cancel</button></Link>
                   
                </form>
          

        </div>
    )
}
export default AddMovies