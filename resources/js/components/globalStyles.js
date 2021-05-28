import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --main-color: #00a8e6;
    --se-color: #EFFFFA;
  }
  html,body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    position: relative;
  }
 ::-webkit-scrollbar
{
	width: 12px;
  

}
::-webkit-scrollbar-track {
    background-color: rgba(100, 100, 100, .3);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb
{
  border: 3px solid transparent;
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #6c8bc7;
  background-clip: content-box;
}
`;
export default GlobalStyle;