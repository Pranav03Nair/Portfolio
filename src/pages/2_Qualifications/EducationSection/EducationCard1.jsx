const EducationCard1 = () => {
  return (
    <>
      <div className="bg-secondary text-primary rounded-lg shadow-xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-baseline justify-between px-4 pb-2 pt-4 lg:flex-row">
            <div className="text-xl font-semibold">
              Carmel Convent Sr. Sec. School, Ratanpur, Bhopal
            </div>
            <div className="pt-2 font-semibold lg:pt-0">2006 - 2021</div>
          </div>
          <div className="flex flex-col px-4">
            <div className="mb-2">
              <h2 className="text-md text-primary mb-1">Class X (91%)</h2>
              <p className="hidden text-gray-700 lg:block">
                Scored 455/500 in Class X, with 92/100 in Science and 93/100 in
                Mathematics
              </p>
            </div>
            <div className="mb-2">
              <h2 className="text-md text-primary mb-1">Class XII (92.6%)</h2>
              <p className="hidden text-gray-700 lg:block">
                Scored 463/500 in Class XII, with 88/100 in Physics, 89/100 in
                Chemistry and 95/100 in Mathematics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard1;
