import React from "react"
import theaxios from "./apis/theaxios";
class App extends React.Component {
  state = {
    name: ""
  }

  componentDidMount() {
    
    const fetchData = async () => {
      // try {
        const response = await theaxios.get("/first");
        console.log(response.data);
        this.setState({ name: response.data.name })
      // } catch (err) {
      //   console.log("catch error");
      // }
    };

    fetchData();

    // fetch("http://localhost:4050/first")
    //   .then(res => { 
    //     console.log('Response:', res)
    //   return res.json();})
    //   .then(data => {
    //     console.log('data:', data)
    //     this.setState({ name: data.name })})

    //   console.log(this.state.name);
  }

  render() {
    return (
      
      <h1>Hello {this.state.name}!</h1>
    )
  }
}

export default App

