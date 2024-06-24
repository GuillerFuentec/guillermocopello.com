export default function BodyBlogging() {
  return (
    <>
      <h1 className="text-5xl text-left font-bold flex justify-start mx-36 ">
        Blogging
      </h1>
      <div className="flex justify-center items-center p-16 flex-wrap flex-row">
        <div className="flex flex-col w-3/4 lg:flex-row">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              content
            </div>
            <div className="divider"></div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              content
            </div>
            <div className="divider"></div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div>
              <div className="divider"></div>
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
