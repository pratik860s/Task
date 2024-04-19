import React, { useState } from 'react';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseHeaders, setResponseHeaders] = useState(null);

  const postData = async () => {
    const response = await fetch('https://chimpu.xyz/api/post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'PhoneNumber': phoneNumber
      }
    });

    const headers = response.headers;
    const headersObject = {};
    for (const [key, value] of headers.entries()) {
      headersObject[key] = value;
    }
    setResponseHeaders(headersObject);
  };

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={postData}>Send POST Request</button>
      {responseHeaders && (
        <div>
          <h2>Response Headers:</h2>
          <ul>
            {Object.entries(responseHeaders).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
