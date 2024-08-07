const { MongoClient, Double } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "samwin";

const createCollection = async () => {
    console.log("Starting collection creation");

    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to server");

        // Get the database
        const db = client.db(dbName);

        // Create a new collection
        const collection = await db.createCollection("data");
        console.log(collection)
        console.log('Created collection');

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Ensure the client will be closed when you finish/error
        await client.close();
        console.log("Connection closed");
    }
}



// createCollection();


const instertData = async () => {
    const client = new MongoClient(url);
    const db =  client.db(dbName)
    document = {
        "name" : "samwin", 
        "age" : "12"
    }

    const collection =  db.collection('data')
    const res = await collection.insertOne(document)
    console.log(res)
    console.log('inserted docuemt into collection')
    client.close()    

}


const findData = async () => {
    const client  = new MongoClient(url);
    const db = client.db(dbName)
    const collection = db.collection('data')
    document = {
        "name" : "samwin"
    }
    const data = await collection.findOne(document)
    console.log(data)
    client.close()
}

// instertData()

findData()