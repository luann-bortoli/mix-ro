'use client'

import s from './FormInput.module.css'
import { IMaskInput } from 'react-imask'
import { UseFormSetValue, FieldValues, UseFormRegisterReturn } from 'react-hook-form'

type FormInputProps = {
    label: string
    placeholder?: string
    error?: string
    type?: InputType
    mask?: any
    name?: string
    registration: UseFormRegisterReturn
    setValue?: UseFormSetValue<any>
}

type InputType = 'text' | 'password' | 'email' | 'number' | 'tel'

export default function FormInput(
    {
        label,
        placeholder,
        mask,
        error,
        type = 'text',
        name,
        registration,
        setValue,
    }
        : FormInputProps
) {
    if (type === 'password') placeholder = '••••••••'
    if (type === 'email') placeholder = 'david@email.com'

    return (
        <div className={s.formInput}>
            <label>{label}</label>

            {mask && name && setValue ? (
                <IMaskInput
                    mask={mask}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onAccept={(value) => {
                        setValue(name, value, {
                            shouldValidate: true,
                            shouldDirty: true,
                        })
                    }}
                    onBlur={registration.onBlur}
                    inputRef={registration.ref}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    {...registration}
                />
            )}

            {error && <span>{error}</span>}
        </div>
    )
}