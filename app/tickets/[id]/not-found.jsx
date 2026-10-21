import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-9xl">We hit a brick wall</h2>
      <p>We could not find the ticket you are tryig to list.</p>
      <p>
        Go back to the <Link href="/tickets">Ticket List</Link>.
      </p>
    </main>
    );

}
