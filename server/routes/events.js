const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:eventId/photos', (req, res) => {
  const { eventId } = req.params;
  const eventDir = path.join(__dirname, '..', '..', 'public', 'Events', eventId);

  fs.readdir(eventDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to fetch photos' });
    }

    const photos = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/.test(file))
      .map(file => `/Events/${eventId}/${file}`);

    res.json({ photos });
  });
});

module.exports = router;
