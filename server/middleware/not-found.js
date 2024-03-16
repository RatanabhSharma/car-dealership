const notFound = (req, res) =>
  res.status(400).send({ errorDirection: "Route not found" });

module.exports = notFound;
