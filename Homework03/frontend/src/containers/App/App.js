import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonDropdown,
  Collapse
} from 'reactstrap'
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  POSTS_QUERY,
  USERS_QUERY,
  USERS_POSTS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION
} from '../../graphql'
import Post from '../../components/Post/Post'
import Author from '../../components/Author/Author'
import classes from './App.module.css'
import AuthorPost from './AuthorPost'
let unsubscribe = null

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formTitle: '',
      formBody: '',
      authorId: '',
      authorName: '',
      dropdownOpen: false
    }
  }
  

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody } = this.state

    if (!formTitle || !formBody) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: this.state.authorId
      }
    })

    this.setState({
      formTitle: '',
      formBody: ''
    })
  }
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  changeAuthor = (id, name) => {
    this.setState({
      authorId: id,
      authorName: name
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          
          <Col xs="6" className={classes.form}>
            <Row className={classes.author}>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="primary">
                  Author
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Author name:</DropdownItem>
                    <Query query={USERS_QUERY}>
                    {({ loading, error, data, subscribeToMore }) => {
                      if (loading) return <p>Loading...</p>
                      console.log(error)
                      if (error) return <p>Error :(((</p>

                      const users = data.users.map((author, id) => (
                        <Author data={author} key={id} change={this.changeAuthor}/>
                      ))
                      return users
                    }}
                    </Query>
                </DropdownMenu>
              </ButtonDropdown>
            </Row>
            
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  
                  <Form onSubmit={this.handleFormSubmit}>
                    <Row className={classes.author}>
                      Author: {this.state.authorName}
                    </Row>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" disabled={!this.state.authorId} color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={USERS_POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                console.log(error)
                if (error) return <p>Error :(((</p>
                console.log(data)
                const authors = data.users.map(user => (
                  <AuthorPost data={user}/>
                ))
                //console.log(data)
                /*
                const posts = data.posts.map((post, id) => (
                  <Post data={post} key={id} />
                ))
                
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      }
                    }
                  })
                  
                return <div>{posts}</div>
                */
                return <div>{authors}</div>
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
