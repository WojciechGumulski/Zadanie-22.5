import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style


class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel magna augue. Sed blandit rutrum nunc. Mauris quis vestibulum sem. Vivamus dapibus consequat lacus, quis venenatis mi. Duis quis aliquam arcu, eu efficitur leo. Pellentesque commodo augue non orci scelerisque gravida. Suspendisse nec lacinia purus. Vestibulum cursus ligula ut dolor laoreet, ac hendrerit massa finibus. Cras id ipsum venenatis, laoreet purus et, facilisis lectus. In feugiat pharetra pulvinar.</p>
        <p>Morbi iaculis vulputate nisi eu suscipit. Vivamus consequat tincidunt mauris, vel mattis lacus mattis nec. Maecenas tincidunt fringilla sem, non vulputate dui commodo tempor. Quisque porta porttitor tortor, sit amet faucibus sem lacinia quis. Cras sed laoreet erat, in ullamcorper ante. Curabitur lacinia magna tristique, fringilla turpis nec, eleifend velit. Fusce tellus diam, hendrerit sit amet diam nec, auctor rhoncus sapien.</p>
        <p>Fusce a laoreet nisi, quis dictum nisi. Cras maximus finibus ex, ac placerat magna dictum ut. Proin hendrerit, arcu sit amet lacinia faucibus, orci ipsum tincidunt velit, et porttitor nunc elit non leo. Phasellus sollicitudin ullamcorper dapibus. Nam mollis nibh non dolor aliquet aliquam. Donec ac risus nibh. Nulla sit amet sem lobortis, congue magna sit amet, hendrerit libero. Pellentesque iaculis elit a purus cursus, nec luctus est venenatis. Morbi at tempus nisi. Nam sit amet felis in nunc convallis placerat eget eu neque.</p>
        <ul>
        	<li>Quisque sed egestas dolor</li>
        	<li>Quisque sed egestas dolor</li>
        	<li>Quisque sed egestas dolor</li>
        	<li>Quisque sed egestas dolor</li>
        	<li>Quisque sed egestas dolor</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
