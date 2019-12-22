import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState();
  
  render() {
    return (
      <div>
        <form style={{ display: 'flex' }}>
          <input 
            type="text" 
            name="title"
            style={{ flex: '10', padding: '10px' }}
            placeholder="Add Todo..."
            value={this.state.title}
            obChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{flex: 1}}
          />
        </form>
      </div>
    )
  }
}

export default AddTodo