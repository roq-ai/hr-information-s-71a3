import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  vacation_balance: yup.number().integer(),
  payroll: yup.number().integer(),
  user_id: yup.string().nullable(),
});
