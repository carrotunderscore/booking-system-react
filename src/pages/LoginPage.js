import React from "react";
import '../../src/index.css';
import axios from "axios";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import SimpleGDPR from "simple-gdpr";
import 'simple-gdpr/dist/simplegdpr.min.css';
import {useCookies} from "react-cookie";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../styling/colors.css";
import "../styling/LoginPage.css";

const schema = yup.object().shape({
    mail: yup.string().required("Mail is required."),
    password: yup.string().min(6).max(40).required("Password is required."),
});

export default function LoginPage() {
    // Cookies
    const [cookies, setCookie] = useCookies(["gdpr"]);

    function setGDPRCookie() {
        setCookie("gdpr", "agreed", {path: '/'});
    }

    // GDPR popup
    if (cookies.gdpr === undefined) {
        const gdprNotice = new SimpleGDPR({
            theme: 'modern',
            icons: false,
            animation: 'fade',
            float: 'bottom-right',
            callback: () => {
                setGDPRCookie()
                gdprNotice.close()
            },
        });
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/login", data)
            .then((response) => {
                console.log(response.data)
                document.cookie = `auth=${response.data}`
                //localStorage.setItem('key', 'value')
                //localStorage.setItem("auth", response.data)
                //localStorage.setItem("auth", JSON.stringify(response.data))

                /*if (response.data === "OK") {
                    console.log("Success!")
                }*/
            })
            .catch(errors => (console.log(errors)))
    }

    return (
        <>
            <div className="login-main-div">
                <div className="bg-div">
                    <div className="loginFormDiv w-25 mx-auto flex p-3 background-positive-primary">
                        <Form onSubmit={handleSubmit(submitForm)} className="login-form p-3" action="../../post"
                              method="post">
                            <Form.Group className="mb-3 text-color-light" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                              placeholder="" {...register("mail", {required: "Du måste fylla i en email adress."})} />
                                <p className="error-message"> {errors.username?.message}</p>
                            </Form.Group>

                            <Form.Group className="mb-3 text-color-light" controlId="formBasicPassword">
                                <Form.Label>Lösenord</Form.Label>
                                <Form.Control type="password"
                                              placeholder="" {...register("password", {required: "Du måste fylla i lösenord."})} />
                                <p className="error-message"> {errors.password?.message}</p>
                            </Form.Group>
                            <div className="col p-2 text-center">
                                <Button variant="primary" type="submit"
                                        className="buttonLogin background-positive-secondary">
                                    Logga in
                                </Button>
                                <Button variant="primary" type="button"
                                        className="buttonRegister background-positive-secondary">
                                    Registrera
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
