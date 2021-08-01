const { Router } = require("express");
const router = Router();
const movies = require("../simple.json");

console.log(movies);

router.get("/", (req, res) => {
  res.send(movies);
});

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = {
      id: `${movies.length + 1}`,
      ...req.body,
    };
    movies.push(newMovie);
    res.json(movies);
    return;
  }
  res.status(500).json({ error: "there was a error" });
});

router.put("/:id", (req, res) => {
  const findMovie = movies.find((movie) => movie.id === req.params.id);

  const { title, director, year, rating } = req.body;

  if (!title && !director && !year && !rating) {
    res.status(500).json({ error: "there was a error" });
    return;
  }

  findMovie.title = title;
  findMovie.director = director;
  findMovie.year = year;
  findMovie.rating = rating;

  res.status(200).send(movies);
});

router.delete("/:id", (req, res) => {
  const findMovie = movies.find((movie) => movie.id === req.params.id);
  if (!findMovie) {
    res.status(500).json({ error: "there was a error" });
    return;
  }

  const index = movies.indexOf(findMovie);
  movies.splice(index, 1);

  res.send(movies);
});

module.exports = router;
