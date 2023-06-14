const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  fs.readFile('./data/trains.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.send(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error parsing JSON data');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});