module.exports = {
  returnTwo() {
    return 2;
  },
  greeting(name) {
    return `Hello, ${name}.`;
  },
  add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  },
  getCars() {
    return axios
      .get('https://joes-autos.herokuapp.com/api/vehicles?color=green')
      .then(res => {
          return res.data
      });
  }
};
