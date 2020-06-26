import React from "react";
import UserList from "./user-list/UserList";
import "../components/Dashboard.css";
import CreatePost from "./posts/CreatePost";
import Post from "./posts/Post";
class Dashboard extends React.Component {
  //Dashboard is parent
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
      curentUser: {},
    };
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users"));
    this.setState({ users: users });
    this.getPosts();
  }

  getPosts() {
    const posts = JSON.parse(localStorage.getItem("posts"));
    this.setState({ posts: posts });
    console.log("posts--->", posts);
  }

  deletePost = (post) => {
    const posts = this.state.posts.filter((item) => {
      return item !== post;
    });
    this.setState({ posts: posts, curentUser: {} });
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  render() {
    return (
      <div>
        <div className="flex1">
          <CreatePost //child
            user={this.state.curentUser}
            postsUpdated={() => {
              this.getPosts();
            }}
          />

          <UserList //child
            users={this.state.users}
            onUserClick={(user) => {
              console.log("user-->", user);
              this.setState({ curentUser: user });
            }}
          />
        </div>
        <div>
          <Post //child
          filter={false}
            posts={this.state.posts}
            user={this.state.curentUser}
            onDeletePost={(event) => {
              this.deletePost(event);
            }}
          />
        </div>
      </div>
    );
  }
}
export default Dashboard;
