import styled, { keyframes } from "styled-components";

// animation to slide in the home page from left
const slideInLeft = keyframes`
  from {
    position: fixed;
    -webkit-transform: translate3d(-200%, 0, 0);
    transform: translate3d(-200%, 0, 0);
    visibility: visible;
  }

  to {
    position: unset;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

// animation to slide out the home page to the left
const slideOutRight = keyframes`
  from {
    position: fixed;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    position: unset;
    visibility: hidden;
    -webkit-transform: translate3d(200%, 0, 0);
    transform: translate3d(200%, 0, 0);
  }
`;

const fadeIn = keyframes`
  from {
    position: fixed;
    opacity: 0;
  }

  to {
    position: unset;
    opacity: 1;
  }
`;

const Page = styled.div``;

// apply the correct animation based on the transition state class name.
export const PageElem = styled(Page)`
	&.page-appear {
		animation: ${fadeIn} 1s forwards;
	}
	&.page-enter {
		animation: ${slideInLeft} 1s forwards;
	}
	&.page-exit {
		animation: ${slideOutRight} 1s forwards;
	}
`;
