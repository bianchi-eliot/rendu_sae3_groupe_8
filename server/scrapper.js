const cheerio = require('cheerio')
const axios = require('axios')
const json2csv = require('json2csv').Parser
const fs = require('fs')

const url = 'https://www.izmostock.com/car-stock-photos-by-brand'

const brandsData = []

async function getCarBrands() {
  try {
    const responce = await axios.get(url)
    const $ = cheerio.load(responce.data)

    const brands = $('div#by_brand')
    brands.each(function() {
      const name = $(this).find('a span#by_brand_caption').text()
      brandsData.push({ name })
    })

    const parser = new json2csv()
    const csv = parser.parse(brandsData)
    fs.writeFileSync('./brands.csv', csv)
  } catch(error) {
    console.error(error.message)
  }
}

getCarBrands()