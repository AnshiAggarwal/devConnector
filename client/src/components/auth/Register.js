import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
            console.log('Password and Confirm Password do not match');
        }
        else {
            console.log(formData);
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={(event) => { onSubmit(event) }}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(event) => { onChange(event) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(event) => { onChange(event) }}
                        required
                    />
                    <small className="form-text">This site uses Gravatar so if you want a
                    profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="8"
                        value={password}
                        onChange={(event) => { onChange(event) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="8"
                        value={password2}
                        onChange={(event) => { onChange(event) }}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );
}