const express = require("express") ;
const app = express() ;
require("dotenv").config() ;

const main = require("./src/config/db") ;
const cors = require("cors") ;
const userRouter = require("./src/routes/userRouter") ;

const corsOptions = {
    origin: [
        "https://supersheldon.com",
        "https://www.supersheldon.com"
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'X-Requested-With',
        'Accept',
        'Origin'
    ],
    preflightContinue: false,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

// app.use(cors({
//     origin: "https://supersheldon.com",
//     credentials: true
// }))

app.use(express.json()) ;

// Book Demo 
app.use("/user" , userRouter) ;


app.use((err, req, res, next) => {
    const origin = req.headers.origin;
    if (corsOptions.origin.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    
    console.error('Error:', err);
    res.status(500).json({ 
        error: err.message || 'Internal server error',
        message: 'Something went wrong on the server'
    });
});

// parallely calling two function to connent DB and redis both at the same time
const initializeConnection = async ()=>{

    try{
        await main() ;
        console.log("DB Connected") ;
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    }
    catch(err)
    {
        console.log("Error : " + err) ;
    }
}

initializeConnection() ;