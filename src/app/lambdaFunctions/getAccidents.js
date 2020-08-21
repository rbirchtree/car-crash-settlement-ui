const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
});

exports.handler = async (event) => {
  let responseBody = "";
  let statusCode = 0;

  const params = {
    TableName: "Accidents",
  };

  try {
    const data = await documentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
  } catch (err) {
    responseBody = "Unable to put product: ${err}";
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: responseBody,
  };
  return response;
};
