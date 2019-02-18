import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	min-width: 135px;
	border: solid 1px #a6a6a6;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	.thumbnail {
		min-width: 400px;
		text-align: center;
		margin-bottom: 1rem;
		img {
			width: 100%;
		}
	}
	.details {
		display: flex;
		justify-content: space-between;
		min-width: 400px;
		.name {
			float: right;
		}
		.user-id {
			float: left;
		}
	}
`;

export const GhostLabel = styled.div`min-height: 28px;`;

export const UserCard = ({ id, avatar, first_name, last_name }) => (
	<CardWrapper>
		<div className="thumbnail">
			<img src={avatar} alt={`${first_name} ${last_name}`} />
		</div>
		<div className="details">
			<div className="user-id">Id: {id}</div>
			<div className="name">Name: {`${first_name} ${last_name}`}</div>
		</div>
	</CardWrapper>
);
