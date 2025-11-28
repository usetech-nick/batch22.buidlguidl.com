import { Address } from "@scaffold-ui/components";

const BuilderPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">My Personal Page</span>
        </h1>
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row mt-8">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <Address address="0x3Be7fbBDbC73Fc4731D60EF09c4BA1A94DC58E41" />
            <p className="mt-4 text-lg">
              Hello! I am a builder participating in Batch 22 of BuidlGuidl. Excited to learn and build cool things on
              Ethereum!
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Gbangbolaoluwagbemiga"
                target="_blank"
                rel="noreferrer"
                className="link link-primary"
              >
                GitHub
              </a>
              <a href="https://x.com/GbangbolaPhilip" target="_blank" rel="noreferrer" className="link link-primary">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
