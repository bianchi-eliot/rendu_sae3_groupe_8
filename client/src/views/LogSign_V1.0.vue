<template>    
	<FlashMessage v-if="$route.query.disconnected" message="You have been successfully loged out" class="primary"/>
    <main class="log-sign">
        <div class="container" :class="{ active: active }">
            <LogIn @toggleActive="handleToggle"/>
            <SignIn @toggleActive="handleToggle"/>
        </div>
    </main>
</template>

<script>
import LogIn from '../components/log_sign/LogIn_V1.0.vue'
import SignIn from '../components/log_sign/SignIn_V1.0.vue'
import FlashMessage from '@/components/FlashMessage_V1.0.vue'

export default {
    name: 'LogSignView',
    data() {
        return {
            active: false
        }
    },
    components: { LogIn, SignIn, FlashMessage },
    methods: {
        handleToggle() {
            this.active = !this.active
        }
    }
}
</script>

<style>
main.log-sign
{
	position: relative;
	height: calc(100vh - 25px);
	background: #557085;
	display: flex;
	padding: 20px;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
}
.active
{
	background: #5a5a5a;
}
.container
{
	position: relative;
	width: 800px;
	height: 775px;
	background: #fff;
	box-shadow: 0 15px 50px rgba(0,0,0,.1);
	overflow: hidden;
}
.container .user
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
}
.container .user .imgBx
{
	position: relative;
	width: 50%;
	height: 100%;
	background: #ff0;
	transition: 0.5s;
}

form a {
    text-decoration: none;
}

.form-title {
	color: var(--app-color);
	font-size: 30px;
	text-align: center;
}

.container .user .imgBx img
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.container .user .formBx
{
	position: relative;
	width: 50%;
	height: 100%;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
	transition: 0.5s;
}
.container .user .formBx form h2
{
	font-size: 18px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-align: center;
	width: 100%;
	margin-bottom: 10px;
	color: #555;
}
.container .user .formBx form input
{
	width: 100%;
	padding: 10px;
	background: #f5f5f5;
	color: #333;
	border: none;
	outline: none;
	box-shadow: none;
	font-size: 14px;
	margin: 8px 0;
	letter-spacing: 1px;
	font-weight: 300;
}
.container .user .formBx form input[type="submit"]
{
	max-width: fit-content;
	background: #677eff;
	color: #fff;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 1px;
	transition: 0.5s;
}
.container.active .user .formBx form input[type="submit"]
{
	background: #e73e49;
}
.container .user .formBx form .signup
{
	position: relative;
	margin-top: 20px;
	font-size: 12px;
	letter-spacing: 1px;
	color: #555;
	text-transform: uppercase;
	font-weight: 300;
}
.container .user .formBx form .signup a
{
	font-weight: 600;
	text-decoration: none;
	color: #677eff;
}
.container .signinBx
{
	pointer-events: none;
}
.container.active .signinBx
{
	pointer-events: initial;
}
.container .signinBx .formBx
{
	top: 100%;
}
.container.active .signinBx .formBx
{
	top: 0%;
}
.container .signinBx .imgBx
{
	top: -100%;
}
.container.active .signinBx .imgBx
{
	top: 0%;
}

select {
    margin-bottom: 10px;
    width: 100%;
    border: 3px solid black;
}



.container .loginBx .formBx
{
	top: 0;
}
.container.active .loginBx .formBx
{
	top: 100%;
}
.container .loginBx .imgBx
{
	top: 0;
}
.container.active .loginBx .imgBx
{
	top: -100%;
}

.change-btn {
	position: relative;
	border: none;
    color: var(--app-color);
    cursor: pointer;
    font-size: 20px;
    padding: 5px 10px;
	text-shadow: 2px 2px 3px lightgray;
    transition: 0.25s;
}

.change-btn::before {
	position: absolute;
	top: 100%;
	left: 0;
	background-color: var(--app-color);
	content: '';
	height: 3px;
	width: 0;
	transition: 0.5s;
}

.change-btn:hover::before {
	width: 100%;
}
@media (max-width: 991px)
{
	.container
	{
		max-width: 400px;
	}
	.container .imgBx
	{
		display: none;
	}
	.container .user .formBx
	{
		width: 100%;
	}
	.container.active .loginBx .formBx
	{
		top: -100%;
	}
}
</style>