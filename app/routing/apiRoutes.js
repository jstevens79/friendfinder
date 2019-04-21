const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const fileName = '../data/friends.json'
const file = require(fileName);

router.get('/api/friends', (req, res) => {
  res.json({'response':'api'})
})

router.post('/api/friends', (req, res) => {
  // save to the file?  
  // get the current scores and compare them with each of the other friends

  const Scores = req.body[0].scores;

  let matchNumber = null;
  let matches = [];
  
  for (let friend of file) {
    let difference = 0;
    friend.scores.map((score, idx) => {
      difference += Math.abs(score - Scores[idx]);
    })
    
    if (matchNumber === null || matchNumber > difference) {
      matchNumber = difference;
      matches.length = 0;
      matches.push(friend.name)
    }

    // in case there is a tie...
    if (matchNumber === difference) {
      matches.push(friend.name);
    }
  
  }

  console.log(matchNumber);
  console.log(matches);

  
  
  
  res.json('api')
})

module.exports = router;