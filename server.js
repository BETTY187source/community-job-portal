const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/community-job-portal', { useNewUrlParser: true, useUnifiedTopology: true });

const Job = mongoose.model('Job', new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  type: String,
}));

app.post('/api/jobs', async (req, res) => {
  const { title, description, company, location, type } = req.body;
  const newJob = new Job({ title, description, company, location, type });
  await newJob.save();
  res.json(newJob);
});

app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
