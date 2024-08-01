"use client"

import { useEffect } from "react";

function bootstrapClient(){
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        }, []);

        return null;
}

export default bootstrapClient