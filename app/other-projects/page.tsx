import OtherProjectsContent from "@/components/OtherProjects";

export default function OtherProjectsPage() {
  return (
    <div className=" relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 mt-16 min-h-screen w-full pt-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 heading-fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300">
            Other Projects
          </h2>
        </div>
        <OtherProjectsContent />
      </div>
    </div>
  );
}
