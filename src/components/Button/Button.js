import MuiButton from "@mui/material/Button";

const Button = (props) => {
  const { variant } = props; // Destructure to access the variant prop

  // Define styles conditionally based on the variant
  const buttonStyles = {
    ...(variant === "outlined" && {
      color: "#ECB365",
      borderColor: "#ECB365",
      "&:hover": {
        color: "#e0a55e",
        borderColor: "#e0a55e",
      },
    }),
    ...(variant === "contained" && {
      backgroundColor: "#ECB365",
      color: "#041C32",
      "&:hover": {
        backgroundColor: "#e0a55e",
      },
    }),
    ...(!variant && {
      color: "#ECB365",
    }),
  };

  return <MuiButton {...props} sx={buttonStyles} />;
};

export default Button;
