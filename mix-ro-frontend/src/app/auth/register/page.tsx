'use client'

import FormInput from '@/src/shared/_components/ui/form-input/FormInput'
import s from './Register.module.css'
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchema } from './register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormSelect from '@/src/shared/_components/ui/form-select/FormSelect'
import { brazilianStates, ProblemDetail } from '@/src/shared/types'
import api from '@/src/shared/lib/api'
import toast from 'react-hot-toast'

export default function Register() {

    const {
        register,
        setValue,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isValid
        }
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            password: '',
            cpf: '',
            state: '',
            city: '',
            neighborhood: '',
            street: '',
            number: '',
            complement: '',
            cep: '',
            phone: '',
        },
    })

    const onSubmit = async (data: RegisterSchema) => {
        try
        {
            console.log(data)

            await api.post("/auth/register", data)
            toast.success("Usuário cadastrado")

        }
        catch (error)
        {
            const problem = error as ProblemDetail

            toast.error(problem.detail)
        }
    }

    return (
        <>
            <div className={s.mainWrapper}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={s.formWrapper}
                >
                    <div className={s.generalInfoInputWrapper}>

                        <FormInput
                            label={"Nome"}
                            registration={register("name")}
                            placeholder={"João Silva"}
                            error={errors.name?.message}
                        />

                        <FormInput
                            label={"Email"}
                            type='email'
                            registration={register("email")}
                            error={errors.email?.message}
                        />

                        <FormInput
                            label={"Senha"}
                            type='password'
                            registration={register("password")}
                            error={errors.password?.message}
                        />

                        <FormInput
                            label="CPF"
                            name="cpf"
                            registration={register("cpf")}
                            setValue={setValue}
                            error={errors.cpf?.message}
                            mask="000.000.000-00"
                            placeholder="000.000.000-00"
                        />

                    </div>

                    <div className={s.contactAndAddressInputWrapper}>

                        <FormSelect
                            label={'Estado'}
                            options={brazilianStates}
                            registration={register("state")}
                        />

                        <FormInput
                            label={"Cidade"}
                            placeholder='Rio de Janeiro'
                            registration={register("city")}
                            error={errors.city?.message}
                        />

                        <FormInput
                            label={"Bairro"}
                            placeholder='Centro'
                            registration={register("neighborhood")}
                            error={errors.neighborhood?.message}
                        />

                        <FormInput
                            label={"Rua"}
                            placeholder='Av. Presidente Vargas'
                            registration={register("street")}
                            error={errors.street?.message}
                        />

                        <FormInput
                            label={"Número"}
                            placeholder='462'
                            registration={register("number")}
                            setValue={setValue}
                            error={errors.number?.message}
                            mask={"00000000"}
                            name={"number"}
                        />

                        <FormInput
                            label={"Complemento"}
                            placeholder='Prédio 302'
                            registration={register("complement")}
                            error={errors.complement?.message}
                        />

                        <FormInput
                            label={"CEP"}
                            registration={register("cep")}
                            error={errors.cep?.message}
                            setValue={setValue}
                            name={"cep"}
                            mask={"00000-000"}
                            placeholder='00000-000'
                        />

                        <FormInput
                            label={"Telefone"}
                            type='tel'
                            registration={register("phone")}
                            name={'phone'}
                            error={errors.phone?.message}
                            setValue={setValue}
                            mask={[
                                { mask: '(00) 0000-0000' },
                                { mask: '(00) 00000-0000' },
                            ]}
                            placeholder='(00) 0000-0000'
                        />

                    </div>

                    <button type="submit">Registrar</button>
                </form>
            </div>
        </>
    )
}