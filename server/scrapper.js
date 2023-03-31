const cheerio = require('cheerio')
const axios = require('axios')
const json2csv = require('json2csv').Parser
const fs = require('fs')

const db = require('./db_V1.0.js')
const url = 'https://www.izmostock.com/car-stock-photos-by-brand'

const brandsData = []

async function getCarBrands() {
  try {
    const responce = await axios.get(url)
    const $ = cheerio.load(responce.data)

    const brands = $('div#by_brand')

    const promises = []
    brands.each(function() {
      const name = $(this).find('a span#by_brand_caption').text()
      const select = db.query('SELECT id_societe FROM societes WHERE nom_societe = $1', [name])
      const insert = undefined
      if (select.rowCount === 0) {
        insert = db.query('INSERT INTO societes(nom_societe) VALUES($1)', [name])
      }
      brandsData.push({ name })
      promises.push(select)
      if (insert != undefined) promises.push(insert)
    })

    await Promise.all(promises)

    const parser = new json2csv()
    const csv = parser.parse(brandsData)
    fs.writeFileSync('./brands.csv', csv)

  } catch(error) {
    console.error(error.message)
  }
}

getCarBrands()