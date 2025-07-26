import React from "react";
import Layout from "../components/Layout";

const Docs = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Documentation</h1>
      <p className="text-gray-700">
        Here you’ll find detailed information about each module and feature in PsycheGenesis.
      </p>
      <a href="/docs/index.html">View Documentation</a>
    </Layout>
  );
};

export default Docs;
