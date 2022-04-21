import React from 'react'
import Event from '../../components/Event/Event'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

function EventNumber() {
  return (
    <div>
        <SectionHeader name={`Event 1`}  />
        <Event tagName={`day 1`} heading={`UN - OCHA
‘MySahel’`} concertType={`Live Acoustic Concert`} privateEvents={true}  date={`25th may 2022`} seats={`50-60`} price={`$0.00`} time={`6pm - 9pm`} location={`Hotel Booma`} locationDetails={`www.hotelboma.net`} />

<Event tagName={`day 1`} heading={`UN - OCHA
‘MySahel’`} concertType={`Live Acoustic Concert`} privateEvents={true}  date={`25th may 2022`} seats={`50-60`} price={`$0.00`} time={`6pm - 9pm`} location={`Hotel Booma`} locationDetails={`www.hotelboma.net`} />

<Event tagName={`coming soon`} heading={`MID SEP 2022`} concertType={`Virtual Concert`} privateEvents={false}  date={`25th may 2022`} seats={`50-60`} price={`€20 - €30`} vipPrice={`€60 - €100`} time={`6pm - 9pm`} location={`Hotel Booma`} locationDetails={`www.hotelboma.net`} />


    </div>
  )
}

export default EventNumber