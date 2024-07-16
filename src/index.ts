import express from "express"
// import {PrismaClient} from "@prisma/client"

// const prisma = new PrismaClient()
const app = express()

app.use(express.json())



app.get("/", async (req, res) => {
    //logica de prisma
    console.log('andando')
    res.status(200).json({message: "Andando"})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
