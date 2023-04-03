const ListHeader = ({ listName})=> {

    const signOut = () =>{
        console.log('signOut');
    }
    return (
        <div>
            <h1>{listName}</h1>
            <div className="button-container">
                <button className="create">Add New</button>
                <button className="signout" onClick={signOut}>SIGN OUT</button>
            </div>
        </div>
    )
}
export default ListHeader