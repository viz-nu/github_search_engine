import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";

function Userprofile({ Userprofiledata, user, repos }) {
    const { username } = useParams();
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        company,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;
    useEffect(() => {
        
        Userprofiledata(username);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Link to="/" className="btn btn-light">
                Go Back To Search
            </Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="avatarr" className="round-img" style={{ width: "250px" }} />
                    <h1> {name}</h1>
                    <h4> Location : {location}</h4>
                </div>
                <div>
                    {bio && (
                        <>
                            <h1>Bio </h1>
                            <p> {bio}</p>
                        </>
                    )}
                    <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer"> Visit My GitHub Profile</a>
                    <ul>
                        <li>
                            {login && <>
                                <b> Username : {login}</b>
                            </>}
                        </li>
                        <li>
                            {company && <>
                                <b> Company  : {company}</b>
                            </>}
                        </li>
                        <li>
                            {blog && <>
                                <b> Website : {blog}</b>
                            </>}
                        </li>
                        <li>
                            <b>Hireable : </b>  {hireable ? <i className="fas fa-check text-success " /> : <i className="fas fa-times-circle text-danger" />}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary"> Followers : {followers}</div>
                <div className="badge badge-success"> Following : {following}</div>
                <div className="badge badge-light"> Public Repos : {public_repos}</div>
                <div className="badge badge-dark"> Public Gists : {public_gists}</div>
            </div>

            {repos.map((repo, i) => (
                <div className="card" key={i}>
                    <a href={repo.html_url} target='_blank' rel="noreferrer">
                    <h1>{repo.name}</h1></a>
                    <p>{repo.description}</p>
                </div>
            ))}
        </>
    )
}
export default Userprofile;