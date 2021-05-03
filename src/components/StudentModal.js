import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import TextField from "./TextField";
import TextareaField from "./TextareaField";
import SelectField from "./SelectField";

const StudentModal = ({ showModal,onClose,  initialValues, onSubmit }) => {
  let schema = yup.object().shape({
    name: yup.string().required("Обязательное для заполнения поле"),
    phone_number: yup
      .string()
      .min(10, "Минимум 10 символов")
      .required("Обязательное для заполнения поле"),
    comments: yup.string(),
    contract_amount: yup
      .number()
      .typeError("Сумма должна быть числом")
      .required("Обязательное для заполнения поле"),
    gender: yup.string().required("Обязательное для заполнения поле"),
    group: yup.string().required("Обязательное для заполнения поле"),
    laptop: yup.string().required("Обязательное для заполнения поле"),
    prepay: yup
      .number()
      .typeError("Сумма должна быть числом")
      .required("Обязательное для заполнения поле"),
    status: yup.string().required("Обязательное для заполнения поле"),
  });
  return showModal ? (
        <Formik
          initialValues={{ ...initialValues }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              {console.log(formik)}
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <Form>
                    <div className="bg-white rounded px-8 pt-6 mb-4 flex flex-col my-2">
                      <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                          <TextField
                            label="Введите имя"
                            name="name"
                            type="text"
                          />
                        </div>
                        <div className="md:w-1/2 px-3">
                          <TextField
                            label="Номер телефона"
                            name="phone_number"
                            type="tel"
                          />
                        </div>
                      </div>
                      <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                          <TextField
                            label="Сумма контрактаа"
                            name="contract_amount"
                            type="text"
                          />
                        </div>
                        <div className="md:w-1/2 px-3">
                          <TextField
                            label="Оплатил"
                            name="prepay"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                          <TextField
                            label="Ноутбук"
                            name="laptop"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                          <SelectField label="Группа" name="group">
                            <option selected value="" disabled>
                              Выберите группу
                            </option>
                            <option value="Утренняя">Утренняя</option>
                            <option value="Дневная">Дневная</option>
                            <option value="Вечерняя">Вечерняя</option>
                          </SelectField>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                          <SelectField label="Статус" name="status">
                            <option selected value="" disabled>
                              Выберите статус
                            </option>
                            <option value="active">Активный</option>
                            <option value="end">Закончил обучение</option>
                          </SelectField>
                        </div>
                        <div className="md:w-1/2 px-3">
                          <SelectField label="Пол" name="gender">
                            <option selected value="" disabled>
                              Выберите пол
                            </option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                          </SelectField>
                        </div>
                      </div>
                      <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                          <TextareaField
                            label="Введите комментарий"
                            name="comment"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={onClose}
                        >
                          Close
                        </button>
                        <input
                          type="submit"
                          className="cursor-pointer bg-green-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          value="Save changes"
                        />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>
      ) : null
};

export default StudentModal;
