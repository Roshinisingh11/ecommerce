export default function MobileVersion() {
  return (
    <div className="h-screen flex items-center justify-center xl:hidden">
      <div className="text-3xl text-center px-10 flex flex-col gap-5 items-center justify-center">
        <h1>
          This website is not yet available on{" "}
          <span className="text-color-secondary-2 font-medium">
            Mobile devices
          </span>
        </h1>
        {/* <a
          href="https://github.com/roshinisingh11"
          className="underline text-blue-800"
        >
          Creator
        </a> */}
      </div>
    </div>
  );
}
