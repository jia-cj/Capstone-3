//creating and sending token, save in the cookie
const sendToken = (user, statusCode, res) => {

    //creating Jwt token
    const token = user.getJwtToken();

    //options for cookie
    const expiresTimeInHours = process.env.COOKIE_EXPIRES_TIME || 24;
    const options = {
        expires : new Date(
            Date.now() + expiresTimeInHours * 24 * 60 * 60 * 1000), // hours * minutes * seconds * milliseconds
            httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken;