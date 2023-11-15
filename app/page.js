import dynamic from "next/dynamic";
const ContractualJob = dynamic(() => import("@/components/ContractualJob"));
const ITandTelecomunicatoin = dynamic(() => import("@/components/ITandTelecomunicatoin"));
const JobSearchForm = dynamic(() => import("@/components/JobSearchForm"));
const JobSearchandGet = dynamic(() => import("@/components/JobSearchandGet"));

const Home = () => {
  return (
    <main>

      {/* <section className="container mx-auto text-center">
        <div className="md:mx-32 mx-3">
          <div className="bg-[#E7F1FE] md:mx-48 mx-0 my-10 md:p-16 p-10 rounded-[3rem]">
            <h2 className="text-3xl font-bold">Job Search</h2>
            <p className="mt-5 mb-7">Top quality job openings near you, with the highest pay and best compensation.</p>
            <div>
              <JobSearchForm />
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[url('../public/images/footer-background.jpg')] bg-cover bg-no-repeat bg-center px-10 py-16">
        <div className="container mx-auto">
          <div className="md:mx-32 mx-3">
            {/* filtering section */}
            <JobSearchForm />
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container mx-auto">
          <div className="md:mx-32 mx-3">
            <JobSearchandGet />
          </div>
        </div>
      </section>

      <section className='bg-[#ECFEFF]'>
        <div className="container mx-auto">
          <div className="md:mx-32 mx-3 py-20">
            <ITandTelecomunicatoin />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="md:mx-32 mx-3 py-20">
            <ContractualJob />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;