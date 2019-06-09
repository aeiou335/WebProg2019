import React from 'react'
import {Collapse, Row, Col, Button} from 'reactstrap'

import Post from '../../components/Post/Post'
import classes from './App.module.css'
import { Query } from 'react-apollo';
import {POSTS_QUERY, POSTS_SUBSCRIPTION} from '../../graphql'
//let unsubscribe = null
class AuthorPost extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
        this.state = { 
            collapse: false, 
            unsubscribe: null,
            count: 0
        };
    }
    toggle = () => {
        this.setState({ 
            collapse: !this.state.collapse 
        });
    }
    postCount = (count) => {
        this.setState({
            count: count
        })
    }
    subscribe = () => {
        this.setState({
            unsubscribe: true
        })
    }
    render() {
        //const posts = this.props.data.posts.map((post, id) => (
        //    <Post data={post} key={id} />
        //))
        const posts = (id) => (
            <Query query={POSTS_QUERY} variables={{query:id}}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <p>Loading...</p>
                    console.log(error)
                    if (error) return <p>Error :(((</p>
                    const posts = data.posts.map((post, id) => (
                        <Post data={post} key={id} />
                        ))
                    
                    if (!this.state.unsubscribe){
                        this.subscribe()
                        this.postCount(data.posts.length)
                        subscribeToMore({
                            document: POSTS_SUBSCRIPTION,
                            variables: {id: id},
                            updateQuery: (prev, { subscriptionData }) => {
                                if (!subscriptionData.data) return prev
                                const newPost = subscriptionData.data.post.data
                                //console.log(prev)
                                this.setState(state => ({
                                    count: state.count+1
                                }))
                                return {
                                    ...prev,
                                    posts: [newPost, ...prev.posts]
                                }
                            }
                        })
                    }
                    
                        
                    return <div>{posts}</div>
                }}
            </Query>
        )
        return (
            <Row className={classes.authorPosts}>
                <Col>
                    <Button className={classes.authorBtn} color="primary" onClick={this.toggle}>{this.props.data.name}</Button>           
                </Col>
                <Col>
                    Total Posts by {this.props.data.name}: {this.state.count}
                </Col>
                <Collapse isOpen={this.state.collapse}>
                    {posts(this.props.data.id)}
                </Collapse>
                
            </Row>
        )
    }
}

export default AuthorPost