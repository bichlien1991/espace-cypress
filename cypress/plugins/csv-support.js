module.exports = (on) => {
  on("file:preprocessor", (data) => {
    console.log(data);
  });
};
