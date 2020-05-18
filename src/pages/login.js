import React, { useState } from 'react';
import { PageLayout } from "../components/styledelements";

const Login = () => {

    return (
        <PageLayout>
            <h1>HouseKeepr</h1>
            <h2>Chaminuka Lodge</h2>
            <h3>Login</h3>
            <form action="">
                <label htmlFor="first-name">
                    Username/Email
                    <input name="email/username" type="email"/>
                </label>
                <label htmlFor="first-name">
                    Password
                    <input name="first-name" type="password"/>
                </label>
                <input type="submit"/>
            </form>
        </PageLayout>
    );
};

export default Login