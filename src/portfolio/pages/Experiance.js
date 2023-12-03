import React from 'react'

function Experiance() {
  return (
    <>
      <div className='about'>
        <h1>Experience</h1>
        <div className='experience'>
          <h5 className='mt-4 px-4'>Globeminds Technologies - January 2021 - present</h5>
          <div className='px-3 experience-div mb-5'>
            <ul className='round'>
              <li><h6>Project name : Inventory Management system - Apr 2022 to Nov 2022</h6>
                <p className='mb-3'>An Inventory Management System project developed using react is a web-based application designed to help businesses efficiently manage their inventory, including tracking stock levels, monitoring product movements, and streamlining various inventory-related processes. This includes, </p></li>
              <div className='exp-discription'>
                <ul className='round2'>
                  <p>User Authentication and Authorization: The system begins with user authentication and authorization. Different user roles, such as admin, manager, or staff, have varying levels of access and permissions within the application.</p>
                  <p>Dashboard: A dashboard provides an overview of essential inventory metrics and key performance indicators (KPIs). It offers at-a-glance information about stock levels, product categories, recent transactions, and alerts for low stock or other critical events.</p>
                  <p>Product Management: This module allows users to add, edit, or delete products in the inventory. Each product may have attributes like name, description, price, category, quantity, supplier details, and product images.</p>
                  <p>Order Management: This feature enables users to create, view, and manage purchase orders and sales orders. It includes functionalities like order creation, order status tracking, order history, and order processing.</p>
                  <p>Search and Filter: Users can search for products based on various criteria, such as product name, category, supplier, or barcode. Advanced filtering options make it easy to locate specific items quickly.</p>
                  <p>Responsive Design: Since it's a web application built with react, it is designed to be responsive, ensuring usability on various devices, including desktops, tablets, and smartphones.</p>
                  <p>Security: Security measures, including data encryption, role-based access control, and protection against common web vulnerabilities, are crucial to safeguard sensitive inventory data.</p>
                  <p>Scalability: The system should be designed to handle a growing amount of data and users, ensuring scalability to accommodate future business expansion.</p>
                </ul>
              </div>
            </ul>

          </div>

          <div className='px-3 experience-div mb-5'>
            <ul className='round'>
              <li><h6>Project name : Hospital Management System </h6>
                <p className='mb-3'>A Hospital Management System (HMS) project, developed as a web-based application, aims to revolutionize healthcare facility management by enhancing administrative and medical processes. This comprehensive system encompasses a range of modules designed to optimize healthcare operations and improve patient care.</p></li>
              <div className='exp-discription'>
                <ul className='round2'>
                  <p>User Authentication and Authorization:
                    Implement a robust user authentication and authorization system. Define distinct user roles, including administrators, doctors, nurses, staff, and patients, each with specific access permissions.</p>
                  <p>Patient Registration and Management:
                    Create a patient registration module for capturing and maintaining patient demographics. Streamline patient management, enabling quick access to patient information for healthcare providers.
                  </p>
                  <p>Appointment Scheduling:
                    Implement an appointment scheduling system, allowing patients to book appointments with doctors online.

                  </p>
                  <p>Laboratory and Diagnostic Management:
                    Schedule and monitor laboratory tests and diagnostic procedures. Store and manage test results securely. Optimizing resource allocation, medication tracking and laboratory scheduling for efficient hospital operations.
                  </p>
                  <p>Doctor and Staff Management:
                    Maintain comprehensive records of doctors, nurses, and hospital staff. Manage their schedules, shifts, and roles within the hospital.
                  </p>
                </ul>
              </div>
            </ul>

          </div>

        </div>
      </div>

    </>
  )
}

export default Experiance
