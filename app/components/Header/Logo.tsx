import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="font-bold text-xl">Tripster</span>
    </Link>
  );
}
