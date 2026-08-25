import Link from "next/link";

type ChoiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ChoiceCard({ icon, title, description, href }: ChoiceCardProps) {
  return (
    <Link
      href={href}
      className="w-full rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:w-64"
    >
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-4 text-lg text-bg-brand-grape font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-bg-brand-grape">{description}</p>
    </Link>
  );
}