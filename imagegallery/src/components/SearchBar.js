import React, { Component } from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchValue: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    console.log(this.state.searchValue)

    return (
      <Form onSubmit={this.props.onSearchSubmit}>
        <Form.Group controlId="Search">
          <Form.Control
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    )
  }
}

export default SearchBar
