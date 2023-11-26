import React from "react";

class HigherOrderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <h1>Display all items</h1>
          <div className="display-box">
            <ul>{this.renderItems()}</ul>
          </div>

          {/* Progression 3: List All Data Based on UserType */}
          <h1>List all Developers</h1>
          <div className="display-box">
            <ul>
              {this.state.userData
                .filter((item) => item.user_type === "Developer")
                .map((item) => (
                  <li className="list-elements" key={item.id}>
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Progression 4: Filter All Data Starting with the Letter J */}
          <h1>List all names starting with the letter J</h1>
          <div className="display-box">
            <ul>
              {this.state.userData
                .filter((item) => item.name.startsWith("J"))
                .map((item) => (
                  <li className="list-elements" key={item.id}>
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Progression 5: Filter Data Based on Age */}
          <h1>List all users with age between 28 and 50</h1>
          <div className="display-box">
            <ul>
              {this.state.userData
                .filter((item) => item.age > 28 && item.age <= 50)
                .map((item) => (
                  <li className="list-elements" key={item.id}>
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Progression 6: Find the Total Experience of the Designers */}
          <h1>Total years of experience of the designers</h1>
          <div className="display-box">
            <p>
              Total Experience:{" "}
              {this.state.userData
                .filter((item) => item.user_type === "Designer")
                .map((item) => item.years)
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default HigherOrderComponent;
