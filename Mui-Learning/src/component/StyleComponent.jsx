import { Button, Container, styled } from "@mui/material";

// const StyleButton = styled(Button)({
//   backgroundColor: "pink",
//   color: "yellow",
//   "&:hover": { backgroundColor: "yellow", color: "pink" },
// });

// function StyleComponent() {
//   return <>
//   <Container >
//     <StyleButton variant="contained">My Button</StyleButton>
//   </Container>
//   </>;
// }
// export default StyleComponent;

//using theme inside the style

const StyleButton = styled(Button)(({theme})=>({
  backgroundColor: "pink",
  color: theme.palette.primary.main,
  "&:hover": { backgroundColor: "yellow", color: "pink" },
}))
function StyleComponent() {
  return <>
  <Container >
    <StyleButton variant="contained">My Button</StyleButton>
  </Container>
  </>;
}
export default StyleComponent;

