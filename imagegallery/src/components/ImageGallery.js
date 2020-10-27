import React from "react"
import Image from "./Image"
import SearchBar from "./SearchBar"

class ImageGallery extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      Images: [],
      picture: "",
    }
    this.handleFeth = this.handleFeth.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  componentDidMount() {
    this.handleFeth()
  }

  handleFeth() {
    fetch("https://api.pexels.com/v1/curated?per_page=20", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          Images: result.photos,
        })
      })
  }

  onSearchSubmit(input) {
    fetch(`https://api.pexels.com/v1/search?query=${input}&per_page=1`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result)
      })
  }

  render() {
    const images = this.state.Images.map((pic) => {
      return <Image src={pic.src.large} key={pic.id} alt={pic.url} />
    })

    return (
      <div className="ImageGallery">
        <SearchBar onSubmit={this.onSearchSubmit()} />
        <br />
        <br />
        {images}
        <img src={this.state.picture} alt="Logo"></img>
      </div>
    )
  }
}

export default ImageGallery
