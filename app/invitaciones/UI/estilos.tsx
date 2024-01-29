import styled from 'styled-components';

export const ContendorInvitaciones = styled.div`
	display: flex;
	width: 48vh;
	transition: 0.5s;
	border: 2px solid white;
	margin: 5px;
	& > a {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		align-items: center;
		& > img {
			width: 100%;
			height: auto;
			margin-bottom: 3vh;
			transition: 0.5s;
		}
	}

	&:hover {
		filter: grayscale(1);
		display: flex;
		width: 48vh;
		& > a > img {
			border-radius: 50%;
		}
	}
`;
