// Go to MongoDB website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// Install mongodb package
// Create a connection from code
// Documents CRUD - Create, Read, Update and Delete
const { MongoClient } = require("mongodb");

async function runGetStarted() {
    const URI = "mongodb+srv://pandi_node_user:pAnDiNoDeUsEr@cluster0.04qpjnl.mongodb.net/";
    const client = new MongoClient(URI);

    try {
        const database = client.db("HelloWorld");
        const collection = database.collection("User");

        const data = {
            firstName: "Dhilip",
            lastName: "Kumar",
            city: "Sivakasi",
            phoneNumber: "0987654311"
        }

        // const insertResult = await collection.insertOne(data);
        // console.log("Inserted result ==> ", insertResult);

        const findResult = await collection.find({}).toArray();
        console.log(findResult);

        const countResult = await collection.countDocuments({});
        console.log(countResult);

        const result = await collection.find({firstName: "Dhilip"}).toArray();
        console.log(result);
    } finally {
        client.close();
    }
}

runGetStarted().catch(console.dir);