import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Job = ({ job }) => {
	const [detailsVisible, setDetailsVisible] = useState(false);

	return (
		<Card className="mb-3">
			<Card.Body>
				<div className="d-flex justify-content-between">
					<div>
						<Card.Title>
							{job.title} -{' '}
							<span className="text-muted font-weight-light">
								{job.company}
							</span>
						</Card.Title>
						<Card.Subtitle>
							<span className="text-muted mb-2">
								{new Date(job.created_at).toLocaleDateString()}
							</span>
						</Card.Subtitle>
						<Badge variant="secondary" className="mr-2">
							{job.type}
						</Badge>
						<Badge variant="secondary">{job.location}</Badge>
						<div style={{ wordBreak: 'break-all' }}>
							<ReactMarkdown
								source={job.how_to_apply}
								className="mt-2"
							/>
						</div>
					</div>
					<img
						src={job.company_logo}
						alt={job.company}
						className="d-none d-md-block"
						height="25"
					/>
				</div>
				<Card.Text>
					<Button
						variant="primary"
						onClick={() => setDetailsVisible(!detailsVisible)}
					>
						{detailsVisible ? 'Hide Details' : 'View Details'}
					</Button>
				</Card.Text>
				<Collapse in={detailsVisible}>
					<div className="mt-4">
						<ReactMarkdown source={job.description} />
					</div>
				</Collapse>
			</Card.Body>
		</Card>
	);
};

export default Job;
