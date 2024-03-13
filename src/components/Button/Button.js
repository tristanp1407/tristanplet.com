import MuiButton from "@mui/material/Button";

const Button = (props) => {
  return (
    <MuiButton
      {...props}
      sx={{
        color: "#ECB365",
        borderColor: "#ECB365",
        "&:hover": {
          color: "#e0a55e",
          borderColor: "#e0a55e",
        },
      }}
    />
  );
};

export default Button;
