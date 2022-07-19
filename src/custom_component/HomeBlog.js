import React from "react";
import { Link } from 'react-router-dom';

export const HomeBlogTitle = () => {
    return (
        <div className="sec-title text-center">
			<div className="title">NEWS &amp; UPDATES</div>
			<h2>Welcome to Our Blog</h2>
			<div className="text"></div>
		</div>
    )
}


export const HomeBlog = (props) => {
    return ( 
		<div className="news-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
			<div className="inner-box wow fadeInLeft animated">
				<div className="image"> <img src={props.imgsrc} alt={props.EmpName} />
					<div className="overlay-box">
						<div className="overlay-inner">
							<div className="content">
							<Link to="" className="icon fa fa-unlink"></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="lower-content">
					<ul className="post-meta">
						<li><span className="icon fa fa-user"></span>{props.EmpDate}</li>
						<li><span className="icon fa fa-comment"></span>{props.EmpAuthor}</li>
					</ul>
					<h5><Link to="">{props.EmpName}</Link></h5> </div>
			</div>
		</div>
    )
}

