import React from 'react';

const Settings = () => {
    return (
        <div>
            <h5>Personal Data</h5>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="first_name">First Name</label>
                    <input className="form-control" type="text" placeholder="First Name" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="last_name">Last Name</label>
                    <input className="form-control" type="text" placeholder="Last Name" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" placeholder="Email" />
                </div>

                <button className="btn btn-info">Update</button>
            </form>
        </div>
    );
};

export default Settings;