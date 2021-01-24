import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState({
    name: "",
    room: 0,
    avatar: "",
    cpf: "",
    reference: "",
    type_user: "",
    status: "",
    dh_access: "",
    dependents: [{ name: "", avatar: "" }],
  });

  useEffect(() => {
    async function getUserDetail() {
      try {
        const response = await axios.get(
          `https://sagris.com.br/teste-front/api/access-approval-detail/${id}`
        );
        setUserDetail({ ...response.data.data.access_approval });
        console.log(response.data.data.access_approval);
        console.log(userDetail);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getUserDetail();
  }, []);

  if (loading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form>
            <div className="p-4 shadow overflow-hidden sm:rounded-md bg-gray-100">
              <div className="flex justify-between">
                <h4>Aprovação de acesso</h4>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <div class="p-4 bg-gray-100 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div className="flex items-center my-3">
                    <div className="flex-shrink-0 h-20 w-20">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={userDetail.avatar}
                        alt="uploaded from the user"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900 whitespace-nowrap">
                        {userDetail.name}
                      </div>
                      <div className="text-lg text-gray-600 whitespace-nowrap">
                        {userDetail.type_user.charAt(0) +
                          userDetail.type_user.substring(1).toLowerCase()}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label
                      for="destino"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Destino
                    </label>
                    <input
                      type="text"
                      name="sala_destino"
                      id="sala_destino"
                      autocomplete="sala_destino"
                      className="mt-1 block w-full shadow-sm sm:text-sm rounded-md h-10"
                      placeholder={`QUALITY / SAGRIS SALA ${userDetail.room}`}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="hora_e_data"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hora e data
                    </label>
                    <input
                      type="text"
                      name="hora_e_data"
                      id="hora_e_data"
                      autocomplete="hora_e_data"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                      placeholder={`${userDetail.dh_access.slice(
                        11,
                        16
                      )} - ${userDetail.dh_access
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}`}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="acompanhantes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Acompanhantes
                    </label>

                    <input
                      type="text"
                      name="acompanhantes"
                      id="acompanhantes"
                      autocomplete="family-name"
                      className="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md w-2/3 h-10"
                      placeholder={userDetail.dependents.length}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="procedimento"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Procedimento
                    </label>
                    <select
                      id="procedimento"
                      name="procedimento"
                      autocomplete="procedimento"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
                    >
                      <option> Entrada-Saída</option>
                      <option>Opção 2</option>
                      <option>Opção 3</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="permanência"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Permanência limite
                    </label>
                    <input
                      type="text"
                      name="permanência"
                      id="permanência"
                      autocomplete="family-name"
                      className="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md w-2/3 h-10"
                      placeholder="08:00h"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="referência"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Referência
                    </label>
                    <input
                      type="text"
                      name="referência"
                      id="referência"
                      autocomplete="referência"
                      className="mt-1  block shadow-sm sm:text-sm border-gray-300 rounded-md h-10 w-full"
                      placeholder={userDetail.reference.replace(/-/g, "")}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="cpf"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CPF
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      id="cpf"
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder={
                        userDetail.cpf.substring(0, 3) +
                        "." +
                        userDetail.cpf.substring(3, 6) +
                        "." +
                        userDetail.cpf.substring(6, 9) +
                        "-" +
                        userDetail.cpf.substring(9, 11)
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="telefone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="telefone"
                      id="telefone"
                      autocomplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="(XX) XXXX-XXXX"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="veículo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Veículo
                    </label>
                    <input
                      type="text"
                      name="veículo"
                      id="veículo"
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Carro / Moto / Caminhão"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="modelo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Modelo
                    </label>
                    <input
                      type="text"
                      name="modelo"
                      id="modelo"
                      autocomplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Digite o modelo"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="cor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cor
                    </label>
                    <input
                      type="text"
                      name="cor"
                      id="cor"
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Digite a cor"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="placa"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Placa
                    </label>
                    <input
                      type="text"
                      name="placa"
                      id="placa"
                      autocomplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="AAAA-0000"
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 p-3 bg-gray-100 sm:px-6">
                <Link
                  to="/"
                  className="flex-1 py-2 px-4 border border-transparent shadow-sm text-center text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  NEGAR ACESSO
                </Link>

                <Link
                  to="/"
                  className="flex-1 py-2 px-4 border border-transparent shadow-sm text-center text-sm font-medium rounded-md text-white bg-btn-teal hover:bg-gradient-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gradient-teal"
                >
                  APROVAR ACESSO
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
