import React, {Fragment, useState} from 'react';
import {Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import LoginData from '../data/login.json';
import {LOGIN_USER, INVALID_LOGIN} from '../actions/types';

const Login = ({details:{isAuthenticated, error}}) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const dispatch = useDispatch();

    const { email, password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        if ( email === LoginData.username && password ===  LoginData.password) {
            dispatch({type: LOGIN_USER, payload: formData});
        }
        else {
            dispatch({type: INVALID_LOGIN, payload: null});  
            setFormData({...formData, email :'', password: '' }) 
        }

    }

    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
    

    return (
        <Fragment>
            <form  className="login" onSubmit={e=>onSubmit(e)}>
                <div>
                    <input className='field' type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password} 
                        onChange={e => onChange(e)}
                        className='field'
                    />
                </div>
                <input className='btn' type="submit" value="Login"/>
            </form>
            {error === null ? null: <h3>{error}</h3> }
        </Fragment>
    )
}


const mapStateToProps = state => ({
    details: state.details
})


export default connect(mapStateToProps)(Login);

