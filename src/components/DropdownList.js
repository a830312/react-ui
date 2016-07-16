import React from 'react'
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionsSelected = this.handleOptionsSelected.bind(this);
    this.state = {
      'selected': ''
    };
  }

  handleOptionsSelected(e, eventKey) {
    if (typeof this.props.onSelect === 'function') {
      let params = {};
      params[this.props.filterName] = eventKey;
      this.props.onSelect(params);
    }

    this.setState({
      'selected': e.target.innerHTML
    });
  }

  render() {
    let { selected } = this.state,
        { title, options, onSelect } = this.props;
    return (
      <div>
        <ButtonToolbar>
          <DropdownButton bsStyle="link" title={title} id={`dropdown-basic-${title}`}>
          {
            options.map((menu, index) => (
              <MenuItem eventKey={menu.value} key={index} onSelect={this.handleOptionsSelected}>{menu.name}</MenuItem>
            ))
          }
          </DropdownButton>
        </ButtonToolbar>
        { selected ? <h5 className="text-muted">{selected}</h5> : '' }
      </div>
    )
 
  }
}

DropdownList.propTypes = {
  options: React.PropTypes.array,
  filterName: React.PropTypes.string,
  title: React.PropTypes.string,
  onSelect: React.PropTypes.func
}

export default DropdownList