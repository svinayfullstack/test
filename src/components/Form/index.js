import React, { useState } from "react";
import "./style.css";
import Button from '../../components/Button'


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
        businessName: "",
        country: ""
    });

    const updateFormData = event => {
        console.log(event.target.name, event.target.value);

        return setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }


    const { firstName, email, phoneNumber, businessName, country } = formData;

    return (
        <form>
            <label >Full Name</label>
            <input
                value={firstName}
                onChange={e => updateFormData(e)}
                placeholder="Please enter your full name"
                type="text"
                name="firstName"
                required
            />

            <label>Email</label>
            <input
                value={email}
                onChange={e => updateFormData(e)}
                placeholder="Please enter your full email"
                type="email"
                name="email"
                required
            />

            <label>Phone Number</label>
            <input
                value={phoneNumber}
                onChange={e => updateFormData(e)}
                placeholder="Phone number"
                type="number"
                name="phoneNumber"
                required
            />

            <label>Business Name</label>
            <input
                value={businessName}
                onChange={e => updateFormData(e)}
                placeholder="Please enter your business name"
                type="text"
                name="businessName"
                required
            />

            <label>Country</label>
            <input
                value={country}
                onChange={e => updateFormData(e)}
                placeholder="Germany"
                type="text"
                name="country"
                required
            />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    value={country}
                    onChange={e => updateFormData(e)}
                    type="checkbox"
                    required
                    className="chkBox"
                />

                <p className="terms">
                    I agree to all terms & conditions and policy features.
                </p>
            </div>


            <div style={{ textAlign: 'center' }}>
                <Button label="Create your account" />

                <p className="terms">
                    Already have a Nearcut account?
                    <span className="loginHere">Login Here</span>
                </p>
            </div>




        </form >
    );
};

export default Form;
