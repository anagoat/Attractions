import React from 'react';
import propTypes from 'prop-types';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import './Auth.scss';

const Auth = ({ email, password, mode, onChangeHandler, switchModeHandler, onSubmitHandler, onBlurHandler}) => {
    return (
        <div className="Auth">
            <form onSubmit= {onSubmitHandler}>
                <h2>{ mode === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
            
                <Input 
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChangeHandler={onChangeHandler}    
                    onBlurHandler={onBlurHandler}  
                    />      

                <Input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChangeHandler={onChangeHandler}  
                    onBlurHandler={onBlurHandler}  
                    />      

                <Button type="submit"> { mode === 'signup' ? 'Sign Up' : 'Sign In'} </Button>

                <span onClick={switchModeHandler}>
                    Switch to { mode === 'signup' ? 'Sign Up' : 'Sign In'}
                </span>

            </form>
        </div>
    );
};

Auth.propTypes = {
    email: propTypes.string.isRequired,
    mode: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    onChangeHandler: propTypes.func.isRequired,
    switchModeHandler: propTypes.func.isRequired,
    onSubmitHandler: propTypes.func.isRequired,
}

export default Auth;