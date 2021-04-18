exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      "Hello there! This message is sent from Netlify Functions."
    ),
  };
};
