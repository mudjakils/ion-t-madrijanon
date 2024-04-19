import React from 'react';

// Define a functional component Info
const Info: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// Example usage of the Info component
const InfoComponent: React.FC = () => {
  return (
    <div>
      <h1>Information</h1>
      <Info title="Title 1" content="Content 1" />
      <Info title="Title 2" content="Content 2" />
      <Info title="Title 3" content="Content 3" />
    </div>
  );
};

export default InfoComponent;
