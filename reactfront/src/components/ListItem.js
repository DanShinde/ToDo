import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Modal from "./Modal";

const ListItem = ({task})=> {
    const [showModal, setShowModal] = useState(false)
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/todo/${task.id}/`)
            // Refresh tasks list after deletion
            console.log("Deleted")
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <li className="list-item" >
            <div className="info-container">
                <TickIcon />
                <p className="task-title">{task.title} </p>
                <ProgressBar />
            </div> 
            <div className="button-container">
                <button className='edit' onClick={() => setShowModal(true)}>EDIT</button>
                {/* <Button className='delete' variant="outline" color="danger" onClick={handleDelete}>DELETE</Button> */}
                <button className='delete' onClick={handleDelete}> <strong>DELETE</strong></button>
            </div>
            {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} />}
        </li>
    )
}
export default ListItem