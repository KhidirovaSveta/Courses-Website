const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;

const coursesSchema = new Schema(
  {
    title: { type: String, require: true },
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: String, require: true },
    imgUrl: { type: String, require: true },
  },
  { timestamp: true }
);

const Courses = mongoose.model("Courses", coursesSchema);

app.get("/courses", (req, res) => {
  Courses.find({}, (error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      res.status(500).json({ message: error });
    }
  });
});

app.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findById(id, (error, doc) => {
    if (!error) {
      res.send(doc);
    } else {
      res.status(500).json({ message: error });
    }
  });
});

//  experts

const expertsSchema = new Schema(
  {
    imgUrl: { type: String, require: true },
    name: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamp: true }
);

const Experts = mongoose.model("experts", expertsSchema);

app.get("/experts", (req, res) => {
  Experts.find({}, (error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      res.status(500).json({ message: error });
    }
  });
});

mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/Courses`,
  (error) => {
    if (!error) {
      app.listen(port, () => {
        console.log(
          `Example app listening on port http://localhost:${port}`
        );
      });
    }
  }
);
