import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Clock, Phone, Mail, FileText, CheckCircle, RefreshCw, Trash2 } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/appointments';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (err) {
      setError('Failed to fetch appointments. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, { status: newStatus });
      if (res.data.success) {
        setAppointments(appointments.map(app => app._id === id ? res.data.data : app));
      }
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const deleteAppointment = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        const res = await axios.delete(`${API_URL}/${id}`);
        if (res.data.success) {
          setAppointments(appointments.filter(app => app._id !== id));
        }
      } catch (err) {
        alert('Failed to delete appointment');
      }
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800'; // pending
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
          
          <div className="px-6 py-6 border-b border-gray-200 bg-gray-50 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Manage incoming clinic appointments</p>
            </div>
            <button 
              onClick={fetchAppointments}
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
          </div>

          {error && (
            <div className="p-6 bg-red-50 text-red-700 border-b border-red-100">
              {error}
            </div>
          )}

          <div className="p-6 overflow-x-auto">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            ) : appointments.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-lg">No appointments found.</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient Details</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Schedule</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-900">{app.name}</span>
                          <span className="text-xs text-gray-500 flex items-center gap-1 mt-1"><Phone className="w-3 h-3"/> {app.phone}</span>
                          <span className="text-xs text-gray-500 flex items-center gap-1 mt-1"><Mail className="w-3 h-3"/> {app.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-primary-500" />
                          <span className="font-medium">{new Date(app.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-500" />
                          <span>{app.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                        <div className="font-medium text-gray-900 capitalize">{app.service.replace('-', ' ')}</div>
                        {app.message && <div className="text-xs text-gray-500 mt-1 truncate" title={app.message}>Note: {app.message}</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(app.status)}`}>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-3">
                          <select
                            value={app.status}
                            onChange={(e) => updateStatus(app._id, e.target.value)}
                            className="text-xs border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 py-1"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirm</option>
                            <option value="completed">Complete</option>
                            <option value="cancelled">Cancel</option>
                          </select>
                          <button 
                            onClick={() => deleteAppointment(app._id)}
                            className="text-red-500 hover:text-red-700 bg-red-50 p-1.5 rounded-md transition"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
