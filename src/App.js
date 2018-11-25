import React,{Component} from 'react'





class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10")
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results
        })
      )
  }

  render() {
    return (
      <div className="App">
        {this.state.data
          ? this.state.data.map
            ? this.state.data.map(user => (
              <div>
                <img src={user.picture.medium} alt={""} />
                <div> {user.name.first + " " + user.name.last}</div>
                <a href={user.email}> {user.email}</a>
                <hr />
              </div>
            ))
            : "Ups! It is not your day"
          : "Be patient..."}

      </div>
    )
  }
}

export default App;
