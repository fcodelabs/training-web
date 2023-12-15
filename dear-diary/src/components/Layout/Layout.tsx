import styled from "styled-components";

export const Background = styled.div`
      display: flex;
      width: 100%; 
      min-height: 100vh; 
      background-image: url("/background.png");
      background-size: cover;
      background-repeat: no-repeat;
      padding-bottom: 0;
`;


const Layout = () => {
  return (
    <Background/>
  );
};

export default Layout;




