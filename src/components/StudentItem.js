import React, { useState } from "react";
import StudentModal from "./StudentModal";
import { useDispatch } from "react-redux";
import {deleteStudent, updateStudent} from "../redux/actions/studentsActions";

const StudentItem = ({ student }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = (values, form) => {
    try {
      dispatch(updateStudent(values, student._id));
      setShowModal(false)
    } catch (error) {
      if (error.response?.data.errors)
        form.setErrors(error.response?.data.errors)
    }
  }

  return (
    <>
      <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            <span className="font-medium">{student.name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            <div className="mr-2">
              <img src="https://img.icons8.com/officexs/16/000000/phone.png" alt="phone"/>
            </div>
            <span>{student.phone_number}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            {student.contract_amount}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            {student.prepay}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            {student.laptop}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            {student.group}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            {student.comments}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <span
            className={`bg-${
              student.status === "end" ? "red" : "green"
            }-200 text-green-600 py-1 px-3 rounded-full text-xs`}
          >
            {student.status}
          </span>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setShowModal(true)}
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => dispatch(deleteStudent(student._id))}
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
          <StudentModal
            showModal={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleUpdate}
            initialValues={{
              name: student.name,
              phone_number:student.phone_number,
              laptop:student.laptop,
              prepay:student.prepay,
              gender:student.gender,
              comments:student.comments,
              group:student.group,
              contract_amount:student.contract_amount,
              status:student.status
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default StudentItem;
