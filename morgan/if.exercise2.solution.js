const YesOrNo = process.argv[2];
if (YesOrNo === "Si") {
    console.log("No salir con el coche");
} else if (YesOrNo === "No") {
    console.log("Disfruta del día");
} else {
    console.log('No entiendo lo que has puesto...tolete!');
}
