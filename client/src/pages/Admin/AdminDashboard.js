import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className='conainer-fluid'>
        <div className='row'>
         <div className='col-md-3'>
          <AdminMenu/>
          </div>

          {/* for displayin ligin user detalis  in admin dashboard  */}
          <div className='col-md-9'>
          <div className='card w-75 p-3'>
          <h1> Admin Name : {auth?.user?.name}</h1>
          <h1> Admin Email : {auth?.user?.email}</h1>
          <h1> Admin Contact : {auth?.user?.phone}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
