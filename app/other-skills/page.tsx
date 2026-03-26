import OtherSkills from "@/components/OtherSkills";

export default function OtherSkillsPage() {
  return (
    <div className="min-h-screen w-full p-4 mt-16 relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16 heading-fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300">
            Other Skills
          </h2>
        </div>
        <div className="mb-12">
          <OtherSkills />
        </div>
      </div>
    </div>
  );
}
