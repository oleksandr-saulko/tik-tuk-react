import React from 'react';

function Header() {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <a href="#">TikTuk</a>
        </div>
        <div className="flex-fill">
          <div className="search_tikTok">
            <input type="text" className="search_tikTok_input form-control" placeholder="Search accounts" />
            <span className ="search_tikTok_icon">
            <i className ="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a href="#" className="btn btn-default">Upload</a>
          <div className="btn btn-danger">Log In</div>
          <div className="btn btn-default">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;