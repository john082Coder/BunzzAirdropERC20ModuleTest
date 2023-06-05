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


    const [startPrice, setStartPrice] = useState(0);
    const [desiredPrice, setDesiredPrice] = useState(0);
    const [nftAmount, setNFTAmount] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const[bidAmount, setBidAmount] = useState(0);
    const[auctionID, setAuctionID] = useState(0);

    const[claimAuctionId, setClaimAuctionId] = useState(0);

    const [pendingConnectToOtherContracts, setPendingConnectToOtherContracts] = useState(false);
    const [pendingAirdrop, setPendingAirdrop] = useState(false);
    const [pendingAddBid, setPendingAddBid] = useState(false);

  
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
                                    setPending(true);
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
                            <Form.Label>Input BidAmount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={bidAmount} onChange={(val) => setBidAmount(val.target.value)} />
                            <Form.Label>Input AuctionId</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={auctionID} onChange={(val) => setAuctionID(val.target.value)} />  
                        </Form.Group>

                        {!pendingAirdrop ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingAirdrop(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await airdrop(
                                        auctionERC1155Contract,
                                        bidAmount,
                                        auctionID,
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
                            <Form.Label>Input AuctionId</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={claimAuctionId} onChange={(val) => setClaimAuctionId(val.target.value)} />
                        </Form.Group>
                        {!pendingClaim ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingClaim(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await claim(
                                        auctionERC1155Contract,
                                        claimAuctionId,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingClaim(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingClaim(false);
                                    
                                }
                            }}>
                                Claim
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Claim
                            </Button>
                        }
                    </Form>
                   

                        
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;