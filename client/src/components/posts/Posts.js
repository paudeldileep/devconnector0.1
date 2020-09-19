import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPosts } from "../../actions/post"
import LoadingScreen from "../layout/LoadingScreen"
import { Header, Segment } from "semantic-ui-react"
import PostItem from './PostItem'

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return loading ? <LoadingScreen/> : <Fragment>
      <Header as="h1" >Posts</Header>
      {/* postform todo */}

      <Segment>
          {posts.map(post=>(
              <PostItem key={post._id} post={post}/>
          ))}
      </Segment>
  </Fragment>
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPosts })(Posts)
