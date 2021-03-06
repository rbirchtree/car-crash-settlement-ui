import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/meqrkodk"
        method="POST"
      >
        <div>
          <div>
            <div >
              <label>Email:</label>
            </div>
            <div>
              <input aria-required="true" type="email" name="email" />
            </div>
          </div>
        </div>
        <div>
        <div>
            <div >
              <label>Message:</label>
            </div>
            <div>
              <textarea aria-required="true" type="text" name="message" />
            </div>
        </div>
      </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-primary btnsub">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}