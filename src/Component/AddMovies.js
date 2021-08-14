import React, { useState } from 'react'
import Modal from 'react-modal';
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

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');
    const HandlRate=(rate)=>{
       setForm({...form,rating:rate})

    }
    return (
        <div>

            <button onClick={openModal}>Add Movie</button>
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={HandlSubmit} className="form">
                    <label>Name of MOvies</label><input type="text" value={form.title} name="title" onChange={HandlChange} /><br/>
                    <label>Lien de l'image</label><input type="url" value={form.image} name="image" onChange={HandlChange} /><br/>
                    <Rating rate={form.rating}  HandlRate={HandlRate}/><br/>
                    <button >Add</button>
                    <button onClick={closeModal}>close</button>
                </form>
            </Modal>

        </div>
    )
}
export default AddMovies