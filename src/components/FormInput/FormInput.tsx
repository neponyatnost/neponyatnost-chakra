import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface FormInputProps {
  name: string
  label: string
  type: string
}

const FormInput: FC<FormInputProps> = ({ name, label, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ field }) => (
        <>
          <label htmlFor={'1'}>
            {label}
            <input
              type={type}
              {...field}
              id={type === 'password' ? '2' : '1'}
            />
          </label>
          <p>{errors.root?.message ? errors.root?.message : ''}</p>
        </>
      )}
    />
  )
}

export default FormInput
