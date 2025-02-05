const contractInfoTemplate = (contractAddress: string, message: string, owner: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contract Information</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .container {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      max-width: 600px;
      margin: auto;
    }
    .item {
      margin-bottom: 10px;
    }
    .label {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">
      <span class="label">Contract Address:</span> ${contractAddress}
    </div>
    <div class="item">
      <span class="label">Message:</span> ${message}
    </div>
    <div class="item">
      <span class="label">Owner Address:</span> ${owner}
    </div>
  </div>
</body>
</html>
`;

export default contractInfoTemplate;