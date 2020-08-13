const AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
  let { id } = event;
  let responseBody = "";
  let statusCode = 0;

  const params = {
    TableName: "Accidents",
    Key: {
      id: { S: id },
    },
  };

  try {
    const data = await ddb.getItem(params).promise();
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
