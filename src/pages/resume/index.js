import Resume from "@/components/Resume";

const ResumePage = () => {
  const pdfFileUrl = "/cv-resume-web.pdf"; // Place your PDF file in the public folder
  return (
    <div>
      <h1>PDF Viewer</h1>
      <Resume pdfUrl={pdfFileUrl} />
    </div>
  );
};

export default ResumePage;
