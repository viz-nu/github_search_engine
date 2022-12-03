import { useState } from "react"
function Search({ searchUsers, clearusers, alertfn}) {
    const [username, setUsername] = useState("");
    const onChangeHandler = (event) => {
        event.preventDefault()
        setUsername(event.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (username) {
            searchUsers(username)
            setUsername("");
        } else {
            alertfn({msg:"username cannot be left empty", type:"danger"});
        }
        

    }

    return (
        <>
            <form className="form" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="fname"
                    placeholder="Search Your Github user here ..."
                    onChange={onChangeHandler}
                    value={username}
                    autoComplete="off" />
                <input type="submit" value="Search User" className="btn btn-dark btn-block" />
            </form>
            <button className="btn btn-light btn-block" onClick={clearusers}> Clear Users</button>

        </>
    )


}

export default Search