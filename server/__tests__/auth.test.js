const axios = require('axios')

describe('#logIn', () => {
  test('If a wrong username OR password is given : return 2', async () => {
    const body = {
      email: 'wrong@gmail.com',
      password: 'no password'
    }
    const res = await axios.post('http://localhost:5000/log-in', body)
    expect(res.data.data).toBe(2)
    expect(res.data.message).toEqual('Wrong username/password')
  })

  test('If a correct username AND password is given : return 0', async () => {
    const body = {
      email: 'test@gmail.com',
      password: 'test'
    }
    const res = await axios.post('http://localhost:5000/log-in', body)
    expect(res.data.data).toBe(0)
    expect(res.data.token).toBeDefined()
    expect(res.data.userRole).toEqual('contractor')
  })
})


describe('#signIn', () => {
  test('If wrong credentials are given : return 5', async () => {
    const body = {
      lastName: 'Parker',
      info: 'I wish to be a contractor',
      idRole: 2
    }
    const res = await axios.post('http://localhost:5000/sign-in', body)
    expect(res.data.data).toBe(5)
    expect(res.data.message).toEqual('Fields missing')
  })

  test('If good credentials but email already exists : return 2', async () => {
    const body = {
      lastName: 'BIANCHI',
      firstName: 'Eliot',
      email: 'bianchi@gmail.com',
      info: 'I wish to be a contractor',
      password: '123456',
      idActivity: 1,
      idRole: 2,
      idSociety: 1
    }
    const res = await axios.post('http://localhost:5000/sign-in', body)
    expect(res.data.data).toBe(2)
    expect(res.data.message).toEqual('email already exists')
  })

  test('If correct credentials and contractor : return 0 and message', async () => {
    const body = {
      lastName: 'TOTO',
      firstName: 'toto',
      email: 'toto-contractor@gmail.com',
      info: 'I wish to be a contractor',
      password: '123456',
      idActivity: 1,
      idRole: 2,
      idSociety: 1
    }
    const res = await axios.post('http://localhost:5000/sign-in', body)
    expect(res.data.data).toBe(0)
    expect(res.data.message).toEqual('prestataire mis en attente')
  })

  test('If correct credentials and visitor : return 3 and JWT', async () => {
    const body = {
      lastName: 'TOTO',
      firstName: 'toto',
      email: 'toto-visitor@gmail.com',
      password: '123456',
      idRole: 4,
    }
    const res = await axios.post('http://localhost:5000/sign-in', body)
    expect(res.data.data).toBe(3)
    expect(res.data.token).toBeDefined()
  })
})