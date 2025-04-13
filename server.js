const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ajaysubramani:mongodb%40ajay%40123@cluster0.f4yxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const formSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  mobilenumber: String,
  location: String,
  comment: String,
  genderM: String,
  genderF: String,
  person: String,
});

const Form = mongoose.model("Form", formSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  
app.post("/submit-form", async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).send("Form data saved!");
  } catch (err) {
    res.status(500).send("Error saving form data.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
