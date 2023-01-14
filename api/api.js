const getData = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  res = await res.json();
  return res;
};

module.exports = { getData };
