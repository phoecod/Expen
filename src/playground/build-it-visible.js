class Toggle extends React.Component {
  constructor (props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: true,
      title: "This is title",
      subtitle: "this is subtitle",
      description: "This is description"
    }
  }
  toggleVisibility () {
    this.setState ((prevState) => {
      return {
        visibility : !prevState.visibility
      }
    })
  }
  render () {
    return (
    <div>
      <h1>{this.state.title}</h1>
      <h2>{this.state.subtitle}</h2>
      {this.state.visibility ? <p>{this.state.description}</p> : undefined }
      
      <button onClick={this.toggleVisibility} > {this.state.visibility ? "Hide" : "Show" }</button>
    </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));