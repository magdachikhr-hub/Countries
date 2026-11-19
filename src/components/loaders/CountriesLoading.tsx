import CountrySkeleton from "./CountrySkeleton";

function CountriesLoading() {
  return (
    <>
      <div className="w-full flex flex-wrap px-13.75 md:px-20 mt-7 md:mt-12 gap-10 md:gap-18.75 justify-center ">
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
        <CountrySkeleton />
      </div>
    </>
  );
}

export default CountriesLoading;
