import JWT from 'jsonwebtoken';

// Login Reguired

export const isLoggedIn = async (req, res, next) => {
    try {
        // const token = req.headers.authorization;
        /* If token is passed in bearer,  req.headers.authorization will have 
        Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQxNmYzNmQ2ZWM2MTM4MmEyNGQ2YmQiLCJ1c2VybmFtZSI6Inl1YnJhamFtMiIsImVtYWlsIjoieXVicmFqYW0yQGdtYWlsLmNvbSIsInBob25lIjoiOTg3NjU0MzIxMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MjAxMjM0NiwiZXhwIjoxNjgyMDk4NzQ2fQ.Jrk5QtmtjFFtutCMjUc3MaLJptU_RVd3bsNcgmVCxdw
        */

        // for postman
        // const token = req.headers.authorization.split(" ")[1];

        // for frontend
        const token = req.headers.authorization;
        // console.log(token.bgYellow);

        const decodeToken = await JWT.verify(token, process.env.JWT_SECRET_KEY);
        /*  Not necessary, auto control passed to catch block
        if (!decodeToken) {
            return res.status(500).send({
                success: false,
                message: "Invalid token!"
            })
        } 
        */

        // console.log(decodeToken.username);
        // console.log(decodeToken.role);

        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in authMiddleware!",
            error: error
        })
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        //for postman
        // const token = req.headers.authorization.split(" ")[1];

        // for frontend
        const token = req.headers.authorization;

        const decodeToken = await JWT.verify(token, process.env.JWT_SECRET_KEY);
        // console.log(decodeToken.role);
        if (decodeToken.role !== "admin") {
            return res.status(500).send({
                success: false,
                message: "Unauthorized! | Admin privilege needed",
            })
        }
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Error occured!",
            error
        })
    }
}