import React from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import './Auth.scss';

const Auth = () => {
    return (
        <div className="Auth">
            <form>
                <h2>Sign Up</h2>
            
                <Input 
                    type="text"
                    placeholder="E-mail"
                    value=""
                    onChange= {() => {}}    
                    />      

                <Input 
                    type="password"
                    placeholder="Password"
                    value=""
                    onChange= {() => {}}    
                    />      

                <Button type="submit"> Sign Up </Button>

                <span>Switch to Sign In</span>

            </form>
        </div>
    );
};

export default Auth;