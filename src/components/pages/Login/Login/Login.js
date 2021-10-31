import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signusingGoogle, error, redLocation, handleredLocation} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const history = useHistory();

    if(redLocation){
        history.push(redirect_uri);
        handleredLocation();
    }

    return (
        <div>
            <section id='loginForm'>
                <Container>
                    <Row>
                        <Col className="offset-md-3 col-md-6">
                            <div className="loginform">
                                {error?
                                    <div className="error-massage">
                                    <p>{error}</p>
                                    </div>:
                                    ''
                                }
                                <div className="provider-login">
                                    <div className="withSign googleSign">
                                        <Button onClick={signusingGoogle}>
                                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Login with Google
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Login;