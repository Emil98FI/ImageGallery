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
    event.preventDefault()
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group controlId={this.props.controlId}>
          <Form.Control
            name={this.props.searchValue}
            value={this.props.searchValue}
            onChange={this.props.onChange}
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
