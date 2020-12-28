import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
	query {
		getAllPosts {
			id
			position
			date
			location
			labels {
				id
				value
			}
			company
			link
		}
	}
`;

export default GET_ALL_POSTS;
