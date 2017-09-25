import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { push } from "react-router-redux";
import {bindActionCreators} from 'redux';
import { Pagination } from "react-bootstrap";
import * as imageActions from '../../actions/imageActions';
import {Link} from 'react-router';
import ImageView from './ImageView';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  onSearchTermChange(event) {
    this.props.actions.searchTermUpdate(event.target.value);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.actions.fetchImages(this.props.search_term);
  }

  // change the user lists' current page
  changePage(page) {
    this.props.pageChange(page);
  }

  render () {
    // pagination
    const images = this.props.images;
    const page = this.props.page;
    const per_page = 6;
    const pages = Math.ceil(images.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;
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
          {this.props.images ?
            <div>
              {this.props.images.map((image, index) =>
                {
                  if (index >= start_offset && start_count < per_page) {
                    start_count++;
                    return (
                      <ImageView key={image.id} image={image} />
                    );
                  }
                }
              )}
            </div>
            : null}
        </div>
        <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage} />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  search_term: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  let search_term = state.imageInfo.search_term;
  let images = (state.imageInfo.images && (state.imageInfo.images != "undefined")) ? state.imageInfo.images : [];
  return {
    search_term: search_term,
    images: images,
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch),
    pageChange: (page) => dispatch(push('/?page=' + page))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
