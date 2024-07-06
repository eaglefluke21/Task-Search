import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="mt-4">
      {results.map(result => (
        <div key={result._id} className="border-b-2 py-4">
          <h3 className="text-xl text-center font-quick font-bold">{result.title}</h3>
          <p className="font-quick text-center">{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
