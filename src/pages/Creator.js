import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useEffect  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getAirdropERC20Contract, connectToOtherContracts, airdrop, retrieveTokens, setMaxRecipientCount  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const airdropERC20Contract = getAirdropERC20Contract(bunzz);

    const [tokenAddress, setTokenAddress] = useState("");
    const [recipients, setRecipients] = useState([]);
    const [recipientsText, setRecipientsText] = useState();
    const [amounts, setAmounts] = useState([]);
    const [amountsText, setAmountsText] = useState();



    const[retrieveAmount, setRetrieveAmount] = useState(0);

    const[maxReciptCnt, setMaxReciptCnt] = useState(0);

    const[claimAuctionId, setClaimAuctionId] = useState(0);

    const [pendingConnectToOtherContracts, setPendingConnectToOtherContracts] = useState(false);
    const [pendingAirdrop, setPendingAirdrop] = useState(false);
    const [pendingRetrieveTokens, setPendingRetrieveTokens] = useState(false);
    const [pendingSetMaxRecipientCount, setPendingSetMaxRecipientCount] = useState(false);

    useEffect(() => {
        if(recipientsText && amountsText)
        {
         var array1 = recipientsText.replace(' ', '').split(','); 
         setRecipients(array1);
         var array2 = amountsText.replace(' ', '').split(","); 
         setAmounts(array2);
         console.log("array1 = ", array1);
        }
   
       }, [recipientsText, amountsText]);

  
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Token address</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={tokenAddress} onChange={(val) => setTokenAddress(val.target.value)} />
                        </Form.Group>
                            {!pendingConnectToOtherContracts ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingConnectToOtherContracts(true);
                                try {
                                    let txHash;
                                    txHash = await connectToOtherContracts(
                                        airdropERC20Contract,
                                        tokenAddress,
                                        account,
                                    );
                                    console.log(txHash);
                                    setPendingConnectToOtherContracts(false);
                                } catch (e) {
                                    console.log(e);
                                    setPendingConnectToOtherContracts(false);
                                }
                            }}>
                               Connect To Other Contracts
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Connect To Other Contracts
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Recipients</Form.Label>
                            <Form.Control type="email" placeholder="Enter Recipients" value={recipientsText} onChange={(val) => setRecipientsText(val.target.value)} />
                            <Form.Label>Input Amounts</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amounts" value={amountsText} onChange={(val) => setAmountsText(val.target.value)} />  
                        </Form.Group>

                        {!pendingAirdrop ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingAirdrop(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await airdrop(
                                        airdropERC20Contract,
                                        recipients,
                                        amounts,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingAirdrop(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingAirdrop(false);
                                    
                                }
                            }}>
                                Airdrop
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Airdrop
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Retrieve Amounts</Form.Label>
                            <Form.Control type="email" placeholder="Enter amounts" value={retrieveAmount} onChange={(val) => setRetrieveAmount(val.target.value)} />
                        </Form.Group>

                        {!pendingRetrieveTokens ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingRetrieveTokens(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await retrieveTokens(
                                        airdropERC20Contract,
                                        retrieveAmount,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingRetrieveTokens(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingRetrieveTokens(false);
                                    
                                }
                            }}>
                                RetrieveTokens
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} RetrieveTokens
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Max Recipient Count</Form.Label>
                            <Form.Control type="email" placeholder="Enter amounts" value={retrieveAmount} onChange={(val) => setRetrieveAmount(val.target.value)} />
                        </Form.Group>
                        {!pendingSetMaxRecipientCount ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingSetMaxRecipientCount(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await retrieveTokens(
                                        airdropERC20Contract,
                                        retrieveAmount,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingSetMaxRecipientCount(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingSetMaxRecipientCount(false);
                                    
                                }
                            }}>
                                SetMaxRecipientCount
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} SetMaxRecipientCount
                            </Button>
                        }

                    </Form>
                    

                   

                        
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;