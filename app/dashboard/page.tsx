"use client";

import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  FaWater,
  FaRecycle,
  FaIndustry,
  FaLeaf,
  FaChartLine,
  FaTools,
  FaShieldAlt,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import "./Home.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const applications = [
    {
      title: "Water Treatment",
      image: "/water-treatment.jpg",
    },
    {
      title: "Solid Waste Processing",
      image: "/waste-processing.jpeg",
    },
    {
      title: "Industrial Solutions",
      image: "/industrial-solutions.jpeg",
    },
    {
      title: "Environmental Services",
      image: "/environmetal-services.jpeg",
    },
    {
      title: "Recycling Systems",
      image: "/recycle.jpeg",
    },
    {
      title: "Quality Control",
      image: "/qa.jpeg",
    },
    {
      title: "Sustainable Practices",
      image: "/sustianable.jpeg",
    },
    {
      title: "Resource Management",
      image: "/researchjpeg.jpeg",
    },
  ];

  const products = [
    {
      icon: <FaWater />,
      title: "Water Treatment",
      description: "Advanced systems for water purification and management",
    },
    {
      icon: <FaRecycle />,
      title: "Recycling Technology",
      description: "Innovative recycling solutions for waste reduction",
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Processing",
      description: "Efficient industrial waste processing systems",
    },
    {
      icon: <FaLeaf />,
      title: "Environment Protection",
      description: "Solutions for environmental conservation",
    },
    {
      icon: <FaLeaf />,
      title: "Solid Waste Treatment",
      description: "Solutions for Solid Waste Treatment",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Monitoring",
      description: "Real-time monitoring and analytics",
    },
    {
      icon: <FaTools />,
      title: "Maintenance Services",
      description: "Professional maintenance",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description: "Rigorous quality control standards",
    },
    {
      icon: <FaHandsHelping />,
      title: "Consulting Services",
      description: "Expert environmental consulting",
    },
  ];

  const caseStories = [
    {
      title: "Municipal Water Treatment Upgrade",
      description: "Modernization of city-wide water treatment facilities",
      image: "/industrial-solutions.jpeg",
    },
    {
      title: "Industrial Waste Management",
      description: "Implementation of advanced waste processing",
      image: "/recycle.jpeg",
    },
    {
      title: "Sustainable Resource Recovery",
      description: "Development of resource recovery facility",
      image: "/sustianable.jpeg",
    },
  ];

  const articles = [
    {
      title: "Innovation in Water Treatment",
      description: "Latest developments in water treatment technology",
      image: "/water-treatment.jpg",
    },
    {
      title: "Sustainable Waste Management",
      description: "Best practices in sustainable waste management",
      image: "/environmetal-services.jpeg",
    },
    {
      title: "Environmental Impact Analysis",
      description: "Understanding environmental impact assessments",
      image: "/recycle.jpeg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="text-center text-white mb-5">
            <h1>BILASPUR SMART ENVIRONMENTAL SOLUTIONS</h1>
            <p className="lead">PROCESS APPLICATIONS</p>
          </div>
          <div className="application-grid">
            {applications.map((app, index) => (
              <div key={index} className="app-card">
                <img src={app.image} alt={app.title} />
                <div className="app-card-content">
                  <h3>{app.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5">
        <Container>
          <div className="section-title">
            <h2>Revolutionary and Environmentally Friendly</h2>
            <p>
              Our innovative solutions combine cutting-edge technology with
              sustainable practices to deliver exceptional results in water and
              waste management. We're committed to protecting the environment
              while meeting the growing demands of modern industry.
            </p>
          </div>
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => router.push("/waste-disposal-form")}
            >
              Write Your Query
            </Button>
            <Button
              className="mx-2"
              variant="primary"
              onClick={() => router.push("/query-form")}
            >
              Create Transfer Location Record
            </Button>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <Container>
          <div className="section-title">
            <h2>Our Products</h2>
            <p>Comprehensive solutions for environmental challenges</p>
          </div>
          <Row xs={1} md={2} lg={4} className="g-4">
            {products.map((product, index) => (
              <Col key={index}>
                <div className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Case Stories Section */}
      <section className="case-stories">
        <Container>
          <div className="section-title">
            <h2>Recent Case Stories</h2>
            <p>Success stories from our recent projects</p>
          </div>
          <Row xs={1} md={3} className="g-4">
            {caseStories.map((story, index) => (
              <Col key={index}>
                <Card className="case-card">
                  <Card.Img
                    variant="top"
                    src={story.image}
                    className="case-img"
                  />
                  <Card.Body>
                    <Card.Title>{story.title}</Card.Title>
                    <Card.Text>{story.description}</Card.Text>
                    <Button variant="primary">
                      Read More <FaArrowRight className="ms-2" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <Container>
          <div className="section-title">
            <h2>Latest Articles</h2>
            <p>Stay updated with our latest news and insights</p>
          </div>
          <Row xs={1} md={3} className="g-4">
            {articles.map((article, index) => (
              <Col key={index}>
                <Card className="article-card">
                  <Card.Img
                    variant="top"
                    src={article.image}
                    className="article-img"
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Button variant="primary">
                      Read More <FaArrowRight className="ms-2" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <Row className="justify-content-between">
            <Col md={5}>
              <h2>Get In Touch</h2>
              <p>Contact us for more information about our services</p>
              <ul className="list-unstyled">
                <li className="mb-3">Phone: +1 234 567 890</li>
                <li className="mb-3">Email: info@example.com</li>
                <li className="mb-3">
                  Address: 123 Environmental Street, Green City
                </li>
              </ul>
            </Col>
            <Col md={5} className="offset-1">
              <h2>How Can We Help You?</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-40">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
