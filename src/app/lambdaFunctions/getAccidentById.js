const AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  let { id } = event.pathParameters;
  let responseBody = "";
  let statusCode = 0;

  const params = {
    TableName: "Accidents",
    Key: {
      id: id,
    },
  };

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    console.log(err);
    responseBody = `Unable to get item: ${err}`;
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
