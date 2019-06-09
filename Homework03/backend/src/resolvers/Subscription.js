import dbPost from '../../models/post'

const Subscription = {
  comment: {
    subscribe(parent, { postId }, { db, pubsub }, info) {
      const post = db.posts.find(post => post.id === postId && post.published)

      if (!post) {
        throw new Error('Post not found')
      }

      return pubsub.asyncIterator(`comment ${postId}`)
    }
  },
  post: {
    subscribe(parent, args, { pubsub }, info) {
      const post = dbPost.findById(args.id)
      return pubsub.asyncIterator(`post ${args.id}`)
    }
  },
  user: {
    subscribe(parent, args, {pubsub},  info) {
      return pubsub.asyncIterator('user')
    }
  }
}

export { Subscription as default }
