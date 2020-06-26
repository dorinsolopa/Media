import React from "react";
import "./Posts.css";
import { Link } from "react-router-dom";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
    };
  }

  setPost = (event) => {
    this.setState({
      post: event.target.value,
    });
  };

  savePost = (userId) => {
    const localData = localStorage.getItem("posts"); // Salvam datele in LocalStorage
    const localPosts = JSON.parse(localData) || []; //parsam datele
    const newPost = {
      id: Date.now(),
      userId: userId,
      post: this.state.post,
    };
    localPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(localPosts));
    setTimeout(() => {
      //este folosit pentru incarcarea mai rapida  (300mls)  async/sync
      this.props.postsUpdated(); // pt a comunica cu parintele componentului postsUpdated
    }, 300);
  };

  render() {
    const { user = {} } = this.props;
    return (
      <div className="containerPost">
        <div className="cardHeader">
          <div className="contact-chips ">
            <img src={user.file} /> 
            <Link className="user_name" to={`/profile/${user.id}`}>  
              {user.name} 
            </Link>
          </div>
        </div>
        <div className="card_body">
          <div className="form-group">
            <textarea
              id="message"
              name="post"
              className="textarea"
              placeholder="What's on your mind"
              onChange={(event) => this.setPost(event)}
            ></textarea>
          </div>
        </div>
        <div className="footer">
          <div className="bt_hover">
            <button className="color" onClick={() => this.savePost(user.id)}>
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatePost;

// Dynamic Route Matching (user.id)
