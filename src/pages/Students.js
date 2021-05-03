import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {addStudent, getStudentsList} from "../redux/actions/studentsActions";
import StudentItem from "../components/StudentItem";
import StudentModal from "../components/StudentModal";
import SortIcon from "../components/SortIcon";

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((s) => s.students.students);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    dispatch(getStudentsList());
  }, [dispatch]);

  const handleCreate = (values, form) => {
    try {
      dispatch(addStudent(values))
      setShowCreateModal(false)
    } catch (error) {
      if (error.response?.data.errors)
        form.setErrors(error.response?.data.errors)
    }
  }

  return (
    <Layout>
      <div className="overflow-x-auto">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">
                    <div className="flex">
                      Имя <SortIcon />
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left">Номер телефона</th>
                  <th className="py-3 px-6 text-center">
                    <div className="flex">
                      Сумма контракта <SortIcon />
                    </div>
                  </th>
                  <th className="py-3 px-6 text-center">
                    <div className="flex">
                      Оплатил <SortIcon />
                    </div>
                  </th>
                  <th className="py-3 px-6 text-center">Ноутбук</th>
                  <th className="py-3 px-6 text-center">Группа</th>
                  <th className="py-3 px-6 text-center">Комментарий</th>
                  <th className="py-3 px-6 text-center">
                    <div className="flex">
                      Статус <SortIcon />
                    </div>
                  </th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {students.map((student) => (
                  <StudentItem student={student} key={student._id} />
                ))}
              </tbody>
            </table>
            <div className="p-4 flex flex-wrap rounded-lg space-x-3 items-center justify-end">
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600"
              >
                Добавить новый контакт
              </button>
            </div>
          </div>
          <StudentModal
            showModal={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onSubmit={handleCreate}
            initialValues={{
              name:  '',
              phone_number: '',
              laptop: '',
              prepay: '',
              gender: '',
              comments: '',
              group: '',
              contract_amount: '',
              status: ''
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Students;
