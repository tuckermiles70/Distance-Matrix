//Tucker Miles 2020

//Will generate the pdf table just by passing doc.autotable the id of my html table
export function genpdf() {

    const doc = new jsPDF()

    // It can parse html:
    // <table id="my-table"><!-- ... --></table>
    doc.autoTable({ html: '#my-table' })

    doc.save('DistanceTable.pdf')
}