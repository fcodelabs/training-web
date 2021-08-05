import {useState} from "react";
import {Button, Col, FormControl, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function LoginPage() {
    const history = useHistory();
    const onLoginClicked = ()=>{
        history.push("/");
    }

    return (
        <Row className={'justify-content-center align-items-center p-3 vh-100'}>
            <Col className={'col-6 login-form '}>
                <Row className={'login-card-header justify-content-center'}>
                    <Col className={'col-auto'}>
                        <h3 className={'login-card-header-fonts'}>
                            Diary Login

                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col className={'p-4'}>
                        <Row className={'pb-2'}>
                            <Col className={'col-10'}>
                                <FormControl placeholder='Enter a nickname' className={'rounded-pill'}/>
                            </Col>
                            <Col className={'col-2'}>
                                <Button
                                    variant='primary'
                                    className={'rounded-pill button'}
                                    onClick={() => {
                                    }}>
                                    Random
                                </Button>
                            </Col>
                        </Row>
                        <Row className={'pb-2'}>
                            <Col>

                            </Col>
                        </Row>
                        <Row className={'pb-2 justify-content-center'}>
                            <Col className={'col-auto'}>
                                <Button
                                    variant='primary'
                                    className={'rounded-pill button-login'}
                                    onClick={() => onLoginClicked()}>
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default LoginPage;