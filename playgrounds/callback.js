var getUser = (id, callback) => {
  let user = {
    name: 'sergey',
    id: id
  }
  callback(user);
}

getUser(31, (user) => {
  console.log(user)
})