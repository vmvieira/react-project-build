import React from "react";
import { Link } from "react-router-dom";

const Approval = ({ users, loading }) => {
  if (loading.UserLoading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <div className="p-4">
      <table className="text-left w-full ">
        <thead className="bg-navy-blue flex text-white w-full rounded-t-lg h-12 font-light">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4 whitespace-nowrap font-light">
              Aprovação de acesso
            </th>
            <th className="p-4 w-1/4"></th>
            <th className="p-4 w-1/4"></th>
            <th className="p-4 w-1/4 text-right font-light">Pendentes: 10</th>
          </tr>
        </thead>

        <tbody className="bg-gray-100 flex flex-col items-center justify-between overflow-y-scroll w-full divide-y-2 max-h-96 rounded-b-lg">
          {users.map((user) => {
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
                        {user.type_user.charAt(0) +
                          user.type_user.substring(1).toLowerCase()}
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
                        className="mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-center align-middle content-center items-center m-auto">{`Sala ${user.room}`}</div>
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
                    to={`/dashboard/${user.id}`}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium uppercase rounded-md text-white bg-btn-teal hover:bg-gradient-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Decidir
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

export default Approval;
