const casual = require('casual')


casual.define('post', ({
  copyrightInfo, titleInfo, dateInfo, urlInfo, explanationInfo,
}) => ({
  id: casual.uuid,
  copyright: copyrightInfo,
  title: titleInfo,
  date: dateInfo,
  url: urlInfo,
  explanation: explanationInfo,
}))


const postData = []

for (let i = 0; i < 1; ++i) {
  const copyrightInfo = 'This is a testing post'
  const titleInfo = 'This is a testing post'
  const dateInfo = '0000-00-00'
  const urlInfo = 'https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_nasa_emblem.jpg'
  const explanationInfo = 'This is a testing post'
  postData.push(casual.post({
    copyrightInfo, titleInfo, dateInfo, urlInfo, explanationInfo,
  }))
}

module.exports = postData
