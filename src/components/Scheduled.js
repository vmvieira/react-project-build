import React, { useEffect, useState } from "react";

const Scheduled = ({ schedule, loading, setLoading }) => {
  const [split, setSplit] = useState([]);

  useEffect(() => {
    const newArr = schedule.slice(0, 5).map((each) => ({
      ...each,
      name2: "",
      avatar2: "",
      type_user2: "",
      dh_access2: "",
    }));
    const splitArr = schedule
      .slice(5)
      .map(
        (el, idx) => (
          (newArr[idx].name2 = el.name),
          (newArr[idx].avatar2 = el.avatar),
          (newArr[idx].type_user2 = el.type_user),
          (newArr[idx].dh_access2 = el.dh_access)
        )
      );

    setSplit(newArr);
    setLoading(!loading.ScheduleLoading);
  }, [schedule]);

  if (loading.ScheduleLoading) {
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
        <thead className="bg-navy-blue flex text-white w-full rounded-t-lg h-12">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4 whitespace-nowrap font-light">
              Programados
            </th>
            <th className="p-4 w-1/4"></th>
            <th className="p-4 w-1/4"></th>
            <th className="p-4 w-1/4 text-right"></th>
          </tr>
        </thead>

        <tbody className="bg-gray-100 flex flex-col items-center justify-between overflow-y-scroll w-full divide-y-2 max-h-96 rounded-b-lg">
          {split.map((user) => {
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
                  <div className="text-sm text-gray-600 h-10 text-center align-middle content-center items-center m-auto">
                    Data e hora:
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

                <td className="p-4 w-full whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatar2}
                        alt="uploaded from the user"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name2}
                      </div>
                      <div className="text-sm text-gray-600 normal-case">
                        {user.type_user2.charAt(0) +
                          user.type_user2.substring(1).toLowerCase()}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-4 w-1/4 whitespace-nowrap">
                  <div className="text-sm text-gray-600 h-10 text-center align-middle content-center items-center m-auto">
                    Data e hora:
                    <div className="text-center align-middle content-center items-center m-auto">
                      {`${user.dh_access2.slice(
                        11,
                        16
                      )} - ${user.dh_access2
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}`}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Scheduled;
