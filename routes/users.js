const axios = require('axios')
const cheerio = require('cheerio')
var actions = {
  getTq: function (req, res) {
    axios.get('http://www.weather.com.cn/weather/101010100.shtml')
      .then(function (response) {
        const $ = cheerio.load(response.data)
        var data = [];
        $('#7d li').each(function () {
          var $this = $(this);

          // 使用trim去掉数据两端的空格
          data.push({
            title: trim($this.find('.sky h1').text()),
            wea: trim($this.find('.sky .wea').text()),
            leg: trim($this.find('.sky .tem').text())
          });
        })

        function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }

        res.send({ success: 1, data: data[1] })
      })
      .catch(function (error) {
        res.send({ success: 0, msg: error })
      });
  },
};
module.exports = actions;