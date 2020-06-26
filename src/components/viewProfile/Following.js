import React from "react";
import "./ViewProfile.css";
class Following extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => {
          return (
            <div className="img_user_list users_list">
              <div>
                <img src={user.file} /> <br/>
                {user.name}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Following;
