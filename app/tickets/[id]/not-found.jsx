import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h1 className="text-3xl">We hit a brick wall</h1>
      <p>We could not find the ticket you are tryig to list.</p>
      <p>
        Go back to the <Link href="/tickets">Ticket List</Link>.
      </p>
    </main>
    );

}
