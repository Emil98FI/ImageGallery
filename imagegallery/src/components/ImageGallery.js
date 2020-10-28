import React from "react"
import Image from "./Image"
import SearchBar from "./SearchBar"

class ImageGallery extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      Images: [],
      SearchImages: [],
      picture: "",
      input: "",
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
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

  onSearchSubmit(event, input) {
    event.preventDefault()

    input = this.state.input

    fetch(`https://api.pexels.com/v1/search?query=${input}`, {
      method: "GET",
      params: { query: input },
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
        console.log(result)
      })
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      input: event.target.value,
    })
    console.log(this.state.input)
  }

  render() {
    const images = this.state.Images.map((pic) => {
      return <Image src={pic.src.large} key={pic.id} alt={pic.url} />
    })
    return (
      <div className="ImageGallery">
        <SearchBar
          onSubmit={this.onSearchSubmit}
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Search"
        />
        <br />
        <br />
        {images}
        <img src={this.state.picture} alt=""></img>
      </div>
    )
  }
}

export default ImageGallery
