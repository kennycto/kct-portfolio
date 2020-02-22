import styled, { keyframes } from "styled-components";

// animation to slide in the home page from left
const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-200%, 0, 0);
    transform: translate3d(-200%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

// animation to slide out the home page to the left
const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(200%, 0, 0);
    transform: translate3d(200%, 0, 0);
  }
`;

const Page = styled.div`
	position: fixed;
`;

// apply the correct animation based on the transition state class name.
export const PageElem = styled(Page)`
	&.page-appear {
		animation: ${slideInLeft} 1s forwards;
	}
	&.page-enter {
		animation: ${slideInLeft} 1s forwards;
	}
	&.page-exit {
		animation: ${slideOutRight} 1s forwards;
	}
`;
