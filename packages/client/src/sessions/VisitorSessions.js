import React, { Fragment, useState } from "react";
import { differenceInMinutes, format } from "date-fns";
import { Modal } from "../components/Modal";

const formatStartTime = (startTime) => {
  const formattedDate = format(new Date(startTime), "MM/dd/yyyy");
  const formattedTime = format(new Date(startTime), "HH:mm");
  return `${formattedDate} at ${formattedTime}`;
};

export const VisitorSessions = ({ sessionsByUser, showSkeleton }) => {
  const [visitor, setVisitor] = useState(null);
  const [isView, setIsView] = useState(false);
  const renderSessions = (sessions) => {
    if (!sessions || !sessions.length) {
      return <p>No session found.</p>;
    }

    return sessions.map((session, index) => {
      const { duration, pages, startTime } = session;
      const formattedStartTime = formatStartTime(startTime);
      const durationInMinutes = differenceInMinutes(
        new Date(startTime + duration),
        new Date(startTime)
      );
      return (
        <div
          key={`${session.startTime}-${index}`}
          className="border rounded border-gray-300 p-2 mb-2"
        >
          <p className="text-sm m-2">
            First access on{" "}
            <span className="text-indigo-500">{formattedStartTime}</span> with a
            duration of{" "}
            <span className="text-indigo-500">{durationInMinutes} min</span>
          </p>

          <div className="flex justify-between mb-2 flex-col mt-4 text-sm">
            <p className="m-2">Timeline of accessed pages:</p>

            <ol className="border-l border-neutral-300 dark:border-neutral-500">
              {pages.map((page) => (
                <Fragment key={`${page.url}-${page.timestamp}`}>
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                      <p className="text-sm text-gray-600 flex">
                        {formatStartTime(new Date(page.timestamp))}{" "}
                        <p className="text-sm text-gray-600 ml-4">
                          Accessed the page{" "}
                          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            {page.url}
                          </span>
                        </p>
                      </p>
                    </div>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
        </div>
      );
    });
  };

  const skeletonObject = { Prop1: "", Prop2: "" };

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {Object.keys(showSkeleton ? skeletonObject : sessionsByUser).map(
          (visitorId) => {
            return (
              <Fragment key={visitorId}>
                <li className="flex items-center justify-between gap-x-6 py-5">
                  <div className="flex gap-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      className="h-12 w-12 flex-none rounded-full text-gray-500"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 1a2 2 0 0 0-1.98 2.284A7.003 7.003 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7.003 7.003 0 0 0-5.02-6.716A2 2 0 0 0 12 1Zm2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        Visitor ID
                      </p>
                      {showSkeleton ? (
                        <div className="h-2 bg-gray-200 mt-2 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
                      ) : (
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {visitorId}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    disabled={showSkeleton}
                    onClick={() => {
                      setIsView(true);
                      setVisitor(visitorId);
                    }}
                    className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    View
                  </button>
                </li>
              </Fragment>
            );
          }
        )}
      </ul>

      <Modal
        isOpen={isView}
        setIsOpen={setIsView}
        title={<span>Visistor: {visitor}</span>}
        description="The pages accessed are in chronological order. The navigation time is in minutes and the start date is formatted for the Brazilian standard."
      >
        {renderSessions(sessionsByUser[visitor])}
      </Modal>
    </>
  );
};
