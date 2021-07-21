import React, { Fragment, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import {Redirect } from 'react-router-dom';
import Record from './Record';
import dashboardData  from '../data/dashboard.json';
import {GET_DETAILS, LOGOUT} from '../actions/types';

const Dashboard = ({userDetails,isAuthenticated}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GET_DETAILS, payload: dashboardData.user})     
    },[])

    const logout = () => {
        dispatch({type: LOGOUT, payload: null})  
    }

    const display = userDetails.map(item  => (
        <Record key={item.id} name={item.name} age={item.age} gender={item.gender} email={item.email} phone={item.phoneNo} id={item.id} />
    ))

    return (

        <Fragment>
        {isAuthenticated ? 
         <div>
            <table className='tbl hd'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </tr>
            </table>
            {display}
            <button className='btn logout' onClick={logout}>Logout</button>
          </div>   
        : <Redirect to='/' />}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
    userDetails : state.details.userDetails, 
    isAuthenticated: state.details.isAuthenticated
 };
}
    

export default connect(mapStateToProps)(Dashboard)

