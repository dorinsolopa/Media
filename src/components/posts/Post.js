import React from "react";
import "./Posts.css";

class Post extends React.Component {
  render() {
    const { user = {}, posts, filter } = this.props;
    const filterPosts = filter
      ? posts.filter((post) => {
          //filtram  datele
          return post.userId === user.id;
        })
      : posts;
    return (
      <div>
        {filterPosts.map((item) => {
          return (
            <div className="card">
              <div className="card_head">
                <div className="contact-chips ">
                  <div className="img_post">
                    <img src={user.file} />
                    {user.name}
                  </div>
                </div>
                <div>
                  <button
                    className="button"
                    onClick={() => this.props.onDeletePost(item)}
                  >
                    <i className="fa fa-trash "></i>
                  </button>
                </div>
              </div>

              <div className="card_body">
                {item.post}
                <div>
                  <i
                    className="fas fa-heart"
                    style={{ color: "red", paddingRight: "10px" }}
                  ></i>

                  <i className="fa fa-comment" style={{ color: "blue" }}></i>
                </div>
              </div>
              <div className="card_footer">
                <div className="contact-chips ">
                  <div className="img_post">
                    {user.file && <img src={user.file} />}
                  </div>
                </div>
                <form>
                  <input className="border" placeholder="Add comment" />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Post;

//Component dumb -- prost
//Toata logica lui se face in Parinte (Dashboard)
//onDeletePost --->Dashboard
