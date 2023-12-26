import CheckOutTable from "./component/CheckOutTable.tsx";
import {Button, Container, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBillWave} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/dto/TransactionDto.ts";
import Loading from "../../component/Loading.tsx";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts"
import {LoginUserContext} from "../../../App.tsx";

type Params = {
    transactionId: string
}

export default function CheckOutPage() {

    const params = useParams<Params>()
    const [transactionData, setTransactionData] = useState<TransactionDto | undefined>(undefined)
    const [isCheckOut, setIsCheckOut] = useState<boolean>(false)

    const navigate = useNavigate()

    const loginUser = useContext(LoginUserContext)

    const getTransactionData = async () => {
        try {
            if (params.transactionId) {
                const data = await TransactionApi.getTransactionById(params.transactionId)
                setTransactionData(data)
                document.title="Check Out"
            } else {
                navigate("/Error")
            }
        } catch (error) {
            navigate("/Error")
        }
    }

    useEffect(() => {
        if (loginUser) {
            getTransactionData()
        } else if (loginUser === null) {
            navigate("/login")
        }
    }, [loginUser]);


    const handleCheckOut = async () => {
        try {
            if (params.transactionId) {
                setIsCheckOut(true)
                await TransactionApi.payTransactionById(params.transactionId)
                await TransactionApi.finishTransactionById(params.transactionId)
                navigate("/thankyou")
            }
        } catch (error) {
            navigate("/Error")
        }
    }


    return (
        <>
            <Container style={{background: "white", justifyContent: "center", alignItems: "center"}}>
                <hr/>
                <h1>Check Out</h1>
                <div style={{background: "white"}}>
                    {
                        transactionData ?
                            <>
                                <CheckOutTable itemList={transactionData.item}/>
                                <h3 style={{
                                    marginBottom: "0px",
                                    marginLeft: "75%"
                                }}>Total:${transactionData.total.toFixed(2)}</h3>
                                {
                                    isCheckOut ? <Button variant="warning"
                                                         style={{marginBottom: "16px", marginLeft: "40%", width: "20%"}}
                                                         disabled>
                                            <Spinner/>
                                        </Button>
                                        : <Button variant="warning"
                                                  style={{marginBottom: "16px", marginLeft: "40%", width: "20%"}}
                                                  onClick={handleCheckOut}>
                                            Payment
                                            <FontAwesomeIcon icon={faMoneyBillWave} flip size="2xl"
                                                             style={{color: "#30b039", marginLeft: "8px"}}/>
                                        </Button>
                                }
                            </>
                            : <Loading/>
                    }

                </div>
            </Container>
        </>
    )
}