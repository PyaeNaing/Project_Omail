import React, { Component } from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MailPreviewList from "./mailPreviewList";
import { importEmails } from "./redux/action";
import Modal from "./modal";
import axios from "axios";

class Message extends Component {
  render() {
    return <div className="message">{this.props.content}</div>;
  }
}

class Mail extends Component {



  getInbox = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        user: "b",
        Show: "Inbox"
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.importEmails(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  getSentmail = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        user: "b",
        Show: "Sent"
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.importEmails(res.data);
      })
      .catch(e => {
        console.log(e);
      });

  };

  getTrash = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        user: "b",
        Show: "Trash"
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.importEmails(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (

      <div className="App">
        {this.getInbox()}
        <header className="App-header">
          <h1 className="red ui header">
            <i className="envelope open outline icon" />O-mail
          </h1>
          ,
          <div className="sidenav">
            <div className="fluid ui large vertical buttons">
              <button href="Sent" className="fluid ui button">
              
                <i className="paper plane icon" />Compose
              </button>
              <button className="ui primary button" onClick={this.getInbox}>
                <i className="envelope icon" />Inbox
              </button>

              <button className="fluid ui button" onClick={this.getSentmail}>
                <i className="inbox icon" />Sent Mail
              </button>

              <button href="Trash" className="fluid ui button" onClick={this.getTrash}>
                <i className="trash icon" />Trash
              </button>
            </div>
          </div>
          <div className="main">
            <div className="search-container">
              <div className="fluid ui action input">
                <input type="text" placeholder="Search..." />
                <button className="ui button">
                  <i className="search icon" />Search
                </button>
              </div>
            </div>
            <div className="rows">
              <table
                id="table"
                className="ui striped compact selectable celled table"
              >
                <thead>
                  <tr>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <MailPreviewList />
              </table>
              {this.props.currentEmail && (
                <Modal>
                  <table className="ui compact table">
                    <tr>
                      <td>From :</td>
                      <td>{this.props.currentEmail.Sender}</td>
                      <td>Subject:</td>
                      <td>{this.props.currentEmail.Subject}</td>
                    </tr>
                    <tr>
                      <td>{this.props.currentEmail.MailBody}</td>
                    </tr>
                  </table>
                </Modal>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentEmail: state.mailEditReducer.currentEmail
  };
}

const mapDispatchToProps = { importEmails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mail);
