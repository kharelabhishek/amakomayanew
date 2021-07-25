import React from 'react';
import './Partners.css';
import Partnerscontent from './Partnerscontent';

export default function Partners() {
	return (
		<div className="container">
			<div className="row">
				<h2 className="title-h">Partners</h2>
				<section class="mt-4 section section-default">
					<div class="container">
						<div class="row">
							{Partnerscontent.map((item) => {
								return (
									<div class="col-sm-6 col-md-4 col-lg-3">
										<div class="square-holder">
											<img alt="" src={item.logo} width={item.width} />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
