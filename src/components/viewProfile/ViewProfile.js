import React from "react";
import "./ViewProfile.css";
import { Link } from "react-router-dom";
import Post from "../posts/Post";
import Following from "./Following";
class ViewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      curentUser: {},
      posts: [],
      activeTab: "",
    };
    console.log("props--->", props);
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users"));
    const userId = parseInt(this.props.match.params.userId); //standart router
    const currentUser = users.find((user) => {
      return user.id === userId;
    });
    this.setState({
      curentUser: currentUser,
      users: users,
    });
    this.addFollowing();
  }

  deleteUser = (user) => {
    const users = this.state.users.filter((item) => {
      return item !== user;
    });
    this.setState({ users: users, curentUser: {} });
    localStorage.setItem("users", JSON.stringify(users));
  };

  addFollowing() {
    const following = JSON.parse(localStorage.getItem("posts"));
    this.setState({ posts: following });
    console.log("following-->", following);
  }

  render() {
    const { user = {} } = this.state;

    return (
      <div className="container">
        <h1 className="text">Profile</h1>
        <div className="data">
          <div className="contact-chips">
         <img className="pad" src={user.file} />
          </div>
          <div>
            <p>{user.name}</p>
            <a>{user.email}</a>
          </div>
          <div className="column">
            <Link to="/create-profile">
              <button
                style={{
                  border: "none",
                  outline: "0",
                  backgroundColor: "white",
                  paddingBottom:"15px"
                }}
              >
                <i
                  className="fa fa-pencil-alt"
                  aria-hidden="true"
                  style={{ color: "#17b37f", fontSize: "18px" }}
                ></i>
              </button>
            </Link>
            <button
              style={{ border: "none", outline: "0", backgroundColor: "white" }}
              onClick={() => {
                this.deleteUser(user);
              }}
            >
              <i
                className="fa fa-trash"
                aria-hidden="true"
                style={{
                  color: "red",
                  fontSize: "18px",
                }}
              ></i>
            </button>
          </div>
        </div>
        <hr className="solid" />
        <div className="card-header">
          <div style={{ marginBottom: "25px" }}> Join Data</div>
          <div className="block">
            <button
              className="button"
              onClick={() => this.setState({ activeTab: "post" })}
            >
              Posts
            </button>
            <button
              className="button"
              onClick={() => this.setState({ activeTab: "following" })}
            >
              Following
            </button>
            <button className="button">Follower</button>
          </div>
          <div>
            {this.state.activeTab === "post" && (
              <Post
                posts={this.state.posts}
                user={this.state.curentUser}
                filter={true}
              />
            )}
            {this.state.activeTab === "following" && (
              <Following users={this.state.users} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ViewProfile;
