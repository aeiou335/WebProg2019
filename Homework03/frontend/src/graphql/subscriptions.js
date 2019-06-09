import { gql } from 'apollo-boost'

export const POSTS_SUBSCRIPTION = gql`
  subscription Post($id: String){
    post (id: $id){
      mutation
      data {
        title
        body
        author {
          name
        }
        published
      }
    }
  }
`
