export const format = {

    date: (date: string) => {
        if (!date) return
        if (date.length < 10) return

        const year = date.substring(0, 4)
        const month = date.substring(5, 7)
        const day = date.substring(8, 10)

        return (`${day}/${month}/${year}`)
    },

    cpf: (cpf: string) => {
        if (!cpf) return
        if (cpf.length < 11) return

        const firstPart = cpf.substring(0, 3)
        const secondPart = cpf.substring(3, 6)
        const thirdPart = cpf.substring(6, 9)
        const lastPart = cpf.substring(9, 11)

        return (`${firstPart}.${secondPart}.${thirdPart}-${lastPart}`)
    },

    cep: (cep: string) => {
        if (!cep) return
        if (cep.length < 8) return

        const firstPart = cep.substring(0, 5)
        const lastPart = cep.substring(5, 8)

        return (`${firstPart}-${lastPart}`)
    },

    phone: (phone: string) => {
        if (!phone) return
        if (phone.length < 11) return

        const areaCode = phone.substring(0, 2)
        const firstPart = phone.substring(2, 7)
        const lastPart = phone.substring(7, 11)

        return (`(${areaCode}) ${firstPart}-${lastPart}`)
    }
}