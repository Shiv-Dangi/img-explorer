import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as imageActions from '../../actions/imageActions';
import {Link} from 'react-router';
import ImageGrid from './ImageGrid';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  onSearchTermChange(event) {
    this.props.actions.searchTermUpdate(event.target.value);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.actions.fetchImages(this.props.search_term);
  }

  render () {
    return (
      <div>
        <div className="jumbotron">
          <h2> Search Image </h2>
          <p>This Project accept a serch term and Display images for that</p>
          <Link to="about" className="btn btn-primary btn-lg">LearnMore</Link>

          <form className="form-inline search-from">
            <div className="form-group">
              <label>Search:</label>
              <input type="text" className="form-control" value={this.props.search_term} onChange={this.onSearchTermChange}/>
            </div>
            <input type="submit" value="Submit" className="btn btn-default" onClick={this.handleOnSubmit} />
          </form>
        </div>
        <div>
          {this.props.images ? <ImageGrid images={this.props.images} /> : null}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  search_term: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    search_term: state.imageInfo.search_term,
    images: state.imageInfo.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
