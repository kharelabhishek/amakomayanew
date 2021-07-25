import React from 'react';
import './Impact.css';	
import Impactcontent from './Impactcontent';

export default function Impact() {
	return (
		<div className="container">
			<div className="row mb-4">
				<h2 className="title-h">Impact</h2>
				<p className="mt-4">
					The amakomaya evolved in 2012 April with a commitment of providing an advanced and reliable source
					of information to rural pregnant women. During its initial phase, the team members visited several
					rural areas and tested the process of providing essential pregnancy and new born related information
					via internet in video, audio and text formats. However, to increase the outreach of the information
					to more numbers of rural populace, the amakomaya developed a mobile version of the web application.
					So, since 2013 october, the amakomaya have started its campaign to provide essential information to
					rural pregnant women and their families via Mobile Device. Currently, the mobile version of
					amakomaya application is being piloted in 4 VDCs of Nepal. The amakomaya team has been collaborating
					with urban hospital doctors, rural health workers, Female Community Health Volunteers (FCHVs), ICT
					experts, computer programmers and rural pregnant women to make the initiative successful.
				</p>

				{Impactcontent.map((item) => {
					return (
						<div key={item.id} className="col-lg-4 col-md-4 col-sm-4 mb-4">
							<div className="mt-5 card">
								{/* <img src={window.location.origin + `/Assets/image/slider/${item.image}`}  alt=""/> */}
								{/* <img src={} className="card-img-top img-fluid" alt="..." />  */}
								<img style={{height: `${item.height}`}} src={item.image} className="card-img-top img-fluid" alt="..." />
								<div className="card-body news-stories-heading">
									<h5 className="card-title">{item.title}</h5>
									<p className="card-text">{item.description}</p>
									<a className="more" href="/#">
										Read More
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
