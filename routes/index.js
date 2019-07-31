const models = require('../models/index')

const express = require('express')
const router = express.Router()

router.get('/users', async (req, res) => {
  let users = await models.User.findAll()

  users = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  })

  return res.json({ users })
})

router.get('/users/:id', async (req, res) => {
  const id = req.params.id
  let user = await models.User.findByPk(id)
  return res.json({ user })
})

router.post('/users', async (req, res) => {
  const userParams = req.body.user
  const user = await models.User.create({name: userParams.name, email: userParams.email})
  return res.json({ user })
})

router.put('/users/:id', async (req, res) => {
  const id = req.params.id
  const userParams = req.body.user
  let user = await models.User.findByPk(id)
  const userUpdated = await user.update({ name: userParams.name, email: userParams.email })
  return res.json({ user: userUpdated })
})

router.delete('/users/:id', async (req, res) => {
  const id = req.params.id

  const success = await models.User.destroy({where: { id } })
  return res.json({ success: true })
})

module.exports = router
