import React from'react';

const Logger = () => (
    <div className="logger">
        <h3>Enter to application</h3>
        <div>
            <input type="text" required name="login" placeholder="login" alt="login field"/>
            <div>
                <input type="password" required name="password" placeholder="password" alt="password field"/>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
);

export default Logger;