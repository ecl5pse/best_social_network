import React, {Component} from 'react';
import PropTypes from 'prop-types';

class  AbstractList  extends Component {
  constructor(props) {
    super(props);

  }




getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
}

  componentDidUpdate(prevProps, prevState,snapshot) {

  }



  render() {
    return (
        <div>

        </div>
    );
  }
}

AbstractList.propTypes = {};

export default AbstractList;