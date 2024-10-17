import React from "react";

const SideBar = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <img src="/logo.png" alt="EMS Logo" width="143" height="44" />
                </div>
                <nav>
                    <ul className="nav-menu">
                        <li><a href="#" className="active">Dashboard</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Duties</a></li>
                        <li><a href="#">Reports</a></li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;
