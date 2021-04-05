const {
  syncAndSeed,
  conn,
  models: { Campus, Student },
} = require("./db");
const path = require("path");
const express = require("express");
const app = express();

const PUBLIC_PATH = path.join(__dirname, "../public");
const DIST_PATH = path.join(__dirname, "../dist");

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.get("/campuses", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    console.log("hi");
    res.send(campuses);
  } catch (ex) {
    next(ex);
  }
});

app.post("/campuses", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.send(newCampus);
  } catch (ex) {
    next(ex);
  }
});
app.put("/campuses/:id", async (req, res, next) => {
  try {
    const updatedCampus = await Campus.findByPk(req.params.id).update(req.body);
    res.send(updatedCampus);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/campuses/:id", async (req, res, next) => {
  try {
    await Campus.findByPk(req.params.id).destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

app.get("/students", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (ex) {
    console.log(ex);
  }
  next();
});

app.get("/students/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.send(student);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  try {
    await syncAndSeed();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  } catch (ex) {
    console.log(ex);
  }
};

init();
