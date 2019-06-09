import { gql } from 'apollo-boost'

export const POSTS_QUERY = gql`
  query Posts($query: String){
    posts(query: $query) {
      title
      body
      author {
        name
      }
      published
      like
    }
  }
`

export const USERS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`

export const USERS_POSTS_QUERY = gql`
  query {
    users {
      id
      name
      posts {
        title
        body
        author {
          name
        }
        published
        like
      }
    }
  }
`

