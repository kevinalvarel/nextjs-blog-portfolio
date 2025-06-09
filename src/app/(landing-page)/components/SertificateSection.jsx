import GlareHover from "./ui/GlareHover";

const SertificateSection = () => {
  return (
    <div className="my-20" id="certificate">
      <div className="flex justify-center py-5">
        <h1 className="font-bold text-3xl">Certificate</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlareHover
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/10",
            backgroundImage: 'url("/serti1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
          glareColor="#3b82f4"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={1000}
          playOnce={false}
        />
        <GlareHover
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/10",
            backgroundImage: 'url("/serti2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
          glareColor="#3b82f4"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={1000}
          playOnce={false}
        />
        <GlareHover
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/10",
            backgroundImage: 'url("/serti3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
          glareColor="#3b82f4"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={1000}
          playOnce={false}
        />
      </div>
    </div>
  );
};

export default SertificateSection;
