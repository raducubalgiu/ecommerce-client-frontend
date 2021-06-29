import React, {Dispatch} from 'react';
import Footer from "./Footer";
import MainNav from "./MainNav";
import {User} from "../../models/userModel";
import {setUser} from "../../store/actions/setUserAction";
import {connect} from "react-redux";
import {useHttpGet} from "../../api/use-http";

const Layout = (props: {user: User; setUser: (data: any) => void; children:any}) => {

    // Send user to redux store
    const applyUser = (data:any) => {
        props.setUser(data);
    }
    useHttpGet('user', applyUser);

    return (
        <>
            <MainNav />
            <main>
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
};

const mapStateToProps = (state: {user: User}) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setUser: (user: User) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);