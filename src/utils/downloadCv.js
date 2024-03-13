const downloadPDF = () => {
  const anchorElement = document.createElement("a");
  anchorElement.href = "/Tristan Plet CV.pdf";
  anchorElement.download = "Tristan Plet CV.pdf";
  anchorElement.click();
};

export default downloadPDF;
