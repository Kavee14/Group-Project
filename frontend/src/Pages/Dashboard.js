import React from 'react';
import './Dashboard.css';
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
      <div>
        <div className="dashboard-container">
        <SideBar />
        {/* Main content */}
        <main className="main-content">
          <header className="header">
            <h2>DASHBOARD</h2>
            <div className="user-info">
              <span>A.B.C.D.Samarasinghe</span>
              <span className="user-icon">👤</span>
            </div>
          </header>

          <div className="content-grid">
            {/* Upcoming Duties */}
            <div className="upcoming-duties">
              <h3>Upcoming Duties</h3>
              <div className="duty-card">
                <div className="duty-date">09</div>
                <div>Tue</div>
                <div>
                  <div>9:00 a.m. - 11:00 a.m.</div>
                  <div>COM333</div>
                  <div>Prof. Alwattagoda Premadasa Auditorium</div>
                </div>
              </div>
              <div className="duty-card light">
                <div className="duty-date">12</div>
                <div>Fri</div>
                <div>
                  <div>9:00 a.m. - 11:00 a.m.</div>
                  <div>COM333</div>
                  <div>Prof. Alwattagoda Premadasa Auditorium</div>
                </div>
              </div>
            </div>

            {/* Updates and Calendar */}
            <div>
              <div className="updates">
                <h3>Updates</h3>
                <div className="no-updates">
                  No New Updates
                </div>
              </div>
              <div className="calendar">
                <h3>May 2024</h3>
              </div>
              <button className="request-button">Request</button>
            </div>
          </div>
        </main>
      </div><Footer/>
      </div>
  );
};

export default Dashboard;
