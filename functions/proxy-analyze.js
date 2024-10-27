const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const response = await fetch('http://54.89.36.139:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: event.body,
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to connect to API' }),
    };
  }
};
