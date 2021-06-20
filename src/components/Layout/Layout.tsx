import React from 'react';
import Footer from "./Footer";
import MainNav from "./MainNav";

const Layout = (props: any) => {
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

export default Layout;