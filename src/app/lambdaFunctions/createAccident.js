const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
});

exports.handler = async (event) => {
  let { id } = event.pathParameters;

  const {
    accidentDate,
    visitsToRehab,
    timeAtRehabinhours,
    rehabTravelTime,
    attorneyTime,
    accidentTime,
    carRentalTime,
    rehabTimePerDay,
    rehabEndDate,
    hourlyWage,
    occupation,
    zipCodeOfAccident,
    insurance,
    age,
    settlementAmt,
    notes,
  } = JSON.parse(event.body);

  let responseBody = "";
  let statusCode = 0;

  let isoDate = new Date().toISOString();

  const params = {
    TableName: "Accidents",
    Item: {
      id,
      createdAt: isoDate,
      accidentDate,
      visitsToRehab,
      timeAtRehabinhours,
      rehabTravelTime,
      attorneyTime,
      accidentTime,
      carRentalTime,
      rehabTimePerDay,
      rehabEndDate,
      hourlyWage,
      occupation,
      zipCodeOfAccident,
      insurance,
      age,
      settlementAmt,
      notes,
    },
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to put item: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: responseBody,
  };

  return response;
};
