const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = (app) => {
    const router = express.Router();

    //retrieve all contacts
    router.get("/", contacts.findAll);

    //create a new contact
    router.post("/", contacts.create);

    //delete all contacts
    router.delete("/", contacts.deleteAll);

    //retrieve all favorite contacts
    router.get("/favorite", contacts.findAllFavorite);
    //retrieve a single contact with id
    router.get("/:id", contacts.findOne);   

    //update a contact with id
    router.put("/:id", contacts.update);

    //delete a contacts with id
    router.delete("/:id", contacts.delete);

    app.use("/api/contacts", router);
};

