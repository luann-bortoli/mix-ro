'use client'

import { useForm } from 'react-hook-form'
import s from './Login.module.css'
import { loginSchema, LoginSchema } from './login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/src/shared/lib/api'
import FormInput from '@/src/shared/_components/ui/form-input/FormInput'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isValid
        }
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onChange"
    })

    const onSubmit = async (data: LoginSchema) => {

        try
        {
            console.log(data)
            api.post("/auth/login", data)

            toast.success("Logado com sucesso")
            router.push("/")

        }
        catch (error)
        {
            toast.error("Credenciais inválidas")
        }


    }

    return (
        <>

            <div className={s.mainWrapper}>

                <form
                    className={s.formWrapper}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormInput
                        label={"Email"}
                        type={"email"}
                        registration={register("email")}
                        error={errors.email?.message}
                    />

                    <FormInput
                        label={"Senha"}
                        type={"password"}
                        registration={register("password")}
                        error={errors.password?.message}
                    />

                    <button type='submit'>Entrar</button>

                </form>

            </div>

        </>
    )
}