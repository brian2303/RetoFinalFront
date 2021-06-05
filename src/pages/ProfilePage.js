import React from 'react'
import NavbarSofKa from "../components/Navbar";

export default function ProfilePage() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md"><NavbarSofKa /></div>
                    <p>Este es el perfil del usuario</p>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10"></div>
                </div>
            </div>
        </section>
    )
}
