export function genpdf() {

    const doc = new jsPDF()

    // It can parse html:
    // <table id="my-table"><!-- ... --></table>
    doc.autoTable({ html: '#my-table' })

    // Or use javascript directly:


    doc.save('table.pdf')
}