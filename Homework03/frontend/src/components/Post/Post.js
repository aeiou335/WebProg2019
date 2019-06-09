import React from 'react'

import { Card, CardHeader, CardFooter, CardBody, Button} from 'reactstrap'

const Post = ({
  data: {
    title,
    body,
    author: { name },
    published,
    like
  }
}) => {
    return (<Card style={{ margin: '30px auto', width: '400px' }}>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        {body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}
      </CardBody>
      <CardFooter>
        {`${name} - Likes: ${like}`}
        <Button color='primary' style={{float: 'right',paddingTop:'2px'}}>Like</Button>
      </CardFooter>
    </Card>);
  }

export default Post
