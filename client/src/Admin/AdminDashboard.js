// AdminDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout/Layout';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth-data?page=${currentPage}`);
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        alert('Something went Wrong');
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: '7rem' }}>
        <h1>Contact Us Data</h1>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className='thead-dark'>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px',marginBottom: '20px' }}>
          <button className="btn btn-primary " onClick={handlePreviousPage}  style={{ marginRight: '10px' }} disabled={currentPage === 1}>Previous</button>
          <span style={{ margin: '0 10px' }}>{currentPage}</span>
          <button className="btn btn-primary" onClick={handleNextPage}  style={{ marginRight: '10px' }} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard;
