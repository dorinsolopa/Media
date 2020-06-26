import React from "react";
import "./CreateProfil.css";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: "",
      email: "",
      about: "",
    };
  }

  uploadFile = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    this.setState({ file: file });
    console.log("file-->", file);
  };

  upload(event) {
    event.preventDefault();
    console.log("file-->", this.state.file);
  }

  updateState = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  saveData = () => {
    const localData = localStorage.getItem("users"); // Salvam datele in LocalStorage
    const users = JSON.parse(localData) || []; //parsam datele
    users.push({
      //adaugam  keyile
      name: this.state.name,
      about: this.state.about,
      email: this.state.email,
      id: Date.now(), // returnarea unui ID
      file: this.state.file,
    });
    localStorage.setItem("users", JSON.stringify(users));
    console.log("users-->", users);
    this.props.history.push("/"); // router
  };

  render() {
    console.log("props-->", this.props);
    return (
      <div className="container">
        <div className="body-card">
          <button className="button-radius">
            <i className="fa fa-pencil-alt"></i>
          </button>
          <h3>Edit Profile</h3>
          <div className="img">
            <img src={require("../../assets/img_avatar.png")} />
          </div>
          <div className="upload">
            <form>
              <div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={this.uploadFile}
                  ref={(fileInput) => (this.fileInput = fileInput)} // facem referinta
                />
              </div>

              <button
                type="button"
                className="button-upload"
                onClick={() => {
                  this.fileInput.click();
                  console.log("fileInput-->", this.fileInput); // adaugarea unui fisier
                }}
              >
                UPLOAD IMAGINE 
                <i className="fa fa-upload" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <form className="form">
          <input
            className="outline"
            type="text"
            placeholder="Name*"
            onChange={(event) => {
              this.updateState("name", event); // updatarea Numelui  updateState // event -->event.target.value
            }}
          />
          <br />
          <input
            className="outline"
            type="text"
            placeholder="About"
            onChange={(event) => {
              this.updateState("about", event); //updatarea About
            }}
          />
          <br />
          <input
            className="outline"
            type="text"
            placeholder="Email"
            onChange={(event) => {
              this.updateState("email", event); // updatarea Email
            }}
          />
          <br />
        </form>
        <div className="center">
          <button className="save" onClick={this.saveData}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default CreateProfile;
