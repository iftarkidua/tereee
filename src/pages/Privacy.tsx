import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            We collect minimal information necessary for the operation of our service:
          </p>
          <ul className="list-disc pl-6">
            <li>Video URLs you choose to embed</li>
            <li>Basic usage analytics</li>
            <li>Cookie preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>
            We use the collected information solely for:
          </p>
          <ul className="list-disc pl-6">
            <li>Providing our video embedding service</li>
            <li>Improving user experience</li>
            <li>Ensuring service security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
          <p>
            We use essential cookies to:
          </p>
          <ul className="list-disc pl-6">
            <li>Remember your cookie preferences</li>
            <li>Maintain basic functionality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We implement various security measures to protect your information:
          </p>
          <ul className="list-disc pl-6">
            <li>SSL/TLS encryption</li>
            <li>Secure URL validation</li>
            <li>Rate limiting</li>
            <li>Regular security audits</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Privacy