import React from "react";
import "./UserList.css";
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  deleteItem = (user) => {
    const users = this.state.users.filter((ex) => {
      return ex !== user;
    });
    this.setState({ users: users });
    localStorage.setItem("users", JSON.stringify(users));
  };

  render() {
    const list = this.props.users;
    return (
      <div className="list">
        <p>Browser Users</p>
        <hr class="solid"></hr>

        <div className="addPosts">
          <ul>
            {list.map((user) => {
              return (
                <li>
                  <a
                    className="userList"
                    onClick={() => this.props.onUserClick(user)}
                  >
                    <div className="img_user_list">
                      <img src={user.file} />
                    </div>
                    {user.email}
                    {user.name}
                    <div>
                      <button className="trash"
                        onClick={() => {
                          this.deleteItem(user);
                        }}
                      >
                        <i class="fa fa-trash "></i>
                      </button>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default UserList;
