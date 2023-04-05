import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName})=> {
    const[showModal, setShowModal] = useState(false)

    const signOut = () =>{
        console.log('signOut');
    }
    return (
        <div>
            <h1>{listName}</h1>
            <div className="button-container">
                <button className="create" onClick={() =>setShowModal(true)}>Add New</button>
                <button className="signout" onClick={signOut}>SIGN OUT</button>
            </div>
            {showModal && <Modal mode={'create'} setShowModal={setShowModal} />}
        </div>
    )
}
export default ListHeader