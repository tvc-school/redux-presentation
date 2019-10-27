const state = {



  users: [
    { name: 'Jo', email: 'jo@email.com' },
    { name: 'Bo', email: 'bo@email.com' }
  ],

  companies: [
    { name: 'Ace', revenue: 300 },
    { name: 'Base', revenue: 5000 },
  ],



}





const addUser = () => {
  return ({
    type: 'addUser',
    payload: {
      name: 'Jo',
      email: 'joe@email.com',
    }
  })
}



const users = (state = [], action) => {
  switch (action.type) {
    case 'getUsers':
      // return users from state
    case 'addUser':
      // add user to state
    default:
      return state
  }
}

const companies = (state, action) => {
  switch (action.type) {
    case 'addCompany':
      // add a company
    case 'deleteCompany':
      // delete a company
    default:
      return state
  }
}

