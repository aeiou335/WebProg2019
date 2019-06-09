import user from '../../models/user';
import comment from '../../models/comment';

const User = {
  /*
  posts(parent, args) {
    console.log('parent: ',parent)
    const userData = await user.findById({_id:parent.author})
  },
  */
  comments(parent, args) {
    return db.comments.filter(comment => {
      return comment.author === parent.id
    })
  }
}

export { User as default }
