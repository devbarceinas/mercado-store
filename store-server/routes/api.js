const API_MLA = require('../helpers/request')
const { getResults, getOnceResult } = require('../helpers/format')
const { Router } = require('express')
const { app_config } = require('../config')

const router = Router()
const baseUrl = app_config.host

router.get('/items', async (req, res) => {
  const { q } = req.query
  console.log(req)
  try {
    let items = []
    let categories = []
    if (q.length > 0 && q !== '') {
      const {
        data: {
          results,
          filters
        }
      } = await API_MLA.get(`${baseUrl}/sites/MLA/search?q=${q}&limit=4`)

      items = results?.length > 0 && results?.map(result => getResults(result))

      const categoriesFilters = filters.find(filter => filter.id = 'category')
      categories = categoriesFilters ? categoriesFilters.values[0]?.path_from_root : []
    }

    res.status(200).send({
      author: {
        name: app_config.author_name,
        lastname: app_config.author_lastname,
      },
      items,
      categories,
    })
  } catch (error) {
    res.status(500).send({
      title: 'Error',
      message: 'Internal Server Error',
      error
    })
  }
})

router.get('/items/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    let items = []
    if (id !== '') {
      const { data } = await API_MLA.get(`${baseUrl}/items/${id}`)
      const { data: { plain_text } } = await API_MLA.get(`${baseUrl}/items/${id}/description`)
      items = await getOnceResult(data, plain_text)
    }

    res.status(200).send({
      author: {
        name: app_config.author_name,
        lastname: app_config.author_lastname,
      },
      items,
    })
  } catch (error) {
    res.status(500).send({
      title: 'Error',
      message: 'Internal Server Error',
      error
    })
  }
})

module.exports = router