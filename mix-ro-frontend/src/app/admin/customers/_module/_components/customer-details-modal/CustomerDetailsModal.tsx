import { Calendar, LocationEditIcon, Mail, MapPin, Phone, User, X } from 'lucide-react'
import s from './CustomerDetailsModal.module.css'
import { Customer } from '../../types'
import { interfaceFormat } from '@/src/shared/utils/text'

type Props = {
    onClose: () => void
    content: Customer
}

export default function CustomerDetailsModal({ onClose, content }: Props) {
    return (
        <>
            <div className={s.mainWrapper}>
                <div className={s.contentWrapper}>
                    <div className={s.header}>
                        <div className={s.headerInfoWrapper}>
                            <User className={s.icon} />
                            <p className={s.headerTitle}>
                                Detalhes do Cliente
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className={s.closeButton}
                        >
                            <X className={s.icon} />
                        </button>
                    </div>

                    <hr />

                    <div className={s.customerInfoMainWrapper}>
                        <span className={s.customerPicContainer}>
                            <User className={s.icon} />
                        </span>

                        <div className={s.customerInfo}>
                            <p className={s.name}>{content.name}</p>
                            <div className={s.infoItemWrapper}>
                                <div className={s.infoItem}>
                                    <Mail className={s.icon} />
                                    <p className={s.value}>{content.email}</p>
                                </div>
                                <div className={s.infoItem}>
                                    <Phone className={s.icon} />
                                    <p className={s.value}>{content.phone}</p>
                                </div>
                                <div className={s.infoItem}>
                                    <Calendar className={s.icon} />
                                    <p className={s.value}>{interfaceFormat.date(content.createdAt)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.customerInfoSecondaryWrapper}>

                        <div className={s.customerGeneralInfo}>
                            <section className={s.customerPersonalInfo}>
                                <div className={s.infoTitle}>
                                    <User className={s.icon} />
                                    <p>Informações pessoais</p>
                                </div>
                                <table className={s.customerInfoTable}>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Nome</th>
                                            <td>{content.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">E-mail</th>
                                            <td>{content.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Telefone</th>
                                            <td>{interfaceFormat.phone(content.phone)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">CPF</th>
                                            <td>{interfaceFormat.cpf(content.cpf)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section className={s.customerAddressInfo}>
                                <div className={s.infoTitle}>
                                    <MapPin className={s.icon} />
                                    <p>Endereço</p>
                                </div>
                                <table className={s.customerInfoTable}>
                                    <tbody>
                                        <tr>
                                            <th scope="row">CEP</th>
                                            <td>{interfaceFormat.cep(content.cep)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Estado</th>
                                            <td>{content.state}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Cidade</th>
                                            <td>{content.city}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bairro</th>
                                            <td>{content.neighborhood}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Rua</th>
                                            <td>{content.street}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Número</th>
                                            <td>{content.number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Complemento</th>
                                            <td>{content.complement}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>

                        <div className={s.customerAccountInfo}>
                            <div className={s.infoTitle}>
                                <User className={s.icon} />
                                <p>Conta</p>
                            </div>
                            <table className={s.customerInfoTable}>
                                <tr>
                                    <th scope="row">ID</th>
                                    <td>{content.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Criado em</th>
                                    <td>{interfaceFormat.date(content.createdAt)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Última atualização</th>
                                    <td>{interfaceFormat.date(content.updatedAt)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}