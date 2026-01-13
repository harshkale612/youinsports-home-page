import React from 'react';

const SeoSchema = ({ type, name, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: name || "UinSports",
    description: description || "Empowering amateur athletes through networking and community support",
    url: url || "https://uinsports.com",
  };

  if (type === "Organization") {
    schema["logo"] = "https://uinsports.com/uinsports-logo.png";
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SeoSchema;
