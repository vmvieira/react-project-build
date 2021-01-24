import React from "react";
import { Link } from "react-router-dom";
import SVGs from "./SVGs";

const History = ({ history, loading }) => {
  if (loading.HistoryLoading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <div className="p-4">
      <table className="text-left table-fixed">
        <thead className="bg-navy-blue flex text-white rounded-t-lg h-12">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-2/5 whitespace-nowrap font-light">
              Últimos acessos
            </th>
            <th className="p-4 w-1/6"></th>
            <th className="p-4 w-1/6"></th>
            <th className="p-4 w-1/6 font-light">Ver tudo</th>
            <th className="p-4 w-1/6 text-right font-light">Total: 110</th>
          </tr>
        </thead>

        <tbody className="bg-gray-100 flex flex-col items-center justify-between overflow-y-scroll divide-y-2 max-h-96 rounded-b-lg">
          {history.map((user) => {
            return (
              <tr key={user.id} className="flex w-full">
                <td className="p-4 w-full whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatar}
                        alt="uploaded from the user"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-600 normal-case">
                        Aprovado por: {user.approved_by}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 w-1/4 whitespace-nowrap">
                  <div className="flex text-sm text-gray-600 h-10">
                    <div className="text-center align-middle content-center items-center m-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-center align-middle content-center items-center m-auto">
                      {user.dependents.length.toString().padStart(2, "0")}
                    </div>
                  </div>
                </td>
                <td className="p-4 w-1/4 whitespace-nowrap">
                  <div className="flex text-sm text-gray-600 h-10">
                    <div className="text-center align-middle content-center items-center m-auto p-1">
                      <SVGs param={user.status} />
                    </div>
                    <div className="text-center align-middle content-center items-center m-auto">
                      {user.status.charAt(0) +
                        user.status
                          .substring(1)
                          .toLowerCase()
                          .replace(/_/g, "-")}
                    </div>
                  </div>
                </td>
                <td className="p-4 w-1/4 whitespace-nowrap">
                  <div className="flex text-sm text-gray-600 h-10">
                    <div className="text-center align-middle content-center items-center m-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-center align-middle content-center items-center m-auto">
                      {`${user.dh_access.slice(
                        11,
                        16
                      )} - ${user.dh_access
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}`}
                    </div>
                  </div>
                </td>

                <td className="p-4 w-1/4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    to=""
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium uppercase rounded-md text-white bg-btn-teal hover:bg-gradient-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gradient-teal"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
