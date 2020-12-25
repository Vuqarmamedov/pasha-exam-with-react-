import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="icons">
                            <div className="notification">
                                <img src="img/ring.png" alt="ring" />
                            </div>
                            <div className="user">
                                <img src="img/user1.png" alt="user" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
