var express = require('express');
var router = express.Router();
var axios = require('axios');
// var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('HELLO');
});

router.get("/nicedays", function (req, res) {
  const {
    lat,
    lon,
    startdate,
    enddate,
    daily_variables = "apparent_temperature_max,apparent_temperature_min,sunshine_duration,rain_sum,precipitation_hours"
  } = req.query;

  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startdate}&end_date=${enddate}&daily=${daily_variables}&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`
  console.log(url)

  axios.get(url)
    .then(({ data }) => {
      const dailyVariables = daily_variables.split(',')
      console.log(data)
      const responseData = {
        ...data,
        daily: data.daily.time.map((day, index) => {
          const dailyData = { day }
          dailyVariables.forEach(variable => {
            dailyData[variable] = data.daily[variable][index]
          })
          return dailyData
        })
      }

      res.json({
        data: responseData,
        error: null
      })
    })
    .catch(error => {
      console.log(error)
      res.status(error).json({ data: {}, error })
    });
});

module.exports = router;
