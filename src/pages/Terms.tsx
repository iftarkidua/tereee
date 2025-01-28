import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using VideoFrame, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            This service is provided for personal and commercial use under the following conditions:
          </p>
          <ul className="list-disc pl-6">
            <li>You must not violate any laws in your jurisdiction</li>
            <li>You must not embed content that infringes on intellectual property rights</li>
            <li>You must not use the service to distribute malicious content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p>
            VideoFrame is not responsible for:
          </p>
          <ul className="list-disc pl-6">
            <li>Content of embedded videos</li>
            <li>Availability of third-party video services</li>
            <li>Any damages arising from service use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p>
            We reserve the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>Modify or discontinue service without notice</li>
            <li>Block access to users violating these terms</li>
            <li>Update these terms at any time</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Terms