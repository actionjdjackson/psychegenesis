// components/MarkdownRenderer.tsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "./Layout";

const MarkdownRenderer = ({ file }: { file: string }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then(setContent)
      .catch(console.error);
  }, [file]);

  return (
    <Layout>
      <div className="prose max-w-full p-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export default MarkdownRenderer;
