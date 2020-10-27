import React from "react"

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.url} />
      </div>
    )
  }
}

export default Image
