import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

function UserItem({ a }) {
 
    return <div className="card text-center" >
        <img src={a.avatar_url} style={{ width: "120px" }} alt="avatar" />
        <h3> {a.login} </h3>
        <Link to={`/user/${a.login}`} className="btn btn-dark btn-sm my-1"> Git Profile </Link>
        </div>
}


// UserItem.defaultProps ={
//     a:{
//         avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
//         login: "mojambo",
//         html_url:"https://github.com/mojombo"
//     }
// }

UserItem.propTypes = {
    a: PropTypes.object.isRequired
}

export default UserItem

