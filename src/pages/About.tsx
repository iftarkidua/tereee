import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About VideoFrame</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          VideoFrame is a secure and user-friendly platform that allows you to easily embed and view online videos from various sources. Our service prioritizes user privacy and security while providing a seamless video viewing experience.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          We strive to provide a simple, secure, and reliable way for users to access online video content through a clean and modern interface. Our platform is built with the latest web technologies and follows best practices for security and performance.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Security First</h2>
        <p className="mb-6">
          At VideoFrame, we take security seriously. Our platform implements various security measures including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Secure URL validation</li>
          <li>CORS protection</li>
          <li>SSL/TLS encryption</li>
          <li>Rate limiting</li>
          <li>Content filtering</li>
        </ul>
      </div>
    </div>
  );
}

export default About