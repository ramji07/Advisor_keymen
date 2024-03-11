import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
import Layout from '../../Components/Layout/Layout';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth-data`);
       
        setData(response.data);
      } catch (error) {
        alert('Something went Wrong')
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (id) => {
    // Handle update action (e.g., navigate to update form)
    console.log('Update item with ID:', id);
  };

  const handleDelete = async (id) => {
    try {
      // Send delete request to backend
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/auth-data/${id}`);
      // Remove deleted item from data array
      setData(data.filter(item => item._id !== id));
      console.log('Item deleted successfully.');
    } catch (error) {
      console.error('Error deleting item:', error);
      // Handle delete error
    }
  };
  return (
    <Layout>
        <div className="container" style={{marginTop:'5rem'}}>
      <h1>Contact Us Data</h1>
      <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead className='thead-dark'>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Actions</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>
              <td>
                <button className="btn btn-primary btn-sm " onClick={() => handleUpdate(item._id)}>Update</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>

    </Layout>
  )
}

export default AdminDashboard
