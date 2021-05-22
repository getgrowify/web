import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

const Header = () => {
    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    return (
        <header className="topbar transparent">
            <Navbar className="top-navbar" dark expand="md" >
                <div className="navbar-header" id="logobg" data-logobg="skin6">
                    
                    <NavbarBrand href="/"> 
                        <b className="logo-icon">
                            <p style={{color: 'black', marginTop: '5px', marginLeft: '10px', fontSize: '140%'}} className="Logo">GROWIFY</p>
                        </b>
                    </NavbarBrand>
                    <button className="btn-link nav-toggler d-block d-md-none" onClick={() => showMobilemenu()}>
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                
            </Navbar>
        </header>
    );
}
export default Header;
