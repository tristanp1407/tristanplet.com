import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const TextBox = ({ title, copy, icon }) => (
  <Paper
    elevation={20}
    sx={{
      maxWidth: 250,
      padding: "1rem 2.5rem",
      margin: "auto",
      background: "#041C32",
      borderRadius: 5,
      border: "1px solid #102a42",
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h2
      style={{
        position: "absolute",
        top: "-10px",
        left: "-10px",
        margin: 0,
        fontSize: "2.2rem",
      }}
    >
      {icon}
    </h2>
    <div style={{ flexGrow: 1 }}>
      <h3 style={{ color: "#f2f2f2", lineHeight: 1.4, marginTop: "1rem" }}>
        {title}
      </h3>
      <hr style={{ border: "1px solid #ECB365", width: 30, margin: 0 }} />
      <p style={{ color: "#96a3a8", fontSize: 16, lineHeight: 1.5 }}>{copy}</p>
    </div>
  </Paper>
);

const GridOfTextBoxes = () => {
  const textData = [
    {
      icon: "🌐",
      title: "Website Creation",
      copy: "Custom websites that align with your brand, engage your audience, and drive business goals with seamless functionality and cutting-edge design.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      copy: "Develop intuitive and engaging mobile applications for iOS and Android platforms to reach your customers on the go.",
    },
    {
      icon: "🎨",
      title: "Branding",
      copy: "Transform your idea into a captivating reality with a custom logo and website that encapsulates your brand's unique identity.",
    },
    {
      icon: "💻",
      title: "Web Development",
      copy: "Create smooth digital experiences, integrating databases and third-party services to support business and user needs.",
    },
    {
      icon: "⚙️",
      title: "Optimisation",
      copy: "Streamline processes with intelligent automation, chatbots, and analytics. Save time, increase efficiency, and boost profitability.",
    },
    {
      icon: "🔍",
      title: "SEO",
      copy: "Boost visibility and attract leads with expert SEO strategies: keyword optimization, meta tag refinement, and compelling content.",
    },
    {
      icon: "📊",
      title: "User Analytics",
      copy: "Make data-driven decisions. Implement comprehensive analytics to track user behavior, identify opportunities, and optimize site performance for maximum ROI.",
    },
  ];

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", padding: "2rem 0" }}>
      <Grid container spacing={3} justifyContent="center">
        {textData.map((data, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <TextBox title={data.title} copy={data.copy} icon={data.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridOfTextBoxes;
