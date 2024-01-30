import styled from 'styled-components';

export const Hoja = styled.article<{
	$bgColor?: string;
	$zIndex: number;
}>`
	top: 0;
	position: absolute;
	background-color: whitesmoke;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	cursor: pointer;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	-webkit-transform-origin: 0;
	-ms-transform-origin: 0;
	transform-origin: 0;
	-webkit-box-shadow: 1px 1px 12px #000;
	box-shadow: 1px 1px 12px #000;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;

	z-index: ${(props) => (props.$zIndex ? props.$zIndex : 2)};
`;
