type Props = {}
const Perhekalenteri = (props: Props) => {
    return (
        <div className="perhekalenteri">
            <h1>Perhekalenteri</h1>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FHelsinki&showCalendars=0&showTitle=0&mode=AGENDA&showNav=1&showDate=0&showPrint=0&showTabs=0&showTz=0&src=OHY4ZjlnbDRtYW1zamFkYzdsMWsxM2xrOTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23EF6C00"></iframe>
        </div>
    )
}
export default Perhekalenteri