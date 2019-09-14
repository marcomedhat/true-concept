import React, { Component } from 'react';
import './Help.css';
import uuid from 'uuid/v1'

class Help extends Component {
  state = {
    services: [
      { title: 'service 1', id: '1' },
      { title: 'service 2', id: '2' },
      { title: 'service 3', id: '3' }
    ],
    title: ''
  }

  setTitle = (txt) => {
    this.setState({ title: txt })
  }

  addService = (e) => {
    e.preventDefault();
    const newList = [...this.state.services, { title: this.state.title, id: uuid() }]
    this.setState({ services: newList, title: '' })
  }

  deleteService = (id) => {
    const filteredList = this.state.services.filter(service => service.id !== id)
    this.setState({ services: filteredList })
  }

  render() {
    return (
      <section className="help">
        <div className="container">
          <h1>We Help Through</h1>
          <form>
            <input
              type="text"
              placeholder="Service Title"
              value={this.state.title}
              onChange={(e) => this.setTitle(e.target.value)}
            />
            <button onClick={this.addService}>Add</button>
          </form>

          <div className="services">
            {
              this.state.services.map(service => (
                <div className="service-item">
                  <div className="service-details">
                    <h2>{service.title}</h2>
                    <span className="close" onClick={(e) => {
                      e.preventDefault()
                      return this.deleteService(service.id)
                    }}>X</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section >
    );
  }
}

export default Help;