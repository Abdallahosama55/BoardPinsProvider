import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../atoms/commonatoms/Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function CreateProductionGroupModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={"max-h-[98vh] bg-white"}>
      <Formik
        initialValues={{
          groupTitle: '',
          merchantsCategory: '',
          minQuantity: '',
          maxQuantity: '',
          minPerMerchant: '',
          notes: '',
          phoneNumber: '',
        }}
        validationSchema={Yup.object({
          groupTitle: Yup.string().required('Group title is required'),
          merchantsCategory: Yup.string().required('Category is required'),
          minQuantity: Yup.number().required('Minimum quantity is required'),
          maxQuantity: Yup.number().required('Maximum quantity is required'),
          minPerMerchant: Yup.number().required('Minimum per merchant is required'),
          phoneNumber: Yup.string().required('Phone number is required'),
        })}
        onSubmit={(values) => {
          console.log('Form Data', values);
          // Handle form submission
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-3 p-6 pt-0 pb-2 font-poppins">
            {/* Group Title */}
            <div>
              <label htmlFor="groupTitle" className="block text-sm font-medium text-gray-700">
                Group Title <span className="text-red-500">*</span>
              </label>
              <Field
                name="groupTitle"
                type="text"
                placeholder="Group Title"
                className="mt-1 block w-full  rounded-md text-sm border-[1px] border-[#40404063] p-2 outline-0 focus:shadow-md focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="groupTitle" component="div" className="text-red-600 text-xs mt-1" />
            </div>

            {/* Merchants Category */}
            <div>
              <label htmlFor="merchantsCategory" className="block text-sm font-medium text-gray-700">
                Choose Merchants Category <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="merchantsCategory"
                className="mt-1 block w-full rounded-md text-sm border-[1px] bg border-[#40404063] p-2 outline-0 focus:shadow-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
               
                <option value="" label="Choose Merchants Category" />
                <option value="Apparel" label="Apparel" />
                <option value="Footwear" label="Footwear" />
                <option value="Accessories" label="Accessories" />
                <option value="Pottery" label="Pottery" />
              </Field>
              <ErrorMessage name="merchantsCategory" component="div" className="text-red-600 text-xs mt-1" />
            </div>

            {/* Target Quantity */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="minQuantity" className="block text-sm font-medium text-gray-700">
                  Min
                </label>
                <Field
                  name="minQuantity"
                  type="number"
                  placeholder="Min"
                  className="mt-1 block w-full rounded-md text-sm border-[1px] border-[#40404063] p-2 outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="minQuantity" component="div" className="text-red-600 text-xs mt-1" />
              </div>
              <div className="w-1/2">
                <label htmlFor="maxQuantity" className="block text-sm font-medium text-gray-700">
                  Max
                </label>
                <Field
                  name="maxQuantity"
                  type="number"
                  placeholder="Max"
                  className="mt-1 block w-full rounded-md text-sm border-[1px] border-[#40404063] p-2 outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="maxQuantity" component="div" className="text-red-600 text-xs mt-1" />
              </div>
            </div>

            {/* Minimum Quantity per Merchant */}
            <div>
              <label htmlFor="minPerMerchant" className="block text-sm font-medium text-gray-700">
                Minimum Quantity per Merchant
              </label>
              <Field
                name="minPerMerchant"
                type="number"
                placeholder="200"
                className="mt-1 block w-full rounded-md text-sm border-[1px] border-[#40404063] p-2 outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="minPerMerchant" component="div" className="text-red-600 text-xs mt-1" />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <Field
                as="textarea"
                name="notes"
                placeholder="Add any notes here..."
                rows="4"
                className="mt-1 block w-full  resize-none rounded-md text-sm border-[1px] border-[#40404063] p-2 outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}
              />
              <ErrorMessage name="notes" component="div" className="text-red-600 text-xs mt-1" />
            </div>

            {/* Phone Number (WhatsApp) */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={'eg'}
                value={''}
                onChange={(phone) => setFieldValue('phoneNumber', phone)}
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                  autoFocus: false,
                  className: 'mt-1 block w-full px-12 py-2 rounded-md text-sm border-[1px] border-[#40404063]  outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
                }}
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-600 text-xs mt-1" />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-4  flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#6161FF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create group
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default CreateProductionGroupModal;
