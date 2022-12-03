import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Users from "./components/Users";
import Loading from "./components/Loading"
import axios from "axios";
import About from "./components/About";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Userprofile from "./components/Userprofile";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
function App() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [alert, setAlert] = useState(null)
    const [user, setUser] = useState({});
    const[repos,setRepos]=useState([])

    useEffect(() => {
        const getdata = async () => {
            try {
                setloading(true)
            const { data } = await axios.get(`https://api.github.com/users`, {
                auth: {
                    username: "viz-nu",
                    password: "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"
                }
            })
            setloading(false)
            setdata(data)
            } catch (error) {
                console.log(error);
            }
            
        }
        getdata();
    }, []);
    //this is search api
    const searchUsers = (username) => {
        userdata();
        async function userdata() {
            setloading(true)
            const { data } = await axios.get(`https://api.github.com/search/users?q=${username}`)
            try {
                setloading(false)
                setdata(data.items);
            } catch (error) {
                console.log(error);
            }
        }
    }
    //fetch single user profile
    async function Userprofiledata  (username)  {
            
        const { data } = await axios.get(`https://api.github.com/users/${username}`);
        //fetch top 5 repos
        const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=desc&per_page=5`);
        try {
            setRepos(res.data);
            setUser(data);
               
            } catch (error) {
                console.log(error);
            }
    }
    

    // clearing users on click
    function clearusers() {
        setdata([])

    }

    //show Alert
    const alertfn = (alert) => {

        setAlert(alert);
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }
    return (
        <>
            <NavBar />
            <div className="container">
            <Alert alert={alert} />
            </div>
            
            <Routes>
                <Route path="/" element={<>

                    <div className="container">
                       
                        <Search searchUsers={searchUsers} clearusers={clearusers} alertfn={alertfn} />
                        {loading && <Loading />}
                        <Users data={data} />

                    </div>
                </>
                }> </Route>
                <Route path="/contact" element={<Contact alertfn={alertfn} />}> </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:username" element={<Userprofile Userprofiledata={Userprofiledata} user={user} loading={loading} repos={repos}/>}></Route>

            </Routes>
            <Footer />

        </>
    )
}

export default App;


