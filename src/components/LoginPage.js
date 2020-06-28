import React from 'react';
import {connect } from 'react-redux';
import { startLogin } from '../actions/auth'


const LoginPage = ({startLogin}) =>  (
        <div className="box-layout">
            <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify - A Budget App</h1>
            <p>Get your expenses under control!</p>
            <div class="google-btn">
            <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p class="btn-text"><b onClick={startLogin}>Login with Google</b></p>
            </div>
            {/* <button className="box-layout__button">Login with Google</button> */}
            </div>
        </div>
    )

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);