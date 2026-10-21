
import s from './FormSelect.module.css'

type FormSelectProps = {
    label: string
    options: string[]
    error?: string
    registration: object
}

export default function FormSelect({ label, options, error, registration }: FormSelectProps) {

    return (


        <div className={s.formSelect}>

            <label>{label}</label>

            <select
                {...registration}
            >
                <option value="">Selecionar</option>
                <hr />
                {options.map((option) => {
                    return (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    )
                })}
            </select>

            {error && <span>{error}</span>}

        </div>
    )
}
