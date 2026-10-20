import React from 'react'
async function  getTickets()    {
    const rest = await fetch('http://localhost:4000/tickets', {
        next:   {
            revalidate: 30
        }
    })
    return rest.json()
}
export default async function TicketList() {
    const tickets = await getTickets();
  return (
    <>
        {tickets.map((ticket) => (
            <div key={ticket.id} className='card my-5'>
                <h3>{ticket.Title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        ) 
        )}
        {tickets.length === 0 && (
            <p className='text-center'>There are no open tickets.</p>
        )}
    </>
  )
}
