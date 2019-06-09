import dbUser from '../../models/user'
import dbPost from '../../models/post'
import dbComment from '../../models/comment'

const Query = {
  async users(parent, args) {
    let userData = await dbUser.find()
    if (!args.query) {
      return userData
    }

    return userData.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  async posts(parent, args) {
    console.log(parent)
    let postData = await dbPost.find()
    console.log(args.query)
    if (!args.query) {
      return postData
    }

    return postData.filter(post => {
      const isMatch = post.author
        .toLowerCase()
        .includes(args.query.toLowerCase())
      return isMatch
    })
  },
  async comments(parent, args) {
    return await dbComment.find()
  },
  me() {
    return {
      id: '123098',
      name: 'Mike',
      email: 'mike@example.com'
    }
  },
  post() {
    return {
      id: '092',
      title: 'GraphQL 101',
      body: '',
      published: false
    }
  }
}

export { Query as default }
