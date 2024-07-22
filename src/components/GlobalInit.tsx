// GlobalInit.tsx
import { useEffect } from "react";
import KTComponent from "@/metronic/core";
import KTLayout from "@/metronic/app/layouts/demo1";

export default function GlobalInit() {
    //console.log("Corriendo KTLayout!")
    useEffect(() => {
        KTComponent.init();
        KTLayout.init();
}, []);

return <></>
}


// import {useEffect} from "react";
// import KTComponent from "@/metronic/core";
// import KTLayout from "@/metronic/app/layouts/demo1";

// export default function GlobalInit() {
//     useEffect(() => {
//         KTComponent.init();
//         KTLayout.init();
//     }, []);

//     return <></>
// }