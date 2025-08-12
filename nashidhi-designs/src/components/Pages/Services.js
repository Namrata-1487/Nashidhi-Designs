import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => (
  <>
    <Helmet>
      <title>Services | Nashidhi Designs</title>
      <meta name="description" content="Services: 2D drafting, 3D modeling, BIM, elevator GAD, structural layouts and fabrication drawings." />
    </Helmet>

    <div className="container py-5">
      <h2>Services</h2>
      <p>We offer 2D drafting, 3D modeling, BIM integration and elevator planning. (Expand each service with bullet points here.)</p>
    </div>
  </>
);

export default Services;
