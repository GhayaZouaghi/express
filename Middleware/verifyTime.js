const verifyTime = (req, res, next) => {
  const date = new Date();

  let day = date.getDay();
  let tem = false;
  switch (day) {
    case 1:
      tem = false;
    case 2:
      tem = false;
    case 3:
      tem = false;
    case 4:
      tem = false;
    case 5:
      tem = true;
  }

  let hour = date.getHours();

  if (hour >= 9 && hour <= 17 && tem === true) next();
  else res.send("error");
};

module.exports = verifyTime;
