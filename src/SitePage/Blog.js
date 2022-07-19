import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from '../custom_component/Banner';
import BlogData from "../custom_component/BlogData";
import { TitleWithContent } from "../custom_component/TitleWithContent";
import ReactPaginate from 'react-paginate';
function Blog() {
    const [allPost] = useState(BlogData.slice(0,100000));
    const [pageNumber, setPageNumber] = useState(0)
    const userPerPage = 10;
    const pagesVisited = pageNumber * userPerPage
    const displayUsers = allPost.slice(pagesVisited, pagesVisited + userPerPage).map((allPost, ind) => {
        return (
            <div className="blogPostItem" key={ind}>
                <div className="blog_grid_style">
                    <div className="blog_grid_thumb">
                    <Link to={`/BlogDetails/${allPost.id}`}><img src={allPost.PostImage} className="img-fluid" alt={allPost.PostTitle} loading="lazy" height="auto" width="auto"/></Link>
                    </div>
                    <div className="blog_grid_captio">
                        <div className="blogs_grid_author">
                            <span><i className="ti-calendar fa fa-calendar"></i>{allPost.PostDate}</span>
                            <span><i className="ti-user fa fa-user"></i>{allPost.PostAuthor}</span>
                        </div>
                        <h4><Link to={`/BlogDetails/${allPost.id}`}>{allPost.PostTitle}</Link></h4>
                    </div>
                </div>
            </div>
        )
    });
    const pageCount = Math.ceil(allPost.length / userPerPage);
    const changePage = ({selected}) => {
    setPageNumber(selected);
    };
    return(
        <div className="blog-wrapper pb-115">
            <Banner title="Blog" visit="/" btnName="Home" PageName="Blog" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="blog-wrapper-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="blog-top-sd">
                                <TitleWithContent title={<><h2>Blog <span>Posts</span></h2></>} content={<><p></p></>} />
                            </div>
                        </div>
                    </div>
                    <div className="row blogPostItemWraper">
                        {displayUsers}
                    </div>
                    <div className="row pt-30 pb-90">
                        <div className="col-sm-12">
                            <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationButtons"}
                            previousLinkClassName={"previousButton"}
                            nextLinkClassName={"nextButton"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;