import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogData from "../custom_component/BlogData";
function BlogDetails() {

    const [data, setData] = useState({
        fullname:"",
        website:"",
        email:"",
        message:"",
    });
    const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
        return {
            ...preVal,
            [name]: value,
        }
    });
    };  
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Message is: ${data.message}. My Name is : ${data.fullname}. My Emal Address is : ${data.email}. My Website is : ${data.website}`);
    };

    const { id } = useParams();
    return(
        <div className="blogDetails pb-215 pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                            {
                                BlogData.filter(allPost => allPost.id === id).map((allPost, ind) => (
                                    <div className="blogDetailsInner" key={ind}>
                                        <div className="postPageImage">
                                            <img src={allPost.PostImage} alt={allPost.PostTitle} />    
                                        </div>
                                        <div className="postTitleWrapper">
                                            <span><i className="ti-calendar fa fa-calendar"></i>{allPost.PostDate}</span>
                                            <span><i className="ti-user"><img src={allPost.PostAuthorImage} alt={allPost.PostAuthor} /></i>{allPost.PostAuthor}</span>
                                        </div>
                                        <div className="postContentMainOuter">
                                            <div className="lftPostContent">
                                            <div className="postPageTitle"><h1>{allPost.PostTitle}</h1></div>
                                            <div className="postContentMain pb-50">{allPost.PostDetails.map((paragraph, indx) => (<p key={indx}>{paragraph}</p>))}</div>

                                            <div className="mkdf-blog-single-navigation">
                                                <Link className="mkdf-blog-single-prev" to=""> 
                                                    <span className="mkdf-blog-single-nav-mark"><i className="cmfa cmfa-arrow-left"></i></span>
                                                    <span className="mkdf-blog-single-nav-label">previous post</span>
                                                    <div className="mkdf-blog-single-nav-thumbnail">
                                                        <img width="75" height="50" src={allPost.PostImage} className="wanderland_post_thumb" alt="s" loading="lazy" />
                                                    </div>
                                                </Link>
                                                <Link className="mkdf-blog-single-next" to="">
                                                    <span className="mkdf-blog-single-nav-mark"><i className="cmfa cmfa-arrow-right"></i></span> 
                                                    <span className="mkdf-blog-single-nav-label">next post</span>
                                                    <div className="mkdf-blog-single-nav-thumbnail">
                                                        <img width="75" height="50" src={allPost.PostImage} className="wanderland_post_thumb" alt="s" loading="lazy"/>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="postAuthorWrapper pt-40">
                                                <div className="postAuthorInner">
                                                    <div className="postAuthorImage">
                                                        <img src={allPost.PostAuthorImage} alt={allPost.PostAuthor} />   
                                                    </div>
                                                    <div className="AuthorInnerDetails">
                                                        <h3>{allPost.PostAuthor}</h3>
                                                        <p>{allPost.PostAuthorDetails}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="recentPost">
                                                <div className="recentPostTitle">Recent Post</div>
                                                <div className="row recentPostContainer blogPostItemWraper">
                                                    {
                                                      BlogData.slice(0, 3).map((recent, ind) => {
                                                        return (
                                                        <div className="blogPostItem" key={ind}>
                                                            <div className="blog_grid_style">
                                                                <div className="blog_grid_thumb">
                                                                <Link to={`/BlogDetails/${recent.id}`}><img src={recent.PostImage} className="img-fluid" alt={recent.PostTitle} loading="lazy" height="auto" width="auto"/></Link>
                                                                </div>
                                                                <div className="blog_grid_captio">
                                                                    <div className="blogs_grid_author">
                                                                        <span><i className="ti-calendar fa fa-calendar"></i>{recent.PostDate}</span>
                                                                        <span><i className="ti-user fa fa-user"></i>{recent.PostAuthor}</span>
                                                                    </div>
                                                                    <h4><Link to={`/BlogDetails/${recent.id}`}>{recent.PostTitle}</Link></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      )})
                                                    }
                                                </div>
                                            </div>

                                            <div className="postComment pt-60">
                                                <div className="commentTitle"><h2>Post a Comment</h2></div>
                                                <form onSubmit={formSubmit}>
                                                    <div className="form-row">
                                                        <div className="form-itm full-w">
                                                            <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} placeholder="Type here message"></textarea>
                                                        </div>
                                                        <div className="form-itm">
                                                            <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Name" />
                                                        </div>
                                                        <div className="form-itm">
                                                            <input type="text" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="Email" />
                                                        </div>
                                                        <div className="form-itm">
                                                            <input type="text" className="form-control" name="website" value={data.website} onChange={InputEvent} placeholder="Website" />
                                                        </div>
                                                    </div>
                                                    <div className="form-btn-itm">
                                                        <button type="submit" className="cm-btn" name="button"><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="blog-mainRightInner">
                                            <div className="blogRightItem popularpost">
                                                <div className="sidebarTitle">Popular Posts</div>
                                                <ul className="sidebarReapetor">
                                                    {
                                                        BlogData.filter((post) => post.popularPost === true).slice(0, 5).map((val, ind) => {
                                                            return (
                                                                <li key={ind}>
                                                                    <span>
                                                                        <h5><Link to={`/BlogDetails/${val.id}`}>{val.PostTitle.substring(0, 35)}....</Link></h5>
                                                                        <p>{val.PostDetails[0].substring(0, 40)}....</p>
                                                                    </span>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogDetails;



