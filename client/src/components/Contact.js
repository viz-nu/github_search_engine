import axios from "axios"
import { useState } from "react";
function Contact({ alertfn }) {
    const [formData, setformData] = useState({
        email: '',
        fullname: '',
        firstVisit: '',
        findValue: '',
        primaryReason: "",
        info: "",
        howEasy: "",
        howLikely: "",
        comments: ""
    });
    const onChangeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post("/contact", formData);
            alertfn({
                type: 'success',
                msg: data.success
            });
        } catch (error) {
            alertfn({
                type: 'danger',
                msg: error.response.data.error
            });
        }
        
    }
    return  (<>
    <div className="container">
        <center>
            <h1> Contact Form</h1>
        </center>
        <form onSubmit={onSubmitHandler}>
            <label> Please Enter Your Email Address </label>
            <input
                type="email"
                name="email"
                onChange={onChangeHandler}
            />
            <label> Please Enter Your Full Name </label>
            <input
                type="text"
                name="fullname"
                onChange={onChangeHandler}
            />
            <fieldset className="fieldset">
                <legend> Is this your first visit to the website </legend>
                <input
                    type="radio"
                    name="firstVisit"
                    value="Yes"
                    onChange={onChangeHandler}
                />
                <label htmlFor="Yes"> Yes</label><br />
                <input type="radio" name="firstVisit" value="No" onChange={onChangeHandler} />
                <label htmlFor="No"> No</label><br /><br />
            </fieldset>
            <fieldset className="fieldset">
                <legend > Were you able to find what you needed? </legend>
                <input type="radio" value="Yes" name="findValue" onChange={onChangeHandler} />
                <label htmlFor="vehicle1"> Yes</label><br />
                <input type="radio" value="No" name="findValue" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> No</label><br />
            </fieldset>
            <br />
            <label htmlFor="review">What is your primary reason for your visit to the website ? </label>

            <textarea rows="3" cols="50" name="primaryReason" onChange={onChangeHandler}>

            </textarea>
            <br />
            <label htmlFor="review">If you did not find what you needed, please tell us what info you were seeking ? </label>

            <textarea rows="3" cols="50" name="info" onChange={onChangeHandler}>

            </textarea>
            <fieldset className="fieldset">
                <legend > How easy is it to find information on the site ? </legend>
                <input type="radio" value="Very Easy" name="howEasy" onChange={onChangeHandler} />
                <label htmlFor="vehicle1"> Very Easy</label><br />
                <input type="radio" value="Easy" name="howEasy" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Easy</label><br />
                <input type="radio" value="Difficult" name="howEasy" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Difficult</label><br />
                <input type="radio" value="Very Difficult" name="howEasy" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Very Difficult</label><br />
            </fieldset>
            <fieldset className="fieldset">
                <legend > What is the likelihood that you will return to the site ? </legend>
                <input type="radio" value="Extremely Likely" name="howLikely" onChange={onChangeHandler} />
                <label htmlFor="vehicle1"> Extremely Likely</label><br />
                <input type="radio" value="Very Likely" name="howLikely" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Very Likely</label><br />
                <input type="radio" value="Moderately Likely" name="howLikely" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Moderately Likely</label><br />
                <input type="radio" value="Slightly Likely" name="howLikely" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Slightly Likely</label><br />
                <input type="radio" value="Unlikely to Return" name="howLikely" onChange={onChangeHandler} />
                <label htmlFor="vehicle2"> Unlikely to Return</label><br />
            </fieldset>
            <br />
            <label htmlFor="review">Please provide any additional comments or suggestions :  </label>

            <textarea rows="3" cols="50" name="comments" onChange={onChangeHandler}>

            </textarea>
            <input type="submit" value="Submit the Contact Form" className="btn btn-dark btn-block" />

        </form>
    </div>

</>)}
export default Contact;