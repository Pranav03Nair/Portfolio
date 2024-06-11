const EducationCard2 = () => {
  return (
    <>
      <div className="bg-secondary text-primary rounded-lg shadow-xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-baseline justify-between px-4 pb-2 pt-4 lg:flex-row">
            <div className="text-xl font-semibold">
              SRM Institute Of Science And Technology
            </div>
            <div className="pt-2 font-semibold lg:pt-0">2021 - 2025</div>
          </div>
          <div className="flex flex-col px-4">
            <div className="mb-1">
              <h2 className="text-primary mb-1">Degree</h2>
              <p className="text-gray-700">Bachelor of Technology</p>
              <h2 className="text-primary mb-1">Course</h2>
              <p className="text-gray-700">Computer Science and Engineering</p>
            </div>
            <div className="mb-2">
              <h2 className="text-primary">CGPA</h2>
              <p className="text-gray-700">9.66 (till 6th Semester)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard2;
