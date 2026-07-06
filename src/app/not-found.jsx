import PageNotFound from "@/components/page-not-found/pagenotfound";

export const metadata = {
  title: "Page Not Found | ETUNNEL",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <PageNotFound />;
}