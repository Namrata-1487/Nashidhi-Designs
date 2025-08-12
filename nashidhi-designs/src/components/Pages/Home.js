import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Card } from 'react-bootstrap';
import bgImage from '../../assets/images/cadcam.jpg';
// Initialize AOS for animations
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceSelect from './ServiceSelect';

AOS.init({ duration: 1000, once: true });

const Home = () => {
  const [service, setService] = useState('');

  return (
    <>
      <Helmet>
        <title>Nashidhi Designs | 3D Mechanical Modeling & Rendering</title>
        <meta
          name="description"
          content="Nashidhi Designs — specialized in converting rough mechanical drawings into precise 3D models, animations, and photorealistic renderings."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Nashidhi Designs | 3D Mechanical Modeling & Rendering" />
        <meta property="og:description" content="From rough sketch to stunning 3D mechanical models, animations & renders." />
        <meta property="og:image" content="/assets/images/og-preview.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <Parallax bgImage={bgImage} strength={500}>
        <div className="hero" style={{ minHeight: '100vh' }}>
          <div className="overlay"></div>
          <div className="hero-inner" data-aos="fade-up">
            <h1>
              From <span className="highlight">Sketch</span> to <span className="highlight">Stunning 3D Model</span>
            </h1>
            <p>We transform rough mechanical drawings into animated, photorealistic renders.</p>
            <a href="/portfolio" className="btn-primary-glow">View Our Work</a>
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <ServiceSelect value={service} onChange={e => setService(e.target.value)} />
            </div>

          </div>
        </div>
      </Parallax>

      {/* Services Section */}
      <section className="container services-preview py-5">
        <div className="row">
          {[
            { title: "3D Mechanical Modeling", desc: "Accurate, detailed models from sketches or 2D drawings." },
            { title: "Animation", desc: "Dynamic visuals showing parts & assemblies in motion." },
            { title: "Rendering", desc: "Photorealistic images & videos for presentations & marketing." }
          ].map((service, i) => (
            <div key={i} className="col-md-4" data-aos="zoom-in" data-aos-delay={i * 200}>
              <Card className="service-card shadow-sm text-center p-4 hover-effect">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
