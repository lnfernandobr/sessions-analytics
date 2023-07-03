export const About = () => {
  // TODO update lorem ipsum with correct text
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sessions Analytics - Tech challenger
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          The goal of this challenger is to implement a new analytics feature
          called "Sessions Analytics." Given a set of data consisting of
          individual web page visits and visitor IDs, the objective is to
          generate a list of sessions for each visitor.
          <br />
          <br />
          This project was made using the <b> MERN stack</b>.
        </p>
      </div>
    </div>
  );
};
