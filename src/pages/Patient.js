import React, { useState } from 'react';
import './Patient.css';

const Patient = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Amit Sharma', date: '01-03-2025', time: '10:00', therapist: 'Dr. Mehta', status: 'pending' },
    { id: 2, name: 'Priya Verma', date: '02-03-2025', time: '11:30', therapist: 'Dr. Iyer', status: 'pending' },
    { id: 3, name: 'Rahul Singh', date: '03-03-2025', time: '14:00', therapist: 'Dr. Menon', status: 'pending' },
    { id: 4, name: 'Sneha Patel', date: '04-03-2025', time: '15:45', therapist: 'Dr. Chatterjee', status: 'pending' },
    { id: 5, name: 'Vikram Joshi', date: '05-03-2025', time: '09:00', therapist: 'Dr. Nair', status: 'pending' },
    { id: 6, name: 'Ananya Reddy', date: '06-03-2025', time: '13:15', therapist: 'Dr. Kulkarni', status: 'pending' },
    { id: 7, name: 'Rohan Das', date: '07-03-2025', time: '16:30', therapist: 'Dr. Banerjee', status: 'pending' },
    { id: 8, name: 'Kavita Pillai', date: '08-03-2025', time: '08:45', therapist: 'Dr. Srinivasan', status: 'pending' },
  ]);

  const handleStatus = (id, newStatus) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id ? {...appointment, status: newStatus} : appointment
    ));
  };

  return (
    <div className="container">
      <center>
      <h1 className="title">Physiotherapy Appointments</h1>
        </center>
      
      <div className="appointment-list">
        <div className="list-header">
          <div className="header-item">Patient Name</div>
          <div className="header-item">Date</div>
          <div className="header-item">Time</div>
          <div className="header-item">Therapist</div>
          <div className="header-item">Status</div>
          <div className="header-item">Actions</div>
        </div>

        {appointments.map((appointment) => (
          <div key={appointment.id} className="list-item">
            <div className="item-data">{appointment.name}</div>
            <div className="item-data">{appointment.date}</div>
            <div className="item-data">{appointment.time}</div>
            <div className="item-data">{appointment.therapist}</div>
            <div className="item-data">
              <span className={`status ${appointment.status}`}>
                {appointment.status}
              </span>
            </div>
            <div className="item-actions">
              {appointment.status === 'pending' && (
                <>
                  <button 
                    className="accept-btn"
                    onClick={() => handleStatus(appointment.id, 'accepted')}
                  >
                    Accept
                  </button>
                  <button 
                    className="decline-btn"
                    onClick={() => handleStatus(appointment.id, 'declined')}
                  >
                    Decline
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Patient;
