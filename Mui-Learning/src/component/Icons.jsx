import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
function Icons() {
  return (
    <>
      <SendIcon />
      <br />
      <SendIcon color="error" />
      <br />
      <Button variant="contained" startIcon={<SendIcon />}>
        Contained
      </Button>
      <br /> <br />
      <Button variant="contained" endIcon={<SendIcon />}>
        Contained
      </Button>
    </>
  );
}
export default Icons;
